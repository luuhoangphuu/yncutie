// --- CSS CHECKPOINT (Giữ nguyên bảo mật) ---
export const CSS_CHECKPOINT = `
:root { color-scheme: light only; --bg: #e5e7eb; --text: #111827; --text-muted: #4b5563; --primary: #475569; --accent: #facc15; --border: rgba(0,0,0,0.08); }
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background: var(--bg); color: var(--text); min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden; position: relative; }
#snow-bg { position: fixed; inset: 0; z-index: -1; pointer-events: none; }
.spotlight { position: fixed; inset: 0; z-index: -1; pointer-events: none; background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.4), transparent 40%); }
.top-nav { position: relative; z-index: 10; width: 100%; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; background: rgba(229, 231, 235, 0.8); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); }
.logo { font-size: 18px; font-weight: 800; display: flex; align-items: center; gap: 10px; color: #111827; }
.logo-icon { width: 32px; height: 32px; background: linear-gradient(135deg, #94a3b8, #475569); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; box-shadow: 0 4px 15px rgba(71,85,105,0.5); }
.status-badge { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: #059669; background: #ecfdf5; padding: 8px 16px; border-radius: 30px; border: 1px solid #a7f3d0; box-shadow: 0 0 15px rgba(16,185,129,0.2); }
.status-dot { width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 10px #10b981; animation: pulse 2s infinite; }
.time-badge { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 800; color: #475569; background: rgba(255, 255, 255, 0.5); padding: 8px 16px; border-radius: 30px; border: 1px solid rgba(0,0,0,0.1); font-family: 'JetBrains Mono', monospace; box-shadow: 0 0 15px rgba(0,0,0,0.05); }
@keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.2); opacity: 0.7; } 100% { transform: scale(1); opacity: 1; } }
.container-check { position: relative; z-index: 10; width: 100%; max-width: 1200px; margin: 60px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; padding: 0 40px; align-items: center; }
@media (max-width: 900px) { .container-check { grid-template-columns: 1fr; gap: 40px; padding: 0 20px; margin: 30px auto; } }
.left { display: flex; flex-direction: column; animation: fadeInUp 0.8s ease-out; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.badge-security { display: inline-flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 800; color: #475569; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 2px; }
.badge-security::before { content: ''; display: block; width: 30px; height: 3px; background: #475569; border-radius: 2px; box-shadow: 0 0 10px rgba(71,85,105,0.5); }
h1 { font-size: 54px; font-weight: 800; line-height: 1.05; margin-bottom: 24px; color: #111827; letter-spacing: -0.04em; }
h1 span { background: linear-gradient(135deg, #64748b, #1e293b); -webkit-background-clip: text; background-clip: text; color: transparent; }
.desc { font-size: 16px; line-height: 1.7; color: var(--text-muted); margin-bottom: 40px; font-weight: 500; max-width: 90%; }
.terminal-box { background: #1e293b; border-radius: 16px; padding: 20px; font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #cbd5e1; height: 160px; overflow: hidden; margin-bottom: 30px; box-shadow: 0 20px 40px rgba(15,23,42,0.2), inset 0 0 20px rgba(255,255,255,0.05); position: relative; border: 1px solid #334155; }
.terminal-box::before { content: 'root@titanium:~#'; color: #94a3b8; display: block; margin-bottom: 10px; font-weight: bold; opacity: 0.8; text-shadow: 0 0 5px rgba(148,163,184,0.5); }
.term-line { margin-bottom: 6px; opacity: 0; animation: typeIn 0.3s forwards; }
@keyframes typeIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
.challenge-module { background: rgba(255,255,255,0.7); backdrop-filter: blur(20px); border-radius: 24px; padding: 40px; box-shadow: 0 24px 60px -12px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,1); position: relative; overflow: hidden; }
.challenge-module::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #94a3b8, #475569); }
.cf-turnstile { display: flex; justify-content: center; margin-bottom: 24px; }
.help-text { text-align: center; font-size: 14px; color: var(--text-muted); line-height: 1.6; font-weight: 500; }
.help-text b { color: #111827; }
.stepper { display: flex; align-items: center; justify-content: space-between; margin-top: 40px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.step-circle { width: 32px; height: 32px; border-radius: 50%; background: #fff; border: 2px solid #cbd5e1; display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
.step.completed .step-circle { background: #475569; border-color: #475569; color: #fff; font-size: 14px; box-shadow: 0 0 15px rgba(71,85,105,0.4); }
.step.completed .step-circle::after { content: '✓'; }
.step.active .step-circle { border-color: #475569; background: #fff; box-shadow: 0 0 0 6px rgba(71,85,105,0.15), inset 0 0 0 4px #475569; }
.step-label { font-size: 13px; font-weight: 700; color: var(--text-muted); }
.step.completed .step-label, .step.active .step-label { color: #111827; }
.step-line { flex: 1; height: 2px; background: #cbd5e1; margin: 0 15px; margin-bottom: 28px; border-radius: 2px; }
.step-line.completed { background: #475569; }
.step-line.active { background: linear-gradient(90deg, #475569, #94a3b8); }
.right { display: grid; gap: 20px; animation: fadeInUp 0.8s ease-out 0.2s both; }
.dash-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,1); border-radius: 24px; padding: 28px; box-shadow: 0 15px 35px -5px rgba(0,0,0,0.05); transition: all 0.3s ease; }
.dash-card:hover { transform: translateY(-4px); box-shadow: 0 25px 45px -5px rgba(0,0,0,0.08); }
.dash-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.dash-title { font-size: 13px; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; }
.dash-value { font-size: 38px; font-weight: 800; color: #111827; font-family: 'JetBrains Mono', monospace; letter-spacing: -1px; }
.dash-value small { font-size: 18px; color: var(--text-muted); margin-left: 4px; }
.waveform { display: flex; align-items: flex-end; gap: 4px; height: 60px; margin-top: 16px; }
.bar { flex: 1; background: #e2e8f0; border-radius: 3px; transition: height 0.15s ease-out, background 0.15s; }
.bar.active { background: #475569; box-shadow: 0 0 10px rgba(71,85,105,0.3); }
.radar-wrapper { display: flex; align-items: center; justify-content: center; gap: 24px; margin-top: 10px; }
.radar-container { width: 110px; height: 110px; position: relative; border-radius: 50%; border: 1px solid rgba(71,85,105,0.2); overflow: hidden; background: #f8fafc; box-shadow: inset 0 0 20px rgba(0,0,0,0.05); }
.radar-sweep { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: conic-gradient(from 0deg, transparent 60%, rgba(71,85,105,0.3) 100%); animation: spin 2s linear infinite; border-radius: 50%; }
@keyframes spin { 100% { transform: rotate(360deg); } }
.radar-dot { position: absolute; top: 30%; left: 60%; width: 8px; height: 8px; background: #1e293b; border-radius: 50%; box-shadow: 0 0 12px #1e293b; animation: pulse 1.5s infinite; }
.radar-info h4 { font-size: 16px; font-weight: 800; color: #111827; margin-bottom: 4px; }
.radar-info p { font-size: 13px; font-weight: 600; color: #475569; }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: var(--border); border-radius: 16px; overflow: hidden; }
.stat-item { background: #fff; padding: 20px; text-align: center; }
.stat-label { font-size: 12px; font-weight: 700; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase; }
.stat-val { font-size: 15px; font-weight: 800; color: #111827; }
`;

