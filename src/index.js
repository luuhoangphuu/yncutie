// ============================================================================
// Key System Worker v9.0 - Ultimate Cyberpunk Checkpoint + Light App
// ============================================================================

const CHECKPOINT_CSS = `
:root { color-scheme: dark; }
*{margin:0;padding:0;box-sizing:border-box}
body {
  font-family: 'Inter', -apple-system, sans-serif; background: #050a14; color: #94a3b8;
  min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px;
  overflow: hidden; position: relative;
}
.bg-grid { position: fixed; inset: 0; background-image: linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px); background-size: 40px 40px; z-index: 0; }
.bg-glow { position: fixed; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1), transparent 60%); z-index: 0; }

.container { position: relative; z-index: 10; width: 100%; max-width: 1100px; display: flex; gap: 40px; }
@media (max-width: 900px) { .container { flex-direction: column; } }

.left { flex: 1; max-width: 550px; }
.badge-security { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: #38bdf8; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px; text-shadow: 0 0 10px rgba(56,189,248,0.5); }
.badge-security::before { content: ''; display: block; width: 20px; height: 2px; background: #38bdf8; box-shadow: 0 0 10px #38bdf8; }
h1 { font-size: 42px; font-weight: 800; color: #f8fafc; line-height: 1.1; margin-bottom: 20px; letter-spacing: -0.02em; text-shadow: 0 2px 20px rgba(0,0,0,0.5); }
.desc { font-size: 16px; line-height: 1.6; color: #94a3b8; margin-bottom: 30px; }

.challenge-box { background: #0b1120; border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 12px; padding: 24px; position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(56, 189, 248, 0.05); transition: all 0.3s; }
.challenge-box::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, transparent, #38bdf8, transparent); opacity: 0.8; }
.challenge-box:hover { border-color: rgba(56, 189, 248, 0.5); box-shadow: 0 10px 40px rgba(0,0,0,0.6), inset 0 0 30px rgba(56, 189, 248, 0.1); }
.cf-turnstile { margin-bottom: 15px; display: flex; justify-content: center; }
.status-text { text-align: center; font-size: 13px; color: #64748b; margin-top: 15px; transition: color 0.3s; }

.stepper { display: flex; align-items: center; justify-content: space-between; margin-top: 40px; padding: 0 10px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.step-circle { width: 24px; height: 24px; border-radius: 50%; background: #0b1120; border: 2px solid #1e293b; display: flex; align-items: center; justify-content: center; transition: all 0.5s; }
.step.completed .step-circle { background: #064e3b; border-color: #10b981; box-shadow: 0 0 15px rgba(16, 185, 129, 0.4); }
.step.completed .step-circle::after { content: '✓'; color: #10b981; font-size: 12px; font-weight: bold; }
.step.active .step-circle { background: #0c4a6e; border-color: #38bdf8; box-shadow: 0 0 20px rgba(56, 189, 248, 0.6); animation: pulse 1.5s infinite; }
.step-line { flex: 1; height: 2px; background: #1e293b; margin: 0 10px; margin-bottom: 24px; transition: all 0.5s; }
.step-line.completed { background: #10b981; box-shadow: 0 0 10px #10b981; }
.step-line.active { background: linear-gradient(90deg, #10b981, #38bdf8); box-shadow: 0 0 10px #38bdf8; }
.step-label { font-size: 12px; font-weight: 600; color: #475569; transition: all 0.3s; }
.step.completed .step-label, .step.active .step-label { color: #cbd5e1; text-shadow: 0 0 8px rgba(255,255,255,0.3); }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.4); } 70% { box-shadow: 0 0 0 12px rgba(56, 189, 248, 0); } 100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); } }

.right { flex: 1; display: flex; flex-direction: column; gap: 16px; }
.card { background: #0b1120; border: 1px solid #1e293b; border-radius: 16px; padding: 24px; position: relative; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.3); }
.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; font-size: 13px; font-weight: 600; color: #64748b; }
.card-value { font-size: 32px; font-weight: 800; color: #f8fafc; font-family: 'JetBrains Mono', monospace; text-shadow: 0 0 15px rgba(255,255,255,0.2); }
.card-value small { font-size: 16px; color: #64748b; font-weight: 600; margin-left: 4px; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

/* Terminal Log */
.terminal { background: #000000; border: 1px solid #1e293b; border-radius: 12px; padding: 16px; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #38bdf8; height: 120px; overflow: hidden; display: flex; flex-direction: column; gap: 6px; }
.log-line { opacity: 0; animation: fadeIn 0.3s forwards; }
.log-line.success { color: #10b981; }
@keyframes fadeIn { to { opacity: 1; } }

/* Radar */
.radar-container { width: 100px; height: 100px; position: relative; margin: 0 auto; border-radius: 50%; border: 1px solid rgba(56, 189, 248, 0.3); background: radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%); box-shadow: 0 0 20px rgba(56, 189, 248, 0.1); }
.radar-sweep { position: absolute; inset: 0; border-radius: 50%; background: conic-gradient(from 0deg, transparent 0%, rgba(56, 189, 248, 0.5) 25%, transparent 25%); animation: sweep 2s linear infinite; }
.radar-dot { position: absolute; top: 30%; left: 60%; width: 4px; height: 4px; background: #38bdf8; border-radius: 50%; box-shadow: 0 0 10px #38bdf8; animation: blink 2s infinite; }
@keyframes sweep { 100% { transform: rotate(360deg); } }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }

/* Error Modal */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(5px); z-index: 100; display: none; align-items: center; justify-content: center; }
.modal-box { background: #0f172a; border: 1px solid #ef4444; border-radius: 16px; padding: 30px; text-align: center; max-width: 400px; box-shadow: 0 10px 40px rgba(239, 68, 68, 0.2); }
.modal-icon { color: #ef4444; font-size: 40px; margin-bottom: 15px; }
.modal-title { color: #f8fafc; font-size: 20px; font-weight: 700; margin-bottom: 10px; }
.modal-msg { color: #94a3b8; font-size: 14px; margin-bottom: 20px; }
.modal-btn { background: #ef4444; color: #fff; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; cursor: pointer; transition: 0.2s; }
.modal-btn:hover { background: #dc2626; }
`;

