// AI helpers for Aisle List: price estimates and a coupon-finding agent, both run through the
// OpenAI API on the server. The key is read ONLY from the OPENAI_API_KEY environment variable
// (set privately on Railway) — it is never written in this repo and never sent to the browser.
// Without it, the endpoints answer 503 and the rest of the app works as before.
'use strict';

const fs = require('fs');
const path = require('path');

// Cheap model for price estimates; mid-tier model for the coupon search (web search + judgment).
// Either can be changed on Railway without a code change.
const PRICE_MODEL = process.env.OPENAI_PRICE_MODEL || 'gpt-6-luna';
const COUPON_MODEL = process.env.OPENAI_COUPON_MODEL || 'gpt-6.1-sol';

let client = null;
function ai() {
  if (!process.env.OPENAI_API_KEY) return null;
  if (!client) {
    const mod = require('openai');
    const OpenAI = mod.default || mod.OpenAI || mod;
    client = new OpenAI({ timeout: 180000, maxRetries: 2 });
  }
  return client;
}
const enabled = () => !!process.env.OPENAI_API_KEY;

// ── Small JSON-file cache (one file per kind) ───────────────────────────────────────
function fileCache(dir, name, ttlMs, maxEntries) {
  const f = path.join(dir, name);
  let data = null;
  const load = () => { if (!data) { try { data = JSON.parse(fs.readFileSync(f, 'utf8')) || {}; } catch (e) { data = {}; } } return data; };
  let timer = null;
  const flush = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const tmp = f + '.' + process.pid + '.tmp';
      try { fs.writeFileSync(tmp, JSON.stringify(data)); fs.renameSync(tmp, f); } catch (e) { /* disk issue: cache is optional */ }
    }, 500);
  };
  return {
    get(k) { const v = load()[k]; return v && Date.now() - v.at < ttlMs ? v.value : undefined; },
    set(k, value) {
      const d = load();
      d[k] = { value, at: Date.now() };
      const keys = Object.keys(d);
      if (keys.length > maxEntries) keys.sort((a, b) => d[a].at - d[b].at).slice(0, keys.length - maxEntries).forEach(x => delete d[x]);
      flush();
    }
  };
}

// The model's reply as text, or null if it refused / was cut off.
function replyText(res) {
  if (res.status && res.status !== 'completed') return null;
  for (const item of res.output || []) {
    if (item.type !== 'message') continue;
    for (const part of item.content || []) {
      if (part.type === 'refusal') return null;
      if (part.type === 'output_text') return part.text;
    }
  }
  return null;
}

// ── Price estimates ─────────────────────────────────────────────────────────────────
// Market Basket doesn't publish its prices online, so these are the model's best estimate of a
// typical Market Basket shelf price, cached for 30 days per item + amount so a repeat list costs
// nothing. Shopper-entered prices override these in the app.
const PRICE_SCHEMA = {
  type: 'object',
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          i: { type: 'integer', description: 'index of the item in the input list' },
          unit_price: { type: 'number', description: 'estimated price in USD for ONE typical package or ONE pound' },
          unit: { type: 'string', description: 'what unit_price buys, e.g. "1 lb", "64 oz jug", "dozen", "each"' },
          line_total: { type: 'number', description: 'estimated USD for the amount listed (unit_price if no amount given)' }
        },
        required: ['i', 'unit_price', 'unit', 'line_total'],
        additionalProperties: false
      }
    }
  },
  required: ['items'],
  additionalProperties: false
};

