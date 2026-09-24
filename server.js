// Aisle List server: serves the app and keeps saved lists in sync across devices.
// No dependencies. Saved lists are stored per "sync code" (hashed, never stored in plain text)
// as small JSON files in DATA_DIR — on Railway that's a mounted volume so they survive deploys.
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const zlib = require('zlib');

const PORT = Number(process.env.PORT) || 8080;
const DATA_DIR = process.env.DATA_DIR || process.env.RAILWAY_VOLUME_MOUNT_PATH || path.join(__dirname, 'data');
const ROOT = __dirname;
const MAX_BODY = 512 * 1024; // a few hundred lists is still far under this

fs.mkdirSync(path.join(DATA_DIR, 'lists'), { recursive: true });

// Only these files are public — never the server code or the data folder.
const STATIC = {
  '/': ['index.html', 'text/html; charset=utf-8'],
  '/index.html': ['index.html', 'text/html; charset=utf-8'],
  '/app.js': ['app.js', 'text/javascript; charset=utf-8'],
  '/stores.js': ['stores.js', 'text/javascript; charset=utf-8'],
  '/favicon.webp': ['favicon.webp', 'image/webp']
};

function send(res, status, body, type = 'application/json; charset=utf-8', extra = {}) {
  res.writeHead(status, { 'Content-Type': type, 'X-Content-Type-Options': 'nosniff', ...extra });
  res.end(body);
}
const json = (res, status, obj) => send(res, status, JSON.stringify(obj), undefined, { 'Cache-Control': 'no-store' });

// A sync code becomes a file name via a salted hash, so the code itself is never written down.
function fileFor(code) {
  const h = crypto.createHash('sha256').update('aisle-list:' + code.trim().toLowerCase()).digest('hex');
  return path.join(DATA_DIR, 'lists', h + '.json');
}
function validCode(code) {
  return typeof code === 'string' && code.trim().length >= 4 && code.trim().length <= 64;
}

function readLists(code) {
  try { return JSON.parse(fs.readFileSync(fileFor(code), 'utf8')) || {}; } catch (e) { return {}; }
}
function writeLists(code, lists) {
  const f = fileFor(code);
  const tmp = f + '.' + process.pid + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(lists));
  fs.renameSync(tmp, f); // atomic replace, so a crash never leaves half a file
}

// Merge two sets of lists: for each name the newer change wins. Deletions are kept as
// { deleted: true, savedAt } so a list removed on the phone doesn't reappear from the laptop.
const stamp = (v) => Date.parse(v && v.savedAt) || 0;
function merge(a, b) {
  const out = { ...a };
  for (const [name, v] of Object.entries(b || {})) {
    if (!v || typeof v !== 'object') continue;
    if (!out[name] || stamp(v) > stamp(out[name])) out[name] = v;
  }
  return out;
}
function sanitize(lists) {
  const out = {};
  if (!lists || typeof lists !== 'object') return out;
  for (const [name, v] of Object.entries(lists).slice(0, 500)) {
    if (typeof name !== 'string' || !name.trim() || name.length > 120 || !v || typeof v !== 'object') continue;
    const savedAt = typeof v.savedAt === 'string' ? v.savedAt.slice(0, 40) : new Date(0).toISOString();
    if (v.deleted) { out[name] = { deleted: true, savedAt }; continue; }
    const items = Array.isArray(v.items) ? v.items.slice(0, 500)
      .filter(i => i && typeof i.name === 'string' && i.name.trim())
      .map(i => ({ name: i.name.slice(0, 120), qty: typeof i.qty === 'string' ? i.qty.slice(0, 40) : '' })) : [];
    out[name] = { items, savedAt };
  }
  return out;
}

// Light brute-force protection: at most 60 sync requests a minute per address.
const hits = new Map();
function limited(req) {
  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
  const now = Date.now();
  const rec = hits.get(ip) || { n: 0, t: now };
  if (now - rec.t > 60000) { rec.n = 0; rec.t = now; }
  rec.n++;
  hits.set(ip, rec);
  if (hits.size > 5000) hits.clear();
  return rec.n > 60;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on('data', c => { size += c.length; if (size > MAX_BODY) { reject(new Error('too big')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');

  if (url.pathname === '/api/lists') {
    if (limited(req)) return json(res, 429, { error: 'Too many requests — try again in a minute.' });
    const code = req.headers['x-sync-code'];
    if (!validCode(code)) return json(res, 400, { error: 'Sync code must be 4–64 characters.' });
    if (req.method === 'GET') return json(res, 200, { lists: readLists(code) });
    if (req.method === 'PUT') {
      try {
        const body = JSON.parse(await readBody(req) || '{}');
        const merged = merge(readLists(code), sanitize(body.lists));
        writeLists(code, merged);
        return json(res, 200, { lists: merged });
      } catch (e) {
        return json(res, 400, { error: 'Could not read that request.' });
      }
    }
    return json(res, 405, { error: 'Method not allowed' });
  }

  if (url.pathname === '/healthz') return send(res, 200, 'ok', 'text/plain');

  const hit = STATIC[url.pathname];
  if (hit && (req.method === 'GET' || req.method === 'HEAD')) {
    fs.readFile(path.join(ROOT, hit[0]), (err, buf) => {
      if (err) return send(res, 404, 'Not found', 'text/plain');
      const headers = { 'Cache-Control': 'no-cache', 'Vary': 'Accept-Encoding' };
      // the store guides are ~360 KB of text; gzip shrinks that to a fraction for phones
      if (/text|javascript/.test(hit[1]) && /gzip/i.test(req.headers['accept-encoding'] || '')) {
        buf = zlib.gzipSync(buf);
        headers['Content-Encoding'] = 'gzip';
      }
      send(res, 200, req.method === 'HEAD' ? '' : buf, hit[1], headers);
    });
    return;
  }
  send(res, 404, 'Not found', 'text/plain');
});

server.listen(PORT, () => console.log(`Aisle List on :${PORT} · data in ${DATA_DIR}`));
