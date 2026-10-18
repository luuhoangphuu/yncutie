// ============================================================================
// Key System Worker v3.0
// - Signed cookie sessions (no KV needed)
// - Real Turnstile integration
// - IP binding + rate limiting
// - Security headers + structured logging
// ============================================================================

const CSS = `*{margin:0;padding:0;box-sizing:border-box}body{font-family:Inter,system-ui,sans-serif;background:#0a0a12;color:#e8e8f0;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}.bg-glow{position:fixed;inset:0;pointer-events:none;background:radial-gradient(circle at 20% 10%,rgba(109,92,255,.18),transparent 40%),radial-gradient(circle at 80% 90%,rgba(168,85,247,.15),transparent 40%)}.container{position:relative;width:100%;max-width:520px}.card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:32px 28px;backdrop-filter:blur(20px)}.hero{text-align:center}.badge{display:inline-block;padding:6px 14px;border-radius:100px;font-size:12px;font-weight:600;background:rgba(109,92,255,.15);color:#a855f7;border:1px solid rgba(109,92,255,.3);margin-bottom:16px}h1{font-size:30px;font-weight:800;margin-bottom:10px}h2{font-size:22px;font-weight:700;margin-bottom:8px}.grad{background:linear-gradient(135deg,#6d5cff,#22d3ee);-webkit-background-clip:text;background-clip:text;color:transparent}.sub{color:#8a8aa0;font-size:15px;line-height:1.6;margin-bottom:22px}.features{display:flex;gap:10px;margin:20px 0;flex-wrap:wrap;justify-content:center}.feat{padding:10px 14px;border-radius:12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);font-size:13px}.btn{display:block;width:100%;padding:15px 20px;border-radius:14px;border:none;cursor:pointer;font-family:inherit;font-size:15px;font-weight:700;text-align:center;text-decoration:none;transition:all .2s;margin-bottom:12px}.btn-primary{background:linear-gradient(135deg,#6d5cff,#a855f7);color:#fff}.btn-primary:hover{transform:translateY(-2px)}.btn-youtube{background:#ff0033;color:#fff}.btn-ads{background:#f59e0b;color:#111}.btn-ghost{background:transparent;color:#8a8aa0;border:1px solid rgba(255,255,255,.08)}.warning{background:rgba(245,158,11,.1);border:1px solid rgba(245,158,11,.3);color:#fbbf24;padding:12px 14px;border-radius:12px;font-size:13px;margin-bottom:16px;line-height:1.5}.demo-tag{background:rgba(34,211,238,.1);border:1px dashed rgba(34,211,238,.4);color:#22d3ee;padding:10px;border-radius:10px;font-size:12px;text-align:center;margin-bottom:16px;font-weight:600}.stepper{display:flex;align-items:center;justify-content:space-between;margin-bottom:26px;padding:0 10px}.step{display:flex;flex-direction:column;align-items:center;gap:6px;opacity:.4}.step.active{opacity:1}.step .dot{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);border:2px solid rgba(255,255,255,.08);font-weight:700;font-size:13px}.step.active .dot{background:linear-gradient(135deg,#6d5cff,#a855f7);border-color:transparent;color:#fff}.step small{font-size:11px;color:#8a8aa0}.step.active small{color:#e8e8f0}.line{flex:1;height:2px;background:rgba(255,255,255,.08);margin:0 6px;margin-bottom:22px}.line.active{background:linear-gradient(90deg,#6d5cff,#a855f7)}.center{text-align:center}.success-icon{width:72px;height:72px;margin:10px auto 18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:900;background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff}.error-icon{width:72px;height:72px;margin:10px auto 18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:900;background:#ef4444;color:#fff}.key-box{display:flex;gap:8px;align-items:center;margin:20px 0 12px;padding:14px 16px;background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.08);border-radius:14px}.key-box span{flex:1;font-family:'JetBrains Mono',monospace;font-size:16px;font-weight:700;color:#22d3ee;word-break:break-all}.copy-btn{padding:10px 14px;border-radius:10px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.05);color:#e8e8f0;font-weight:600;cursor:pointer;font-size:13px;white-space:nowrap;transition:.2s}.copy-btn:hover{background:#6d5cff;border-color:transparent}.cf-turnstile{margin:16px 0}.timer-pill{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:100px;background:rgba(109,92,255,.1);border:1px solid rgba(109,92,255,.3);color:#a855f7;font-size:12px;font-weight:600;margin-bottom:16px}`;

