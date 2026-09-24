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
  const ip = clientIp(req);
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

// ── Shared aisle memory ─────────────────────────────────────────────────────────────
// When a shopper picks an item's aisle at a store (because the guide doesn't list it, or placed it
// wrong), that pick is recorded here for that store so the next person gets it. One vote per shopper
// per item (by hashed address); the aisle with the most votes wins, so a stray wrong pick can be
// outvoted. File per store: { itemKey: { name, votes: { aisle: n }, voters: { hash: aisle }, at } }
fs.mkdirSync(path.join(DATA_DIR, 'aisles'), { recursive: true });
// Only real stores (the ids in stores.js) can have an aisle memory.
const STORE_IDS = new Set([...fs.readFileSync(path.join(ROOT, 'stores.js'), 'utf8').matchAll(/^\s+([a-z0-9]+): \{ id: '/gm)].map(m => m[1]));
const aisleCache = new Map();
function aisleFile(store) { return path.join(DATA_DIR, 'aisles', store + '.json'); }
function readAisles(store) {
  if (aisleCache.has(store)) return aisleCache.get(store);
  let data = {};
  try { data = JSON.parse(fs.readFileSync(aisleFile(store), 'utf8')) || {}; } catch (e) { /* none yet */ }
  aisleCache.set(store, data);
  return data;
}
function writeAisles(store, data) {
  const f = aisleFile(store), tmp = f + '.' + process.pid + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(data));
  fs.renameSync(tmp, f);
  aisleCache.set(store, data);
}
function winner(rec) {
  let best = null, n = 0;
  for (const [a, c] of Object.entries(rec.votes || {})) if (c > n) { best = a; n = c; }
  return best ? { aisle: best, votes: n } : null;
}
// Public view: item → winning aisle (no voter info leaves the server).
function publicAisles(store) {
  const out = {};
  for (const [k, rec] of Object.entries(readAisles(store))) {
    const w = winner(rec);
    if (w) out[k] = { name: rec.name, aisle: w.aisle, votes: w.votes };
  }
  return out;
}
const voteHits = new Map();
function voteLimited(ip) {
  const now = Date.now(), rec = voteHits.get(ip) || { n: 0, t: now };
  if (now - rec.t > 3600000) { rec.n = 0; rec.t = now; }
  rec.n++; voteHits.set(ip, rec);
  if (voteHits.size > 5000) voteHits.clear();
  return rec.n > 120; // plenty for real shopping, stops floods
}
// The visitor's address, used only to count one vote per shopper and for rate limits. On Railway,
// X-Real-IP is set by Railway's edge to the real visitor address (a visitor-sent value is replaced).
// The last X-Forwarded-For entry is Railway's own edge node and changes per request, so don't use it.
function clientIp(req) {
  const real = String(req.headers['x-real-ip'] || '').trim();
  if (real) return real;
  const first = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  return first || req.socket.remoteAddress || '';
}
// Remove the test item left from checking the vote rules on production (safe to run every start).
try {
  const d = readAisles('s23');
  if (d['zz probe item']) { delete d['zz probe item']; writeAisles('s23', d); }
} catch (e) { /* nothing to clean */ }
const voterId = (ip) => crypto.createHash('sha256').update('aisle-voter:' + ip).digest('hex').slice(0, 16);

async function handleAisles(req, res, url) {
  const store = String(url.searchParams.get('store') || '');
  if (!STORE_IDS.has(store)) return json(res, 400, { error: 'Unknown store' });
  if (req.method === 'GET') return json(res, 200, { store, aisles: publicAisles(store) });
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  const ip = clientIp(req);
  if (voteLimited(ip)) return json(res, 429, { error: 'Too many aisle updates — try again later.' });
  let body;
  try { body = JSON.parse(await readBody(req) || '{}'); } catch (e) { return json(res, 400, { error: 'Could not read that request.' }); }
  const key = String(body.key || '').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 80);
  const name = String(body.name || '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 80);
  const aisle = String(body.aisle || '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 40);
  if (!key || !name) return json(res, 400, { error: 'Missing item' });
  const data = { ...readAisles(store) };
  if (!data[key] && Object.keys(data).length >= 5000) return json(res, 507, { error: 'Aisle memory is full for this store' });
  const rec = data[key] ? { ...data[key], votes: { ...data[key].votes }, voters: { ...data[key].voters } } : { name, votes: {}, voters: {} };
  const who = voterId(ip);
  const prev = rec.voters[who];
  if (prev) { rec.votes[prev] = (rec.votes[prev] || 1) - 1; if (rec.votes[prev] <= 0) delete rec.votes[prev]; delete rec.voters[who]; }
  if (aisle) { rec.votes[aisle] = (rec.votes[aisle] || 0) + 1; rec.voters[who] = aisle; } // empty aisle = take back my vote
  rec.at = new Date().toISOString();
  if (Object.keys(rec.votes).length) data[key] = rec; else delete data[key];
  writeAisles(store, data);
  const w = data[key] ? winner(data[key]) : null;
  return json(res, 200, { key, aisle: w ? w.aisle : null, votes: w ? w.votes : 0 });
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

  if (url.pathname === '/api/aisles') return handleAisles(req, res, url);

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