// --- CSS APP (SUNNY MOD HUB) ---
export const CSS_APP = `
:root { color-scheme: light only; --bg: #f8fafc; --text: #0f172a; --text-muted: #64748b; --primary: #475569; --accent: #facc15; --card-bg: rgba(255, 255, 255, 0.85); --card-border: rgba(255, 255, 255, 0.9); }
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background: var(--bg); color: var(--text); min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden; position: relative; }
#snow-bg { position: fixed; inset: 0; z-index: -1; pointer-events: none; }
.spotlight { position: fixed; inset: 0; z-index: -1; pointer-events: none; background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(250, 204, 21, 0.05), transparent 40%); }
.bg-shapes { position: fixed; inset: 0; z-index: -1; overflow: hidden; pointer-events: none; opacity: 0.03; }
.shape { position: absolute; border: 6px solid #000; pointer-events: none; }
.circle { width: 200px; height: 200px; border-radius: 50%; top: -10%; left: -5%; animation: float 12s infinite ease-in-out alternate; }
.triangle { width: 0; height: 0; border-left: 100px solid transparent; border-right: 100px solid transparent; border-bottom: 180px solid #000; border-top: none; background: transparent !important; bottom: -10%; right: -5%; animation: float 15s infinite ease-in-out alternate-reverse; }
.square { width: 150px; height: 150px; top: 40%; right: 10%; animation: float 18s infinite ease-in-out alternate; }
@keyframes float { 0% { transform: translateY(0) rotate(0deg); } 100% { transform: translateY(-40px) rotate(20deg); } }

.wrapper { flex: 1; display: flex; align-items: flex-start; justify-content: center; padding: 40px 20px; position: relative; z-index: 10; }
.container { position: relative; z-index: 10; width: 100%; max-width: 1100px; display: grid; grid-template-columns: 1fr 1fr; gap: 30px; animation: fadeInUp 0.6s ease-out; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@media (max-width: 900px) { .container { grid-template-columns: 1fr; max-width: 500px; } }

.glass-card { background: var(--card-bg); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid var(--card-border); border-radius: 24px; padding: 30px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.05); margin-bottom: 20px; }
.header-title { font-size: 24px; font-weight: 800; color: #0f172a; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
.header-desc { font-size: 14px; color: var(--text-muted); margin-bottom: 20px; }

/* TELEGRAM BANNER */
.telegram-banner { background: #0f172a; border-radius: 16px; padding: 20px; color: #fff; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px; }
.telegram-banner h4 { font-size: 16px; font-weight: 700; }
.telegram-btn { background: #facc15; color: #000; padding: 12px; border-radius: 12px; font-weight: 700; text-align: center; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px; transition: 0.3s; }
.telegram-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(250, 204, 21, 0.3); }

/* 4-STEPPER */
.stepper { display: flex; align-items: center; justify-content: space-between; margin-bottom: 30px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 8px; position: relative; width: 25%; }
.step-line { position: absolute; top: 16px; left: 50%; width: 100%; height: 2px; background: #e2e8f0; z-index: 0; }
.step:last-child .step-line { display: none; }
.step-circle { width: 32px; height: 32px; border-radius: 50%; background: #fff; border: 2px solid #cbd5e1; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; color: #64748b; z-index: 1; transition: 0.3s; }
.step.active .step-circle { background: #facc15; border-color: #facc15; color: #000; box-shadow: 0 0 15px rgba(250, 204, 21, 0.4); }
.step-label { font-size: 12px; font-weight: 600; color: #64748b; text-align: center; }
.step.active .step-label { color: #0f172a; }

/* KEY SELECTOR */
.key-input-group { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; }
.key-input-group label { font-size: 14px; font-weight: 600; color: #0f172a; }
.key-badge { background: #e2e8f0; color: #475569; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 700; }

.btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 18px 24px; border-radius: 16px; border: none; font-weight: 800; font-size: 16px; cursor: pointer; text-decoration: none; transition: all 0.4s; position: relative; overflow: hidden; }
.btn-primary { background: #facc15; color: #000; box-shadow: 0 10px 25px -5px rgba(250, 204, 21, 0.4); }
.btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 15px 35px -5px rgba(250, 204, 21, 0.6); }

/* DEVICE INFO CARD */
.device-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.device-item { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 16px; }
.device-label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; margin-bottom: 8px; }
.device-val { font-size: 20px; font-weight: 800; color: #0f172a; }
.device-sub { font-size: 12px; color: #64748b; margin-top: 4px; line-height: 1.4; }
.device-sub b { color: #0f172a; }

/* PRICING & INFO */
.info-box { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; }
.info-box h4 { font-size: 16px; font-weight: 800; margin-bottom: 16px; color: #0f172a; }
.info-list { list-style: none; font-size: 14px; color: #475569; line-height: 1.6; }
.info-list li { margin-bottom: 8px; }
.info-list b { color: #0f172a; }
.pricing { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; font-weight: 600; color: #0f172a; }
.pricing div { display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #f8fafc; border-radius: 8px; }

/* APP DOWNLOAD */
.app-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; margin-bottom: 16px; display: flex; flex-direction: column; gap: 12px; }
.app-header { display: flex; gap: 16px; align-items: center; }
.app-icon { width: 60px; height: 60px; border-radius: 12px; background: #e2e8f0; object-fit: cover; }
.app-title { font-size: 16px; font-weight: 800; color: #0f172a; }
.app-note { font-size: 12px; color: #ef4444; font-weight: 600; margin-top: 4px; }
.app-details { font-size: 13px; color: #475569; line-height: 1.6; }
.btn-download { background: #facc15; color: #000; padding: 12px; border-radius: 12px; font-weight: 700; text-decoration: none; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 8px; transition: 0.3s; }
.btn-download:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(250, 204, 21, 0.3); }

/* FOOTER */
.footer { text-align: center; padding: 40px 20px; border-top: 1px solid rgba(0,0,0,0.05); margin-top: auto; position: relative; z-index: 10; }
.footer p { font-size: 13px; font-weight: 500; color: var(--text-muted); }
.footer a { color: #facc15; font-weight: 700; text-decoration: none; }

/* FLOATING WIDGET */
.float-widget { position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; background: #0068FF; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; box-shadow: 0 10px 25px rgba(0, 104, 255, 0.5); z-index: 100; cursor: pointer; transition: transform 0.3s; text-decoration: none; }
.float-widget:hover { transform: scale(1.1); }
.float-dot { position: absolute; top: 0; right: 0; width: 14px; height: 14px; background: #ef4444; border-radius: 50%; border: 2px solid #fff; }
`;

