export const CSS_CHECKPOINT = `
:root { color-scheme: dark; --bg: #050505; --text: #ffffff; --text-muted: #a1a1aa; --primary: #ffffff; --brand: #ff0055; --border: rgba(255,255,255,0.1); }
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background: var(--bg); color: var(--text); min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden; position: relative; }
#snow-bg { position: fixed; inset: 0; z-index: -1; pointer-events: none; }
.spotlight { position: fixed; inset: 0; z-index: -1; pointer-events: none; background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.05), transparent 40%); }

.top-nav { position: relative; z-index: 10; width: 100%; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; background: rgba(5, 5, 5, 0.8); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); }
.logo { font-size: 20px; font-weight: 900; display: flex; align-items: center; gap: 10px; color: var(--brand); letter-spacing: 2px; text-transform: uppercase; text-shadow: 0 0 15px rgba(255,0,85,0.4); }
.logo-icon { width: 32px; height: 32px; background: #fff; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #000; box-shadow: 0 0 20px rgba(255,255,255,0.3); }
.status-badge { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: #fff; background: rgba(255, 255, 255, 0.1); padding: 8px 16px; border-radius: 30px; border: 1px solid rgba(255,255,255,0.2); }
.status-dot { width: 8px; height: 8px; border-radius: 50%; background: #fff; box-shadow: 0 0 10px #fff; animation: pulse 2s infinite; }
.time-badge { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 800; color: #fff; background: rgba(255, 255, 255, 0.05); padding: 8px 16px; border-radius: 30px; border: 1px solid var(--border); font-family: 'JetBrains Mono', monospace; }
@keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.2); opacity: 0.7; } 100% { transform: scale(1); opacity: 1; } }

.container-check { position: relative; z-index: 10; width: 100%; max-width: 1200px; margin: 60px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; padding: 0 40px; align-items: center; }
@media (max-width: 900px) { .container-check { grid-template-columns: 1fr; gap: 40px; padding: 0 20px; margin: 30px auto; } }
.left { display: flex; flex-direction: column; animation: fadeInUp 0.8s ease-out; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.badge-security { display: inline-flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 800; color: #fff; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 2px; }
.badge-security::before { content: ''; display: block; width: 30px; height: 3px; background: #fff; border-radius: 2px; box-shadow: 0 0 10px #fff; }
h1 { font-size: 54px; font-weight: 800; line-height: 1.05; margin-bottom: 24px; color: #fff; letter-spacing: -0.04em; text-shadow: 0 0 20px rgba(255,255,255,0.2); }
h1 span { color: var(--brand); text-shadow: 0 0 20px rgba(255,0,85,0.3); }
.desc { font-size: 16px; line-height: 1.7; color: var(--text-muted); margin-bottom: 40px; font-weight: 500; max-width: 90%; }
.terminal-box { background: #000; border-radius: 16px; padding: 20px; font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #fff; height: 160px; overflow: hidden; margin-bottom: 30px; box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.02); position: relative; border: 1px solid var(--border); }
.terminal-box::before { content: 'root@getkeydpiconfig:~#'; color: var(--brand); display: block; margin-bottom: 10px; font-weight: bold; opacity: 0.8; }
.term-line { margin-bottom: 6px; opacity: 0; animation: typeIn 0.3s forwards; color: #a1a1aa; }
@keyframes typeIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
.challenge-module { background: rgba(20, 20, 20, 0.6); backdrop-filter: blur(20px); border-radius: 24px; padding: 40px; box-shadow: 0 24px 60px -12px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.1); position: relative; overflow: hidden; }
.challenge-module::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, transparent, #fff, transparent); box-shadow: 0 0 15px #fff; }
.cf-turnstile { display: flex; justify-content: center; margin-bottom: 24px; }
.help-text { text-align: center; font-size: 14px; color: var(--text-muted); line-height: 1.6; font-weight: 500; }
.help-text b { color: #fff; }
.stepper { display: flex; align-items: center; justify-content: space-between; margin-top: 40px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.step-circle { width: 32px; height: 32px; border-radius: 50%; background: #000; border: 2px solid #333; display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
.step.completed .step-circle { background: #fff; border-color: #fff; color: #000; font-size: 14px; box-shadow: 0 0 15px rgba(255,255,255,0.4); }
.step.completed .step-circle::after { content: '✓'; }
.step.active .step-circle { border-color: #fff; background: #000; box-shadow: 0 0 0 6px rgba(255,255,255,0.1), inset 0 0 0 4px #fff; }
.step-label { font-size: 13px; font-weight: 700; color: var(--text-muted); }
.step.completed .step-label, .step.active .step-label { color: #fff; }
.step-line { flex: 1; height: 2px; background: #333; margin: 0 15px; margin-bottom: 28px; border-radius: 2px; }
.step-line.completed { background: #fff; }
.step-line.active { background: linear-gradient(90deg, #fff, #555); }
.right { display: grid; gap: 20px; animation: fadeInUp 0.8s ease-out 0.2s both; }
.dash-card { background: rgba(20, 20, 20, 0.6); backdrop-filter: blur(24px); border: 1px solid var(--border); border-radius: 24px; padding: 28px; box-shadow: 0 15px 35px -5px rgba(0,0,0,0.5); transition: all 0.3s ease; }
.dash-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.2); }
.dash-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.dash-title { font-size: 13px; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; }
.dash-value { font-size: 38px; font-weight: 800; color: #fff; font-family: 'JetBrains Mono', monospace; letter-spacing: -1px; }
.dash-value small { font-size: 18px; color: var(--text-muted); margin-left: 4px; }
.waveform { display: flex; align-items: flex-end; gap: 4px; height: 60px; margin-top: 16px; }
.bar { flex: 1; background: #333; border-radius: 3px; transition: height 0.15s ease-out, background 0.15s; }
.bar.active { background: #fff; box-shadow: 0 0 10px rgba(255,255,255,0.5); }
.radar-wrapper { display: flex; align-items: center; justify-content: center; gap: 24px; margin-top: 10px; }
.radar-container { width: 110px; height: 110px; position: relative; border-radius: 50%; border: 1px solid #333; overflow: hidden; background: #000; box-shadow: inset 0 0 20px rgba(255,255,255,0.05); }
.radar-sweep { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: conic-gradient(from 0deg, transparent 60%, rgba(255,255,255,0.2) 100%); animation: spin 2s linear infinite; border-radius: 50%; }
@keyframes spin { 100% { transform: rotate(360deg); } }
.radar-dot { position: absolute; top: 30%; left: 60%; width: 8px; height: 8px; background: #fff; border-radius: 50%; box-shadow: 0 0 15px #fff; animation: pulse 1.5s infinite; }
.radar-info h4 { font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 4px; }
.radar-info p { font-size: 13px; font-weight: 600; color: #a1a1aa; }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: var(--border); border-radius: 16px; overflow: hidden; }
.stat-item { background: #111; padding: 20px; text-align: center; }
.stat-label { font-size: 12px; font-weight: 700; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase; }
.stat-val { font-size: 15px; font-weight: 800; color: #fff; }
`;