const APP_JS = `(function(){document.addEventListener('click',function(e){var b=e.target.closest('[data-copy]');if(!b)return;var t=document.getElementById(b.dataset.copy);if(!t)return;var text=t.textContent;var orig=b.textContent;var done=function(){b.textContent='\\u2713 \\u0110\\u00e3 copy';setTimeout(function(){b.textContent=orig},2000)};var fallback=function(){var ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();try{document.execCommand('copy')}catch(x){}ta.remove();done()};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(done).catch(fallback)}else fallback()});var auto=document.querySelector('[data-copy][data-auto]');if(auto&&navigator.clipboard&&navigator.clipboard.writeText){setTimeout(function(){var t=document.getElementById(auto.dataset.copy);if(t)navigator.clipboard.writeText(t.textContent).catch(function(){})},400)}})();`;

// ============ SECURITY HEADERS ============
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), payment=()',
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' https://challenges.cloudflare.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "frame-src https://challenges.cloudflare.com",
    "connect-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'"
  ].join('; ')
};

// ============ RESPONSE HELPERS ============
function withHeaders(res, extra = {}) {
  const headers = new Headers(res.headers);
  for (const [k, v] of Object.entries(SECURITY_HEADERS)) headers.set(k, v);
  for (const [k, v] of Object.entries(extra)) headers.set(k, v);
  return new Response(res.body, { status: res.status, headers });
}
const html = (s, st = 200) => withHeaders(new Response(s, { status: st, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } }));
const json = (o, st = 200) => withHeaders(new Response(JSON.stringify(o), { status: st, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } }));
const redirect = (loc, cookie) => {
  const h = { 'Location': loc };
  if (cookie) h['Set-Cookie'] = cookie;
  return withHeaders(new Response('', { status: 302, headers: h }));
};

function log(level, msg, extra = {}) {
  try {
    console.log(JSON.stringify({ ts: new Date().toISOString(), level, msg, ...extra }));
  } catch { console.log(level, msg); }
}

// ============ LAYOUT ============
function layout(title, content, env) {
  return `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet"><script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script><link rel="stylesheet" href="/style.css"></head><body><div class="bg-glow"></div><div class="container">${content}</div><script src="/app.js" defer></script></body></html>`;
}
const stepper = (n) => `<div class="stepper"><div class="step ${n >= 1 ? 'active' : ''}"><div class="dot">1</div><small>Theo dõi</small></div><div class="line ${n >= 2 ? 'active' : ''}"></div><div class="step ${n >= 2 ? 'active' : ''}"><div class="dot">2</div><small>Xem Ads</small></div><div class="line ${n >= 3 ? 'active' : ''}"></div><div class="step ${n >= 3 ? 'active' : ''}"><div class="dot">3</div><small>Nhận Key</small></div></div>`;

// ============ SESSION (signed cookie, no KV needed) ============
async function hmac(data, secret, action) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [action]);
  if (action === 'sign') {
    const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
    return btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  return key;
}

