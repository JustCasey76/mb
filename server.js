// Aisle List server: serves the app and keeps saved lists in sync across devices.
// No dependencies. Saved lists are stored per "sync code" (hashed, never stored in plain text)
// as small JSON files in DATA_DIR — on Railway that's a mounted volume so they survive deploys.
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const zlib = require('zlib');
const AI = require('./ai');

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
const STORES_SRC = fs.readFileSync(path.join(ROOT, 'stores.js'), 'utf8');
const STORE_IDS = new Set([...STORES_SRC.matchAll(/^\s+([a-z0-9]+): \{ id: '/gm)].map(m => m[1]));
// Town + state per store, so the coupon search can look near the right store.
const STORE_INFO = new Map([...STORES_SRC.matchAll(/^\s+([a-z0-9]+): \{ id: '[^']*', name: (?:"([^"]*)"|'([^']*)'), state: '([A-Z]{2})'/gm)]
  .map(m => [m[1], { name: m[2] || m[3], state: m[4] }]));
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

// ── Prices & coupons ───────────────────────────────────────────────────────────────
// Shopper-entered prices per store: each shopper's latest price per item, and the app shows the
// middle value (median) of reports from the last 120 days, so one typo can't skew it.
fs.mkdirSync(path.join(DATA_DIR, 'prices'), { recursive: true });
const PRICE_TTL = 120 * 24 * 3600 * 1000;
const priceCache = new Map();
function priceFile(store) { return path.join(DATA_DIR, 'prices', store + '.json'); }
function readPrices(store) {
  if (priceCache.has(store)) return priceCache.get(store);
  let data = {};
  try { data = JSON.parse(fs.readFileSync(priceFile(store), 'utf8')) || {}; } catch (e) { /* none yet */ }
  priceCache.set(store, data);
  return data;
}
function writePrices(store, data) {
  const f = priceFile(store), tmp = f + '.' + process.pid + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(data));
  fs.renameSync(tmp, f);
  priceCache.set(store, data);
}
function priceOf(rec) {
  const now = Date.now();
  const fresh = Object.values(rec.reports || {}).filter(r => now - Date.parse(r.at) < PRICE_TTL);
  const vals = fresh.map(r => r.price).sort((a, b) => a - b);
  if (!vals.length) return null;
  const mid = vals.length >> 1;
  const price = vals.length % 2 ? vals[mid] : Math.round((vals[mid - 1] + vals[mid]) * 50) / 100;
  return { price, reports: vals.length, at: fresh.map(r => r.at).sort().pop() };
}
function publicPrices(store) {
  const out = {};
  for (const [k, rec] of Object.entries(readPrices(store))) {
    const p = priceOf(rec);
    if (p) out[k] = { name: rec.name, ...p };
  }
  return out;
}
const cleanKey = (v) => String(v || '').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 80);
const cleanText = (v, n) => String(v || '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, n);
async function readJson(req) { try { return JSON.parse(await readBody(req) || '{}'); } catch (e) { return null; } }

async function handlePrices(req, res, url) {
  const store = String(url.searchParams.get('store') || '');
  if (!STORE_IDS.has(store)) return json(res, 400, { error: 'Unknown store' });
  if (req.method === 'GET') return json(res, 200, { store, prices: publicPrices(store) });
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  const ip = clientIp(req);
  if (voteLimited(ip)) return json(res, 429, { error: 'Too many updates — try again later.' });
  const body = await readJson(req);
  if (!body) return json(res, 400, { error: 'Could not read that request.' });
  const key = cleanKey(body.key), name = cleanText(body.name, 80);
  const price = body.price === null || body.price === '' ? null : Number(body.price);
  if (!key || !name) return json(res, 400, { error: 'Missing item' });
  if (price !== null && !(price > 0 && price < 1000)) return json(res, 400, { error: 'Price must be between $0.01 and $999' });
  const data = { ...readPrices(store) };
  if (!data[key] && Object.keys(data).length >= 5000) return json(res, 507, { error: 'Price memory is full for this store' });
  const rec = data[key] ? { ...data[key], reports: { ...data[key].reports } } : { name, reports: {} };
  const who = voterId(ip);
  if (price === null) delete rec.reports[who]; // empty price = take back my report
  else rec.reports[who] = { price: Math.round(price * 100) / 100, at: new Date().toISOString() };
  if (Object.keys(rec.reports).length) data[key] = rec; else delete data[key];
  writePrices(store, data);
  const p = data[key] ? priceOf(data[key]) : null;
  return json(res, 200, { key, ...(p || { price: null, reports: 0 }) });
}

// AI estimates are cached for everyone (30 days per item + amount), so the AI is only asked about
// items nobody has looked up recently. Per-address and daily limits keep the AI bill small.
const estimateCache = AI.fileCache(DATA_DIR, 'ai-estimates.json', 30 * 24 * 3600 * 1000, 20000);
const couponCache = AI.fileCache(DATA_DIR, 'ai-coupons.json', 12 * 3600 * 1000, 500);
function hourly(limit) {
  const map = new Map();
  return (ip) => {
    const now = Date.now(), rec = map.get(ip) || { n: 0, t: now };
    if (now - rec.t > 3600000) { rec.n = 0; rec.t = now; }
    rec.n++; map.set(ip, rec);
    if (map.size > 5000) map.clear();
    return rec.n > limit;
  };
}
const estimateLimited = hourly(40);
const couponLimited = hourly(6);
const COUPON_DAILY_CAP = Number(process.env.COUPON_DAILY_CAP) || 150; // whole-server cap on paid coupon searches
let couponDay = { day: '', n: 0 };
const couponRuns = new Map(); // list → search in progress, so a double-tap doesn't pay twice

async function handleEstimate(req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  const body = await readJson(req);
  if (!body) return json(res, 400, { error: 'Could not read that request.' });
  const items = (Array.isArray(body.items) ? body.items : []).slice(0, 120)
    .map(i => ({ name: cleanText(i && i.name, 100), qty: cleanText(i && i.qty, 40) }))
    .filter(i => i.name);
  if (!items.length) return json(res, 200, { prices: [] });
  for (const i of items) i.cacheKey = cleanKey(i.name) + '|' + i.qty.toLowerCase();
  const cachedOnly = () => items.map(i => estimateCache.get(i.cacheKey) || null);
  const allCached = items.every(i => estimateCache.get(i.cacheKey));
  if (!allCached && !AI.enabled()) return json(res, 503, { error: 'AI price estimates are not set up on this server yet.', prices: cachedOnly() });
  if (!allCached && estimateLimited(clientIp(req))) return json(res, 429, { error: 'Too many price checks — try again later.', prices: cachedOnly() });
  try {
    return json(res, 200, await AI.estimatePrices(items, estimateCache));
  } catch (e) {
    console.error('estimate failed:', e && e.message);
    return json(res, 502, { error: 'Price estimates are unavailable right now.', prices: cachedOnly() });
  }
}

async function handleCoupons(req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  const body = await readJson(req);
  if (!body) return json(res, 400, { error: 'Could not read that request.' });
  const info = STORE_INFO.get(String(body.store || ''));
  if (!info) return json(res, 400, { error: 'Unknown store' });
  const names = [...new Set((Array.isArray(body.items) ? body.items : []).map(n => cleanText(n, 100)).filter(Boolean))].slice(0, 60);
  if (!names.length) return json(res, 400, { error: 'Add some items first.' });
  const sig = names.map(n => n.toLowerCase()).sort().join('|');
  const cached = couponCache.get(sig);
  if (cached) return json(res, 200, { ...cached, cached: true });
  if (!AI.enabled()) return json(res, 503, { error: 'The coupon finder is not set up on this server yet.' });
  if (!couponRuns.has(sig)) {
    if (couponLimited(clientIp(req))) return json(res, 429, { error: 'That’s a lot of coupon searches — try again in an hour.' });
    const today = new Date().toISOString().slice(0, 10);
    if (couponDay.day !== today) couponDay = { day: today, n: 0 };
    if (++couponDay.n > COUPON_DAILY_CAP) return json(res, 429, { error: 'The coupon finder hit today’s limit — try again tomorrow.' });
    couponRuns.set(sig, AI.findCoupons(names, info).finally(() => couponRuns.delete(sig)));
  }
  const run = couponRuns.get(sig);
  try {
    const r = await run;
    if (r.error) return json(res, 502, { error: r.error });
    const out = { coupons: r.coupons, note: r.note, searchedAt: new Date().toISOString() };
    couponCache.set(sig, out);
    return json(res, 200, out);
  } catch (e) {
    console.error('coupons failed:', e && e.message);
    return json(res, 502, { error: 'The coupon finder is unavailable right now — try again later.' });
  }
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
  if (url.pathname === '/api/prices') return handlePrices(req, res, url);
  if (url.pathname === '/api/estimate') return handleEstimate(req, res);
  if (url.pathname === '/api/coupons') return handleCoupons(req, res);
  if (url.pathname === '/api/ai') return json(res, 200, { enabled: AI.enabled() });

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