async function estimatePrices(items, cache) {
  const out = new Array(items.length).fill(null);
  const todo = [];
  items.forEach((it, i) => {
    const hit = cache.get(it.cacheKey);
    if (hit) out[i] = hit; else todo.push(i);
  });
  if (!todo.length) return { prices: out, fresh: 0 };
  const c = ai();
  if (!c) return { prices: out, fresh: 0, error: 'AI price estimates are not set up on this server yet.' };

  const lines = todo.map((i, n) => `${n}. ${items[i].name}${items[i].qty ? ` (amount: ${items[i].qty})` : ''}`).join('\n');
  const res = await c.responses.create({
    model: PRICE_MODEL,
    reasoning: { effort: 'low' },
    max_output_tokens: 8000,
    instructions: 'You estimate grocery prices at Market Basket (DeMoulas), the low-price supermarket chain in Massachusetts, New Hampshire and Maine. ' +
      'Give a realistic current regular shelf price for a typical store-brand or common national-brand choice, in US dollars. ' +
      'Market Basket usually prices below Stop & Shop and Hannaford. Produce and meat are priced per pound unless normally sold each. ' +
      'If an amount is given, line_total covers that amount; otherwise line_total equals unit_price. Give your best estimate for every item.',
    input: `Estimate prices for these items:\n${lines}`,
    text: { format: { type: 'json_schema', name: 'price_estimates', strict: true, schema: PRICE_SCHEMA } }
  });
  const text = replyText(res);
  if (!text) return { prices: out, fresh: 0, error: 'Couldn’t estimate prices for this list.' };
  let parsed;
  try { parsed = JSON.parse(text); } catch (e) { return { prices: out, fresh: 0, error: 'Couldn’t read the price estimate.' }; }
  let fresh = 0;
  for (const row of parsed.items || []) {
    const i = todo[row.i];
    if (i === undefined || !(row.unit_price > 0) || !(row.line_total > 0)) continue;
    const v = { unit: String(row.unit).slice(0, 30), unitPrice: round(row.unit_price), lineTotal: round(row.line_total) };
    cache.set(items[i].cacheKey, v);
    out[i] = v; fresh++;
  }
  return { prices: out, fresh };
}
const round = (n) => Math.round(n * 100) / 100;

// ── Coupon agent ────────────────────────────────────────────────────────────────────
// The model searches the web for currently active, printable MANUFACTURER coupons for the items
// (Market Basket has no store coupons or loyalty card, but accepts manufacturer coupons), then
// reports them through a strict function call. Links are kept only if they come from pages the
// search actually turned up.
const REPORT_TOOL = {
  type: 'function',
  name: 'report_coupons',
  description: 'Report the active printable coupons you found. Call this exactly once, at the end, even if you found none.',
  strict: true,
  parameters: {
    type: 'object',
    properties: {
      coupons: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            item: { type: 'string', description: 'the shopping-list item this coupon is for, exactly as written in the list' },
            brand: { type: 'string', description: 'brand and product the coupon covers' },
            offer: { type: 'string', description: 'the deal, e.g. "$1.00 off 2" or "Save $0.75 on one 12 oz bag"' },
            expires: { type: 'string', description: 'expiration date as shown (YYYY-MM-DD if known), or "" if not shown' },
            url: { type: 'string', description: 'the page where the coupon can be clipped/printed, copied exactly from your search results' },
            source: { type: 'string', description: 'site name, e.g. "Coupons.com" or the brand website' },
            how: { type: 'string', description: 'one short line on how to print it, e.g. "Click Clip, then Print (needs the free printer plug-in)"' }
          },
          required: ['item', 'brand', 'offer', 'expires', 'url', 'source', 'how'],
          additionalProperties: false
        }
      },
      note: { type: 'string', description: 'one short sentence for the shopper, or ""' }
    },
    required: ['coupons', 'note'],
    additionalProperties: false
  }
};

