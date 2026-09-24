(() => {
  'use strict';

  const STORES = window.MB_STORES;
  const ALIASES = window.MB_ALIASES;
  const STATE_KEY = 'mb2.state';
  const SAVED_KEY = 'mbSavedLists'; // same key as the old app, so existing saved lists carry over

  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  // ────────────────────────────── Text normalizing ──────────────────────────────
  // Light stemming so "Tomatoes", "tomato", "Cookies", "cookie" all compare equal.
  function stem(w) {
    if (/ies$/.test(w) && w.length > 3) return w.slice(0, -3) + 'y';
    if (/ie$/.test(w)) return w.slice(0, -2) + 'y';
    if (w.length <= 3) return w;
    if (/oes$/.test(w)) return w.slice(0, -2);
    if (/oe$/.test(w)) return w.slice(0, -1);
    if (/(x|ch|sh|ss|z)es$/.test(w)) return w.slice(0, -2);
    if (/(ss|us|is)$/.test(w)) return w;
    if (/s$/.test(w)) return w.slice(0, -1);
    return w;
  }
  function tokenize(str) {
    return String(str || '').toLowerCase()
      .replace(/['’`]/g, '')
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim().split(' ').filter(Boolean).map(stem);
  }
  const keyOf = (name) => tokenize(name).join(' ');

  function findPhrase(toks, phrase) {
    outer: for (let i = 0; i + phrase.length <= toks.length; i++) {
      for (let j = 0; j < phrase.length; j++) if (toks[i + j] !== phrase[j]) continue outer;
      return i;
    }
    return -1;
  }

  // ────────────────────────────── Store index ──────────────────────────────
  // Qualifiers that are specific enough to identify a guide line on their own ("towels" → Paper: Towels).
  const QUAL_ALONE = new Set(['towel', 'plate', 'cup', 'trash', 'garbage', 'laundry', 'dishwasher', 'tartar', 'tabasco', 'soy', 'bbq', 'motor', 'currant', 'prune', 'evaporated', 'powdered', 'distilled']);
  // When a head word has several guide lines ("Cheese: …"), which one a bare head word means.
  const DEFAULT_QUAL = ['fresh', 'fluid', 'prepackaged', 'packaged', 'snack nuts', 'household', 'laundry', 'canned'];

  function buildIndex(store) {
    const entries = store.guide.trim().split('\n').map(line => {
      const [item, aisle] = line.split('|').map(s => s.trim());
      const ci = item.indexOf(':');
      const head = ci >= 0 ? item.slice(0, ci) : item;
      const qual = ci >= 0 ? item.slice(ci + 1).trim() : '';
      return { item, aisle, head, qual };
    });
    const byName = new Map(entries.map(e => [e.item.toLowerCase(), e]));
    const cands = [];

    const heads = new Map(); // head tokens → entries sharing it
    for (const e of entries) {
      e.heads = e.head.split('-').map(s => tokenize(s)).filter(t => t.length);
      e.quals = e.qual ? e.qual.split(/[-/]/).map(s => tokenize(s)).filter(t => t.length) : [];
      for (const h of e.heads) {
        const k = h.join(' ');
        if (!heads.has(k)) heads.set(k, []);
        heads.get(k).push(e);
      }
    }
    const defaultOf = new Map();
    for (const [k, list] of heads) {
      let pick = null;
      if (list.length > 1) for (const q of DEFAULT_QUAL) { pick = list.find(e => e.qual.toLowerCase() === q); if (pick) break; }
      defaultOf.set(k, pick || list[0]);
    }

    for (const e of entries) {
      for (const h of e.heads) {
        if (!e.quals.length) cands.push({ req: [h], entry: e, w: 3 });
        for (const q of e.quals) cands.push({ req: [h, q], entry: e, w: 3 });
        if (e.quals.length && defaultOf.get(h.join(' ')) === e) cands.push({ req: [h], entry: e, w: 2 });
      }
      for (const q of e.quals) {
        if (q.length >= 2 || QUAL_ALONE.has(q.join(' '))) cands.push({ req: [q], entry: e, w: 1, noEnd: true });
      }
    }

    // Everyday-word aliases → first guide line this store actually has.
    // If this store words a line differently ("Milk: Fresh" vs "Milk: Fluid", "Windshield Washer"),
    // fall back to the store's default line for that heading, then to a line sharing the first words.
    const resolveTarget = (target) => {
      const exact = byName.get(target.toLowerCase());
      if (exact) return exact;
      const head = tokenize(target.split(':')[0]);
      const viaHead = defaultOf.get(head.join(' '));
      if (viaHead) return viaHead;
      if (head.length >= 2) {
        const pre = entries.filter(e => e.heads.some(h => h.slice(0, 2).join(' ') === head.slice(0, 2).join(' ')));
        if (pre.length === 1) return pre[0];
      }
      return null;
    };
    const seen = new Set();
    for (const [target, words] of Object.entries(ALIASES)) {
      const e = resolveTarget(target);
      if (!e) continue;
      for (const w of words.split(',')) {
        const t = tokenize(w);
        const k = t.join(' ');
        if (!t.length || seen.has(k)) continue;
        seen.add(k);
        cands.push({ req: [t], entry: e, w: 2.5 }); // beats a bare guide head on ties ("mushrooms" = fresh, not canned)
      }
    }

    // Sections (aisles/departments) that exist in this store, with a short "what's here".
    const sections = new Map();
    for (const e of entries) {
      const s = sectionOf(e.aisle);
      if (!sections.has(s.key)) sections.set(s.key, { ...s, raw: e.aisle, heads: [] });
      const sec = sections.get(s.key);
      const label = e.head.split('-')[0].trim();
      if (!sec.heads.includes(label)) sec.heads.push(label);
    }

    return { store, entries, byName, cands, sections };
  }

  // Score = matched words ×10, +12 when the match is the last word(s) typed (English puts the
  // noun last: "chicken broth" is broth, "peanut butter cookies" is cookies), + candidate weight.
  function matchGuide(name, idx) {
    const toks = tokenize(name);
    if (!toks.length) return null;
    const have = new Set(toks);
    let best = null;
    for (const c of idx.cands) {
      if (!have.has(c.req[0][0])) continue;
      let n = 0, end = -1, ok = true;
      for (const r of c.req) {
        const pos = findPhrase(toks, r);
        if (pos < 0) { ok = false; break; }
        n += r.length; end = Math.max(end, pos + r.length - 1);
      }
      if (!ok) continue;
      const score = n * 10 + (!c.noEnd && end === toks.length - 1 ? 12 : 0) + c.w;
      if (!best || score > best.score) best = { score, entry: c.entry };
    }

    const get = (n) => idx.byName.get(n.toLowerCase());
    let entry = best && best.entry;
    // Modifier words that move an item regardless of what it is.
    if (have.has('frozen') && !(entry && /^ice cream/i.test(entry.item))) entry = get('Frozen Foods') || entry;
    else if (have.has('canned') && (!entry || /fresh/i.test(entry.qual))) {
      entry = (entry && get(entry.head + ': Canned')) || (entry && entry.head === 'Potatoes' && get('Potatoes: Canned-Instant')) || get('Vegetables: Canned') || entry;
    } else if ((have.has('dried') || have.has('dry')) && entry && entry.item === 'Fruit: Fresh') {
      entry = get('Dried Fruit: Prunes-Raisins') || entry;
    }
    return entry || null;
  }

  // ────────────────────────────── Sections & walking order ──────────────────────────────
  // The PDF says which aisle each item is in, but not the path between departments, so the
  // walk is: front-of-store departments → numbered aisles → back-wall departments → checkout.
  // Stores word departments many ways ("Produce Wall", "Rack Produce", "Front at Register #13"),
  // so group by keyword. First match wins; rank is the walking order.
  const DEPT_RULES = [
    [/produce corner/,                                   { key: 'produce-corner', word: 'Produce corner', kicker: 'Ice cream', rank: 22 }],
    [/\bi ?c corner|ice cream|freezer wall|frozen corner/, { key: 'ice-cream', word: 'Ice cream', kicker: 'Freezer', rank: 335 }],
    [/bakery|front corner/,                              { key: 'bakery', word: 'Bakery', kicker: 'Front corner', rank: 10 }],
    [/floral|flower/,                                    { key: 'floral', word: 'Floral', kicker: 'Dept', rank: 15 }],
    [/produce/,                                          { key: 'produce', word: 'Produce', kicker: 'Fresh', rank: 20 }],
    [/shrimp|froz(en)? ?(fish|seafood)|fzn/,             { key: 'frozen-seafood', word: 'Frozen seafood', kicker: 'Case', rank: 320 }],
    [/deli|fish|seafood|sub shop|sushi/,                 { key: 'deli', word: 'Deli & Fish', kicker: 'Counter', rank: 30 }],
    [/cheese/,                                           { key: 'cheese', word: 'Cheese case', kicker: 'Specialty', rank: 32 }],
    [/kitchen|cafe|café/,                                { key: 'kitchen', word: "Market's Kitchen", kicker: 'Prepared', rank: 34 }],
    [/dairy/,                                            { key: 'dairy', word: 'Dairy', kicker: 'Aisle', rank: 40 }],
    [/goya/,                                             { key: 'goya', word: 'Goya corner', kicker: 'Corner', rank: 45 }],
    [/front main|front aisle|front wall|^front$|entrance/, { key: 'front-main', word: 'Front main aisle', kicker: 'Front', rank: 8 }],
    [/above meat|hot dog/,                               { key: 'above-meat', word: 'Above meat case', kicker: 'Back wall', rank: 305 }],
    [/meat/,                                             { key: 'meat', word: 'Meat', kicker: 'Fresh', rank: 300 }],
    [/back main|back aisle|^back$/,                      { key: 'back-main', word: 'Back main aisle', kicker: 'Back wall', rank: 310 }],
    [/freezer|frozen/,                                   { key: 'freezer', word: 'Freezers', kicker: 'Frozen', rank: 330 }],
    [/chip/,                                             { key: 'chips', word: 'Chip area', kicker: 'Snacks', rank: 480 }],
    [/soda/,                                             { key: 'soda', word: 'Soda corner', kicker: 'Drinks', rank: 482 }],
    [/beer|wine/,                                        { key: 'beer', word: 'Beer & wine', kicker: 'Dept', rank: 485 }],
    [/regist|check ?-?out|courtesy|cust\.? ?(omer)? ?serv|\breg\b|booth/, { key: 'checkout', word: 'Checkout', kicker: 'Registers', rank: 900 }]
  ];
  function sectionOf(raw) {
    const s = String(raw || '').replace(/\s+/g, ' ').trim();
    if (!s || /^n\/?a$/i.test(s)) return UNKNOWN;
    const range = s.match(/^(?:aisles?\s*)?(\d+)\s*(?:&|-|–|and|to)\s*(\d+)$/i);
    if (range) return { key: `a${range[1]}-${range[2]}`, num: `${range[1]}–${range[2]}`, kicker: 'Aisles', rank: 100 + +range[1] + 0.5 };
    const single = s.match(/^(?:aisle\s*)?(\d+)\b/i);
    if (single) return { key: `a${single[1]}`, num: single[1], kicker: 'Aisle', rank: 100 + +single[1] };
    const norm = s.toLowerCase().replace(/['’#.]/g, '').replace(/\s+/g, ' ');
    // "Back of Aisle 12", "End of Aisle 17", "Top of Aisle 10 & 11", "Back of 18 & 19" → that aisle
    const inAisle = norm.match(/aisle ?(\d+)/) || norm.match(/(?:back|end|top|front)(?: end)?(?: of)? (\d+)/);
    if (inAisle) return { key: `a${inAisle[1]}`, num: inAisle[1], kicker: 'Aisle', rank: 100 + +inAisle[1] };
    for (const [re, sec] of DEPT_RULES) if (re.test(norm)) return { ...sec };
    return { key: 'x-' + norm.replace(/[^a-z0-9]+/g, '-'), word: s, kicker: 'Spot', rank: 500 };
  }
  const UNKNOWN = { key: '?', word: '?', kicker: 'Needs an aisle', rank: -1, unknown: true };
  const aisleText = (raw) => { const s = sectionOf(raw); return s.num ? `${s.kicker} ${s.num}` : s.word; };

  // ────────────────────────────── State ──────────────────────────────
  const indexes = {};
  const idxFor = (id) => (indexes[id] ||= buildIndex(STORES[id]));

  let state = {
    version: 3,
    storeId: 'lynn',
    items: [],        // { id, name, qty, checked }
    learned: {},      // storeId → { itemKey: raw aisle }  (your own corrections)
    history: {},      // itemKey → { name, count, last }
    prefs: { reverse: false, hideDone: false }
  };

  function save() { try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch (e) { /* storage full or blocked */ } }
  function load() {
    try {
      const raw = localStorage.getItem(STATE_KEY);
      if (raw) { const s = JSON.parse(raw); if (s && s.version === 3) { state = { ...state, ...s, prefs: { ...state.prefs, ...s.prefs } }; return true; } }
    } catch (e) { /* ignore */ }
    return false;
  }

  // One-time carry-over from the previous version of the app (list, store, and your aisle edits).
  async function migrateLegacy() {
    try {
      const loc = localStorage.getItem('mbLocationId');
      if (loc && STORES[loc]) state.storeId = loc;
      const old = JSON.parse(localStorage.getItem('mbShoppingList') || 'null');
      if (old && Array.isArray(old.items)) {
        state.items = old.items.filter(i => i && i.name).map(i => ({ id: uid(), name: String(i.name), qty: '', checked: false }));
        if (typeof old.reverseAisles === 'boolean') state.prefs.reverse = old.reverseAisles;
      }
    } catch (e) { /* ignore */ }
    const rows = await readLegacyDb();
    const idx = idxFor(state.storeId);
    const learned = (state.learned[state.storeId] ||= {});
    const oldDept = { produce: 'Produce Dept', bakery: 'Front Corner', meat: 'Meat Dept', 'deli/fish': 'Deli/Fish' };
    for (const r of rows) {
      if (!r || !r.item) continue;
      const src = String(r.source || '');
      const isSeed = /^(lynn|middleton)-|^seed$|inference/.test(src);
      const k = keyOf(r.item);
      if (!k) continue;
      if (!isSeed) state.history[k] = { name: r.item, count: (state.history[k]?.count || 0) + 1, last: r.updatedAt || '' };
      if ((src === 'aisle-edit' || src === 'localStorage-migration') && r.aisle && r.aisle !== 'Unknown') {
        let a = oldDept[String(r.aisle).toLowerCase()] || r.aisle;
        if (/^frozen$/i.test(a)) a = idx.byName.get('frozen foods')?.aisle || a;
        if (/^dairy$/i.test(a)) a = idx.byName.get('milk: fluid')?.aisle || a;
        const auto = matchGuide(r.item, idx);
        if (!auto || sectionOf(auto.aisle).key !== sectionOf(a).key) learned[k] = a;
      }
    }
    save();
  }
  function readLegacyDb() {
    return new Promise(resolve => {
      if (!('indexedDB' in window)) return resolve([]);
      let req;
      try { req = indexedDB.open('MBAislePlannerDB'); } catch (e) { return resolve([]); }
      req.onupgradeneeded = () => { req.transaction.abort(); }; // no old database — don't create one
      req.onerror = () => resolve([]);
      req.onsuccess = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains('masterItems')) { db.close(); return resolve([]); }
        const get = db.transaction('masterItems', 'readonly').objectStore('masterItems').getAll();
        get.onsuccess = () => { db.close(); resolve(get.result || []); };
        get.onerror = () => { db.close(); resolve([]); };
      };
    });
  }

  // ────────────────────────────── Shared aisle memory ──────────────────────────────
  // Items that aren't in a store's guide, placed by shoppers of that store (most votes wins).
  // Kept on the server per store; cached here so it still works offline.
  const shared = {};        // storeId → { key: { name, aisle, votes } }
  const sharedIdx = {};     // storeId → [{ toks, rec }]
  const sharedFetchedAt = {};
  function setShared(storeId, map) {
    shared[storeId] = map || {};
    sharedIdx[storeId] = Object.entries(shared[storeId])
      .map(([k, rec]) => ({ toks: k.split(' ').filter(Boolean), rec }))
      .filter(x => x.toks.length);
    try { localStorage.setItem('mb2.shared.' + storeId, JSON.stringify(shared[storeId])); } catch (e) { /* full */ }
  }
  function sharedFor(storeId) {
    if (!shared[storeId]) {
      let cached = {};
      try { cached = JSON.parse(localStorage.getItem('mb2.shared.' + storeId) || '{}') || {}; } catch (e) { /* ignore */ }
      setShared(storeId, cached);
    }
    return sharedIdx[storeId];
  }
  // Same item (any plural/case) or a longer name containing it: "widget thingy" also places
  // "blue widget thingies". Longest match wins, then most votes.
  function sharedExact(name, storeId) {
    sharedFor(storeId);
    return shared[storeId]?.[keyOf(name)] || null;
  }
  function matchShared(name, storeId) {
    const toks = tokenize(name);
    if (!toks.length) return null;
    const exact = sharedExact(name, storeId);
    if (exact) return exact;
    let best = null;
    for (const { toks: t, rec } of sharedFor(storeId)) {
      if (t.length > toks.length || findPhrase(toks, t) < 0) continue;
      if (!best || t.length > best.n || (t.length === best.n && rec.votes > best.rec.votes)) best = { n: t.length, rec };
    }
    return best && best.rec;
  }
  async function fetchShared(storeId = state.storeId, force = false) {
    if (!force && Date.now() - (sharedFetchedAt[storeId] || 0) < 60000) return;
    sharedFetchedAt[storeId] = Date.now();
    try {
      const r = await fetch('/api/aisles?store=' + encodeURIComponent(storeId), { cache: 'no-store' });
      if (!r.ok) return;
      const data = await r.json();
      const before = JSON.stringify(shared[storeId] || {});
      setShared(storeId, data.aisles || {});
      if (storeId === state.storeId && JSON.stringify(shared[storeId]) !== before) { render(); renderPreview(); }
    } catch (e) { /* offline: keep the cached copy */ }
  }
  // Tell the server where this shopper found an item at this store ('' takes the vote back).
  function shareAisle(storeId, name, aisle) {
    const key = keyOf(name);
    if (!key) return;
    const map = { ...(shared[storeId] || {}) };
    if (aisle) map[key] = { name, aisle, votes: Math.max(1, map[key]?.votes || 0) };
    setShared(storeId, map);
    fetch('/api/aisles?store=' + encodeURIComponent(storeId), {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key, name, aisle: aisle || '' })
    }).then(r => r.ok && r.json()).then(res => {
      if (!res) return;
      const m = { ...(shared[storeId] || {}) };
      if (res.aisle) m[key] = { name, aisle: res.aisle, votes: res.votes }; else delete m[key];
      setShared(storeId, m);
      if (storeId === state.storeId) render();
    }).catch(() => { /* offline: it stays in your own picks; shared next time you pick */ });
  }

  // Where an item goes in the current store, in order: your own pick → what shoppers of this
  // store set for this exact item (fixes the guide when it guessed wrong) → the store's guide →
  // shoppers' pick for a similar item the guide doesn't list at all.
  function locate(name, storeId = state.storeId) {
    const k = keyOf(name);
    const mine = state.learned[storeId]?.[k];
    if (mine) return { aisle: mine, section: sectionOf(mine), via: 'you' };
    const fixed = sharedExact(name, storeId);
    if (fixed) return { aisle: fixed.aisle, section: sectionOf(fixed.aisle), via: 'shared', shared: fixed };
    const e = matchGuide(name, idxFor(storeId));
    if (e) return { aisle: e.aisle, section: sectionOf(e.aisle), via: 'guide', entry: e };
    const sh = matchShared(name, storeId);
    if (sh) return { aisle: sh.aisle, section: sectionOf(sh.aisle), via: 'shared', shared: sh };
    return { aisle: '', section: UNKNOWN, via: null };
  }

  // ────────────────────────────── Parsing a pasted list ──────────────────────────────
  const UNIT = '(?:lbs?|pounds?|oz|ounces?|gal(?:lon)?s?|dozen|doz|dz|packs?|pk|pkgs?|packages?|bags?|box(?:es)?|cans?|jars?|bottles?|bunch(?:es)?|loaf|loaves|heads?|cartons?|cases?|rolls?|ct|count|qts?|quarts?|pints?|pt|liters?|kg|containers?|tubs?|sticks?|blocks?|bars?|pieces?|pcs?)';
  const LEAD_QTY = new RegExp(`^((?:\\d+(?:[.,/]\\d+)?|[½¼¾⅓⅔])(?:\\s*-\\s*\\d+)?)\\s*(?:x\\s+|×\\s*)?(${UNIT}\\.?\\b)?\\s+(?:of\\s+)?(?=\\S)`, 'i');
  const LEAD_X = /^[x×]\s*(\d+)\s+/i;
  const TRAIL_QTY = new RegExp(`\\s*(?:[x×]\\s*(\\d+)|\\(\\s*([^)]*\\d[^)]*)\\s*\\)|[-–:]\\s*(\\d+(?:\\s*${UNIT})?))\\s*$`, 'i');

  function parseLine(line) {
    let s = line.replace(/\t/g, ' ').trim();
    s = s.replace(/^(?:[-*•·▪◦‣–—>+]+|\d+[.)]|\[\s*[xX✓]?\s*\]|[☐☑✓✔□■●○])\s*/, '').trim();
    if (!s || /:$/.test(s)) return null; // blank, or a heading like "Produce:"
    let qty = '';
    let m = s.match(LEAD_X);
    if (m) { qty = m[1]; s = s.slice(m[0].length); }
    else if ((m = s.match(LEAD_QTY))) { qty = (m[1] + (m[2] ? ' ' + m[2] : '')).trim(); s = s.slice(m[0].length); }
    if (!qty && (m = s.match(TRAIL_QTY))) { qty = (m[1] || m[2] || m[3] || '').trim(); s = s.slice(0, m.index); }
    s = s.replace(/\s+/g, ' ').replace(/[.,;]+$/, '').trim();
    if (!s || !/[a-z]/i.test(s)) return null;
    return { name: s.charAt(0).toUpperCase() + s.slice(1), qty };
  }
  function parseList(text) {
    const out = [];
    const seen = new Set();
    for (const piece of String(text || '').split(/\r?\n|[,;]|\s+\|\s+/)) {
      const p = parseLine(piece);
      if (!p) continue;
      const k = keyOf(p.name);
      if (!k || seen.has(k)) continue;
      seen.add(k);
      out.push(p);
    }
    return out;
  }

  // ────────────────────────────── DOM refs ──────────────────────────────
  const el = {
    storeBtn: $('#storeBtn'), storeName: $('#storeName'), addr: $('#storeAddr'),
    storeSheet: $('#storeSheet'), storeFilter: $('#storeFilter'), nearBtn: $('#nearBtn'), storeList: $('#storeList'),
    syncBox: $('#syncBox'), syncHint: $('#syncHint'),
    listSearch: $('#listSearch'), searchInput: $('#listSearchInput'), searchMeta: $('#listSearchMeta'), searchClear: $('#listSearchClear'),
    paste: $('#paste'), preview: $('#preview'), previewList: $('#previewList'), previewCount: $('#previewCount'), previewMatched: $('#previewMatched'),
    addBtn: $('#addBtn'), addLabel: $('#addLabel'), guideBtn: $('#guideBtn'),
    regulars: $('#regulars'), regularChips: $('#regularChips'),
    sections: $('#sections'), foot: $('#listFoot'),
    progCount: $('#progCount'), progLabel: $('#progLabel'), progBar: $('#progBar'),
    orderBtn: $('#orderBtn'), orderLabel: $('#orderLabel'), hideBtn: $('#hideBtn'),
    menuBtn: $('#menuBtn'), menu: $('#menu'), shareLabel: $('#shareLabel'),
    aisleSheet: $('#aisleSheet'), aisleSub: $('#aisleSub'), aisleFilter: $('#aisleFilter'), aisleOptions: $('#aisleOptions'),
    guideSheet: $('#guideSheet'), guideSub: $('#guideSub'), guideFilter: $('#guideFilter'), guideList: $('#guideList'),
    savedSheet: $('#savedSheet'), saveName: $('#saveName'), saveBtn: $('#saveBtn'), savedList: $('#savedList'),
    toast: $('#toast'), toastMsg: $('#toastMsg'), toastUndo: $('#toastUndo'),
    printTitle: $('#printTitle'), printDate: $('#printDate')
  };

  const ICON = {
    check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    caret: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>'
  };

  // ────────────────────────────── Rendering ──────────────────────────────
  function renderStore() {
    const s = STORES[state.storeId];
    el.storeName.innerHTML = `${esc(s.name)} <small>#${esc(s.number)}</small>`;
    el.addr.textContent = s.address;
    el.printTitle.textContent = `Market Basket ${s.name} #${s.number}`;
    document.title = `Aisle List — ${s.name} #${s.number}`;
  }

  // ────────────────────────────── Store picker ──────────────────────────────
  let myPos = null;
  function milesTo(st) {
    if (!myPos || typeof st.lat !== 'number') return null;
    const R = 3958.8, rad = Math.PI / 180;
    const dLat = (st.lat - myPos.lat) * rad, dLng = (st.lng - myPos.lng) * rad;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(myPos.lat * rad) * Math.cos(st.lat * rad) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  function storeRow(st) {
    const d = milesTo(st);
    return `<button type="button" class="store-row${st.id === state.storeId ? ' current' : ''}" data-pick-store="${st.id}">
      <span class="num">${esc(st.number)}</span>
      <span><b>${esc(st.name)}, ${esc(st.state)}</b><span class="a">${esc(st.address.split(',')[0])}</span></span>
      <span class="dist">${st.id === state.storeId ? '✓ Current' : d != null ? `${d < 10 ? d.toFixed(1) : Math.round(d)} mi` : ''}</span>
    </button>`;
  }
  function renderStoreList() {
    const q = el.storeFilter.value.trim().toLowerCase().replace(/^#/, '');
    let all = Object.values(STORES);
    if (q) all = all.filter(st => st.number === q || `${st.name} ${st.state} ${st.address}`.toLowerCase().includes(q));
    let html = '';
    if (myPos) {
      all.sort((a, b) => milesTo(a) - milesTo(b));
      html = all.map(storeRow).join('');
    } else {
      all.sort((a, b) => (q && (b.number === q) - (a.number === q)) || a.name.localeCompare(b.name) || a.number - b.number);
      const recent = q ? [] : (state.recentStores || []).map(id => STORES[id]).filter(Boolean);
      if (recent.length) html += '<div class="store-group">Recent</div>' + recent.map(storeRow).join('') + '<div class="store-group">All stores A–Z</div>';
      html += all.map(storeRow).join('');
    }
    el.storeList.innerHTML = html || '<div class="g-empty">No store matches that. Try a town name or store number.</div>';
  }
  function openStorePicker() {
    el.storeFilter.value = '';
    renderStoreList();
    el.storeSheet.showModal();
    if (matchMedia('(pointer: fine)').matches) el.storeFilter.focus();
  }
  function findNearMe() {
    if (!navigator.geolocation) return toast('This browser can’t share your location');
    el.nearBtn.disabled = true;
    navigator.geolocation.getCurrentPosition(p => {
      el.nearBtn.disabled = false;
      myPos = { lat: p.coords.latitude, lng: p.coords.longitude };
      el.storeFilter.value = '';
      renderStoreList();
      el.storeList.scrollTop = 0;
    }, () => {
      el.nearBtn.disabled = false;
      toast('Location is off — search by town or store number instead');
    }, { timeout: 10000, maximumAge: 600000 });
  }

  function groups() {
    const map = new Map();
    for (const it of state.items) {
      const loc = locate(it.name);
      const sec = loc.section;
      if (!map.has(sec.key)) map.set(sec.key, { sec, items: [] });
      map.get(sec.key).items.push({ ...it, loc });
    }
    const list = [...map.values()];
    list.sort((a, b) => {
      if (a.sec.unknown) return -1;
      if (b.sec.unknown) return 1;
      return state.prefs.reverse ? b.sec.rank - a.sec.rank : a.sec.rank - b.sec.rank;
    });
    for (const g of list) g.items.sort((a, b) => (a.checked - b.checked) || a.name.localeCompare(b.name));
    return list;
  }

  function describe(sec) {
    const s = idxFor(state.storeId).sections.get(sec.key);
    return s ? s.heads.slice(0, 6).join(' · ') : '';
  }

  function signHtml(sec) {
    if (sec.unknown) return `<div class="sign"><span class="n">?</span><span class="k">No match</span></div>`;
    if (sec.num) return `<div class="sign"><span class="k">${esc(sec.kicker)}</span><span class="n${sec.num.length > 2 ? ' range' : ''}">${esc(sec.num)}</span></div>`;
    return `<div class="sign"><span class="k">${esc(sec.kicker)}</span><span class="w">${esc(sec.word)}</span></div>`;
  }

  let shownSections = new Set(); // only newly-appearing aisle cards animate in
  // Search the active list: every word typed must appear in the item (or its amount).
  let listQuery = '';
  const queryWords = () => listQuery.toLowerCase().split(/\s+/).filter(Boolean);
  function matchesQuery(it) {
    const words = queryWords();
    if (!words.length) return true;
    const hay = `${it.name} ${it.qty || ''}`.toLowerCase();
    return words.every(w => hay.includes(w));
  }
  function highlight(text) {
    const words = queryWords();
    if (!words.length) return esc(text);
    const re = new RegExp('(' + words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'gi');
    return String(text).split(re).map((part, i) => i % 2 ? `<mark>${esc(part)}</mark>` : esc(part)).join('');
  }
  let previewKeys = new Set();
  function render() {
    renderLatest();
    const total = state.items.length;
    const done = state.items.filter(i => i.checked).length;
    el.progCount.innerHTML = `${done}<span>/${total}</span>`;
    el.progLabel.textContent = total === 0 ? 'Your list is empty' : done === total ? 'All done — head to checkout!' : 'in the cart';
    el.progBar.style.width = total ? `${(done / total) * 100}%` : '0%';
    el.orderBtn.setAttribute('aria-pressed', state.prefs.reverse);
    el.orderLabel.textContent = state.prefs.reverse ? 'Back → front' : 'Front → back';
    el.hideBtn.setAttribute('aria-pressed', state.prefs.hideDone);

    el.listSearch.classList.toggle('show', total > 0);
    el.listSearch.classList.toggle('has-q', !!listQuery);
    if (!total) {
      el.sections.innerHTML = `
        <div class="empty">
          <div class="big">Paste. Sort. Shop.</div>
          <p>Drop your whole list into the box — it lands here in aisle order for <b>${esc(STORES[state.storeId].name)} #${esc(STORES[state.storeId].number)}</b>, using the store's own Shoppers' Guide.</p>
          <div class="empty-demo"><button class="btn sm" type="button" data-demo>Try a sample list</button></div>
        </div>`;
      el.foot.textContent = '';
      renderRegulars();
      return;
    }

    const gs = groups();
    let html = '';
    let shown = 0;
    let hits = 0;
    const searching = queryWords().length > 0;
    for (const g of gs) {
      const left = g.items.filter(i => !i.checked).length;
      // while searching, show checked matches too so you can find and un-check them
      const visible = searching ? g.items.filter(matchesQuery)
        : state.prefs.hideDone ? g.items.filter(i => !i.checked) : g.items;
      hits += searching ? visible.length : 0;
      if (!visible.length) continue;
      shown++;
      const allDone = left === 0;
      const desc = g.sec.unknown
        ? 'Not in the Shoppers’ Guide — tap “Set aisle” once and it’s saved for everyone shopping this store.'
        : esc(g.sec.num ? describe(g.sec) : (describe(g.sec) || g.sec.word));
      html += `
        <article class="section${g.sec.unknown ? ' unknown' : ''}${allDone ? ' done' : ''}${shownSections.has(g.sec.key) ? '' : ' fresh'}" data-sec="${esc(g.sec.key)}">
          ${signHtml(g.sec)}
          <div class="sec-body">
            <div class="sec-head">
              <div class="sec-desc">${desc}</div>
              <div class="sec-count">${allDone ? '✓ Done' : `${left} left`}</div>
            </div>
            <ul class="items">
              ${visible.map(itemHtml).join('')}
            </ul>
          </div>
        </article>`;
    }
    if (searching) {
      el.searchMeta.textContent = `${hits} of ${total}`;
      if (!hits) html = `<div class="search-empty">No <b>“${esc(listQuery.trim())}”</b> on your list.
        <div><button class="btn sm" type="button" data-add-search>+ Add “${esc(listQuery.trim())}” to the list</button></div></div>`;
    } else {
      el.searchMeta.textContent = '';
      if (!shown) html = `<div class="empty"><div class="big">All in the cart</div><p>Every item is checked off. Turn off “Hide done” to see them.</p></div>`;
    }
    el.sections.innerHTML = html;
    shownSections = new Set(gs.map(g => g.sec.key));

    const unknown = gs.find(g => g.sec.unknown);
    el.foot.innerHTML = `Aisles from the ${esc(STORES[state.storeId].name)} #${esc(STORES[state.storeId].number)} Shoppers' Guide`
      + (unknown ? ` · ${unknown.items.length} item${unknown.items.length === 1 ? '' : 's'} need an aisle` : '');
    renderRegulars();
  }

  function itemHtml(it) {
    const need = !it.loc.section || it.loc.section.unknown;
    const chip = need ? 'Set aisle' : aisleText(it.loc.aisle);
    const title = need ? 'Pick the aisle for this item'
      : it.loc.via === 'you' ? 'You set this aisle — tap to change'
      : it.loc.via === 'shared' ? `Placed by shoppers at this store (${it.loc.shared.votes} vote${it.loc.shared.votes === 1 ? '' : 's'}) — tap to change`
      : `From the guide: ${it.loc.entry.item} … ${it.loc.aisle}`;
    return `
      <li class="item${it.checked ? ' checked' : ''}" data-id="${it.id}">
        <button class="check" type="button" role="checkbox" aria-checked="${it.checked}" aria-label="${esc(it.name)}" data-act="toggle"><span class="box">${ICON.check}</span></button>
        <div class="name" data-act="rename">${highlight(it.name)}${it.qty ? `<span class="qty">${highlight(it.qty)}</span>` : ''}</div>
        <button class="aisle-btn${need ? ' need' : ''}" type="button" data-act="aisle" title="${esc(title)}" aria-label="${esc(need ? 'Set aisle for ' + it.name : 'Move ' + it.name + ' (now ' + chip + ')')}">${esc(chip)}${ICON.caret}</button>
        <button class="rm" type="button" data-act="remove" aria-label="Remove ${esc(it.name)}">${ICON.x}</button>
      </li>`;
  }

  function renderRegulars() {
    const inList = new Set(state.items.map(i => keyOf(i.name)));
    const top = Object.entries(state.history)
      .filter(([k]) => !inList.has(k))
      .sort((a, b) => (b[1].count - a[1].count) || String(b[1].last).localeCompare(String(a[1].last)))
      .slice(0, 14);
    el.regulars.classList.toggle('show', top.length > 0);
    el.regularChips.innerHTML = top.map(([k, h]) => `<button class="chip" type="button" data-regular="${esc(h.name)}">${esc(h.name)}</button>`).join('');
  }

  // Live preview of what's in the box, in guide style ("Ketchup . . . . Aisle 3").
  function renderPreview() {
    const parsed = parseList(el.paste.value);
    const n = parsed.length;
    el.addBtn.disabled = n === 0;
    el.addLabel.textContent = n > 1 ? `Add ${n} items` : 'Add to list';
    el.preview.classList.toggle('show', n > 0);
    if (!n) { el.previewList.innerHTML = ''; previewKeys = new Set(); return; }
    let matched = 0;
    const inList = new Set(state.items.map(i => keyOf(i.name)));
    let fresh = 0;
    const keys = new Set();
    el.previewList.innerHTML = parsed.map((p) => {
      const loc = locate(p.name);
      const ok = !loc.section.unknown;
      if (ok) matched++;
      const dup = inList.has(keyOf(p.name));
      const src = loc.via === 'you' ? 'your pick' : loc.via === 'shared' ? 'placed by shoppers' : ok ? loc.entry.item : 'we’ll ask';
      const pk = keyOf(p.name);
      keys.add(pk);
      const isNew = !previewKeys.has(pk);
      return `<li${isNew ? ` class="fresh" style="animation-delay:${Math.min(fresh++, 12) * 18}ms"` : ''}>
        <span class="p-name">${esc(p.name)}${p.qty ? `<em>× ${esc(p.qty)}</em>` : ''}${dup ? '<em>on list</em>' : ''}</span>
        <span class="leader"></span>
        <span class="p-aisle${ok ? '' : ' none'}">${ok ? esc(aisleText(loc.aisle)) : 'No match'}<small>${esc(src)}</small></span>
      </li>`;
    }).join('');
    previewKeys = keys;
    el.previewCount.textContent = `${n} item${n === 1 ? '' : 's'}`;
    el.previewMatched.textContent = `${matched} found in guide`;
  }

  // ────────────────────────────── Actions ──────────────────────────────
  function addParsed(parsed, source) {
    let added = 0, dup = 0;
    const before = JSON.stringify(state.items);
    for (const p of parsed) {
      const k = keyOf(p.name);
      const existing = state.items.find(i => keyOf(i.name) === k);
      if (existing) {
        dup++;
        if (existing.checked) existing.checked = false;
        if (p.qty && !existing.qty) existing.qty = p.qty;
        continue;
      }
      state.items.push({ id: uid(), name: p.name, qty: p.qty || '', checked: false });
      const h = state.history[k] || { name: p.name, count: 0 };
      state.history[k] = { name: p.name, count: h.count + 1, last: new Date().toISOString() };
      added++;
    }
    save(); render();
    const unknown = parsed.filter(p => locate(p.name).section.unknown).length;
    const bits = [];
    if (added) bits.push(`Added ${added} item${added === 1 ? '' : 's'}`);
    if (dup) bits.push(`${dup} already on list`);
    if (unknown) bits.push(`${unknown} need${unknown === 1 ? 's' : ''} an aisle`);
    toast(bits.join(' · ') || 'Nothing new to add', added ? () => { state.items = JSON.parse(before); save(); render(); renderPreview(); } : null);
    return added;
  }

  function addFromBox() {
    const parsed = parseList(el.paste.value);
    if (!parsed.length) return;
    addParsed(parsed, 'paste');
    el.paste.value = '';
    autoGrow();
    renderPreview();
    el.paste.focus();
  }

  function itemById(id) { return state.items.find(i => i.id === id); }

  function toggleItem(id) {
    const it = itemById(id);
    if (!it) return;
    it.checked = !it.checked;
    save();
    render();
    if (it.checked && navigator.vibrate && navigator.userActivation?.hasBeenActive) navigator.vibrate(8);
  }

  function removeItem(id) {
    const i = state.items.findIndex(x => x.id === id);
    if (i < 0) return;
    const [gone] = state.items.splice(i, 1);
    save(); render(); renderPreview();
    toast(`Removed ${gone.name}`, () => { state.items.splice(i, 0, gone); save(); render(); renderPreview(); });
  }

  function startRename(id, nameEl) {
    const it = itemById(id);
    if (!it || nameEl.querySelector('input')) return;
    const input = document.createElement('input');
    input.value = it.qty ? `${it.qty} ${it.name}` : it.name;
    input.setAttribute('aria-label', 'Edit item');
    nameEl.replaceChildren(input);
    input.focus(); input.select();
    let done = false;
    const finish = (commit) => {
      if (done) return; done = true;
      if (commit) {
        const p = parseLine(input.value);
        if (p) { it.name = p.name; it.qty = p.qty; save(); }
      }
      render();
    };
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); finish(true); }
      if (e.key === 'Escape') { e.preventDefault(); finish(false); }
    });
    input.addEventListener('blur', () => finish(true));
  }

  function bulk(kind) {
    const before = JSON.stringify(state.items);
    const undo = () => { state.items = JSON.parse(before); save(); render(); renderPreview(); };
    if (kind === 'uncheck') { state.items.forEach(i => { i.checked = false; }); save(); render(); toast('Unchecked everything', undo); }
    if (kind === 'clearDone') {
      const n = state.items.filter(i => i.checked).length;
      if (!n) return toast('Nothing is checked off yet');
      state.items = state.items.filter(i => !i.checked); save(); render(); toast(`Removed ${n} checked item${n === 1 ? '' : 's'}`, undo);
    }
    if (kind === 'clearAll') {
      if (!state.items.length) return toast('Your list is already empty');
      const n = state.items.length;
      state.items = []; save(); render(); renderPreview(); toast(`Cleared ${n} item${n === 1 ? '' : 's'}`, undo);
    }
  }

  function switchStore(id) {
    if (!STORES[id] || id === state.storeId) return;
    state.storeId = id;
    state.recentStores = [id, ...(state.recentStores || []).filter(x => x !== id)].slice(0, 4);
    save();
    renderStore(); render(); renderPreview();
    fetchShared(id, true);
    if (el.guideSheet.open) renderGuide();
    toast(state.items.length ? `Re-sorted for ${STORES[id].name} #${STORES[id].number}` : `Now shopping ${STORES[id].name} #${STORES[id].number}`);
  }

  function listAsText() {
    const s = STORES[state.storeId];
    const lines = [`Market Basket ${s.name} #${s.number} — shopping list`];
    for (const g of groups()) {
      const title = g.sec.unknown ? 'NEEDS AN AISLE' : g.sec.num ? `${g.sec.kicker} ${g.sec.num}`.toUpperCase() : g.sec.word.toUpperCase();
      lines.push('', title);
      for (const it of g.items) lines.push(`${it.checked ? '☑' : '☐'} ${it.name}${it.qty ? ` (${it.qty})` : ''}`);
    }
    return lines.join('\n');
  }
  async function shareList() {
    if (!state.items.length) return toast('Add some items first');
    const text = listAsText();
    if (navigator.share && matchMedia('(pointer: coarse)').matches) {
      try { await navigator.share({ title: 'Shopping list', text }); return; } catch (e) { if (e && e.name === 'AbortError') return; }
    }
    try { await navigator.clipboard.writeText(text); toast('List copied — paste it anywhere'); }
    catch (e) { toast('Couldn’t copy — your browser blocked it'); }
  }

  function printList() {
    if (!state.items.length) return toast('Add some items first');
    el.printDate.textContent = new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
    const wasHidden = state.prefs.hideDone;
    state.prefs.hideDone = false; render();
    setTimeout(() => { window.print(); state.prefs.hideDone = wasHidden; render(); }, 60);
  }

  // ────────────────────────────── Aisle picker ──────────────────────────────
  let pickingId = null;
  function openAislePicker(id) {
    const it = itemById(id);
    if (!it) return;
    pickingId = id;
    const loc = locate(it.name);
    el.aisleSub.innerHTML = `<b>${esc(it.name)}</b> at ${esc(STORES[state.storeId].name)} #${esc(STORES[state.storeId].number)}. Your pick is remembered, and shared so other shoppers at this store get the right aisle too.`;
    el.aisleFilter.value = '';
    renderAisleOptions(loc);
    el.aisleSheet.showModal();
    if (matchMedia('(pointer: fine)').matches) el.aisleFilter.focus();
  }
  function renderAisleOptions(loc = locate(itemById(pickingId)?.name || '')) {
    const q = el.aisleFilter.value.trim().toLowerCase();
    const secs = [...idxFor(state.storeId).sections.values()].sort((a, b) => a.rank - b.rank);
    const rows = secs.filter(s => !q || `${s.kicker} ${s.num || ''} ${s.word || ''} ${s.heads.join(' ')}`.toLowerCase().includes(q)).map(s => {
      const tag = s.num ? `<span class="tag">${esc(s.num)}</span>` : `<span class="tag word">${esc(s.word)}</span>`;
      const t = s.num ? `${s.kicker} ${s.num}` : s.word;
      return `<button type="button" class="pick${loc.section.key === s.key ? ' current' : ''}" data-raw="${esc(s.raw)}">${tag}<span><span class="t">${esc(t)}</span><span class="d">${esc(s.heads.join(', '))}</span></span></button>`;
    }).join('');
    const mine = state.learned[state.storeId]?.[keyOf(itemById(pickingId)?.name || '')];
    el.aisleOptions.innerHTML = (rows || '<div class="g-empty">No aisle mentions that. Type your own below.</div>') + `
      <form class="custom-row" id="customAisle">
        <input class="field" name="custom" placeholder="Somewhere else? e.g. 7, End cap" autocomplete="off" />
        <button class="btn" type="submit" style="flex:none">Use</button>
      </form>
      ${mine ? '<div class="custom-row"><button class="btn ghost sm" type="button" data-reset>Forget my choice — use the guide</button></div>' : ''}`;
  }
  function setAisle(raw) {
    const it = itemById(pickingId);
    if (!it) return;
    const learned = (state.learned[state.storeId] ||= {});
    const k = keyOf(it.name);
    if (raw === null) delete learned[k]; else learned[k] = raw;
    save();
    // Share it with other shoppers of this store: fills in items the guide doesn't list and fixes
    // ones it placed wrong. Picking the same aisle the guide already says needs no vote.
    const g = matchGuide(it.name, idxFor(state.storeId));
    const agreesWithGuide = raw !== null && g && sectionOf(g.aisle).key === sectionOf(raw).key;
    shareAisle(state.storeId, it.name, raw === null || agreesWithGuide ? '' : raw);
    el.aisleSheet.close();
    render();
    toast(raw === null ? `${it.name} back to the store's usual aisle`
      : `${it.name} → ${aisleText(raw)} (remembered${agreesWithGuide ? '' : ' & shared with shoppers at this store'})`);
  }

  // ────────────────────────────── Guide browser ──────────────────────────────
  function openGuide() {
    el.guideFilter.value = '';
    renderGuide();
    el.guideSheet.showModal();
    if (matchMedia('(pointer: fine)').matches) el.guideFilter.focus();
  }
  function renderGuide() {
    const s = STORES[state.storeId];
    const idx = idxFor(state.storeId);
    el.guideSub.innerHTML = `${esc(s.name)} #${esc(s.number)} · ${idx.entries.length} entries`
      + (s.pdf ? ` · <a href="${esc(s.pdf)}" target="_blank" rel="noopener">View the store’s PDF</a>` : '');
    const q = el.guideFilter.value.trim().toLowerCase();
    const inList = new Set(state.items.map(i => keyOf(i.name)));
    const rows = idx.entries
      .filter(e => !q || `${e.item} ${e.aisle} ${aisleText(e.aisle)}`.toLowerCase().includes(q))
      .sort((a, b) => a.item.localeCompare(b.item));
    let letter = '';
    let html = '';
    for (const e of rows) {
      const L = e.item[0].toUpperCase();
      if (L !== letter && !q) { letter = L; html += `<div class="guide-letter">${L}</div>`; }
      const name = guideName(e);
      const added = inList.has(keyOf(name));
      html += `<button type="button" class="g-row${added ? ' added' : ''}" data-guide="${esc(name)}">
        <span class="g-name">${esc(e.head)}${e.qual ? `: <em>${esc(e.qual)}</em>` : ''}</span><span class="leader"></span>
        <span class="g-aisle">${esc(e.aisle)}</span><span class="g-add">${added ? '✓' : '+'}</span></button>`;
    }
    el.guideList.innerHTML = html || '<div class="g-empty">Nothing in the guide matches that.</div>';
  }
  // "Tomato: Canned" → "Canned tomato" reads like a list item and still matches the same guide line.
  function guideName(e) {
    if (!e.qual) return e.item;
    if (/^(canned|fresh|packaged|prepackaged|specialty|jar|dry|fluid|baked|household|birthday|grated parmesan)$/i.test(e.qual)) return `${e.qual} ${e.head}`.replace(/^(\w)/, c => c.toUpperCase());
    return `${e.head}: ${e.qual}`;
  }

  // ────────────────────────────── Saved lists ──────────────────────────────
  // Saved lists live in this browser and, with a sync code, on the Aisle List server so they
  // follow you to every device. Deleted lists are kept as { deleted, savedAt } markers so a list
  // removed on one device doesn't come back from another.
  const SYNC_KEY = 'mb2.syncCode';
  const stampOf = (v) => Date.parse(v && v.savedAt) || 0;
  function getSavedRaw() { try { return JSON.parse(localStorage.getItem(SAVED_KEY) || '{}') || {}; } catch (e) { return {}; } }
  function getSaved() {
    const raw = getSavedRaw(), out = {};
    for (const [k, v] of Object.entries(raw)) if (v && !v.deleted) out[k] = v;
    return out;
  }
  function putSaved(v) {
    const raw = getSavedRaw(), now = new Date().toISOString(), next = {};
    for (const [k, old] of Object.entries(raw)) {
      if (!(k in v)) next[k] = old && old.deleted ? old : { deleted: true, savedAt: now };
    }
    for (const [k, val] of Object.entries(v)) {
      const old = raw[k];
      const changed = !old || old.deleted || JSON.stringify(old.items) !== JSON.stringify(val.items);
      // a restored (older) copy must still win over the server's newer one, so give it a fresh time
      next[k] = changed && old && stampOf(val) <= stampOf(old) ? { ...val, savedAt: now } : val;
    }
    try { localStorage.setItem(SAVED_KEY, JSON.stringify(next)); } catch (e) { toast('Couldn’t save — storage is full'); }
    scheduleSync();
  }
  const getSyncCode = () => { try { return localStorage.getItem(SYNC_KEY) || ''; } catch (e) { return ''; } };
  let syncTimer = null, syncState = { busy: false, error: '', last: 0 };
  function scheduleSync() { clearTimeout(syncTimer); if (getSyncCode()) syncTimer = setTimeout(syncNow, 400); }
  async function syncNow() {
    const code = getSyncCode();
    if (!code || syncState.busy) return false;
    syncState.busy = true; renderSync();
    try {
      const r = await fetch('/api/lists', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'X-Sync-Code': code },
        body: JSON.stringify({ lists: getSavedRaw() })
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data.error || `Sync failed (${r.status})`);
      localStorage.setItem(SAVED_KEY, JSON.stringify(data.lists || {}));
      syncState = { busy: false, error: '', last: Date.now() };
      renderSaved(); render();
      return true;
    } catch (e) {
      syncState = { ...syncState, busy: false, error: navigator.onLine === false ? 'You’re offline — will sync when you’re back.' : (e.message || 'Couldn’t reach the server') };
      renderSync();
      return false;
    }
  }
  async function startSync(code) {
    code = String(code || '').trim();
    if (code.length < 4) { toast('Use at least 4 characters for your sync code'); return; }
    localStorage.setItem(SYNC_KEY, code);
    const before = Object.keys(getSaved()).length;
    const ok = await syncNow();
    if (ok) {
      const after = Object.keys(getSaved()).length;
      toast(after > before ? `Synced — ${after - before} list${after - before === 1 ? '' : 's'} came from your other devices` : 'Sync is on for this device');
    }
  }
  function stopSync() {
    localStorage.removeItem(SYNC_KEY);
    syncState = { busy: false, error: '', last: 0 };
    renderSaved();
    toast('Sync is off on this device (your lists stay here)');
  }
  function renderSync() {
    const code = getSyncCode();
    el.syncBox.classList.toggle('on', !!code);
    if (!code) {
      el.syncBox.innerHTML = `<h3>Sync across devices</h3>
        <p>Pick a private sync code and type the same code on your phone and computer — your saved lists show up on both. Anyone with the code can see those lists, so make it something only you’d guess.</p>
        <form class="row" id="syncForm"><input class="field" name="code" placeholder="e.g. blue-pantry-42" autocomplete="off" autocapitalize="none" spellcheck="false" minlength="4" maxlength="64" />
        <button class="btn primary" type="submit" style="flex:none">Turn on</button></form>`;
    } else {
      const when = syncState.last ? new Date(syncState.last).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) : '';
      el.syncBox.innerHTML = `<h3>✓ Syncing as “${esc(code)}”</h3>
        <p>Use this same code on your other devices to see these lists there.</p>
        <div class="row"><button class="btn sm" type="button" data-sync-now>${syncState.busy ? 'Syncing…' : 'Sync now'}</button>
        <button class="btn sm ghost" type="button" data-sync-stop>Turn off on this device</button></div>
        <div class="sync-status">${syncState.error ? esc(syncState.error) : when ? 'Last synced ' + esc(when) : ''}</div>`;
    }
    el.syncHint.hidden = !!code;
  }
  function renderSaved() {
    const saved = getSaved();
    const names = Object.keys(saved).sort((a, b) => String(saved[b].savedAt).localeCompare(String(saved[a].savedAt)));
    el.saveBtn.disabled = !state.items.length;
    el.saveName.placeholder = state.items.length ? 'Name this list (e.g. Weekly staples)' : 'Add items to save a list';
    el.savedList.innerHTML = names.length ? names.map(n => {
      const l = saved[n];
      const count = (l.items || []).length;
      const when = l.savedAt ? new Date(l.savedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : '';
      return `<div class="saved-row">
        <div class="meta"><b>${esc(n)}</b><span>${count} item${count === 1 ? '' : 's'}${when ? ' · ' + esc(when) : ''}</span></div>
        <button class="btn sm" type="button" data-load="${esc(n)}" title="Add these items to your current list">Add to list</button>
        <button class="btn sm ghost" type="button" data-del="${esc(n)}" aria-label="Delete ${esc(n)}">${ICON.x}</button>
      </div>`;
    }).join('') : '<div class="g-empty">No saved lists yet.</div>';
    renderLatest(saved);
    renderSync();
  }

  // Saved lists as buttons under Add Items — tap one to load it into the list on the right.
  const LOAD_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>';
  function renderLatest(saved = getSaved()) {
    const names = Object.keys(saved).sort((a, b) => String(saved[b].savedAt).localeCompare(String(saved[a].savedAt)));
    const wrap = $('#savedQuick');
    wrap.classList.toggle('show', names.length > 0 || !getSyncCode());
    el.syncHint.hidden = !!getSyncCode();
    if (!names.length) { $('#savedQuickList').innerHTML = ''; return; }
    const current = [...new Set(state.items.map(i => keyOf(i.name)))].sort().join('|');
    $('#savedQuickList').innerHTML = names.slice(0, 6).map(n => {
      const items = (saved[n].items || []).filter(i => i && i.name);
      const isCurrent = current && [...new Set(items.map(i => keyOf(i.name)))].sort().join('|') === current;
      return `<button type="button" class="load-btn${isCurrent ? ' current' : ''}" data-quick-load="${esc(n)}">
        ${LOAD_ICON}<span class="t"><b>${esc(n)}</b><span class="m">${items.length} item${items.length === 1 ? '' : 's'}</span></span>
        <span class="go">${isCurrent ? '✓ Loaded' : 'Load'}</span></button>`;
    }).join('');
  }
  function loadSaved(name) {
    const list = getSaved()[name];
    if (!list) return;
    const before = JSON.stringify(state.items);
    const seen = new Set();
    state.items = (list.items || []).filter(i => i && i.name).filter(i => { const k = keyOf(i.name); if (seen.has(k)) return false; seen.add(k); return true; })
      .map(i => ({ id: uid(), name: String(i.name), qty: i.qty || '', checked: false }));
    save(); render(); renderPreview();
    toast(`Loaded “${name}” · ${state.items.length} items`, JSON.parse(before).length ? () => { state.items = JSON.parse(before); save(); render(); renderPreview(); } : null);
  }
  function saveCurrent() {
    const name = el.saveName.value.trim();
    if (!state.items.length) return;
    if (!name) { el.saveName.focus(); return toast('Give the list a name first'); }
    const saved = getSaved();
    const previous = saved[name];
    saved[name] = { items: state.items.map(i => ({ name: i.name, qty: i.qty })), savedAt: new Date().toISOString() };
    putSaved(saved);
    el.saveName.value = '';
    renderSaved();
    if (previous) {
      toast(`Updated “${name}”`, () => { const s = getSaved(); s[name] = previous; putSaved(s); renderSaved(); });
    } else {
      toast(`Saved “${name}”`);
    }
  }

  // ────────────────────────────── Toast ──────────────────────────────
  let toastTimer = null, toastUndoFn = null;
  function toast(msg, undo) {
    el.toastMsg.textContent = msg;
    toastUndoFn = undo || null;
    el.toastUndo.hidden = !undo;
    el.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.remove('show'), undo ? 5200 : 2600);
  }

  // ────────────────────────────── Wiring ──────────────────────────────
  function autoGrow() {
    el.paste.style.height = 'auto';
    el.paste.style.height = Math.max(132, Math.min(el.paste.scrollHeight + 4, window.innerHeight * 0.44)) + 'px';
  }

  function wire() {
    let t = null;
    el.paste.addEventListener('input', () => { autoGrow(); clearTimeout(t); t = setTimeout(renderPreview, 70); });
    el.paste.addEventListener('paste', () => setTimeout(() => { autoGrow(); renderPreview(); }, 0));
    el.paste.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); addFromBox(); }
    });
    el.addBtn.addEventListener('click', addFromBox);
    el.guideBtn.addEventListener('click', openGuide);

    el.storeBtn.addEventListener('click', openStorePicker);
    el.storeFilter.addEventListener('input', renderStoreList);
    el.nearBtn.addEventListener('click', findNearMe);
    el.storeList.addEventListener('click', e => {
      const b = e.target.closest('[data-pick-store]');
      if (!b) return;
      el.storeSheet.close();
      switchStore(b.dataset.pickStore);
    });

    el.regularChips.addEventListener('click', e => {
      const b = e.target.closest('[data-regular]');
      if (b) addParsed([{ name: b.dataset.regular, qty: '' }], 'regular');
    });

    el.sections.addEventListener('click', e => {
      if (e.target.closest('[data-add-search]')) {
        const parsed = parseList(listQuery);
        el.searchInput.value = ''; listQuery = '';
        if (parsed.length) addParsed(parsed, 'search'); else render();
        return;
      }
      if (e.target.closest('[data-demo]')) {
        el.paste.value = 'Bananas\n2 lbs ground beef\nGreek yogurt\nPaper towels\nKetchup\nFrozen peas\nPeanut butter cookies\nChicken broth\nDish soap\nCoffee filters\nBagels\nShampoo';
        autoGrow(); renderPreview(); el.paste.focus();
        return;
      }
      const li = e.target.closest('.item');
      const act = e.target.closest('[data-act]');
      if (!li || !act) return;
      const id = li.dataset.id;
      const a = act.dataset.act;
      if (a === 'toggle') toggleItem(id);
      else if (a === 'remove') removeItem(id);
      else if (a === 'aisle') openAislePicker(id);
      else if (a === 'rename') startRename(id, act);
    });

    // Search the active list
    const onSearch = () => {
      const wasEmpty = !listQuery;
      listQuery = el.searchInput.value;
      render();
      // jump back to the top of the list so results aren't hidden above the fold
      if (wasEmpty && listQuery) {
        const top = el.sections.getBoundingClientRect().top + window.scrollY - el.listSearch.closest('.toolbar').offsetHeight - 12;
        if (window.scrollY > top) window.scrollTo({ top, behavior: 'smooth' });
      }
    };
    el.searchInput.addEventListener('input', onSearch);
    el.searchInput.addEventListener('keydown', e => {
      if (e.key === 'Escape') { el.searchInput.value = ''; onSearch(); el.searchInput.blur(); }
      if (e.key === 'Enter') { e.preventDefault(); el.searchInput.blur(); } // close the phone keyboard, keep results
    });
    el.searchClear.addEventListener('click', () => { el.searchInput.value = ''; onSearch(); el.searchInput.focus(); });
    // "/" jumps to the search box on a keyboard (unless you're already typing somewhere)
    document.addEventListener('keydown', e => {
      if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
      if (/input|textarea|select/i.test(document.activeElement?.tagName) || document.querySelector('dialog[open]')) return;
      if (!state.items.length) return;
      e.preventDefault(); el.searchInput.focus();
    });
    el.orderBtn.addEventListener('click', () => { state.prefs.reverse = !state.prefs.reverse; save(); render(); });
    el.hideBtn.addEventListener('click', () => { state.prefs.hideDone = !state.prefs.hideDone; save(); render(); });

    const closeMenu = () => { el.menu.classList.remove('open'); el.menuBtn.setAttribute('aria-expanded', 'false'); };
    el.menuBtn.addEventListener('click', e => {
      e.stopPropagation();
      const open = !el.menu.classList.contains('open');
      el.menu.classList.toggle('open', open);
      el.menuBtn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', e => { if (!e.target.closest('.menu-wrap')) closeMenu(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    el.menu.addEventListener('click', e => {
      const b = e.target.closest('[data-act]');
      if (!b) return;
      closeMenu();
      const a = b.dataset.act;
      if (a === 'share') shareList();
      else if (a === 'print') printList();
      else if (a === 'saved') { renderSaved(); el.savedSheet.showModal(); }
      else bulk(a);
    });

    // Sheets: close buttons + click on backdrop
    for (const d of [el.aisleSheet, el.guideSheet, el.savedSheet, el.storeSheet]) {
      d.addEventListener('click', e => {
        if (e.target.closest('[data-close]') || e.target === d) d.close();
      });
    }

    el.aisleFilter.addEventListener('input', () => renderAisleOptions());
    el.aisleOptions.addEventListener('click', e => {
      const p = e.target.closest('[data-raw]');
      if (p) return setAisle(p.dataset.raw);
      if (e.target.closest('[data-reset]')) return setAisle(null);
    });
    el.aisleOptions.addEventListener('submit', e => {
      e.preventDefault();
      const v = new FormData(e.target).get('custom');
      if (v && String(v).trim()) setAisle(String(v).trim());
    });

    el.guideFilter.addEventListener('input', renderGuide);
    el.guideList.addEventListener('click', e => {
      const b = e.target.closest('[data-guide]');
      if (!b) return;
      const name = b.dataset.guide;
      const k = keyOf(name);
      const existing = state.items.find(i => keyOf(i.name) === k);
      if (existing) { state.items = state.items.filter(i => i !== existing); save(); render(); toast(`Removed ${existing.name}`); }
      else addParsed([{ name, qty: '' }], 'guide');
      renderGuide();
    });

    $('#saveListBtn').addEventListener('click', () => {
      renderSaved();
      el.savedSheet.showModal();
      if (state.items.length && matchMedia('(pointer: fine)').matches) el.saveName.focus();
    });
    $('#savedQuickList').addEventListener('click', e => {
      const b = e.target.closest('[data-quick-load]');
      if (b) loadSaved(b.dataset.quickLoad);
    });
    el.syncHint.addEventListener('click', () => { renderSaved(); el.savedSheet.showModal(); setTimeout(() => el.syncBox.querySelector('input')?.focus(), 50); });
    el.syncBox.addEventListener('submit', e => { e.preventDefault(); startSync(new FormData(e.target).get('code')); });
    el.syncBox.addEventListener('click', e => {
      if (e.target.closest('[data-sync-now]')) syncNow();
      if (e.target.closest('[data-sync-stop]')) stopSync();
    });
    // pick up changes made on your other devices when you come back to the app
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') { syncNow(); fetchShared(); } });
    window.addEventListener('online', () => syncNow());
    el.saveBtn.addEventListener('click', saveCurrent);
    el.saveName.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); saveCurrent(); } });
    el.savedList.addEventListener('click', e => {
      const l = e.target.closest('[data-load]');
      const d = e.target.closest('[data-del]');
      const saved = getSaved();
      if (l && saved[l.dataset.load]) {
        const items = (saved[l.dataset.load].items || []).filter(i => i && i.name).map(i => ({ name: String(i.name), qty: i.qty || '' }));
        el.savedSheet.close();
        addParsed(items, 'saved');
      }
      if (d && saved[d.dataset.del]) {
        const name = d.dataset.del, copy = saved[name];
        delete saved[name]; putSaved(saved); renderSaved();
        toast(`Deleted “${name}”`, () => { const s = getSaved(); s[name] = copy; putSaved(s); renderSaved(); });
      }
    });

    el.toastUndo.addEventListener('click', () => {
      const fn = toastUndoFn; toastUndoFn = null;
      el.toast.classList.remove('show');
      if (fn) fn();
    });

    // Keep tabs/devices in sync if the list is open twice.
    window.addEventListener('storage', e => {
      if (e.key === STATE_KEY && load()) { renderStore(); render(); }
      if (e.key === SAVED_KEY) renderLatest();
    });
  }

  async function init() {
    if (!load()) await migrateLegacy();
    if (!STORES[state.storeId]) state.storeId = 'lynn';
    renderStore();
    wire();
    render();
    renderPreview();
    if (getSyncCode()) syncNow();
    fetchShared(state.storeId, true);
  }

  // Exposed for quick testing from the console.
  window.AisleList = { parseList, parseLine, locate, matchGuide: (n, id = state.storeId) => matchGuide(n, idxFor(id)), sectionOf, tokenize };

  init();
})();
