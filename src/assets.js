// --- CSS CHECKPOINT ---
export const CSS_CHECKPOINT = `
:root { color-scheme: light only; --bg: #f4f6f9; --text: #09090b; --text-muted: #64748b; --primary: #4f46e5; --accent: #ec4899; --border: rgba(0,0,0,0.06); }
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background: var(--bg); color: var(--text); min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden; position: relative; }
#network-bg { position: fixed; inset: 0; z-index: -1; pointer-events: none; }
.bg-grid { position: fixed; inset: 0; z-index: -1; pointer-events: none; background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px); background-size: 40px 40px; mask-image: radial-gradient(circle at center, black 10%, transparent 80%); -webkit-mask-image: radial-gradient(circle at center, black 10%, transparent 80%); }

.top-nav { position: relative; z-index: 10; width: 100%; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; background: rgba(244, 246, 249, 0.8); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); }
.logo { font-size: 18px; font-weight: 800; display: flex; align-items: center; gap: 10px; color: #0f172a; }
.logo-icon { width: 32px; height: 32px; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; box-shadow: 0 4px 12px rgba(79,70,229,0.4); }
.status-badge { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: #059669; background: #ecfdf5; padding: 8px 16px; border-radius: 30px; border: 1px solid #a7f3d0; box-shadow: 0 2px 10px rgba(16,185,129,0.1); }
.status-dot { width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 10px #10b981; animation: pulse 2s infinite; }
.time-badge { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 800; color: var(--primary); background: rgba(79, 70, 229, 0.1); padding: 8px 16px; border-radius: 30px; border: 1px solid rgba(79, 70, 229, 0.2); font-family: 'JetBrains Mono', monospace; }
@keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.2); opacity: 0.7; } 100% { transform: scale(1); opacity: 1; } }

.container-check { position: relative; z-index: 10; width: 100%; max-width: 1200px; margin: 60px auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; padding: 0 40px; align-items: center; }
@media (max-width: 900px) { .container-check { grid-template-columns: 1fr; gap: 40px; padding: 0 20px; margin: 30px auto; } }

.left { display: flex; flex-direction: column; }
.badge-security { display: inline-flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 800; color: var(--primary); margin-bottom: 24px; text-transform: uppercase; letter-spacing: 2px; }
.badge-security::before { content: ''; display: block; width: 30px; height: 3px; background: var(--primary); border-radius: 2px; }
h1 { font-size: 54px; font-weight: 800; line-height: 1.05; margin-bottom: 24px; color: #0f172a; letter-spacing: -0.04em; }
h1 span { background: linear-gradient(135deg, #4f46e5, #ec4899); -webkit-background-clip: text; background-clip: text; color: transparent; }
.desc { font-size: 16px; line-height: 1.7; color: var(--text-muted); margin-bottom: 40px; font-weight: 500; max-width: 90%; }

.terminal-box { background: #0f172a; border-radius: 16px; padding: 20px; font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #38bdf8; height: 160px; overflow: hidden; margin-bottom: 30px; box-shadow: 0 20px 40px rgba(15,23,42,0.15); position: relative; }
.terminal-box::before { content: 'root@system:~#'; color: #10b981; display: block; margin-bottom: 10px; font-weight: bold; opacity: 0.8; }
.term-line { margin-bottom: 6px; opacity: 0; animation: typeIn 0.3s forwards; }
@keyframes typeIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }

.challenge-module { background: #ffffff; border-radius: 24px; padding: 40px; box-shadow: 0 24px 60px -12px rgba(79,70,229,0.15), inset 0 0 0 1px rgba(255,255,255,1); position: relative; overflow: hidden; }
.challenge-module::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #4f46e5, #ec4899); }
.cf-turnstile { display: flex; justify-content: center; margin-bottom: 24px; position: relative; z-index: 2; }
.help-text { text-align: center; font-size: 14px; color: var(--text-muted); line-height: 1.6; font-weight: 500; }
.help-text b { color: #0f172a; }

.stepper { display: flex; align-items: center; justify-content: space-between; margin-top: 40px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.step-circle { width: 32px; height: 32px; border-radius: 50%; background: #fff; border: 2px solid #cbd5e1; display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
.step.completed .step-circle { background: #10b981; border-color: #10b981; color: #fff; font-size: 14px; box-shadow: 0 0 15px rgba(16,185,129,0.4); }
.step.completed .step-circle::after { content: '✓'; }
.step.active .step-circle { border-color: #4f46e5; background: #4f46e5; box-shadow: 0 0 0 6px rgba(79,70,229,0.15); }
.step-label { font-size: 13px; font-weight: 700; color: var(--text-muted); transition: 0.3s; }
.step.completed .step-label, .step.active .step-label { color: #0f172a; }
.step-line { flex: 1; height: 2px; background: #e2e8f0; margin: 0 15px; margin-bottom: 28px; border-radius: 2px; }
.step-line.completed { background: #10b981; }
.step-line.active { background: linear-gradient(90deg, #10b981, #4f46e5); }

.right { display: grid; gap: 20px; }
.dash-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,1); border-radius: 24px; padding: 28px; box-shadow: 0 15px 35px -5px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.02); transition: transform 0.3s, box-shadow 0.3s; }
.dash-card:hover { transform: translateY(-4px); box-shadow: 0 25px 45px -5px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02); }
.dash-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.dash-title { font-size: 13px; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; }
.dash-value { font-size: 38px; font-weight: 800; color: #0f172a; font-family: 'JetBrains Mono', monospace; letter-spacing: -1px; }
.dash-value small { font-size: 18px; color: var(--text-muted); margin-left: 4px; }
.waveform { display: flex; align-items: flex-end; gap: 4px; height: 60px; margin-top: 16px; }
.bar { flex: 1; background: #e2e8f0; border-radius: 3px; transition: height 0.15s ease-out, background 0.15s; }
.bar.active { background: linear-gradient(to top, #4f46e5, #ec4899); box-shadow: 0 0 12px rgba(79,70,229,0.5); }
.radar-wrapper { display: flex; align-items: center; justify-content: center; gap: 24px; margin-top: 10px; }
.radar-container { width: 110px; height: 110px; position: relative; border-radius: 50%; border: 1px solid rgba(79,70,229,0.2); overflow: hidden; background: #f8fafc; box-shadow: inset 0 0 20px rgba(79,70,229,0.05); }
.radar-sweep { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: conic-gradient(from 0deg, transparent 60%, rgba(79,70,229,0.3) 100%); animation: spin 2s linear infinite; border-radius: 50%; }
@keyframes spin { 100% { transform: rotate(360deg); } }
.radar-dot { position: absolute; top: 30%; left: 60%; width: 8px; height: 8px; background: #ec4899; border-radius: 50%; box-shadow: 0 0 12px #ec4899; animation: pulse 1.5s infinite; }
.radar-info h4 { font-size: 16px; font-weight: 800; color: #0f172a; margin-bottom: 4px; }
.radar-info p { font-size: 13px; font-weight: 600; color: var(--primary); }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: var(--border); border-radius: 16px; overflow: hidden; }
.stat-item { background: #fff; padding: 20px; text-align: center; }
.stat-label { font-size: 12px; font-weight: 700; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase; }
.stat-val { font-size: 15px; font-weight: 800; color: #0f172a; }
`;