const CHECKPOINT_JS = `
const logs = [
  "> Khởi tạo kết nối TLS 1.3...",
  "> Đang lấy chứng chỉ Edge...",
  "> Kiểm tra danh tiếng IP...",
  "> Phân tích dấu vết trình duyệt...",
  "> Quét các mẫu DDoS...",
  "> Hệ thống sẵn sàng xác minh."
];
let logIndex = 0;
function addLog(text, isSuccess) {
  const terminal = document.getElementById('terminal');
  const line = document.createElement('div');
  line.className = 'log-line' + (isSuccess ? ' success' : '');
  line.textContent = text;
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
}
setInterval(() => {
  if(logIndex < logs.length) {
    addLog(logs[logIndex]);
    logIndex++;
  }
}, 600);

function onTurnstileSuccess(token) {
  document.getElementById('statusText').style.color = '#38bdf8';
  document.getElementById('statusText').innerHTML = 'Đang thiết lập kết nối an toàn...';
  
  const stepVerify = document.querySelector('.step:nth-child(5)');
  stepVerify.classList.add('active');
  stepVerify.classList.remove('completed');
  
  addLog("> Token Captcha hợp lệ. Đang xác thực...", false);

  fetch('/api/verify-bot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: token })
  }).then(res => res.json()).then(data => {
    if(data.success) {
      addLog("> XÁC MINH THÀNH CÔNG!", true);
      document.getElementById('statusText').style.color = '#10b981';
      document.getElementById('statusText').innerHTML = '<b>Xác minh thành công! Đang vào cửa hàng...</b>';
      
      stepVerify.classList.add('completed');
      stepVerify.classList.remove('active');
      
      const steps = document.querySelectorAll('.step');
      const lines = document.querySelectorAll('.step-line');
      lines[2].classList.add('completed');
      steps[3].classList.add('active');
      steps[3].classList.remove('completed');
      
      setTimeout(() => { window.location.href = '/'; }, 1000);
    } else {
      showError(data.error || 'Xác thực thất bại. Vui lòng thử lại.');
    }
  }).catch(() => {
    showError('Lỗi kết nối mạng. Vui lòng thử lại.');
  });
}

function showError(msg) {
  document.getElementById('modalMsg').textContent = msg;
  document.getElementById('errorModal').style.display = 'flex';
  addLog("> LỖI: " + msg, false);
}

function reloadPage() {
  window.location.reload();
}

setInterval(() => {
  const bars = document.querySelectorAll('.bar');
  bars.forEach((bar, index) => {
    if(index > bars.length - 15) {
      bar.style.height = Math.floor(Math.random() * 80 + 20) + '%';
      bar.classList.add('active');
      setTimeout(() => bar.classList.remove('active'), 200);
    }
  });
}, 150);
`;

