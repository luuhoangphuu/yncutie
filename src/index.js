// ============================================================================
// Key System Worker v5.0 - Light Mode 2026 + YouTube Link + Link4M API
// ============================================================================

const CSS = `
:root {
  --bg-color: #f8fafc; --text-main: #0f172a; --text-muted: #64748b;
  --primary: #4f46e5; --primary-light: #818cf8; --accent: #ec4899;
  --glass-bg: rgba(255, 255, 255, 0.7); --glass-border: rgba(255, 255, 255, 0.9);
  --glass-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.1);
}
*{margin:0;padding:0;box-sizing:border-box}
body {
  font-family: 'Inter', system-ui, sans-serif; background: var(--bg-color); color: var(--text-main);
  min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px;
  overflow: hidden; position: relative;
}
/* Animated Background Blobs */
.blob { position: absolute; border-radius: 50%; filter: blur(100px); z-index: -1; opacity: 0.5; animation: float 12s infinite ease-in-out alternate; }
.blob-1 { width: 450px; height: 450px; background: #c7d2fe; top: -10%; left: -10%; }
.blob-2 { width: 400px; height: 400px; background: #fbcfe8; bottom: -10%; right: -5%; animation-delay: -4s; }
.blob-3 { width: 350px; height: 350px; background: #bfdbfe; top: 30%; left: 30%; animation-delay: -8s; }
@keyframes float { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(50px, -50px) scale(1.1); } }

.container { position: relative; z-index: 10; width: 100%; max-width: 520px; perspective: 1000px; }
.card {
  background: var(--glass-bg); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--glass-border); border-radius: 32px; padding: 40px 32px;
  box-shadow: var(--glass-shadow); transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.card:hover { transform: translateY(-5px); }
.hero{text-align:center}
.badge {
  display: inline-block; padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 700;
  background: rgba(79, 70, 229, 0.1); color: var(--primary); margin-bottom: 24px; border: 1px solid rgba(79, 70, 229, 0.2);
}
h1 { font-size: 34px; font-weight: 800; line-height: 1.1; margin-bottom: 12px; letter-spacing: -0.03em; }
h2 { font-size: 24px; font-weight: 700; margin-bottom: 12px; }
.grad { background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.sub { color: var(--text-muted); font-size: 15px; line-height: 1.6; margin-bottom: 28px; font-weight: 500; }

.btn {
  display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%;
  padding: 16px 24px; border-radius: 16px; border: none; cursor: pointer; font-family: inherit;
  font-size: 16px; font-weight: 700; text-align: center; text-decoration: none; transition: all 0.2s;
  margin-bottom: 14px;
}
.btn-primary { background: var(--primary); color: #fff; box-shadow: 0 8px 24px -6px rgba(79, 70, 229, 0.6); }
.btn-primary:hover { background: #4338ca; transform: translateY(-2px); box-shadow: 0 12px 28px -6px rgba(79, 70, 229, 0.7); }
.btn-primary:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }
.btn-youtube { background: #ff0033; color: #fff; box-shadow: 0 8px 24px -6px rgba(255, 0, 51, 0.4); }
.btn-youtube:hover { background: #e6002e; transform: translateY(-2px); box-shadow: 0 12px 28px -6px rgba(255, 0, 51, 0.5); }
.btn-ads { background: linear-gradient(135deg, #f59e0b, #f97316); color: #fff; box-shadow: 0 8px 24px -6px rgba(245, 158, 11, 0.5); }
.btn-ads:hover { transform: translateY(-2px); box-shadow: 0 12px 28px -6px rgba(245, 158, 11, 0.6); }
.btn-ghost { background: #fff; color: var(--text-main); border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
.btn-ghost:hover { background: #f8fafc; border-color: #cbd5e1; }

.warning { background: #fffbeb; border: 1px solid #fde68a; color: #b45309; padding: 14px 16px; border-radius: 16px; font-size: 13px; margin-bottom: 20px; line-height: 1.5; font-weight: 500; display: flex; align-items: flex-start; gap: 8px; }

/* Stepper */
.stepper { display: flex; align-items: center; justify-content: space-between; margin-bottom: 36px; padding: 0 10px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 8px; opacity: 0.4; transition: 0.3s; }
.step.active { opacity: 1; }
.step .dot { width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #fff; border: 2px solid #e2e8f0; font-weight: 700; font-size: 14px; color: var(--text-muted); transition: 0.3s; }
.step.active .dot { background: var(--primary); border-color: var(--primary); color: #fff; box-shadow: 0 0 0 6px rgba(79, 70, 229, 0.15); }
.step small { font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; }
.step.active small { color: var(--text-main); }
.line { flex: 1; height: 4px; background: #e2e8f0; margin: 0 12px; margin-bottom: 26px; border-radius: 4px; transition: 0.3s; }
.line.active { background: var(--primary); }

.center{text-align:center}
.success-icon { width: 88px; height: 88px; margin: 10px auto 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 44px; font-weight: 900; background: linear-gradient(135deg, #10b981, #059669); color: #fff; box-shadow: 0 12px 32px -8px rgba(16, 185, 129, 0.6); animation: pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
@keyframes pop { 0% { transform: scale(0); } 100% { transform: scale(1); } }

.key-box { display: flex; gap: 12px; align-items: center; margin: 24px 0 20px; padding: 16px 20px; background: #ffffff; border: 2px dashed #cbd5e1; border-radius: 20px; transition: 0.3s; }
.key-box:hover { border-color: var(--primary); }
.key-box span { flex: 1; font-family: 'JetBrains Mono', monospace; font-size: 20px; font-weight: 800; color: var(--primary); word-break: break-all; letter-spacing: 1.5px; }
.copy-btn { padding: 14px 20px; border-radius: 14px; border: none; background: var(--primary); color: #fff; font-weight: 700; cursor: pointer; font-size: 14px; transition: 0.2s; white-space: nowrap; display: flex; align-items: center; gap: 6px; }
.copy-btn:hover { background: #4338ca; transform: translateY(-2px); }

@media (max-width: 480px) { .card { padding: 32px 24px; border-radius: 28px; } h1 { font-size: 28px; } .btn { padding: 14px 20px; font-size: 15px; } .key-box { flex-direction: column; } .copy-btn { width: 100%; justify-content: center; } }
`;