// --- CSS APP ---
export const CSS_APP = `
:root { color-scheme: light only; --bg: #f0f4f8; --text: #0f172a; --text-muted: #64748b; --primary: #4f46e5; --accent: #ec4899; --card-bg: rgba(255, 255, 255, 0.85); --card-border: rgba(255, 255, 255, 0.6); }
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background: var(--bg); color: var(--text); min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden; position: relative; }
#network-bg { position: fixed; inset: 0; z-index: -1; pointer-events: none; opacity: 0.3; }
.bg-shapes { position: fixed; inset: 0; z-index: -1; overflow: hidden; pointer-events: none; opacity: 0.04; }
.shape { position: absolute; border: 6px solid var(--accent); pointer-events: none; }
.circle { width: 200px; height: 200px; border-radius: 50%; top: -10%; left: -5%; animation: float 12s infinite ease-in-out alternate; }
.triangle { width: 0; height: 0; border-left: 100px solid transparent; border-right: 100px solid transparent; border-bottom: 180px solid var(--primary); border-top: none; background: transparent !important; bottom: -10%; right: -5%; animation: float 15s infinite ease-in-out alternate-reverse; }
.square { width: 150px; height: 150px; top: 40%; right: 10%; animation: float 18s infinite ease-in-out alternate; }
@keyframes float { 0% { transform: translateY(0) rotate(0deg); } 100% { transform: translateY(-40px) rotate(20deg); } }

.wrapper { flex: 1; display: flex; align-items: center; justify-content: center; padding: 40px 20px; position: relative; z-index: 10; }
.container { position: relative; z-index: 10; width: 100%; max-width: 1000px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 30px; }
@media (max-width: 900px) { .container { grid-template-columns: 1fr; max-width: 500px; } }
.glass-card { background: var(--card-bg); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid var(--card-border); border-radius: 32px; padding: 40px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1); }
.hero { text-align: center; }
.badge { display: inline-block; padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 700; background: rgba(79, 70, 229, 0.1); color: var(--primary); margin-bottom: 24px; border: 1px solid rgba(79, 70, 229, 0.2); }
h1 { font-size: 40px; font-weight: 800; line-height: 1.1; margin-bottom: 12px; letter-spacing: -0.03em; }
.grad { background: linear-gradient(135deg, #4f46e5, #ec4899); -webkit-background-clip: text; background-clip: text; color: transparent; }
.sub { color: var(--text-muted); font-size: 15px; line-height: 1.6; margin-bottom: 30px; font-weight: 500; }
.tier-selector { display: flex; gap: 12px; margin-bottom: 24px; background: rgba(0,0,0,0.03); padding: 6px; border-radius: 18px; border: 1px solid var(--card-border); }
.tier-option { flex: 1; text-align: center; padding: 14px; border-radius: 14px; cursor: pointer; font-size: 14px; font-weight: 600; color: var(--text-muted); transition: all 0.3s; border: 1px solid transparent; display: flex; align-items: center; justify-content: center; gap: 8px; }
.tier-option input { display: none; }
.tier-option.selected { background: #ffffff; color: var(--primary); border-color: rgba(0,0,0,0.05); box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
.tier-badge { font-size: 11px; padding: 3px 8px; border-radius: 6px; background: var(--primary); color: #fff; }
.tier-option[data-tier="VIP"] .tier-badge { background: var(--accent); }
.btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 18px 24px; border-radius: 16px; border: none; font-weight: 700; font-size: 16px; cursor: pointer; text-decoration: none; transition: all 0.3s; }
.btn-primary { background: linear-gradient(135deg, #4f46e5, #7c3aed); color: #fff; box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.4); }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 15px 35px -5px rgba(79, 70, 229, 0.5); }
.btn-ghost { background: #f8fafc; border: 1px solid #e2e8f0; color: var(--text); }
.btn-youtube { background: #ff0000; color: #fff; box-shadow: 0 10px 25px -5px rgba(255,0,0,0.3); }
.btn-ads { background: linear-gradient(135deg, #f59e0b, #f97316); color: #fff; box-shadow: 0 10px 25px -5px rgba(245,158,11,0.3); }
.info-col { display: flex; flex-direction: column; gap: 20px; }
.stat-card { display: flex; align-items: center; gap: 16px; padding: 24px; background: #ffffff; border: 1px solid var(--card-border); border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
.stat-icon { width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center; background: rgba(79, 70, 229, 0.1); color: var(--primary); }
.stat-info h4 { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
.stat-info p { font-size: 13px; color: var(--text-muted); }
.status-dot { width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 10px #10b981; display: inline-block; margin-right: 6px; }
.stepper { display: flex; align-items: center; justify-content: space-between; margin-bottom: 36px; padding: 0 10px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 8px; opacity: 0.4; transition: 0.3s; }
.step.active { opacity: 1; }
.step .dot { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #f1f5f9; border: 2px solid #cbd5e1; font-weight: 700; font-size: 14px; color: var(--text-muted); transition: 0.3s; }
.step.active .dot { background: var(--primary); border-color: var(--primary); color: #fff; box-shadow: 0 0 20px rgba(79,70,229,0.4); }
.step small { font-size: 12px; font-weight: 600; color: var(--text-muted); }
.step.active small { color: var(--primary); }
.line { flex: 1; height: 3px; background: #e2e8f0; margin: 0 12px; margin-bottom: 24px; border-radius: 4px; transition: 0.3s; }
.line.active { background: var(--primary); }
.key-box { display: flex; gap: 12px; align-items: center; margin: 24px 0 20px; padding: 20px; background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 20px; }
.key-box span { flex: 1; font-family: 'JetBrains Mono', monospace; font-size: 24px; font-weight: 800; color: var(--primary); word-break: break-all; letter-spacing: 2px; text-align: center; }
.skeleton { background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 8px; height: 24px; width: 100%; }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
.faq { margin-top: 40px; }
.faq-item { background: #fff; border: 1px solid var(--border); border-radius: 16px; margin-bottom: 10px; overflow: hidden; }
.faq-item summary { padding: 20px; font-weight: 600; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; }
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary::after { content: '+'; font-size: 20px; color: var(--primary); }
.faq-item[open] summary::after { content: '-'; }
.faq-item p { padding: 0 20px 20px; color: var(--text-muted); font-size: 14px; line-height: 1.6; }
.footer { text-align: center; padding: 30px 20px; color: var(--text-muted); font-size: 14px; border-top: 1px solid var(--border); margin-top: 40px; position: relative; z-index: 10; }
.footer a { color: var(--primary); text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 6px; margin: 0 10px; }
`;