const APP_CSS = `
:root { color-scheme: light only; --bg-color: #f0f4f8; --text-main: #0f172a; --text-muted: #475569; --primary: #4f46e5; --accent: #ec4899; --card-bg: #ffffff; --border-color: #e2e8f0; }
*{margin:0;padding:0;box-sizing:border-box}
body { font-family: 'Inter', system-ui, sans-serif; background: var(--bg-color); color: var(--text-main); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; overflow: hidden; position: relative; }
.blob { position: absolute; border-radius: 50%; filter: blur(100px); z-index: 0; opacity: 0.4; animation: float 12s infinite ease-in-out alternate; pointer-events: none; }
.blob-1 { width: 500px; height: 500px; background: #c7d2fe; top: -10%; left: -10%; }
.blob-2 { width: 450px; height: 450px; background: #fbcfe8; bottom: -10%; right: -5%; animation-delay: -4s; }
.blob-3 { width: 400px; height: 400px; background: #bfdbfe; top: 30%; left: 30%; animation-delay: -8s; }
@keyframes float { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(50px, -50px) scale(1.1); } }
.container { position: relative; z-index: 10; width: 100%; max-width: 520px; perspective: 1000px; }
.card { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 32px; padding: 40px 32px; box-shadow: 0 24px 48px -12px rgba(15, 23, 42, 0.08); transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.card:hover { transform: translateY(-5px); box-shadow: 0 32px 64px -12px rgba(15, 23, 42, 0.12); }
.hero{text-align:center}
.badge { display: inline-block; padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 700; background: rgba(79, 70, 229, 0.1); color: var(--primary); margin-bottom: 24px; border: 1px solid rgba(79, 70, 229, 0.2); }
h1 { font-size: 34px; font-weight: 800; line-height: 1.1; margin-bottom: 12px; letter-spacing: -0.03em; color: #0f172a; }
h2 { font-size: 24px; font-weight: 700; margin-bottom: 12px; color: #0f172a; }
.grad { background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.sub { color: var(--text-muted); font-size: 15px; line-height: 1.6; margin-bottom: 28px; font-weight: 500; }
.btn { display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 16px 24px; border-radius: 16px; border: none; cursor: pointer; font-family: inherit; font-size: 16px; font-weight: 700; text-align: center; text-decoration: none; transition: all 0.2s; margin-bottom: 14px; }
.btn-primary { background: var(--primary); color: #fff; box-shadow: 0 8px 24px -6px rgba(79, 70, 229, 0.4); }
.btn-primary:hover { background: #4338ca; transform: translateY(-2px); box-shadow: 0 12px 28px -6px rgba(79, 70, 229, 0.5); }
.btn-youtube { background: #ff0033; color: #fff; box-shadow: 0 8px 24px -6px rgba(255, 0, 51, 0.3); }
.btn-youtube:hover { background: #e6002e; transform: translateY(-2px); }
.btn-ads { background: linear-gradient(135deg, #f59e0b, #f97316); color: #fff; box-shadow: 0 8px 24px -6px rgba(245, 158, 11, 0.4); }
.btn-ads:hover { transform: translateY(-2px); }
.btn-ghost { background: #f8fafc; color: var(--text-main); border: 1px solid #e2e8f0; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
.btn-ghost:hover { background: #f1f5f9; border-color: #cbd5e1; }
.warning { background: #fffbeb; border: 1px solid #fde68a; color: #b45309; padding: 14px 16px; border-radius: 16px; font-size: 13px; margin-bottom: 20px; line-height: 1.5; font-weight: 500; display: flex; align-items: flex-start; gap: 8px; }
.stepper { display: flex; align-items: center; justify-content: space-between; margin-bottom: 36px; padding: 0 10px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 8px; opacity: 0.4; transition: 0.3s; }
.step.active { opacity: 1; }
.step .dot { width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #f8fafc; border: 2px solid #cbd5e1; font-weight: 700; font-size: 14px; color: var(--text-muted); transition: 0.3s; }
.step.active .dot { background: var(--primary); border-color: var(--primary); color: #fff; box-shadow: 0 0 0 6px rgba(79, 70, 229, 0.15); }
.step small { font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; }
.step.active small { color: var(--text-main); }
.line { flex: 1; height: 4px; background: #e2e8f0; margin: 0 12px; margin-bottom: 26px; border-radius: 4px; transition: 0.3s; }
.line.active { background: var(--primary); }
.center{text-align:center}
.success-icon { width: 88px; height: 88px; margin: 10px auto 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 44px; font-weight: 900; background: linear-gradient(135deg, #10b981, #059669); color: #fff; box-shadow: 0 12px 32px -8px rgba(16, 185, 129, 0.4); animation: pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
@keyframes pop { 0% { transform: scale(0); } 100% { transform: scale(1); } }
.key-box { display: flex; gap: 12px; align-items: center; margin: 24px 0 20px; padding: 16px 20px; background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 20px; transition: 0.3s; }
.key-box:hover { border-color: var(--primary); background: #fff; }
.key-box span { flex: 1; font-family: 'JetBrains Mono', monospace; font-size: 20px; font-weight: 800; color: var(--primary); word-break: break-all; letter-spacing: 1.5px; }
.copy-btn { padding: 14px 20px; border-radius: 14px; border: none; background: var(--primary); color: #fff; font-weight: 700; cursor: pointer; font-size: 14px; transition: 0.2s; white-space: nowrap; display: flex; align-items: center; gap: 6px; }
.copy-btn:hover { background: #4338ca; transform: translateY(-2px); }
.expiry-info { display: inline-flex; align-items: center; gap: 8px; background: #ecfdf5; border: 1px solid #a7f3d0; color: #065f46; padding: 10px 16px; border-radius: 12px; font-size: 13px; font-weight: 600; margin-bottom: 24px; }
@media (max-width: 480px) { .card { padding: 32px 24px; border-radius: 28px; } h1 { font-size: 28px; } .btn { padding: 14px 20px; font-size: 15px; } .key-box { flex-direction: column; } .copy-btn { width: 100%; justify-content: center; } }
`;