export const CSS_APP = `
:root { color-scheme: dark; --bg: #050505; --text: #ffffff; --text-muted: #a1a1aa; --primary: #ffffff; --brand: #ff0055; --border: rgba(255,255,255,0.1); }
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background: var(--bg); color: var(--text); min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden; position: relative; }
#snow-bg { position: fixed; inset: 0; z-index: -1; pointer-events: none; }
.spotlight { position: fixed; inset: 0; z-index: -1; pointer-events: none; background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.05), transparent 40%); }
.bg-shapes { position: fixed; inset: 0; z-index: -1; overflow: hidden; pointer-events: none; opacity: 0.05; }
.shape { position: absolute; border: 6px solid #fff; pointer-events: none; }
.circle { width: 200px; height: 200px; border-radius: 50%; top: -10%; left: -5%; animation: float 12s infinite ease-in-out alternate; }
.triangle { width: 0; height: 0; border-left: 100px solid transparent; border-right: 100px solid transparent; border-bottom: 180px solid #fff; border-top: none; background: transparent !important; bottom: -10%; right: -5%; animation: float 15s infinite ease-in-out alternate-reverse; }
.square { width: 150px; height: 150px; top: 40%; right: 10%; animation: float 18s infinite ease-in-out alternate; }
@keyframes float { 0% { transform: translateY(0) rotate(0deg); } 100% { transform: translateY(-40px) rotate(20deg); } }

.wrapper { flex: 1; display: flex; align-items: flex-start; justify-content: center; padding: 40px 20px; position: relative; z-index: 10; }
.container { position: relative; z-index: 10; width: 100%; max-width: 1100px; display: grid; grid-template-columns: 1fr 1fr; gap: 30px; animation: fadeInUp 0.6s ease-out; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@media (max-width: 900px) { .container { grid-template-columns: 1fr; max-width: 500px; } }
.glass-card { background: rgba(20, 20, 20, 0.6); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid var(--border); border-radius: 24px; padding: 30px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8); margin-bottom: 20px; }
.header-title { font-size: 24px; font-weight: 800; color: #fff; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
.header-desc { font-size: 14px; color: var(--text-muted); margin-bottom: 20px; }

/* SKELETON */
.skeleton { background: linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 8px; }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
.skeleton-text { height: 14px; width: 100%; margin-bottom: 8px; }
.skeleton-text:last-child { width: 70%; }
.skeleton-btn { height: 50px; width: 100%; margin-top: 10px; }

/* ANNOUNCEMENT BANNER */
.announcement { background: linear-gradient(135deg, rgba(255, 0, 85, 0.15), rgba(255, 0, 85, 0.05)); border: 1px solid rgba(255, 0, 85, 0.4); border-radius: 12px; padding: 16px; margin-bottom: 20px; position: relative; display: flex; align-items: flex-start; gap: 12px; animation: slideDown 0.5s ease-out; box-shadow: 0 0 20px rgba(255,0,85,0.1); }
@keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
.announcement-icon { color: var(--brand); margin-top: 2px; animation: pulse 2s infinite; }
.announcement-content h5 { color: var(--brand); font-size: 14px; font-weight: 700; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px; }
.announcement-content p { color: #fff; font-size: 13px; line-height: 1.5; }
.announcement-close { position: absolute; top: 12px; right: 12px; background: none; border: none; color: #fff; cursor: pointer; opacity: 0.5; transition: 0.3s; }
.announcement-close:hover { opacity: 1; transform: rotate(90deg); }

/* TELEGRAM BANNER */
.telegram-banner { background: #111; border-radius: 16px; padding: 20px; color: #fff; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px; border: 1px solid var(--border); }
.telegram-banner h4 { font-size: 16px; font-weight: 700; }
.telegram-btn { background: #fff; color: #000; padding: 12px; border-radius: 12px; font-weight: 800; text-align: center; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s; position: relative; overflow: hidden; }
.telegram-btn::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent); transition: 0.5s; }
.telegram-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2); }
.telegram-btn:hover::before { left: 100%; }

/* 4-STEPPER */
.stepper { display: flex; align-items: center; justify-content: space-between; margin-bottom: 30px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 8px; position: relative; width: 25%; }
.step-line { position: absolute; top: 16px; left: 50%; width: 100%; height: 2px; background: #333; z-index: 0; }
.step:last-child .step-line { display: none; }
.step-circle { width: 32px; height: 32px; border-radius: 50%; background: #000; border: 2px solid #333; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; color: #a1a1aa; z-index: 1; transition: 0.3s; }
.step.active .step-circle { background: #fff; border-color: #fff; color: #000; box-shadow: 0 0 15px rgba(255, 255, 255, 0.4); }
.step-label { font-size: 12px; font-weight: 600; color: #a1a1aa; text-align: center; }
.step.active .step-label { color: #fff; }

/* SLIDING TIER SELECTOR */
.tier-selector { position: relative; display: flex; background: #111; padding: 6px; border-radius: 20px; margin-bottom: 24px; border: 1px solid var(--border); box-shadow: inset 0 2px 4px rgba(0,0,0,0.5); }
.tier-slider { position: absolute; top: 6px; left: 6px; width: calc(50% - 6px); height: calc(100% - 12px); background: #fff; border-radius: 14px; transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); box-shadow: 0 4px 15px rgba(255,255,255,0.2); z-index: 1; }
.tier-option { flex: 1; text-align: center; padding: 14px; cursor: pointer; font-size: 14px; font-weight: 700; color: var(--text-muted); transition: color 0.3s; position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; gap: 8px; }
.tier-option input { display: none; }
.tier-option.selected { color: #000; }
.tier-badge { font-size: 11px; padding: 3px 8px; border-radius: 6px; background: #333; color: #a1a1aa; transition: all 0.3s; }
.tier-option.selected .tier-badge { background: #000; color: #fff; }

/* KEY SELECTOR */
.key-input-group { background: #111; border: 1px solid #333; border-radius: 16px; padding: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; }
.key-input-group label { font-size: 14px; font-weight: 600; color: #a1a1aa; }
.key-badge { background: rgba(255,255,255,0.1); color: #fff; padding: 4px 10px; border-radius: 8px; font-size: 12px; font-weight: 700; }

.btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 18px 24px; border-radius: 16px; border: none; font-weight: 800; font-size: 16px; cursor: pointer; text-decoration: none; transition: all 0.4s; position: relative; overflow: hidden; }
.btn::after { content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0; background: rgba(0,0,0,0.1); border-radius: 50%; transform: translate(-50%, -50%); transition: width 0.6s, height 0.6s; }
.btn:active::after { width: 400px; height: 400px; transition: 0s; }
.btn-primary { background: #ffffff; color: #000; box-shadow: 0 10px 25px -5px rgba(255, 255, 255, 0.3); }
.btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 15px 35px -5px rgba(255, 255, 255, 0.5); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none !important; }

/* DEVICE INFO CARD */
.device-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.device-item { background: #111; border: 1px solid #333; border-radius: 16px; padding: 16px; }
.device-label { font-size: 11px; font-weight: 700; color: #a1a1aa; text-transform: uppercase; margin-bottom: 8px; }
.device-val { font-size: 20px; font-weight: 800; color: #fff; font-variant-numeric: tabular-nums; }
.device-sub { font-size: 12px; color: #a1a1aa; margin-top: 4px; line-height: 1.4; }
.device-sub b { color: #fff; }

/* PRICING & INFO */
.info-box { background: #111; border: 1px solid #333; border-radius: 16px; padding: 24px; }
.info-box h4 { font-size: 16px; font-weight: 800; margin-bottom: 16px; color: #fff; }
.info-list { list-style: none; font-size: 14px; color: #a1a1aa; line-height: 1.6; }
.info-list li { margin-bottom: 8px; }
.info-list b { color: #fff; }
.pricing { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; font-weight: 600; color: #fff; }
.pricing div { display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #000; border-radius: 8px; border: 1px solid #333; transition: all 0.3s; }
.pricing div:hover { border-color: var(--brand); background: rgba(255,0,85,0.05); }

/* FOOTER */
.footer { text-align: center; padding: 40px 20px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: auto; position: relative; z-index: 10; }
.footer p { font-size: 13px; font-weight: 500; color: var(--text-muted); }
.footer p span { color: var(--brand); font-weight: 900; text-transform: uppercase; }
.footer a { color: #fff; font-weight: 700; text-decoration: none; }

/* FLOATING WIDGET */
.float-widget { position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #000; box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3); z-index: 100; cursor: pointer; transition: transform 0.3s; text-decoration: none; animation: floatBtn 3s infinite ease-in-out; }
.float-widget:hover { transform: scale(1.1); }
@keyframes floatBtn { 0% { transform: translateY(0); } 50% { transform: translateY(-5px); } 100% { transform: translateY(0); } }
.float-dot { position: absolute; top: 0; right: 0; width: 14px; height: 14px; background: #ef4444; border-radius: 50%; border: 2px solid #000; }

/* TOAST */
.toast-container { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); z-index: 9999; display: flex; flex-direction: column; gap: 10px; pointer-events: none; }
.toast { background: #0f172a; color: #fff; padding: 14px 24px; border-radius: 12px; font-weight: 600; font-size: 14px; display: flex; align-items: center; gap: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); opacity: 0; transform: translateY(20px); animation: toastIn 0.3s forwards; border: 1px solid #333; }
.toast.success { border-left: 4px solid #10b981; }
.toast.error { border-left: 4px solid #ef4444; }
@keyframes toastIn { to { opacity: 1; transform: translateY(0); } }
@keyframes toastOut { to { opacity: 0; transform: translateY(20px); } }
`;

