import { DurableObject } from 'cloudflare:workers';
import { TIERS, SESSION_TTL, MIN_ADS_SECONDS, MAX_ADS_SECONDS } from './config.js';

function ctEq(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

// ===== BỘ ĐẾM THEO IP (rate limit + quota ngày) - nguyên tử =====
async function schedule(storage, at) {
  const cur = await storage.getAlarm();
  if (cur === null || cur < at + 1000) await storage.setAlarm(at + 1000);
}

export class IpDO extends DurableObject {
  async take(name, limit, windowSec) {
    const now = Date.now();
    let c = await this.ctx.storage.get(name);
    if (!c || now >= c.end) c = { n: 0, end: now + windowSec * 1000 };
    if (c.n >= limit) return { ok: false, n: c.n, retry: Math.ceil((c.end - now) / 1000) };
    c.n += 1;
    await this.ctx.storage.put(name, c);
    await schedule(this.ctx.storage, c.end);
    return { ok: true, n: c.n };
  }
  async give(name) {
    const c = await this.ctx.storage.get(name);
    if (c && c.n > 0) { c.n -= 1; await this.ctx.storage.put(name, c); }
  }
  async peek(name) {
    const c = await this.ctx.storage.get(name);
    return c && Date.now() < c.end ? c.n : 0;
  }
  async reset(name) { await this.ctx.storage.delete(name); }
  async alarm() {
    const now = Date.now();
    let next = 0;
    for (const [k, c] of await this.ctx.storage.list()) {
      if (now >= c.end) await this.ctx.storage.delete(k);
      else next = Math.max(next, c.end);
    }
    if (next) await this.ctx.storage.setAlarm(next + 1000);
  }
}

// ===== PHIÊN NGƯỜI DÙNG =====
async function load(ctx) {
  const s = await ctx.storage.get('s');
  return s && Date.now() <= s.exp ? s : null;
}

export class SessionDO extends DurableObject {
  async create(ip, tier) {
    const s = {
      ip, tier, ads: 0, key: null, duration: null,
      token: null, link: null, startedAt: null,
      claimId: null, claimAt: null,
      exp: Date.now() + SESSION_TTL * 1000
    };
    await this.ctx.storage.put('s', s);
    await this.ctx.storage.setAlarm(s.exp + 60000);
  }

  async read(ip) {
    const s = await load(this.ctx);
    return s && s.ip === ip ? s : null;
  }

  async setLink(ip, token, link) {
    const s = await load(this.ctx);
    if (!s || s.ip !== ip || s.key || s.ads >= (TIERS[s.tier] || 1)) return { link: null };
    if (s.token && s.link) return { link: s.link };
    s.token = token; s.link = link; s.startedAt = Date.now();
    s.exp = Date.now() + SESSION_TTL * 1000;
    await this.ctx.storage.put('s', s);
    return { link };
  }

  // Token bị hủy trước khi trả kết quả => dùng một lần duy nhất, request song song không cùng thành công.
  async completeAd(ip, token) {
    const s = await load(this.ctx);
    if (!s || s.ip !== ip) return { r: 'none' };
    if (s.key) return { r: 'done' };
    const required = TIERS[s.tier] || 1;
    if (s.ads >= required) return { r: 'claim' };
    if (!s.token || !ctEq(token, s.token)) return { r: 'bad' };

    const age = Date.now() - s.startedAt;
    s.token = null; s.link = null; s.startedAt = null;
    let r;
    if (age < MIN_ADS_SECONDS * 1000) r = 'fast';
    else if (age > MAX_ADS_SECONDS * 1000) r = 'expired';
    else { s.ads += 1; r = s.ads >= required ? 'claim' : 'next'; }
    s.exp = Date.now() + SESSION_TTL * 1000;
    await this.ctx.storage.put('s', s);
    return { r, age };
  }

  // claimId giữ nguyên giữa các lần retry => dùng làm Idempotency-Key với issuer.
  async beginClaim(ip) {
    const s = await load(this.ctx);
    if (!s || s.ip !== ip) return { r: 'none' };
    if (s.key) return { r: 'done' };
    if (s.ads < (TIERS[s.tier] || 1)) return { r: 'notyet' };
    if (s.claimAt && Date.now() - s.claimAt < 30000) return { r: 'busy' };
    if (!s.claimId) s.claimId = crypto.randomUUID();
    s.claimAt = Date.now();
    await this.ctx.storage.put('s', s);
    return { r: 'ok', claimId: s.claimId };
  }

  async finishClaim(key, duration) {
    const s = await load(this.ctx);
    if (!s || s.key) return false;
    s.key = key; s.duration = duration; s.claimAt = null;
    s.exp = Date.now() + SESSION_TTL * 1000;
    await this.ctx.storage.put('s', s);
    return true;
  }

  async abortClaim() {
    const s = await load(this.ctx);
    if (!s) return;
    s.claimAt = null;
    await this.ctx.storage.put('s', s);
  }

  async alarm() {
    const s = await this.ctx.storage.get('s');
    if (s && Date.now() < s.exp + 60000) await this.ctx.storage.setAlarm(s.exp + 60000);
    else await this.ctx.storage.deleteAll();
  }
}