const APP_JS = `
(function(){
  if(document.querySelector('.success-icon')) {
    for (let i = 0; i < 50; i++) {
      let el = document.createElement('div');
      el.style.cssText = 'position:fixed;top:-10px;left:'+Math.random()*100+'vw;width:8px;height:8px;background:'+['#4f46e5','#ec4899','#f59e0b','#10b981'][Math.floor(Math.random()*4)]+';border-radius:'+(Math.random()>0.5?'50%':'2px')+';z-index:999;pointer-events:none;opacity:0.8;';
      document.body.appendChild(el);
      let anim = el.animate([{ transform: 'translateY(0) rotate(0)', opacity: 1 },{ transform: 'translateY(100vh) rotate('+Math.random()*720+'deg)', opacity: 0 }], { duration: 2000 + Math.random()*2000, easing: 'cubic-bezier(.37,0,.63,1)' });
      anim.onfinish = () => el.remove();
    }
  }
  document.addEventListener('click', function(e){
    var b = e.target.closest('[data-copy]'); if(!b) return;
    var t = document.getElementById(b.dataset.copy); if(!t) return;
    var text = t.textContent; var orig = b.innerHTML;
    var done = function(){ b.innerHTML = '✓ Đã copy'; setTimeout(function(){ b.innerHTML = orig; }, 2000); };
    var fallback = function(){ var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try{document.execCommand('copy')}catch(x){} ta.remove(); done(); };
    if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(text).then(done).catch(fallback); } else { fallback(); }
  });
  var auto = document.querySelector('[data-copy][data-auto]');
  if(auto && navigator.clipboard && navigator.clipboard.writeText){ setTimeout(function(){ var t = document.getElementById(auto.dataset.copy); if(t) navigator.clipboard.writeText(t.textContent).catch(function(){}); }, 500); }
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

// ============ GIAO DIỆN TRẠM KIỂM TRA ============
function renderCheckpoint(env) {
  return html(`<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><meta name="color-scheme" content="dark"><title>Trạm kiểm tra bảo mật</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
  <style>${CHECKPOINT_CSS}</style></head>
  <body>
    <div class="bg-grid"></div><div class="bg-glow"></div>
    <div class="container">
      <div class="left">
        <div class="badge-security">Trạm kiểm tra bảo mật</div>
        <h1>Xác minh nhanh trước<br>khi vào cửa hàng</h1>
        <p class="desc">Cloudflare đang kiểm tra kết nối của bạn để chặn bot và spam. Thường chỉ mất vài giây.</p>
        
        <div class="challenge-box">
          <div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="dark" data-callback="onTurnstileSuccess"></div>
          <div class="status-text" id="statusText">Nếu thấy ô <b>Verify you are human</b>, bấm vào đó. Không cần tải lại trang.</div>
        </div>

        <div class="stepper">
          <div class="step completed"><div class="step-circle"></div><div class="step-label">Kết nối TLS</div></div>
          <div class="step-line completed"></div>
          <div class="step completed"><div class="step-circle"></div><div class="step-label">Lọc tại edge</div></div>
          <div class="step-line completed"></div>
          <div class="step active"><div class="step-circle"></div><div class="step-label">Xác minh trình duyệt</div></div>
          <div class="step-line"></div>
          <div class="step"><div class="step-circle"></div><div class="step-label">Vào cửa hàng</div></div>
        </div>
      </div>

      <div class="right">
        <div class="card">
          <div class="card-header"><span>Thời gian xác minh</span><span class="card-value">1.1<small>giây</small></span></div>
          <div class="graph" id="graph"></div>
        </div>

        <div class="grid-2">
          <div class="card">
            <div class="radar-container">
              <div class="radar-sweep"></div>
              <div class="radar-dot"></div>
            </div>
            <div style="text-align:center; margin-top:10px;">
              <div style="font-size:12px; color:#64748b; margin-bottom:4px;">Quét lưu lượng</div>
              <div style="font-size:14px; font-weight:700; color:#f8fafc;">Đang bảo vệ</div>
              <div style="font-size:11px; color:#38bdf8;">WAF • Bot • DDoS</div>
            </div>
          </div>
          <div class="card">
            <div class="card-header"><span>Độ trễ tới edge</span><span class="card-value">464<small>ms</small></span></div>
            <div style="font-size:12px; color:#64748b; margin-top:10px;">Giao thức<br><b style="color:#f8fafc;">HTTP/3 (QUIC)</b></div>
          </div>
        </div>

        <div class="terminal" id="terminal"></div>
      </div>
    </div>
    
    <div class="modal-overlay" id="errorModal">
      <div class="modal-box">
        <div class="modal-icon">!</div>
        <div class="modal-title">Xác minh thất bại</div>
        <div class="modal-msg" id="modalMsg">Đã xảy ra lỗi.</div>
        <button class="modal-btn" onclick="reloadPage()">Thử lại</button>
      </div>
    </div>

    <script>
      for(let i=0; i<30; i++) { let bar = document.createElement('div'); bar.className = 'bar'; bar.style.height = '20%'; document.getElementById('graph').appendChild(bar); }
      ${CHECKPOINT_JS}
    </script>
  </body></html>`);
}

// ============ CÁC HÀM XỬ LÝ CHÍNH ============
function renderApp(title, content) {
  return html(`<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><meta name="color-scheme" content="light only"><title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
  <style>${APP_CSS}</style></head>
  <body>
    <div class="blob blob-1"></div><div class="blob blob-2"></div><div class="blob blob-3"></div>
    <div class="container">${content}</div>
    <script>${APP_JS}</script>
  </body></html>`);
}

const stepper = (n) => `<div class="stepper"><div class="step ${n >= 1 ? 'active' : ''}"><div class="dot">1</div><small>Ủng hộ</small></div><div class="line ${n >= 2 ? 'active' : ''}"></div><div class="step ${n >= 2 ? 'active' : ''}"><div class="dot">2</div><small>Vượt Ads</small></div><div class="line ${n >= 3 ? 'active' : ''}"></div><div class="step ${n >= 3 ? 'active' : ''}"><div class="dot">3</div><small>Nhận Key</small></div></div>`;

async function hmac(data, secret, action) {
  const enc = new TextEncoder(); const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [action]);
  if (action === 'sign') { const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data)); return btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  return key;
}
async function encodeSession(data, secret) { const payload = btoa(JSON.stringify(data)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); return payload + '.' + await hmac(payload, secret, 'sign'); }
async function decodeSession(token, secret) {
  if (!token || token.length > 4096) return null; const parts = token.split('.'); if (parts.length !== 2) return null;
  try {
    const enc = new TextEncoder(); const key = await hmac('', secret, 'import');
    const sigBytes = Uint8Array.from(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
    const ok = await crypto.subtle.verify('HMAC', key, sigBytes, enc.encode(parts[0])); if (!ok) return null;
    const data = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/'))); if (Date.now() > data.expiresAt) return null; return data;
  } catch { return null; }
}
function getCookie(request, name) { const c = request.headers.get('cookie') || ''; const m = c.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)')); return m ? m[1] : null; }
function setCookie(name, value, maxAge) { return `${name}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}; Secure`; }
async function getSession(request, env) { return await decodeSession(getCookie(request, 'sess'), env.SESSION_SECRET); }
async function saveSession(request, env, data) { data.expiresAt = Date.now() + 900000; const token = await encodeSession(data, env.SESSION_SECRET); return setCookie('sess', token, 900); }

const rl = new Map();
function checkRateLimit(key, limit) { const now = Date.now(); if (rl.size > 5000) for (const [k, v] of rl) if (now > v.resetAt) rl.delete(k); const e = rl.get(key); if (!e || now > e.resetAt) { rl.set(key, { count: 1, resetAt: now + 3600000 }); return { ok: true }; } if (e.count >= limit) return { ok: false, resetAt: e.resetAt }; e.count++; return { ok: true }; }

async function verifyTurnstile(token, ip, env) {
  if (!token) return false;
  try {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: token, remoteip: ip }) });
    const d = await r.json(); return d.success === true;
  } catch { return false; }
}

async function shortenUrl(longUrl, env) {
  if (!env.LINK4M_API_TOKEN) return longUrl;
  try { const api = `https://link4m.co/api-shorten/v2?api=${env.LINK4M_API_TOKEN}&url=${encodeURIComponent(longUrl)}`; const res = await fetch(api); const data = await res.json(); return data.status === 'success' ? data.shortenedUrl : longUrl; } catch { return longUrl; }
}