// --- JAVASCRIPT (SNOWFALL + LIMIT LOGIC) ---
export const JS = `
// 1. Snowfall
const canvas = document.createElement('canvas');
canvas.id = 'snow-bg';
document.body.prepend(canvas);
const ctx = canvas.getContext('2d');
let width, height, snowflakes;
function initCanvas() {
  width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight;
  snowflakes = [];
  const count = Math.floor(width * height / 15000);
  for (let i = 0; i < count; i++) {
    snowflakes.push({ x: Math.random() * width, y: Math.random() * height, radius: Math.random() * 2 + 1, speedY: (Math.random() - 0.5) * 1, speedX: Math.random() * 1 - 0.5, sway: Math.random() * 2, swayPhase: Math.random() * Math.PI * 2 });
  }
}
function drawSnow() {
  ctx.clearRect(0, 0, width, height); ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; ctx.shadowBlur = 5; ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
  snowflakes.forEach(p => {
    ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2); ctx.fill();
    p.y += p.speedY; p.x += p.speedX + Math.sin(p.swayPhase) * p.sway; p.swayPhase += 0.02;
    if (p.y > height + 10) { p.y = -10; p.x = Math.random() * width; }
    if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
    if (p.x > width + 10) p.x = -10; if (p.x < -10) p.x = width + 10;
  });
  requestAnimationFrame(drawSnow);
}
window.addEventListener('resize', initCanvas); initCanvas(); drawSnow();

// 2. Spotlight
const spotlight = document.createElement('div'); spotlight.className = 'spotlight'; document.body.prepend(spotlight);
document.addEventListener('mousemove', (e) => { spotlight.style.setProperty('--mouse-x', e.clientX + 'px'); spotlight.style.setProperty('--mouse-y', e.clientY + 'px'); });

// 3. Device Info & Limit Logic
function updateDeviceInfo() {
  const now = new Date();
  // Reset lúc 00:00 GMT+7 (tức là 17:00 UTC ngày hôm trước)
  const vnTime = new Date(now.getTime() + (7 * 60 * 60 * 1000));
  const resetTime = new Date(vnTime);
  resetTime.setHours(24, 0, 0, 0);
  const timeUntilReset = resetTime - vnTime;
  const hoursLeft = Math.floor(timeUntilReset / (1000 * 60 * 60));
  const minsLeft = Math.floor((timeUntilReset % (1000 * 60 * 60)) / (1000 * 60));

  // Giả lập localStorage
  let limit = parseInt(localStorage.getItem('daily_limit') || '5');
  let success = parseInt(localStorage.getItem('success_count') || '0');
  let lastTime = localStorage.getItem('last_time') || 'Chưa có';
  let retries = parseInt(localStorage.getItem('retry_count') || '0');

  // Update UI
  const elLimit = document.getElementById('dev-limit'); if(elLimit) elLimit.innerText = limit;
  const elSuccess = document.getElementById('dev-success'); if(elSuccess) elSuccess.innerText = success;
  const elLast = document.getElementById('dev-last'); if(elLast) elLast.innerText = lastTime;
  const elRetry = document.getElementById('dev-retry'); if(elRetry) elRetry.innerText = retries;
  const elReset = document.getElementById('dev-reset'); if(elReset) elReset.innerText = hoursLeft + 'h ' + minsLeft + 'p';
}
updateDeviceInfo();

// 4. Clock
setInterval(() => {
  const clockEl = document.getElementById('vn-clock');
  if(clockEl) {
    const vnTime = new Intl.DateTimeFormat('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date());
    clockEl.innerText = vnTime;
  }
}, 1000);

// 5. Terminal
setTimeout(() => {
  const term = document.getElementById('terminal');
  if(term) {
    const logs = ["Khởi tạo kết nối TLS 1.3...", "Phân tích dấu vết trình duyệt...", "Quét mẫu tấn công DDoS...", "Chờ xác minh Captcha..."];
    let idx = 0; let int = setInterval(() => { if(idx < logs.length) { term.innerHTML += '<div class="term-line">> ' + logs[idx] + '</div>'; idx++; } else { clearInterval(int); } }, 600);
  }
}, 500);

// 6. Heartbeat Graph
const barCount = 50; let graphData = new Array(barCount).fill(10);
setInterval(() => {
  const bars = document.querySelectorAll('.bar'); if(bars.length === 0) return;
  graphData.shift(); let newVal = 10 + Math.random() * 15;
  if(Math.random() > 0.9) newVal = 60 + Math.random() * 40; else if(Math.random() > 0.7) newVal = 30 + Math.random() * 30;
  graphData.push(newVal);
  bars.forEach((bar, i) => { bar.style.height = graphData[i] + '%'; if(graphData[i] > 40) bar.classList.add('active'); else bar.classList.remove('active'); });
}, 100);

// 7. Toast
window.showToast = function(message, type = 'success') {
  const container = document.querySelector('.toast-container') || (() => { const c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); return c; })();
  const toast = document.createElement('div'); toast.className = 'toast ' + type;
  toast.innerHTML = (type === 'success' ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>' : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>') + ' ' + message;
  container.appendChild(toast); if(window.lucide) lucide.createIcons();
  setTimeout(() => { toast.style.animation = 'toastOut 0.3s forwards'; setTimeout(() => toast.remove(), 300); }, 3000);
};

document.addEventListener('click', function(e) {
  var b = e.target.closest('[data-copy]'); if(!b) return;
  var t = document.getElementById(b.dataset.copy); if(!t) return;
  navigator.clipboard.writeText(t.textContent).then(() => { showToast('Đã sao chép Key vào bộ nhớ tạm!', 'success'); });
});
`;