async function encodeSession(data, secret) {
  const payload = btoa(JSON.stringify(data)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const sig = await hmac(payload, secret, 'sign');
  return payload + '.' + sig;
}

async function decodeSession(token, secret) {
  if (!token || typeof token !== 'string' || token.length > 4096) return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  try {
    const enc = new TextEncoder();
    const key = await hmac('', secret, 'import');
    const sigBytes = Uint8Array.from(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
    const ok = await crypto.subtle.verify('HMAC', key, sigBytes, enc.encode(parts[0]));
    if (!ok) return null;
    const data = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/')));
    if (Date.now() > data.expiresAt) return null;
    return data;
  } catch { return null; }
}

function getCookie(request, name) {
  const c = request.headers.get('cookie') || '';
  const m = c.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)'));
  return m ? m[1] : null;
}

function setCookie(name, value, maxAge, secure) {
  return `${name}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure ? '; Secure' : ''}`;
}

function isSecure(request) {
  return new URL(request.url).protocol === 'https:';
}

async function getSession(request, env) {
  const token = getCookie(request, 'sess');
  if (!token) return null;
  return await decodeSession(token, env.SESSION_SECRET);
}

async function saveSession(request, env, data) {
  data.expiresAt = Date.now() + parseInt(env.SESSION_TTL_MS || '900000', 10);
  const token = await encodeSession(data, env.SESSION_SECRET);
  const maxAge = Math.floor((data.expiresAt - Date.now()) / 1000);
  return setCookie('sess', token, maxAge, isSecure(request));
}

// ============ RATE LIMIT (in-memory; resets on Worker restart) ============
const rl = new Map();
function checkRateLimit(key, limit, win = 3600_000) {
  const now = Date.now();
  if (rl.size > 5000) for (const [k, v] of rl) if (now > v.resetAt) rl.delete(k);
  const e = rl.get(key);
  if (!e || now > e.resetAt) { rl.set(key, { count: 1, resetAt: now + win }); return { ok: true }; }
  if (e.count >= limit) return { ok: false, resetAt: e.resetAt };
  e.count++;
  return { ok: true };
}

// ============ TURNSTILE ============
async function verifyTurnstile(token, ip, env) {
  if (!token || typeof token !== 'string' || token.length > 2048) return { ok: false, code: 'MISSING' };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);
  try {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token, remoteip: ip }),
      signal: controller.signal
    });
    clearTimeout(timer);
    if (!r.ok) return { ok: false, code: 'CF_ERROR' };
    const d = await r.json();
    if (d.success === true) return { ok: true };
    const codes = d['error-codes'] || [];
    if (codes.includes('timeout-or-duplicate')) return { ok: false, code: 'EXPIRED' };
    if (codes.includes('invalid-input-response')) return { ok: false, code: 'INVALID' };
    if (codes.some(c => String(c).includes('input-secret'))) { log('error', 'turnstile config error', { codes }); return { ok: false, code: 'CONFIG' }; }
    if (codes.includes('internal-error') || codes.includes('bad-request')) return { ok: false, code: 'CF_ERROR' };
    return { ok: false, code: 'INVALID' };
  } catch (e) {
    clearTimeout(timer);
    log('error', 'turnstile network', { err: e.name === 'AbortError' ? 'timeout' : e.message });
    return { ok: false, code: 'NETWORK' };
  }
}

function turnstileMsg(code) {
  const m = {
    MISSING: 'Vui lòng xác nhận captcha trước khi tiếp tục.',
    EXPIRED: 'Captcha đã hết hạn. Vui lòng thử lại.',
    INVALID: 'Captcha không hợp lệ. Vui lòng thử lại.',
    CF_ERROR: 'Dịch vụ captcha tạm thời gặp sự cố. Vui lòng thử lại sau.',
    CONFIG: 'Hệ thống captcha đang bảo trì. Vui lòng quay lại sau.',
    NETWORK: 'Không thể xác thực captcha. Kiểm tra kết nối và thử lại.'
  };
  return m[code] || m.INVALID;
}

// ============ KEY ISSUER (gọi dpi-config của bạn) ============
async function fetchKeyFromIssuer(env) {
  if (!env.KEY_ISSUER_URL || !env.KEY_ISSUER_API_KEY) {
    log('error', 'issuer not configured');
    return { ok: false, code: 'CONFIG' };
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(env.KEY_ISSUER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': env.KEY_ISSUER_API_KEY,
        'User-Agent': 'KeySystem-Worker/3.0'
      },
      body: JSON.stringify({ tier: env.KEY_TIER || 'Normal' }),
      signal: controller.signal
    });
    clearTimeout(timer);
    if (res.status === 401 || res.status === 403) { log('error', 'issuer auth failed'); return { ok: false, code: 'AUTH' }; }
    if (!res.ok) { log('error', 'issuer upstream', { status: res.status }); return { ok: false, code: 'UPSTREAM' }; }
    const data = await res.json().catch(() => null);
    if (!data || data.success !== true || typeof data.key !== 'string' || data.key.length === 0) {
      log('error', 'issuer invalid response');
      return { ok: false, code: 'SHAPE' };
    }
    if (!/^[A-Za-z0-9_-]{4,64}$/.test(data.key)) { log('error', 'issuer bad key format'); return { ok: false, code: 'FORMAT' }; }
    return { ok: true, key: data.key };
  } catch (e) {
    clearTimeout(timer);
    log('error', 'issuer network', { err: e.name === 'AbortError' ? 'timeout' : e.message });
    return { ok: false, code: 'NETWORK' };
  }
}