async function fetchKeyFromIssuer(env) {
  try {
    const res = await fetch(env.KEY_ISSUER_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-API-Key': env.KEY_ISSUER_API_KEY, 'User-Agent': 'KeySystem-Worker/9.0', 'Origin': 'https://getkeydpiconfig.site' }, body: JSON.stringify({ tier: env.KEY_TIER || 'Normal' }) });
    const data = await res.json().catch(() => null);
    if (data && data.success === true && data.key) return { ok: true, key: data.key, expiresAt: data.expires_at, durationHours: data.duration_hours };
    return { ok: false };
  } catch { return { ok: false }; }
}

// ============ ROUTER & API ============
function home(env) {
  return renderApp('Nhận Key Miễn Phí', `<div class="card hero"><div class="badge">✨ Hệ thống tự động 2026</div><h1>Nhận Key <span class="grad">Tự Động</span></h1><p class="sub">Hoàn thành 2 bước siêu tốc để nhận key bản quyền.</p><form method="POST" action="/start"><div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="light"></div><button type="submit" class="btn btn-primary" style="margin-top:20px;">🚀 Bắt đầu nhận Key</button></form><p style="font-size:12px; color:#94a3b8; margin-top:15px; font-weight:500;">Bảo mật bởi Cloudflare Turnstile</p></div>`);
}

async function start(request, env) {
  const ip = request.headers.get('cf-connecting-ip') || 'local';
  if (!checkRateLimit('start:' + ip, 10).ok) return renderApp('Lỗi', `<div class="card center"><h2>Quá nhiều yêu cầu</h2><p class="sub">Vui lòng thử lại sau 1 giờ.</p></div>`);
  const form = await request.formData();
  if (!(await verifyTurnstile(form.get('cf-turnstile-response'), ip, env))) return renderApp('Lỗi', `<div class="card center"><h2>Captcha không hợp lệ</h2><a href="/" class="btn btn-primary">Thử lại</a></div>`);
  const session = { sid: crypto.randomUUID(), ip, createdAt: Date.now(), subVerified: false, adsVerified: false, keyIssued: null };
  return redirect('/step1', await saveSession(request, env, session));
}

async function step1(request, env) {
  const s = await getSession(request, env);
  if (!s) return redirect('/'); if (s.subVerified) return redirect('/step2');
  return renderApp('Bước 1: Ủng hộ', `<div class="card">${stepper(1)}<h2>Ủng hộ Kênh YouTube</h2><p class="sub">Vui lòng bấm nút bên dưới để theo dõi kênh YouTube của chúng tôi.</p><div class="warning">⚠️ Vui lòng tắt VPN (nếu có).</div><a href="${env.YOUTUBE_CHANNEL_URL}" target="_blank" rel="noopener" class="btn btn-youtube">▶ Theo dõi Kênh YouTube</a><form method="POST" action="/verify/sub"><div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="light"></div><button type="submit" class="btn btn-primary" style="margin-top:20px;">✅ Tôi đã theo dõi</button></form></div>`);
}

async function verifySub(request, env) {
  const s = await getSession(request, env); if (!s) return redirect('/');
  const form = await request.formData();
  if (!(await verifyTurnstile(form.get('cf-turnstile-response'), s.ip, env))) return renderApp('Lỗi', `<div class="card center"><h2>Captcha không hợp lệ</h2><a href="/step1" class="btn btn-primary">Thử lại</a></div>`);
  s.subVerified = true; return redirect('/step2', await saveSession(request, env, s));
}

async function step2(request, env) {
  const s = await getSession(request, env); if (!s || !s.subVerified) return redirect('/'); if (s.keyIssued) return redirect('/success');
  const adsUrl = await shortenUrl(new URL('/step2', request.url).toString(), env);
  return renderApp('Bước 2: Vượt Ads', `<div class="card">${stepper(2)}<h2>Vượt qua Quảng cáo</h2><p class="sub">Nhấn nút bên dưới, hoàn thành 1 quảng cáo ngắn, sau đó quay lại đây xác nhận.</p><a href="${adsUrl}" target="_blank" rel="noopener" class="btn btn-ads">📺 Mở Link Quảng Cáo</a><div class="warning" style="margin-top: 15px;">⚠️ Không tắt tab khi đang xem quảng cáo.</div><form method="POST" action="/verify/ads"><div class="cf-turnstile" data-sitekey="${env.TURNSTILE_SITE_KEY}" data-theme="light"></div><button type="submit" class="btn btn-primary" style="margin-top:20px;">🎁 Nhận Key Ngay</button></form></div>`);
}

async function verifyAds(request, env) {
  const s = await getSession(request, env); if (!s || !s.subVerified) return redirect('/');
  if (!checkRateLimit('key:' + s.ip, 5).ok) return renderApp('Lỗi', `<div class="card center"><h2>Đã đạt giới hạn</h2></div>`);
  const form = await request.formData();
  if (!(await verifyTurnstile(form.get('cf-turnstile-response'), s.ip, env))) return renderApp('Lỗi', `<div class="card center"><h2>Captcha không hợp lệ</h2><a href="/step2" class="btn btn-primary">Thử lại</a></div>`);
  const issued = await fetchKeyFromIssuer(env);
  if (!issued.ok) return renderApp('Lỗi', `<div class="card center"><h2>Hệ thống đang bận</h2><a href="/step2" class="btn btn-primary">Thử lại</a></div>`);
  s.adsVerified = true; s.keyIssued = issued.key; s.keyDuration = issued.durationHours || 8; s.keyExpiresAt = issued.expiresAt || new Date(Date.now() + s.keyDuration * 3600000).toISOString();
  return redirect('/success', await saveSession(request, env, s));
}

async function success(request, env) {
  const s = await getSession(request, env); if (!s || !s.keyIssued) return redirect('/');
  const expireDate = new Date(s.keyExpiresAt); const timeStr = expireDate.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }); const dateStr = expireDate.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
  return renderApp('Thành công', `<div class="card center">${stepper(3)}<div class="success-icon">✓</div><h2>Lấy Key Thành Công!</h2><div class="expiry-info">⏰ Hạn sử dụng: <b>${s.keyDuration} giờ</b> (Đến ${timeStr} - ${dateStr})</div><p class="sub">Key đã được tự động copy.</p><div class="key-box"><span id="keyText">${s.keyIssued}</span><button class="copy-btn" data-copy="keyText" data-auto="1">📋 Copy</button></div><a href="/reset" class="btn btn-ghost">🔄 Nhận Key Khác</a></div>`);
}

