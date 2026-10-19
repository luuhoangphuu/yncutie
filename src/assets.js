export const CSS = `
:root { 
  color-scheme: dark; 
  --bg: #070b14; 
  --text: #f8fafc;
  --text-muted: #94a3b8;
  --primary: #6366f1; 
  --primary-glow: rgba(99, 102, 241, 0.4);
  --accent: #ec4899;
  --glass-bg: rgba(15, 23, 42, 0.6); 
  --glass-border: rgba(255, 255, 255, 0.08); 
  --card-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
body { background: var(--bg); color: var(--text); min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow-x: hidden; position: relative; padding: 20px; }

/* Animated Background */
.bg-anim { position: fixed; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
.blob { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.5; animation: float 20s infinite ease-in-out alternate; }
.blob-1 { width: 600px; height: 600px; background: rgba(99, 102, 241, 0.3); top: -10%; left: -10%; }
.blob-2 { width: 500px; height: 500px; background: rgba(236, 72, 153, 0.2); bottom: -10%; right: -10%; animation-delay: -5s; }
.blob-3 { width: 400px; height: 400px; background: rgba(34, 211, 238, 0.15); top: 40%; left: 40%; animation-delay: -10s; }
@keyframes float { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(50px, -50px) scale(1.1); } }

/* Layout */
.container { position: relative; z-index: 10; width: 100%; max-width: 1100px; display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
@media (max-width: 900px) { .container { grid-template-columns: 1fr; max-width: 500px; } }

/* Glass Card */
.glass-card { background: var(--glass-bg); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid var(--glass-border); border-radius: 28px; padding: 40px; box-shadow: var(--card-shadow); transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.glass-card:hover { transform: translateY(-4px); box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.6); }
.hero { text-align: center; }
.badge { display: inline-block; padding: 8px 16px; border-radius: 100px; font-size: 13px; font-weight: 700; background: rgba(99, 102, 241, 0.15); color: #a5b4fc; margin-bottom: 24px; border: 1px solid rgba(99, 102, 241, 0.3); }
h1 { font-size: 38px; font-weight: 800; line-height: 1.1; margin-bottom: 12px; letter-spacing: -0.03em; }
h2 { font-size: 24px; font-weight: 700; margin-bottom: 12px; }
.grad { background: linear-gradient(135deg, #818cf8, #ec4899); -webkit-background-clip: text; background-clip: text; color: transparent; }
.sub { color: var(--text-muted); font-size: 15px; line-height: 1.6; margin-bottom: 30px; font-weight: 500; }

/* Tier Selector */
.tier-selector { display: flex; gap: 12px; margin-bottom: 24px; background: rgba(0,0,0,0.2); padding: 6px; border-radius: 18px; border: 1px solid var(--glass-border); }
.tier-option { flex: 1; text-align: center; padding: 14px; border-radius: 14px; cursor: pointer; font-size: 14px; font-weight: 600; color: var(--text-muted); transition: all 0.3s; border: 1px solid transparent; }
.tier-option input { display: none; }
.tier-option.selected { background: rgba(255,255,255,0.05); color: #fff; border-color: rgba(255,255,255,0.1); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
.tier-badge { font-size: 11px; padding: 3px 8px; border-radius: 6px; margin-left: 6px; background: var(--primary); color: #fff; }
.tier-option[data-tier="VIP"] .tier-badge { background: var(--accent); }

/* Buttons */
.btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 18px 24px; border-radius: 16px; border: none; font-weight: 700; font-size: 16px; cursor: pointer; text-decoration: none; transition: all 0.3s; }
.btn-primary { background: linear-gradient(135deg, #6366f1, #8b5cf6); color: #fff; box-shadow: 0 10px 25px -5px var(--primary-glow); }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 15px 35px -5px var(--primary-glow); }
.btn-ghost { background: transparent; border: 1px solid var(--glass-border); color: var(--text); }
.btn-ghost:hover { background: rgba(255,255,255,0.05); }
.btn-youtube { background: #ff0000; color: #fff; }
.btn-ads { background: linear-gradient(135deg, #f59e0b, #f97316); color: #fff; }

/* Info Column */
.info-col { display: flex; flex-direction: column; gap: 20px; }
.stat-card { display: flex; align-items: center; gap: 16px; padding: 20px; background: rgba(15, 23, 42, 0.4); border: 1px solid var(--glass-border); border-radius: 20px; }
.stat-icon { width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 24px; background: rgba(99, 102, 241, 0.1); color: #818cf8; }
.stat-info h4 { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 4px; }
.stat-info p { font-size: 13px; color: var(--text-muted); }
.status-dot { width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 10px #10b981; display: inline-block; margin-right: 6px; }

/* Stepper */
.stepper { display: flex; align-items: center; justify-content: space-between; margin-bottom: 36px; padding: 0 10px; }
.step { display: flex; flex-direction: column; align-items: center; gap: 8px; opacity: 0.4; transition: 0.3s; }
.step.active { opacity: 1; }
.step .dot { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); border: 2px solid rgba(255,255,255,0.1); font-weight: 700; font-size: 14px; color: #fff; transition: 0.3s; }
.step.active .dot { background: var(--primary); border-color: var(--primary); box-shadow: 0 0 20px var(--primary-glow); }
.step small { font-size: 12px; font-weight: 600; color: var(--text-muted); }
.step.active small { color: #fff; }
.line { flex: 1; height: 3px; background: rgba(255,255,255,0.1); margin: 0 12px; margin-bottom: 24px; border-radius: 4px; transition: 0.3s; }
.line.active { background: var(--primary); box-shadow: 0 0 10px var(--primary-glow); }

/* Key Box & Skeleton */
.key-box { display: flex; gap: 12px; align-items: center; margin: 24px 0 20px; padding: 20px; background: rgba(0,0,0,0.3); border: 2px dashed rgba(255,255,255,0.1); border-radius: 20px; }
.key-box span { flex: 1; font-family: 'JetBrains Mono', monospace; font-size: 24px; font-weight: 800; color: #22d3ee; word-break: break-all; letter-spacing: 2px; text-align: center; }
.skeleton { background: linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 8px; height: 24px; width: 100%; }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

/* Terminal */
.terminal { background: #000000; border: 1px solid var(--glass-border); border-radius: 16px; padding: 20px; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #818cf8; height: 150px; overflow: hidden; box-shadow: inset 0 0 20px rgba(0,0,0,0.8); }
.log-line { margin-bottom: 6px; opacity: 0; animation: typeIn 0.3s forwards; }
@keyframes typeIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
`;

export const JS = `
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