// ============ HANDLERS ============
function home(env) {
  return html(layout('Nhận Key Miễn Phí', `
    <div class="card hero">
      <div class="badge">🎁 Miễn phí 100%</div>
      <h1>Nhận Key <span class="grad">Tự Động</span></h1>
      <p class="sub">Hoàn thành 2 bước đơn giản để nhận key. Không cần đăng ký, không cần mật khẩu.</p>
      <div class="features"><div class="feat">⚡ <b>Tự động 24/7</b></div><div class="feat">🔒 <b>Bảo mật</b></div><div class="feat">⏱️ <b>Nhận trong 30s</b></div></div>
      <form method="POST" action="/start">
        <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark"></div>
        <button type="submit" class="btn btn-primary">🚀 Bắt đầu nhận Key</button>
      </form>
    </div>`, env));
}

async function start(request, env) {
  const ip = request.headers.get('cf-connecting-ip') || 'local';
  const limit = checkRateLimit('start:' + ip, parseInt(env.RATE_START_PER_HOUR || '5', 10));
  if (!limit.ok) {
    log('warn', 'rate limit start', { ip });
    return html(layout('Quá nhiều yêu cầu', `<div class="card center"><div class="error-icon">!</div><h2>Quá nhiều yêu cầu</h2><p class="sub">Thử lại sau ${Math.ceil((limit.resetAt - Date.now()) / 60000)} phút.</p><a href="/" class="btn btn-primary">← Về trang chủ</a></div>`, env), 429);
  }
  const form = await request.formData().catch(() => null);
  if (!form) return html(layout('Lỗi', `<div class="card center"><div class="error-icon">!</div><h2>Dữ liệu không hợp lệ</h2><a href="/" class="btn btn-primary">← Thử lại</a></div>`, env), 400);
  const token = form.get('cf-turnstile-response');
  const result = await verifyTurnstile(typeof token === 'string' ? token : '', ip, env);
  if (!result.ok) return html(layout('Lỗi captcha', `<div class="card center"><div class="error-icon">!</div><h2>Không thể xác thực</h2><p class="sub">${turnstileMsg(result.code)}</p><a href="/" class="btn btn-primary">← Thử lại</a></div>`, env), 400);

  const session = { sid: crypto.randomUUID(), ip, createdAt: Date.now(), subVerified: false, adsVerified: false, keyIssued: null };
  const cookie = await saveSession(request, env, session);
  log('info', 'session created', { ip, sid: session.sid.slice(0, 8) });
  return redirect('/step1', cookie);
}

async function step1(request, env) {
  const s = await getSession(request, env);
  if (!s) return redirect('/expired');
  if (s.subVerified) return redirect('/step2');
  return html(layout('Bước 1', `
    <div class="card">
      ${stepper(1)}
      <h2>Bước 1: Theo dõi kênh</h2>
      <p class="sub">Theo dõi kênh YouTube để tiếp tục. Chúng tôi <b>không yêu cầu mật khẩu</b>.</p>
      <div class="warning">⚠️ Vui lòng tắt VPN để tránh bị đánh dấu gian lận.</div>
      <a href="https://www.youtube.com/@your_channel" target="_blank" rel="noopener" class="btn btn-youtube">▶ Theo dõi kênh ngay</a>
      <form method="POST" action="/verify/sub">
        <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark"></div>
        <button type="submit" class="btn btn-primary">✅ Tôi đã theo dõi — Xác thực</button>
      </form>
    </div>`, env));
}