const JS = `
(function(){
  // Confetti effect for success page
  if(document.querySelector('.success-icon')) {
    for (let i = 0; i < 50; i++) {
      let el = document.createElement('div');
      el.style.cssText = 'position:fixed;top:-10px;left:'+Math.random()*100+'vw;width:8px;height:8px;background:'+['#4f46e5','#ec4899','#f59e0b','#10b981'][Math.floor(Math.random()*4)]+';border-radius:'+(Math.random()>0.5?'50%':'2px')+';z-index:999;pointer-events:none;opacity:0.8;';
      document.body.appendChild(el);
      let anim = el.animate([
        { transform: 'translateY(0) rotate(0)', opacity: 1 },
        { transform: 'translateY(100vh) rotate('+Math.random()*720+'deg)', opacity: 0 }
      ], { duration: 2000 + Math.random()*2000, easing: 'cubic-bezier(.37,0,.63,1)' });
      anim.onfinish = () => el.remove();
    }
  }

  // Copy logic
  document.addEventListener('click', function(e){
    var b = e.target.closest('[data-copy]');
    if(!b) return;
    var t = document.getElementById(b.dataset.copy);
    if(!t) return;
    var text = t.textContent;
    var orig = b.innerHTML;
    var done = function(){
      b.innerHTML = '✓ Đã copy';
      setTimeout(function(){ b.innerHTML = orig; }, 2000);
    };
    var fallback = function(){
      var ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      try{document.execCommand('copy')}catch(x){}
      ta.remove(); done();
    };
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(done).catch(fallback);
    } else { fallback(); }
  });
  
  var auto = document.querySelector('[data-copy][data-auto]');
  if(auto && navigator.clipboard && navigator.clipboard.writeText){
    setTimeout(function(){
      var t = document.getElementById(auto.dataset.copy);
      if(t) navigator.clipboard.writeText(t.textContent).catch(function(){});
    }, 500);
  }
})();
`;

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; frame-src https://challenges.cloudflare.com; connect-src 'self';"
};