async function reset(request) { return redirect('/', setCookie('sess', '', 0)); }

// ============ API XÁC THỰC TRẠM CHECK BOT ============
async function verifyCheckpoint(request, env) {
  try {
    const { token } = await request.json();
    const ip = request.headers.get('cf-connecting-ip') || 'local';
    const ok = await verifyTurnstile(token, ip, env);
    if (!ok) {
      log('error', 'checkpoint turnstile failed', { ip });
      return new Response(JSON.stringify({ success: false, error: 'Captcha không hợp lệ hoặc đã hết hạn. Vui lòng thử lại.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
    
    const passToken = crypto.randomUUID();
    const headers = new Headers({ 'Content-Type': 'application/json', 'Set-Cookie': `bot_passed=${passToken}; Path=/; HttpOnly; SameSite=Lax; Max-Age=900; Secure` });
    return new Response(JSON.stringify({ success: true }), { headers });
  } catch (e) {
    log('error', 'checkpoint exception', { msg: e.message });
    return new Response(JSON.stringify({ success: false, error: 'Lỗi máy chủ nội bộ.' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url); const p = url.pathname; const m = request.method;
    const botPassed = getCookie(request, 'bot_passed');

    try {
      if (p === '/style.css') return withHeaders(new Response(APP_CSS, { headers: { 'Content-Type': 'text/css' } }));
      if (p === '/app.js') return withHeaders(new Response(APP_JS, { headers: { 'Content-Type': 'application/javascript' } }));
      if (p === '/api/verify-bot' && m === 'POST') return verifyCheckpoint(request, env);

      if (!botPassed && p !== '/api/verify-bot') {
        return renderCheckpoint(env);
      }

      if (p === '/' && m === 'GET') return home(env);
      if (p === '/start' && m === 'POST') return start(request, env);
      if (p === '/step1' && m === 'GET') return step1(request, env);
      if (p === '/verify/sub' && m === 'POST') return verifySub(request, env);
      if (p === '/step2' && m === 'GET') return step2(request, env);
      if (p === '/verify/ads' && m === 'POST') return verifyAds(request, env);
      if (p === '/success' && m === 'GET') return success(request, env);
      if (p === '/reset' && m === 'GET') return reset(request);
      
      return renderApp('Lỗi 404', `<div class="card center"><h2>Không tìm thấy trang</h2><a href="/" class="btn btn-primary">Về trang chủ</a></div>`);
    } catch (e) { log('error', e.message); return new Response('Internal Error', { status: 500 }); }
  }
};