async function verifySub(request, env) {
  const s = await getSession(request, env);
  if (!s) return redirect('/expired');
  const ip = request.headers.get('cf-connecting-ip') || 'local';
  if (s.ip !== ip) {
    log('warn', 'IP mismatch on sub', { sessionIp: s.ip, requestIp: ip });
    return html(layout('Cảnh báo', `<div class="card center"><div class="error-icon">!</div><h2>Phát hiện thay đổi IP</h2><p class="sub">Bạn có đang bật VPN không? Vui lòng tắt VPN và bắt đầu lại.</p><a href="/" class="btn btn-primary">← Bắt đầu lại</a></div>`, env), 403);
  }
  const form = await request.formData().catch(() => null);
  if (!form) return redirect('/step1');
  const token = form.get('cf-turnstile-response');
  const result = await verifyTurnstile(typeof token === 'string' ? token : '', ip, env);
  if (!result.ok) return html(layout('Lỗi captcha', `<div class="card center"><div class="error-icon">!</div><h2>Không thể xác thực</h2><p class="sub">${turnstileMsg(result.code)}</p><a href="/step1" class="btn btn-primary">← Thử lại</a></div>`, env), 400);

  s.subVerified = true;
  const cookie = await saveSession(request, env, s);
  log('info', 'sub verified', { sid: s.sid.slice(0, 8) });
  return redirect('/step2', cookie);
}

async function step2(request, env) {
  const s = await getSession(request, env);
  if (!s) return redirect('/expired');
  if (!s.subVerified) return redirect('/step1');
  if (s.keyIssued) return redirect('/success');
  return html(layout('Bước 2', `
    <div class="card">
      ${stepper(2)}
      <h2>Bước 2: Vượt Ads</h2>
      <p class="sub">Hoàn thành 1 ads ngắn, sau đó quay lại xác nhận để nhận key.</p>
      <div class="warning">⚠️ Không tắt tab trong khi xem ads.</div>
      <a href="https://link4m.com/your_link" target="_blank" rel="noopener" class="btn btn-ads">📺 Mở Ads (Link4M)</a>
      <form method="POST" action="/verify/ads">
        <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark"></div>
        <button type="submit" class="btn btn-primary">✅ Tôi đã xem xong — Nhận Key</button>
      </form>
    </div>`, env));
}

async function verifyAds(request, env) {
  const s = await getSession(request, env);
  if (!s) return redirect('/expired');
  if (!s.subVerified) return redirect('/step1');
  if (s.keyIssued) return redirect('/success');

  const ip = request.headers.get('cf-connecting-ip') || 'local';
  if (s.ip !== ip) {
    log('warn', 'IP mismatch on ads', { sessionIp: s.ip, requestIp: ip });
    return html(layout('Cảnh báo', `<div class="card center"><div class="error-icon">!</div><h2>Phát hiện thay đổi IP</h2><p class="sub">Bạn có đang bật VPN không? Vui lòng tắt VPN và bắt đầu lại.</p><a href="/" class="btn btn-primary">← Bắt đầu lại</a></div>`, env), 403);
  }

  const limit = checkRateLimit('key:' + ip, parseInt(env.RATE_KEY_PER_HOUR || '3', 10));
  if (!limit.ok) {
    log('warn', 'rate limit key', { ip });
    return html(layout('Giới hạn', `<div class="card center"><div class="error-icon">!</div><h2>Đã đạt giới hạn</h2><p class="sub">Bạn đã nhận tối đa key trong giờ này. Thử lại sau ${Math.ceil((limit.resetAt - Date.now()) / 60000)} phút.</p></div>`, env), 429);
  }

  const form = await request.formData().catch(() => null);
  if (!form) return redirect('/step2');
  const token = form.get('cf-turnstile-response');
  const result = await verifyTurnstile(typeof token === 'string' ? token : '', ip, env);
  if (!result.ok) return html(layout('Lỗi captcha', `<div class="card center"><div class="error-icon">!</div><h2>Không thể xác thực</h2><p class="sub">${turnstileMsg(result.code)}</p><a href="/step2" class="btn btn-primary">← Thử lại</a></div>`, env), 400);

  const issued = await fetchKeyFromIssuer(env);
  if (!issued.ok) {
    log('error', 'issuer failed', { code: issued.code, sid: s.sid.slice(0, 8) });
    return html(layout('Lỗi', `<div class="card center"><div class="error-icon">!</div><h2>Tạm thời không thể cấp key</h2><p class="sub">Vui lòng thử lại sau ít phút.</p><a href="/step2" class="btn btn-primary">← Thử lại</a></div>`, env), 502);
  }

  s.adsVerified = true;
  s.keyIssued = issued.key;
  s.completedAt = Date.now();
  const cookie = await saveSession(request, env, s);
  log('info', 'key issued', { sid: s.sid.slice(0, 8) });
  return redirect('/success', cookie);
}

