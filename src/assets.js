// --- CSS CHO CHECKPOINT (DASHBOARD SIÊU PRO) ---
export const CSS_CHECKPOINT = `
:root { color-scheme: light only; --bg: #f8fafc; --text: #0f172a; --text-muted: #64748b; --primary: #4f46e5; --border: #e2e8f0; }
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background: var(--bg); color: var(--text); min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden; position: relative; }
#network-bg { position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: 0.4; }
.bg-shapes { position: fixed; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; opacity: 0.05; }
.shape { position: absolute; border: 4px solid #000; }
.circle { width: 150px; height: 150px; border-radius: 50%; top: 10%; left: 5%; animation: float 10s infinite ease-in-out alternate; }
.triangle { width: 0; height: 0; border-left: 80px solid transparent; border-right: 80px solid transparent; border-bottom: 140px solid #000; border-top: none; background: transparent !important; bottom: 20%; right: 10%; animation: float 12s infinite ease-in-out alternate-reverse; }
.square { width: 120px; height: 120px; bottom: 10%; left: 20%; animation: float 15s infinite ease-in-out alternate; }
@keyframes float { 0% { transform: translateY(0) rotate(0deg); } 100% { transform: translateY(-30px) rotate(15deg); } }

.top-nav { position: relative; z-index: 10; width: 100%; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); }
.logo { font-size: 18px; font-weight: 800; display: flex; align-items: center; gap: 10px; color: #1e293b; }
.logo-icon { width: 32px; height: 32px; background: #e0e7ff; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--primary); }
.status-badge { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: #10b981; }
.status-dot { width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 10px #10b981; }

.container-check { position: relative; z-index: 10; width: 100%; max-width: 1200px; margin: 40px auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 50px; padding: 0 40px; }
@media (max-width: 900px) { .container-check { grid-template-columns: 1fr; gap: 30px; padding: 0 20px; } }

.left { display: flex; flex-direction: column; justify-content: center; }
.badge-security { display: inline-flex; align-items: center; gap: 10px; font-size: 14px; font-weight: 700; color: var(--primary); margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px; }
.badge-security::before { content: ''; display: block; width: 30px; height: 2px; background: var(--primary); }
h1 { font-size: 46px; font-weight: 800; line-height: 1.1; margin-bottom: 20px; color: #0f172a; letter-spacing: -0.02em; }
.desc { font-size: 16px; line-height: 1.6; color: var(--text-muted); margin-bottom: 30px; }

.challenge-box { border: 1px solid var(--border); border-radius: 16px; padding: 30px; background: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.05); margin-bottom: 30px; transition: all 0.3s; }
.challenge-box:hover { border-color: #cbd5e1; box-shadow: 0 15px 40px rgba(0,0,0,0.08); }
.cf-turnstile { display: flex; justify-content: center; margin-bottom: 20px; }
.help-text { text-align: center; font-size: 13px; color: var(--text-muted); line-height: 1.5; }
.help-text b { color: var(--text); }

.stepper { display: flex; align-items: center; justify-content: space-between; }
.step { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.step-circle { width: 24px; height: 24px; border-radius: 50%; background: #fff; border: 2px solid #cbd5e1; display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
.step.completed .step-circle { background: #10b981; border-color: #10b981; color: #fff; font-size: 12px; }
.step.completed .step-circle::after { content: '✓'; }
.step.active .step-circle { border-color: var(--primary); background: var(--primary); box-shadow: 0 0 0 4px rgba(79,70,229,0.2); }
.step-label { font-size: 13px; font-weight: 600; color: var(--text-muted); }
.step.completed .step-label, .step.active .step-label { color: var(--text); }
.step-line { flex: 1; height: 2px; background: var(--border); margin: 0 10px; margin-bottom: 24px; }
.step-line.completed { background: #10b981; }
.step-line.active { background: linear-gradient(90deg, #10b981, var(--primary)); }

/* Right Side (Cards) */
.right { display: flex; flex-direction: column; gap: 20px; }
.card-light { background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); border: 1px solid var(--border); border-radius: 16px; padding: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); transition: transform 0.3s; }
.card-light:hover { transform: translateY(-2px); }
.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
.card-title { font-size: 14px; font-weight: 600; color: var(--text-muted); }
.card-value { font-size: 28px; font-weight: 800; color: #0f172a; font-family: monospace; }
.card-value small { font-size: 16px; color: var(--text-muted); }

.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.radar-container { width: 100px; height: 100px; margin: 0 auto; position: relative; border-radius: 50%; border: 1px solid var(--border); overflow: hidden; background: #f8fafc; }
.radar-sweep { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: conic-gradient(from 0deg, transparent 70%, rgba(79,70,229,0.2) 100%); animation: spin 3s linear infinite; border-radius: 50%; }
@keyframes spin { 100% { transform: rotate(360deg); } }
.radar-dot { position: absolute; top: 30%; left: 60%; width: 6px; height: 6px; background: var(--primary); border-radius: 50%; box-shadow: 0 0 10px var(--primary); animation: pulse 2s infinite; }
@keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }

.graph-container { display: flex; align-items: flex-end; gap: 3px; height: 40px; margin-top: 10px; }
.bar { flex: 1; background: #e2e8f0; border-radius: 2px; transition: height 0.3s, background 0.3s; }
.bar.active { background: #10b981; }

.stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
.stat-item { background: #fff; padding: 15px; text-align: center; }
.stat-label { font-size: 12px; color: var(--text-muted); margin-bottom: 5px; }
.stat-val { font-size: 14px; font-weight: 700; color: var(--text); }
`;