// --- JAVASCRIPT ---
export const JS = `
const canvas = document.createElement('canvas');
canvas.id = 'network-bg';
document.body.prepend(canvas);
const ctx = canvas.getContext('2d');
let width, height, particles;

function initCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  particles = [];
  const count = Math.floor(width * height / 12000);
  for (let i = 0; i < count; i++) {
    particles.push({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4, radius: Math.random() * 2 + 1 });
  }
}
function drawNetwork() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(79, 70, 229, 0.2)';
  particles.forEach((p, i) => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2); ctx.fill();
    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
      if (dist < 150) {
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = 'rgba(79, 70, 229, ' + (1 - dist/150) * 0.1 + ')';
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(drawNetwork);
}
window.addEventListener('resize', initCanvas);
initCanvas(); drawNetwork();

document.addEventListener('click', function(e) {
  var b = e.target.closest('[data-copy]'); if(!b) return;
  var t = document.getElementById(b.dataset.copy); if(!t) return;
  navigator.clipboard.writeText(t.textContent).then(() => {
    var orig = b.innerHTML; b.innerHTML = '<i data-lucide="check"></i> Đã Copy'; lucide.createIcons();
    setTimeout(() => { b.innerHTML = orig; lucide.createIcons(); }, 2000);
  });
});

function showSkeleton() {
  const keyBox = document.getElementById('keyContainer');
  const form = document.querySelector('form[action="/verify/ads"]');
  if(keyBox) { keyBox.innerHTML = '<div class="key-box"><div class="skeleton" style="height:40px;"></div></div>'; }
  if(form) {
    const btn = form.querySelector('button');
    if(btn) { btn.innerHTML = '<div class="skeleton" style="width:150px; height:20px;"></div>'; btn.disabled = true; }
  }
}

setInterval(() => {
  const clockEl = document.getElementById('vn-clock');
  if(clockEl) {
    const vnTime = new Intl.DateTimeFormat('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date());
    clockEl.innerText = vnTime;
  }
}, 1000);

setTimeout(() => {
  const term = document.getElementById('terminal');
  if(term) {
    const logs = ["Khởi tạo kết nối TLS 1.3...", "Phân tích dấu vết trình duyệt...", "Quét mẫu tấn công DDoS...", "Chờ xác minh Captcha..."];
    let idx = 0;
    let int = setInterval(() => {
      if(idx < logs.length) {
        term.innerHTML += '<div class="term-line">> ' + logs[idx] + '</div>';
        idx++;
      } else { clearInterval(int); }
    }, 600);
  }
}, 500);

// LOGIC ĐỒ THỊ NHỊP TIM (REALISTIC GRAPH)
const barCount = 50;
let graphData = new Array(barCount).fill(10);
setInterval(() => {
  const bars = document.querySelectorAll('.bar');
  if(bars.length === 0) return;
  
  graphData.shift(); // Dịch dữ liệu sang trái
  
  let newVal = 10 + Math.random() * 20; // Mức nền
  if(Math.random() > 0.85) newVal = 50 + Math.random() * 40; // Thỉnh thoảng nhảy vọt (nhịp tim/DDoS)
  
  graphData.push(newVal);
  
  bars.forEach((bar, i) => {
    bar.style.height = graphData[i] + '%';
    if(graphData[i] > 40) bar.classList.add('active');
    else bar.classList.remove('active');
  });
}, 100);
`;