async function success(request, env) {
  const s = await getSession(request, env);
  if (!s || !s.keyIssued) return redirect('/expired');
  return html(layout('Nhận Key thành công', `
    <div class="card center">
      ${stepper(3)}
      <div class="success-icon">✓</div>
      <h2>Nhận Key thành công!</h2>
      <p class="sub">Key đã sẵn sàng. Đang tự động copy vào clipboard.</p>
      <div class="key-box"><span id="keyText">${s.keyIssued}</span><button class="copy-btn" data-copy="keyText" data-auto="1">📋 Copy</button></div>
      <a href="/reset" class="btn btn-ghost">🔄 Nhận key khác</a>
    </div>`, env));
}

async function reset(request, env) {
  log('info', 'session reset');
  return redirect('/', setCookie('sess', '', 0, isSecure(request)));
}

function expiredPage(env) {
  return html(layout('Phiên hết hạn', `
    <div class="card center">
      <div class="error-icon">⏱</div>
      <h2>Phiên đã hết hạn</h2>
      <p class="sub">Vì lý do bảo mật, phiên của bạn đã hết hạn sau 15 phút không hoạt động. Vui lòng bắt đầu lại.</p>
      <a href="/" class="btn btn-primary">← Bắt đầu lại</a>
    </div>`, env));
}

async function health(env) {
  const checks = {
    turnstileSite: !!env.TURNSTILE_SITE_KEY,
    turnstileSecret: !!env.TURNSTILE_SECRET_KEY,
    issuerUrl: !!env.KEY_ISSUER_URL,
    issuerKey: !!env.KEY_ISSUER_API_KEY,
    sessionSecret: !!env.SESSION_SECRET
  };
  const allOk = Object.values(checks).every(Boolean);
  return json({ ok: allOk, ts: Date.now(), checks }, allOk ? 200 : 503);
}

// ============ ROUTER ============
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const p = url.pathname;
    const m = request.method;
    try {
      // Static
      if (p === '/style.css') return withHeaders(new Response(CSS, { headers: { 'Content-Type': 'text/css; charset=utf-8', 'Cache-Control': 'public, max-age=86400' } }));
      if (p === '/app.js') return withHeaders(new Response(APP_JS, { headers: { 'Content-Type': 'application/javascript; charset=utf-8', 'Cache-Control': 'public, max-age=86400' } }));
      if (p === '/robots.txt') return new Response('User-agent: *\nDisallow: /step1\nDisallow: /step2\nDisallow: /verify/\nDisallow: /success\nDisallow: /reset\nDisallow: /api/\n', { headers: { 'Content-Type': 'text/plain' } });
      if (p === '/api/health') return health(env);

      // Routes
      if (p === '/' && m === 'GET') return home(env);
      if (p === '/start' && m === 'POST') return start(request, env);
      if (p === '/step1' && m === 'GET') return step1(request, env);
      if (p === '/verify/sub' && m === 'POST') return verifySub(request, env);
      if (p === '/step2' && m === 'GET') return step2(request, env);
      if (p === '/verify/ads' && m === 'POST') return verifyAds(request, env);
      if (p === '/success' && m === 'GET') return success(request, env);
      if (p === '/reset' && m === 'GET') return reset(request, env);
      if (p === '/expired' && m === 'GET') return expiredPage(env);

      return html(layout('Không tìm thấy', `<div class="card center"><div class="error-icon">404</div><h2>Không tìm thấy trang</h2><a href="/" class="btn btn-primary">← Về trang chủ</a></div>`, env), 404);
    } catch (e) {
      log('error', 'unhandled', { msg: e.message, path: p });
      return html(layout('Lỗi', `<div class="card center"><div class="error-icon">!</div><h2>Đã xảy ra lỗi</h2><a href="/" class="btn btn-primary">← Về trang chủ</a></div>`, env), 500);
    }
  }
};