// --- CSS CHO APP (SQUID GAME LIGHT THEME) ---
export const CSS_APP = `
:root { color-scheme: light only; --bg: #f0f4f8; --text: #0f172a; --text-muted: #64748b; --primary: #4f46e5; --accent: #ec4899; --card-bg: rgba(255, 255, 255, 0.85); --card-border: rgba(255, 255, 255, 0.6); }
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background: var(--bg); color: var(--text); min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow-x: hidden; padding: 20px; position: relative; }
#network-bg { position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: 0.3; }
.bg-shapes { position: fixed; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; opacity: 0.03; }
.shape { position: absolute; border: 6px solid var(--accent); }
.circle { width: 200px; height: 200px; border-radius: 50%; top: -10%; left: -5%; animation: float 12s infinite ease-in-out alternate; }
.triangle { width: 0; height: 0; border-left: 100px solid transparent; border-right: 100px solid transparent; border-bottom: 180px solid var(--primary); border-top: none; background: transparent !important; bottom: -10%; right: -5%; animation: float 15s infinite ease-in-out alternate-reverse; }
.square { width: 150px; height: 150px; top: 40%; right: 10%; animation: float 18s infinite ease-in-out alternate; }
@keyframes float { 0% { transform: translateY(0) rotate(0deg); } 100% { transform: translateY(-40px) rotate(20deg); } }

.container { position: relative; z-index: 10; width: 100%; max-width: 1000px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 30px; }
@media (max-width: 900px) { .container { grid-template-columns: 1fr; max-width: 500px; } }
.glass-card { background: var(--card-bg); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid var(--card-border); border-radius: 32px; padding: 40px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1); }
.hero { text-align: center; }
.badge { display: inline-block; padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 700; background: rgba(79, 70, 229, 0.1); color: var(--primary); margin-bottom: 24px; border: 1px solid rgba(79, 70, 229, 0.2); }
h1 { font-size: 40px; font-weight: 800; line-height: 1.1; margin-bottom: 12px; letter-spacing: -0.03em; }
.grad { background: linear-gradient(135deg, #4f46e5, #ec4899); -webkit-background-clip: text; background-clip: text; color: transparent; }
.sub { color: var(--text-muted); font-size: 15px; line-height: 1.6; margin-bottom: 30px; font-weight: 500; }
.tier-selector { display: flex; gap: 12px; margin-bottom: 24px; background: rgba(0,0,0,0.03); padding: 6px; border-radius: 18px; border: 1px solid var(--card-border); }
.tier-option { flex: 1; text-align: center; padding: 14px; border-radius: 14px; cursor: pointer; font-size: 14px; font-weight: 600; color: var(--text-muted); transition: all 0.3s; border: 1px solid transparent; }
.tier-option input { display: none; }
.tier-option.selected { background: #ffffff; color: var(--primary); border-color: rgba(0,0,0,0.05); box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
.tier-badge { font-size: 11px; padding: 3px 8px; border-radius: 6px; margin-left: 6px; background: var(--primary); color: #fff; }
.tier-option[data-tier="VIP"] .tier-badge { background: var(--accent); }
.btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 18px 24px; border-radius: 16px; border: none; font-weight: 700; font-size: 16px; cursor: pointer; text-decoration: none; transition: all 0.3s; }
.btn-primary { background: linear-gradient(135deg, #4f46e5, #7c3aed); color: #fff; box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.4); }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 15px 35px -5px rgba(79, 70, 229, 0.5); }
.btn-ghost { background: #f8fafc; border: 1px solid #e2e8f0; color: var(--text); }
.btn-ghost:hover { background: #f1f5f9; }
.btn-youtube { background: #ff0000; color: #fff; box-shadow: 0 10px 25px -5px rgba(255,0,0,0.3); }
.btn-ads { background: linear-gradient(135deg, #f59e0b, #f97316); color: #fff; box-shadow: 0 10px 25px -5px rgba(245,158,11,0.3); }

.info-col { display: flex; flex-direction: column; gap: 20px; }
.stat-card { display: flex; align-items: center; gap: 16px; padding: 24px; background: #ffffff; border: 1px solid var(--card-border); border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); transition: transform 0.3s; }
.stat-card:hover { transform: translateY(-2px); }
.stat-icon { width: 54px; height: 54px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; background: rgba(79, 70, 229, 0.1); color: var(--primary); }
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
.skeleton { background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 8px; height: 24px; width: 100%; }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
`;

// --- JAVASCRIPT CHUNG ---
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
  const count = Math.floor(width * height / 15000);
  for (let i = 0; i < count; i++) {
    particles.push({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, radius: Math.random() * 1.5 + 1 });
  }
}
function drawNetwork() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(79, 70, 229, 0.3)';
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
    var orig = b.innerHTML; b.innerHTML = '✓ Đã Copy'; setTimeout(() => b.innerHTML = orig, 2000);
  });
});

function showSkeleton() {
  const keyBox = document.getElementById('keyContainer');
  if(keyBox) { keyBox.innerHTML = '<div class="key-box"><div class="skeleton"></div></div><button class="btn btn-primary" disabled style="opacity:0.5">ĐANG LẤY KEY...</button>'; }
}

setInterval(() => {
  const bars = document.querySelectorAll('.bar');
  if(bars.length > 0) {
    bars.forEach((bar, index) => {
      if(index > bars.length - 15) {
        bar.style.height = Math.floor(Math.random() * 80 + 20) + '%';
        bar.classList.add('active');
        setTimeout(() => bar.classList.remove('active'), 200);
      }
    });
  }
}, 150);
`;