async function findCoupons(items, store) {
  const c = ai();
  if (!c) return { error: 'The coupon finder is not set up on this server yet.' };
  const today = new Date().toISOString().slice(0, 10);
  const region = { NH: 'New Hampshire', ME: 'Maine' }[store.state] || 'Massachusetts';
  const tools = [
    { type: 'web_search', search_context_size: 'medium',
      user_location: { type: 'approximate', country: 'US', city: store.name, region, timezone: 'America/New_York' } },
    REPORT_TOOL
  ];
  const request = {
    model: COUPON_MODEL,
    reasoning: { effort: 'medium' },
    max_output_tokens: 32000,
    tools,
    include: ['web_search_call.action.sources'],
    input: `Today is ${today}. I'm shopping at Market Basket in ${store.name}, ${store.state}. ` +
      `Find currently active manufacturer coupons I can PRINT at home for items on my list. ` +
      `Market Basket has no store coupons or loyalty card, so only manufacturer coupons count.\n\n` +
      `My list:\n${items.map(n => `- ${n}`).join('\n')}\n\n` +
      `Rules:\n` +
      `- Look on printable-coupon sites (Coupons.com, SmartSource, RetailMeNot printables, Hip2Save/Krazy Coupon Lady printable roundups) and brand websites.\n` +
      `- Only include coupons that are printable (not app-only or store loyalty offers like Target Circle or Stop & Shop GO rewards) and that you saw listed on a real page. ` +
      `Skip anything clearly expired as of ${today}; if a page lists a current printable coupon but shows no end date, include it with expires "".\n` +
      `- Brand coupon pages (e.g. P&G Brand Saver, General Mills, Kraft Heinz) and printable-coupon roundups dated within the last few weeks count as real pages.\n` +
      `- Copy each url exactly from your search results — never make up or guess a link.\n` +
      `- Skip items that are generic produce, meat, or store-brand staples unless a brand coupon clearly applies.\n` +
      `- Fewer, real coupons beat many doubtful ones. Finding none is a fine answer.\n` +
      `- When done, call report_coupons once.`
  };

  const seenUrls = new Set();
  const note = (res) => {
    for (const item of res.output || []) {
      if (item.type === 'web_search_call') for (const s of (item.action && item.action.sources) || []) if (s.url) seenUrls.add(s.url);
      if (item.type === 'web_search_call' && item.action && item.action.url) seenUrls.add(item.action.url);
      if (item.type === 'message') for (const part of item.content || []) for (const a of part.annotations || []) if (a.url) seenUrls.add(a.url);
    }
  };
  const reportIn = (res) => (res.output || []).find(o => o.type === 'function_call' && o.name === 'report_coupons');

  let res = await c.responses.create(request);
  note(res);
  let call = reportIn(res);
  if (!call && res.status === 'completed') {
    // it answered in words instead of reporting: ask once more, this time requiring the report
    res = await c.responses.create({
      model: COUPON_MODEL, reasoning: { effort: 'low' }, max_output_tokens: 16000, tools,
      previous_response_id: res.id,
      tool_choice: { type: 'function', name: 'report_coupons' },
      input: 'Please call report_coupons now with what you found (an empty list is fine).'
    });
    note(res);
    call = reportIn(res);
  }
  if (!call) return { error: res.status === 'incomplete' ? 'The coupon search took too long — try again in a minute.' : 'The coupon search couldn’t run for this list.' };
  let input;
  try { input = JSON.parse(call.arguments); } catch (e) { return { error: 'Couldn’t read the coupon results — try again.' }; }
  const out = cleanReport(input, items, seenUrls);
  // counts only (no list contents) so the server log shows if the link check is dropping results
  console.log(`coupons: ${items.length} items, ${seenUrls.size} pages seen, ${(input.coupons || []).length} reported, ${out.coupons.length} kept`);
  if (process.env.DEBUG_COUPONS) console.log(JSON.stringify({ reported: input.coupons, seen: [...seenUrls] }, null, 1));
  return { ...out, searched: seenUrls.size };
}

function cleanReport(input, items, seenUrls) {
  const hostOf = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return ''; } };
  const seenHosts = new Set([...seenUrls].map(hostOf).filter(Boolean));
  const lc = items.map(n => n.toLowerCase());
  const today = new Date().toISOString().slice(0, 10);
  const coupons = [];
  for (const cp of (input && input.coupons) || []) {
    const url = String(cp.url || '').trim();
    if (!/^https?:\/\//i.test(url)) continue;
    // keep only links on a page/site the search actually turned up (stops made-up links)
    if (!seenUrls.has(url) && !seenHosts.has(hostOf(url))) continue;
    if (/^\d{4}-\d{2}-\d{2}$/.test(cp.expires || '') && cp.expires < today) continue;
    const idx = lc.indexOf(String(cp.item || '').toLowerCase());
    coupons.push({
      item: idx >= 0 ? items[idx] : String(cp.item || '').slice(0, 120),
      brand: String(cp.brand || '').slice(0, 120),
      offer: String(cp.offer || '').slice(0, 160),
      expires: String(cp.expires || '').slice(0, 40),
      url: url.slice(0, 600),
      source: String(cp.source || hostOf(url)).slice(0, 60),
      how: String(cp.how || '').slice(0, 200)
    });
  }
  return { coupons: coupons.slice(0, 60), note: String((input && input.note) || '').slice(0, 300) };
}

module.exports = { enabled, estimatePrices, findCoupons, fileCache };
