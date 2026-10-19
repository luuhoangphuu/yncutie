export const CSS = `
:root { 
  color-scheme: light only; 
  --bg: #ffffff; 
  --text: #0f172a;
  --text-muted: #64748b;
  --primary: #4f46e5; 
  --primary-glow: rgba(79, 70, 229, 0.2);
  --accent: #ec4899;
  --card-bg: rgba(255, 255, 255, 0.7); 
  --card-border: rgba(0, 0, 0, 0.05); 
  --card-shadow: 0 24px 48px -12px rgba(15, 23, 42, 0.08);
}
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background: var(--bg); color: var(--text); min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow-x: hidden; position: relative; padding: 20px; }

/* Canvas Background Grid */
#network-bg { position: fixed; inset: 0; z-index: 0; pointer-events: none; background: radial-gradient(circle at 50% 50%, #ffffff 0%, #f8fafc 100%); }

/* Layout */
.container { position: relative; z-index: 10; width: 100%; max-width: 1100px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 30px; }
@media (max-width: 900px) { .container { grid-template-columns: 1fr; max-width: 500px; } }

/* Glass Card */
.glass-card { background: var(--card-bg); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid var(--card-border); border-radius: 32px; padding: 40px; box-shadow: var(--card-shadow); transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.glass-card:hover { transform: translateY(-4px); box-shadow: 0 35px 60px -15px rgba(15, 23, 42, 0.12); }
.hero { text-align: center; }
.badge { display: inline-block; padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 700; background: rgba(79, 70, 229, 0.1); color: var(--primary); margin-bottom: 24px; border: 1px solid rgba(79, 70, 229, 0.2); }
h1 { font-size: 40px; font-weight: 800; line-height: 1.1; margin-bottom: 12px; letter-spacing: -0.03em; }
h2 { font-size: 24px; font-weight: 700; margin-bottom: 12px; }
.grad { background: linear-gradient(135deg, #4f46e5, #ec4899); -webkit-background-clip: text; background-clip: text; color: transparent; }
.sub { color: var(--text-muted); font-size: 15px; line-height: 1.6; margin-bottom: 30px; font-weight: 500; }

/* Tier Selector */
.tier-selector { display: flex; gap: 12px; margin-bottom: 24px; background: rgba(0,0,0,0.03); padding: 6px; border-radius: 18px; border: 1px solid var(--card-border); }
.tier-option { flex: 1; text-align: center; padding: 14px; border-radius: 14px; cursor: pointer; font-size: 14px; font-weight: 600; color: var(--text-muted); transition: all 0.3s; border: 1px solid transparent; }
.tier-option input { display: none; }
.tier-option.selected { background: #ffffff; color: var(--primary); border-color: rgba(0,0,0,0.05); box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
.tier-badge { font-size: 11px; padding: 3px 8px; border-radius: 6px; margin-left: 6px; background: var(--primary); color: #fff; }
.tier-option[data-tier="VIP"] .tier-badge { background: var(--accent); }

/* Buttons */
.btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 18px 24px; border-radius: 16px; border: none; font-weight: 700; font-size: 16px; cursor: pointer; text-decoration: none; transition: all 0.3s; }
.btn-primary { background: linear-gradient(135deg, #4f46e5, #7c3aed); color: #fff; box-shadow: 0 10px 25px -5px var(--primary-glow); }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 15px 35px -5px var(--primary-glow); }
.btn-ghost { background: #f8fafc; border: 1px solid #e2e8f0; color: var(--text); }
.btn-ghost:hover { background: #f1f5f9; }
.btn-youtube { background: #ff0000; color: #fff; box-shadow: 0 10px 25px -5px rgba(255,0,0,0.3); }
.btn-ads { background: linear-gradient(135deg, #f59e0b, #f97316); color: #fff; box-shadow: 0 10px 25px -5px rgba(245,158,11,0.3); }

/* Info Column */
.info-col { display: flex; flex-direction: column; gap: 20px; }
.stat-card { display: flex; align-items: center; gap: 16px; padding: 24px; background: #ffffff; border: 1px solid var(--card-border); border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.02); }
.stat-icon { width: 54px; height: 54px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; background: rgba(79, 70, 229, 0.1); color: var(--primary); }
.stat-info h4 { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
.stat-info p { font-size: 13px; color: var(--text-muted); }
.status-dot { width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 10px #10b981; display: inline-block; margin-right: 6px; }

/* Stepper */
.stepper { display: flex; align-items: center; justify-content: space-between; margin-bottom: 36px; padding: 0 10px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 8px; opacity: 0.4; transition: 0.3s; }
.step.active { opacity: 1; }
.step .dot { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #f1f5f9; border: 2px solid #cbd5e1; font-weight: 700; font-size: 14px; color: var(--text-muted); transition: 0.3s; }
.step.active .dot { background: var(--primary); border-color: var(--primary); color: #fff; box-shadow: 0 0 20px var(--primary-glow); }
.step small { font-size: 12px; font-weight: 600; color: var(--text-muted); }
.step.active small { color: var(--primary); }
.line { flex: 1; height: 3px; background: #e2e8f0; margin: 0 12px; margin-bottom: 24px; border-radius: 4px; transition: 0.3s; }
.line.active { background: var(--primary); }

/* Key Box & Skeleton */
.key-box { display: flex; gap: 12px; align-items: center; margin: 24px 0 20px; padding: 20px; background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 20px; }
.key-box span { flex: 1; font-family: 'JetBrains Mono', monospace; font-size: 24px; font-weight: 800; color: var(--primary); word-break: break-all; letter-spacing: 2px; text-align: center; }
.skeleton { background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 8px; height: 24px; width: 100%; }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

/* Terminal */
.terminal { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--primary); height: 150px; overflow: hidden; box-shadow: inset 0 2px 10px rgba(0,0,0,0.02); }
.log-line { margin-bottom: 6px; opacity: 0; animation: typeIn 0.3s forwards; }
@keyframes typeIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
`;

export const JS = `
// Particle Network Grid
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
    particles.push({
      x: Math.random() * width, y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 1
    });
  }
}
function drawNetwork() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(79, 70, 229, 0.4)';
  ctx.strokeStyle = 'rgba(79, 70, 229, 0.1)';
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
        ctx.strokeStyle = 'rgba(79, 70, 229, ' + (1 - dist/150) * 0.2 + ')';
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(drawNetwork);
}
window.addEventListener('resize', initCanvas);
initCanvas(); drawNetwork();

// Copy & Skeleton
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
`;