export const JS = `
// 1. Snowfall (Dày và đẹp hơn)
const canvas = document.createElement('canvas');
canvas.id = 'snow-bg';
document.body.prepend(canvas);
const ctx = canvas.getContext('2d');
let width, height, snowflakes;
function initCanvas() {
  width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight;
  snowflakes = [];
  const count = Math.floor(width * height / 8000); // Nhiều tuyết hơn
  for (let i = 0; i < count; i++) {
    snowflakes.push({ x: Math.random() * width, y: Math.random() * height, radius: Math.random() * 2.5 + 0.5, speedY: (Math.random() - 0.5) * 1.2, speedX: Math.random() * 1.5 - 0.75, sway: Math.random() * 3, swayPhase: Math.random() * Math.PI * 2, opacity: Math.random() * 0.5 + 0.3 });
  }
}
function drawSnow() {
  ctx.clearRect(0, 0, width, height);
  snowflakes.forEach(p => {
    ctx.fillStyle = 'rgba(255, 255, 255, ' + p.opacity + ')';
    ctx.shadowBlur = 5; ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
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

// 3. Device Info + Animated Counter
function animateValue(obj, start, end, duration) {
  if (!obj) return;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}
function updateDeviceInfo() {
  const now = new Date();
  const vnTime = new Date(now.getTime() + (7 * 60 * 60 * 1000));
  const resetTime = new Date(vnTime);
  resetTime.setHours(24, 0, 0, 0);
  const timeUntilReset = resetTime - vnTime;
  const hoursLeft = Math.floor(timeUntilReset / (1000 * 60 * 60));
  const minsLeft = Math.floor((timeUntilReset % (1000 * 60 * 60)) / (1000 * 60));

  let limit = parseInt(localStorage.getItem('daily_limit') || '5');
  let success = parseInt(localStorage.getItem('success_count') || '0');
  let lastTime = localStorage.getItem('last_time') || 'Chưa có';
  let retries = parseInt(localStorage.getItem('retry_count') || '0');

  const elLimit = document.getElementById('dev-limit'); if(elLimit) animateValue(elLimit, 0, limit, 800);
  const elSuccess = document.getElementById('dev-success'); if(elSuccess) animateValue(elSuccess, 0, success, 800);
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

// 5. Terminal Typing
setTimeout(() => {
  const term = document.getElementById('terminal');
  if(term) {
    const logs = ["Khởi tạo kết nối TLS 1.3...", "Phân tích dấu vết trình duyệt...", "Quét mẫu tấn công DDoS...", "Chờ xác minh Captcha..."];
    let idx = 0; let int = setInterval(() => { if(idx < logs.length) { term.innerHTML += '<div class="term-line">> ' + logs[idx] + '</div>'; idx++; } else { clearInterval(int); } }, 600);
  }
}, 500);

// 6. Heartbeat
const barCount = 50; let graphData = new Array(barCount).fill(10);
setInterval(() => {
  const bars = document.querySelectorAll('.bar'); if(bars.length === 0) return;
  graphData.shift(); let newVal = 10 + Math.random() * 15;
  if(Math.random() > 0.9) newVal = 60 + Math.random() * 40; else if(Math.random() > 0.7) newVal = 30 + Math.random() * 30;
  graphData.push(newVal);
  bars.forEach((bar, i) => { bar.style.height = graphData[i] + '%'; if(graphData[i] > 40) bar.classList.add('active'); else bar.classList.remove('active'); });
}, 100);

// 7. Toast Notification
window.showToast = function(message, type = 'success') {
  const container = document.querySelector('.toast-container') || (() => { const c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); return c; })();
  const toast = document.createElement('div'); toast.className = 'toast ' + type;
  toast.innerHTML = (type === 'success' ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>' : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>') + ' ' + message;
  container.appendChild(toast); if(window.lucide) lucide.createIcons();
  setTimeout(() => { toast.style.animation = 'toastOut 0.3s forwards'; setTimeout(() => toast.remove(), 300); }, 3000);
};

// 8. Copy
document.addEventListener('click', function(e) {
  var b = e.target.closest('[data-copy]'); if(!b) return;
  var t = document.getElementById(b.dataset.copy); if(!t) return;
  navigator.clipboard.writeText(t.textContent).then(() => { showToast('Đã sao chép Key vào bộ nhớ tạm!', 'success'); });
});
`;