function withHeaders(res) {
  const headers = new Headers(res.headers);
  for (const [k, v] of Object.entries(SECURITY_HEADERS)) headers.set(k, v);
  return new Response(res.body, { status: res.status, headers });
}
const html = (s, st = 200) => withHeaders(new Response(s, { status: st, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } }));
const redirect = (loc, cookie) => {
  const h = { 'Location': loc };
  if (cookie) h['Set-Cookie'] = cookie;
  return withHeaders(new Response('', { status: 302, headers: h }));
};

function log(level, msg, extra = {}) { console.log(JSON.stringify({ ts: new Date().toISOString(), level, msg, ...extra })); }

function layout(title, content) {
  return \`<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>\${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
  <link rel="stylesheet" href="/style.css"></head>
  <body>
    <div class="blob blob-1"></div><div class="blob blob-2"></div><div class="blob blob-3"></div>
    <div class="container">\${content}</div>
    <script src="/app.js" defer></script>
  </body></html>\`;
}

const stepper = (n) => \`<div class="stepper">
  <div class="step \${n >= 1 ? 'active' : ''}"><div class="dot">1</div><small>Ủng hộ</small></div>
  <div class="line \${n >= 2 ? 'active' : ''}"></div>
  <div class="step \${n >= 2 ? 'active' : ''}"><div class="dot">2</div><small>Vượt Ads</small></div>
  <div class="line \${n >= 3 ? 'active' : ''}"></div>
  <div class="step \${n >= 3 ? 'active' : ''}"><div class="dot">3</div><small>Nhận Key</small></div>
</div>\`;

// ============ SESSION ============
async function hmac(data, secret, action) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [action]);
  if (action === 'sign') {
    const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
    return btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=+$/, '');
  }
  return key;
}
async function encodeSession(data, secret) {
  const payload = btoa(JSON.stringify(data)).replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=+$/, '');
  return payload + '.' + await hmac(payload, secret, 'sign');
}
async function decodeSession(token, secret) {
  if (!token || token.length > 4096) return null;
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
  const m = c.match(new RegExp('(?:^|;\\\\s*)' + name + '=([^;]+)'));
  return m ? m[1] : null;
}
function setCookie(name, value, maxAge) {
  return \`\${name}=\${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=\${maxAge}; Secure\`;
}
async function getSession(request, env) { return await decodeSession(getCookie(request, 'sess'), env.SESSION_SECRET); }
async function saveSession(request, env, data) {
  data.expiresAt = Date.now() + parseInt(env.SESSION_TTL_MS || '900000', 10);
  const token = await encodeSession(data, env.SESSION_SECRET);
  return setCookie('sess', token, Math.floor((data.expiresAt - Date.now()) / 1000));
}

// ============ RATE LIMIT ============
const rl = new Map();
function checkRateLimit(key, limit) {
  const now = Date.now();
  if (rl.size > 5000) for (const [k, v] of rl) if (now > v.resetAt) rl.delete(k);
  const e = rl.get(key);
  if (!e || now > e.resetAt) { rl.set(key, { count: 1, resetAt: now + 3600000 }); return { ok: true }; }
  if (e.count >= limit) return { ok: false, resetAt: e.resetAt };
  e.count++; return { ok: true };
}

// ============ TURNSTILE ============
async function verifyTurnstile(token, ip, env) {
  if (!token) return false;
  try {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token, remoteip: ip })
    });
    const d = await r.json(); return d.success === true;
  } catch { return false; }
}

// ============ LINK4M SHORTENER ============
async function shortenUrl(longUrl, env) {
  if (!env.LINK4M_API_TOKEN) return longUrl;
  try {
    const api = \`https://link4m.co/api-shorten/v2?api=\${env.LINK4M_API_TOKEN}&url=\${encodeURIComponent(longUrl)}\`;
    const res = await fetch(api);
    const data = await res.json();
    if (data.status === 'success') return data.shortenedUrl;
    log('error', 'link4m failed', { msg: data.message });
    return longUrl;
  } catch (e) {
    log('error', 'link4m network error');
    return longUrl;
  }
}

// ============ KEY ISSUER ============
async function fetchKeyFromIssuer(env) {
  try {
    const res = await fetch(env.KEY_ISSUER_URL, {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'X-API-Key': env.KEY_ISSUER_API_KEY, 'User-Agent': 'KeySystem-Worker/5.0' },
      body: JSON.stringify({ tier: env.KEY_TIER || 'Normal' })
    });
    const data = await res.json().catch(() => null);
    if (data && data.success === true && data.key) return { ok: true, key: data.key };
    return { ok: false };
  } catch { return { ok: false }; }
}

// ============ HANDLERS ============
function home(env) {
  return html(layout('Nhận Key Miễn Phí', \`
    <div class="card hero">
      <div class="badge">✨ Hệ thống tự động 2026</div>
      <h1>Nhận Key <span class="grad">Tự Động</span></h1>
      <p class="sub">Hoàn thành 2 bước siêu tốc để nhận key bản quyền. Không cần đăng ký, không cần mật khẩu.</p>
      <form method="POST" action="/start">
        <div class="cf-turnstile" data-sitekey="\${env.TURNSTILE_SITE_KEY}" data-theme="light"></div>
        <button type="submit" class="btn btn-primary" style="margin-top:20px;">🚀 Bắt đầu nhận Key</button>
      </form>
      <p style="font-size:12px; color:#94a3b8; margin-top:15px; font-weight:500;">Bảo mật bởi Cloudflare Turnstile</p>
    </div>\`));
}

async function start(request, env) {
  const ip = request.headers.get('cf-connecting-ip') || 'local';
  if (!checkRateLimit('start:' + ip, 10).ok) return html(layout('Lỗi', \`<div class="card center"><h2>Quá nhiều yêu cầu</h2><p class="sub">Vui lòng thử lại sau 1 giờ.</p></div>\`), 429);
  const form = await request.formData();
  if (!(await verifyTurnstile(form.get('cf-turnstile-response'), ip, env))) return html(layout('Lỗi', \`<div class="card center"><h2>Captcha không hợp lệ</h2><a href="/" class="btn btn-primary">Thử lại</a></div>\`), 400);

  const session = { sid: crypto.randomUUID(), ip, createdAt: Date.now(), subVerified: false, adsVerified: false, keyIssued: null };
  return redirect('/step1', await saveSession(request, env, session));
}

async function step1(request, env) {
  const s = await getSession(request, env);
  if (!s) return redirect('/');
  if (s.subVerified) return redirect('/step2');
  return html(layout('Bước 1: Ủng hộ', \`
    <div class="card">
      \${stepper(1)}
      <h2>Ủng hộ Kênh YouTube</h2>
      <p class="sub">Vui lòng bấm nút bên dưới để theo dõi kênh YouTube của chúng tôi. Điều này giúp duy trì hệ thống miễn phí.</p>
      <div class="warning">⚠️ Vui lòng tắt VPN (nếu có) để tránh bị đánh dấu gian lận.</div>
      <a href="\${env.YOUTUBE_CHANNEL_URL}" target="_blank" rel="noopener" class="btn btn-youtube">▶ Theo dõi Kênh YouTube</a>
      <form method="POST" action="/verify/sub">
        <div class="cf-turnstile" data-sitekey="\${env.TURNSTILE_SITE_KEY}" data-theme="light"></div>
        <button type="submit" class="btn btn-primary" style="margin-top:20px;">✅ Tôi đã theo dõi</button>
      </form>
    </div>\`));
}

async function verifySub(request, env) {
  const s = await getSession(request, env);
  if (!s || s.ip !== (request.headers.get('cf-connecting-ip') || 'local')) return redirect('/');
  const form = await request.formData();
  if (!(await verifyTurnstile(form.get('cf-turnstile-response'), s.ip, env))) return html(layout('Lỗi', \`<div class="card center"><h2>Captcha không hợp lệ</h2><a href="/step1" class="btn btn-primary">Thử lại</a></div>\`), 400);
  s.subVerified = true; return redirect('/step2', await saveSession(request, env, s));
}

async function step2(request, env) {
  const s = await getSession(request, env);
  if (!s || !s.subVerified) return redirect('/');
  if (s.keyIssued) return redirect('/success');

  // Tạo link Link4M động (trỏ về chính domain này sau khi xem xong)
  const targetUrl = new URL('/step2', request.url).toString();
  const adsUrl = await shortenUrl(targetUrl, env);

  return html(layout('Bước 2: Vượt Ads', \`
    <div class="card">
      \${stepper(2)}
      <h2>Vượt qua Quảng cáo</h2>
      <p class="sub">Nhấn nút bên dưới, hoàn thành 1 quảng cáo ngắn, sau đó quay lại đây xác nhận để nhận key.</p>
      <a href="\${adsUrl}" target="_blank" rel="noopener" class="btn btn-ads">📺 Mở Link Quảng Cáo</a>
      <div class="warning" style="margin-top: 15px;">⚠️ Không tắt tab khi đang xem quảng cáo, tiến trình sẽ bị hủy.</div>
      <form method="POST" action="/verify/ads">
        <div class="cf-turnstile" data-sitekey="\${env.TURNSTILE_SITE_KEY}" data-theme="light"></div>
        <button type="submit" class="btn btn-primary" style="margin-top:20px;">🎁 Nhận Key Ngay</button>
      </form>
    </div>\`));
}

async function verifyAds(request, env) {
  const s = await getSession(request, env);
  if (!s || !s.subVerified) return redirect('/');
  if (!checkRateLimit('key:' + s.ip, 5).ok) return html(layout('Lỗi', \`<div class="card center"><h2>Đã đạt giới hạn</h2><p class="sub">Bạn đã nhận tối đa key trong 1 giờ.</p></div>\`), 429);

  const form = await request.formData();
  if (!(await verifyTurnstile(form.get('cf-turnstile-response'), s.ip, env))) return html(layout('Lỗi', \`<div class="card center"><h2>Captcha không hợp lệ</h2><a href="/step2" class="btn btn-primary">Thử lại</a></div>\`), 400);

  const issued = await fetchKeyFromIssuer(env);
  if (!issued.ok) return html(layout('Lỗi', \`<div class="card center"><h2>Hệ thống đang bận</h2><p class="sub">Không thể lấy key lúc này, vui lòng thử lại sau.</p><a href="/step2" class="btn btn-primary">Thử lại</a></div>\`), 502);

  s.adsVerified = true; s.keyIssued = issued.key;
  return redirect('/success', await saveSession(request, env, s));
}

async function success(request, env) {
  const s = await getSession(request, env);
  if (!s || !s.keyIssued) return redirect('/');
  return html(layout('Thành công', \`
    <div class="card center">
      \${stepper(3)}
      <div class="success-icon">✓</div>
      <h2>Lấy Key Thành Công!</h2>
      <p class="sub">Key đã được tự động copy vào bộ nhớ tạm. Bạn có thể dán ngay vào ứng dụng.</p>
      <div class="key-box">
        <span id="keyText">\${s.keyIssued}</span>
        <button class="copy-btn" data-copy="keyText" data-auto="1">📋 Copy</button>
      </div>
      <a href="/reset" class="btn btn-ghost">🔄 Nhận Key Khác</a>
    </div>\`));
}

async function reset(request) { return redirect('/', setCookie('sess', '', 0)); }

// ============ ROUTER ============
export default {
  async fetch(request, env) {
    const url = new URL(request.url); const p = url.pathname; const m = request.method;
    try {
      if (p === '/style.css') return withHeaders(new Response(CSS, { headers: { 'Content-Type': 'text/css', 'Cache-Control': 'public, max-age=86400' } }));
      if (p === '/app.js') return withHeaders(new Response(JS, { headers: { 'Content-Type': 'application/javascript', 'Cache-Control': 'public, max-age=86400' } }));
      if (p === '/' && m === 'GET') return home(env);
      if (p === '/start' && m === 'POST') return start(request, env);
      if (p === '/step1' && m === 'GET') return step1(request, env);
      if (p === '/verify/sub' && m === 'POST') return verifySub(request, env);
      if (p === '/step2' && m === 'GET') return step2(request, env);
      if (p === '/verify/ads' && m === 'POST') return verifyAds(request, env);
      if (p === '/success' && m === 'GET') return success(request, env);
      if (p === '/reset' && m === 'GET') return reset(request);
      return html(layout('Lỗi 404', \`<div class="card center"><h2>Không tìm thấy trang</h2><a href="/" class="btn btn-primary">Về trang chủ</a></div>\`), 404);
    } catch (e) { log('error', e.message); return new Response('Internal Error', { status: 500 }); }
  }
};
