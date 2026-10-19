export const CSS = `
:root { 
  color-scheme: dark; 
  --bg: #050508; 
  --squid-pink: #ff007f; 
  --squid-teal: #00f3ff; 
  --glass-bg: rgba(20, 20, 30, 0.6); 
  --glass-border: rgba(255, 255, 255, 0.1); 
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: var(--bg); color: #fff; min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow-x: hidden; position: relative; }
.bg-shapes { position: fixed; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
.shape { position: absolute; opacity: 0.15; filter: drop-shadow(0 0 15px currentColor); animation: floatShape 15s infinite linear; }
.circle { color: var(--squid-pink); border: 4px solid currentColor; border-radius: 50%; }
.triangle { color: var(--squid-teal); border-left: 50px solid transparent; border-right: 50px solid transparent; border-bottom: 86px solid currentColor; width: 0; height: 0; background: transparent !important; }
.square { color: #fff; border: 4px solid currentColor; }
@keyframes floatShape { 0% { transform: translateY(0) rotate(0deg); } 100% { transform: translateY(-100vh) rotate(360deg); } }

.container { position: relative; z-index: 10; width: 100%; max-width: 1100px; padding: 20px; }
.glass { background: var(--glass-bg); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid var(--glass-border); border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 16px 24px; border-radius: 12px; border: none; font-weight: 800; font-size: 16px; cursor: pointer; text-decoration: none; transition: 0.3s; text-transform: uppercase; letter-spacing: 1px; }
.btn-pink { background: var(--squid-pink); color: #fff; box-shadow: 0 0 20px rgba(255,0,127,0.4); }
.btn-pink:hover { box-shadow: 0 0 30px rgba(255,0,127,0.8); transform: translateY(-2px); }
.btn-teal { background: var(--squid-teal); color: #000; box-shadow: 0 0 20px rgba(0,243,255,0.4); }
.btn-teal:hover { box-shadow: 0 0 30px rgba(0,243,255,0.8); transform: translateY(-2px); }
.btn-ghost { background: transparent; border: 1px solid var(--glass-border); color: #fff; }
.btn-ghost:hover { background: rgba(255,255,255,0.1); }

/* Skeleton Loading */
.skeleton { background: linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 8px; }
@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

/* Checkpoint Specific */
.checkpoint-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
@media (max-width: 900px) { .checkpoint-grid { grid-template-columns: 1fr; } }
.top-bar { position: fixed; top: 0; width: 100%; padding: 20px; display: flex; justify-content: space-between; font-weight: 800; color: var(--squid-pink); font-family: monospace; z-index: 50; }
.terminal { background: #000; border: 1px solid var(--squid-teal); padding: 20px; border-radius: 12px; font-family: monospace; font-size: 12px; color: var(--squid-teal); height: 180px; overflow: hidden; }
.log-line { margin-bottom: 8px; opacity: 0; animation: typing 0.5s forwards; }
@keyframes typing { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
`;

export const JS = `
// Skeleton & Copy Logic
document.addEventListener('click', function(e) {
  var b = e.target.closest('[data-copy]'); if(!b) return;
  var t = document.getElementById(b.dataset.copy); if(!t) return;
  navigator.clipboard.writeText(t.textContent).then(() => {
    var orig = b.innerHTML; b.innerHTML = '✓ Đã Copy'; setTimeout(() => b.innerHTML = orig, 2000);
  });
});

function showSkeleton() {
  const keyBox = document.getElementById('keyContainer');
  if(keyBox) {
    keyBox.innerHTML = '<div class="skeleton" style="height:60px; width:100%; margin-bottom:10px;"></div><div class="skeleton" style="height:60px; width:100%;"></div>';
  }
}
`;
