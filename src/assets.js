export const CSS = `
:root{--bg:#030305;--surface:rgba(15,15,20,.4);--border:rgba(255,255,255,.08);--text:#ffffff;--muted:#94a3b8;--accent:#00f0ff;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased;position:relative;cursor:auto}
body.custom-cursor-active, body.custom-cursor-active a, body.custom-cursor-active button{cursor:none !important}

/* CUSTOM CURSOR */
.cursor-dot,.cursor-ring{position:fixed;top:0;left:0;transform:translate(-50%,-50%);border-radius:50%;z-index:99999;pointer-events:none;opacity:0;transition:opacity 0.3s}
body.custom-cursor-active .cursor-dot, body.custom-cursor-active .cursor-ring{opacity:1}
.cursor-dot{width:6px;height:6px;background:#fff;mix-blend-mode:difference;transition:transform 0.1s}
.cursor-ring{width:36px;height:36px;border:1px solid rgba(255,255,255,0.4);mix-blend-mode:difference;transition:width 0.2s,height 0.2s,background 0.2s}
.cursor-ring.hover{width:60px;height:60px;background:rgba(255,255,255,0.1);border-color:#fff}

/* BACKGROUND LAYERS */
.cyber-grid{position:fixed;bottom:-50vh;left:-50vw;width:200vw;height:100vh;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:80px 80px;transform:perspective(500px) rotateX(60deg);z-index:0;animation:gridMove 20s linear infinite;pointer-events:none}
@keyframes gridMove{0%{background-position:0 0}100%{background-position:0 80px}}
.aurora{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;filter:blur(150px);opacity:0.6}
.aurora-blob{position:absolute;width:600px;height:600px;border-radius:50%;opacity:.08;animation:float 25s infinite alternate}
.aurora-blob:nth-child(1){background:var(--accent);top:-10%;left:-10%}
.aurora-blob:nth-child(2){background:#7000ff;bottom:-10%;right:-10%;animation-delay:-5s}
@keyframes float{0%{transform:translate(0,0) scale(1)}100%{transform:translate(100px,100px) scale(1.2)}}

/* SNOW & BUBBLES */
.snow-layer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 5; background-image: radial-gradient(3px 3px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(3px 3px at 50px 160px, #fff, rgba(0,0,0,0)); background-repeat: repeat; background-size: 200px 200px; animation: snowFall 12s linear infinite; opacity: 0.8; filter: drop-shadow(0 0 5px rgba(255,255,255,0.8)); }
@keyframes snowFall { 0% { background-position: 0px 0px, 0px 0px, 0px 0px; } 100% { background-position: 200px 200px, 400px 400px, 600px 600px; } }
#particle-canvas{position:fixed;inset:0;z-index:4;pointer-events:none;opacity:1}
.bubble{position:fixed;bottom:-100px;border-radius:50%;background:radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(255,255,255,0.05));border:1px solid rgba(255,255,255,0.3);box-shadow:inset 0 0 10px rgba(255,255,255,0.2), 0 0 10px rgba(255,255,255,0.1);pointer-events:none;z-index:3;animation:floatUp 10s linear infinite}
@keyframes floatUp{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-120vh) scale(1.5);opacity:0}}

/* ANIMATIONS */
.reveal { opacity: 1; transform: translateY(0); animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
@keyframes fadeInUp { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }

.typewriter::after { content: '|'; animation: blink 1s infinite; color: var(--accent); }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

/* RIPPLE & BUTTON SHINE */
.ripple {position:absolute;border-radius:50%;background:rgba(255,255,255,0.3);transform:scale(0);animation:rippleAnim 0.6s linear;pointer-events:none;}
@keyframes rippleAnim {to {transform: scale(4); opacity: 0;}}

.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:16px 32px;border-radius:16px;font-size:15px;font-weight:800;transition:all .3s;text-decoration:none;border:none;font-family:inherit;overflow:hidden;cursor:pointer;box-shadow:0 0 20px rgba(255,255,255,.05);}
.btn:active { transform: scale(0.95) !important; }
.btn::after { content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent); transform: skewX(-25deg); animation: shineLoop 4s infinite; pointer-events: none; }
.btn:hover::after { animation: shineLoop 1.5s infinite; }
@keyframes shineLoop { 0% { left: -100%; } 20% { left: 200%; } 100% { left: 200%; } }

.btn-primary{width:100%;background:#fff;color:#000;min-height:56px;}
.btn-primary::after { background: linear-gradient(90deg, transparent, rgba(0,0,0,0.15), transparent); }
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 40px rgba(255,255,255,.3)}
.btn-secondary{background:rgba(255,255,255,.03);color:#fff;border:1px solid var(--border);}
.btn-secondary:hover{background:rgba(255,255,255,.08);border-color:#fff}

/* CORE UI */
a{color:inherit;text-decoration:none}
.nav{position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:100;display:flex;justify-content:space-between;align-items:center;padding:12px 24px;background:rgba(10,10,15,.7);backdrop-filter:blur(30px);border:1px solid var(--border);border-radius:99px;width:calc(100% - 40px);max-width:800px;box-shadow:0 10px 40px rgba(0,0,0,.5)}
.logo-text{font-weight:900;font-style:italic;font-size:20px;background:linear-gradient(90deg,#fff,#94a3b8);-webkit-background-clip:text;color:transparent;display:flex;align-items:center;letter-spacing:-0.05em}
.logo-text svg{width:18px;height:18px;fill:var(--accent);margin-left:4px;filter:drop-shadow(0 0 10px var(--accent))}
.nav-links{display:flex;gap:4px}
.nav-links a{color:var(--muted);font-size:13px;font-weight:700;padding:8px 16px;border-radius:99px;transition:.3s}
.nav-links a:hover,.nav-links a.on{color:#000;background:#fff;box-shadow:0 0 20px rgba(255,255,255,0.2)}
.wrap{position:relative;z-index:10;width:100%;max-width:1200px;margin:0 auto;padding:120px clamp(16px,4vw,24px) 60px;flex:1;perspective:1200px}

/* BENTO GRID */
.bento-grid{display:grid;grid-template-columns:repeat(4, 1fr);gap:24px;margin-top:24px}
.bento-item{background:var(--surface);border:1px solid var(--border);border-radius:32px;padding:32px;backdrop-filter:blur(40px);-webkit-backdrop-filter:blur(40px);box-shadow:0 20px 40px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.05);position:relative;overflow:hidden;transition:transform .3s,box-shadow .3s,border-color .3s;display:flex;flex-direction:column;justify-content:space-between}
.bento-item:hover{border-color:var(--accent);box-shadow:0 0 30px rgba(0,240,255,0.15), inset 0 0 20px rgba(0,240,255,0.05);transform:translateY(-4px)}
.bento-item.col-span-2{grid-column:span 2}
.bento-item.col-span-4{grid-column:span 4}
@media(max-width:900px){.bento-grid{grid-template-columns:1fr}.bento-item.col-span-2,.bento-item.col-span-4{grid-column:span 1}}

/* TYPOGRAPHY */
h1.hero-title{font-size:clamp(40px,6vw,64px);font-weight:900;line-height:1.1;letter-spacing:-0.04em;filter:drop-shadow(0 10px 30px rgba(0,0,0,0.8));margin-bottom:12px;background:linear-gradient(90deg, #fff, #94a3b8, #fff);background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:shimmer 3s linear infinite;}
@keyframes shimmer {0%{background-position:0% center}100%{background-position:200% center}}
.hero-sub{color:var(--muted);font-size:16px;max-width:600px;margin-bottom:32px;min-height:48px;}
h2{font-size:20px;font-weight:800;margin-bottom:16px;color:#fff;letter-spacing:-0.01em}

/* CHECKPOINT HUD & HEARTBEAT */
.checkpoint-layout{display:grid; grid-template-columns: 1fr 1fr; gap:32px; align-items:stretch; max-width:1000px; margin:0 auto;}
@media(max-width:850px){.checkpoint-layout{grid-template-columns: 1fr;}}
.panel{background:var(--surface); border:1px solid var(--border); border-radius:32px; padding:40px; backdrop-filter:blur(40px); box-shadow:0 20px 40px rgba(0,0,0,.5); position:relative; display:flex; flex-direction:column; justify-content:center;}
.panel-title{font-size:clamp(32px,4vw,44px); font-weight:800; line-height:1.1; color:#fff; margin-bottom:12px;}
.panel-sub{color:var(--muted); font-size:15px; margin-bottom:32px;}
.ts-box{position:relative; background:rgba(0,0,0,.5); border:1px solid var(--border); border-radius:24px; padding:48px 40px; display:flex; flex-direction:column; align-items:center; justify-content:center; margin-bottom:32px; box-shadow:inset 0 0 40px rgba(0,0,0,1); overflow:hidden;}
.ts-box::after{content:''; position:absolute; top:0; left:0; width:100%; height:2px; background:var(--accent); box-shadow:0 0 15px var(--accent); opacity:0; transition:opacity 0.3s; animation:scanline 2s linear infinite;}
.ts-box:hover::after{opacity:1;}
@keyframes scanline{0%{top:0;} 100%{top:100%;}}
.ts-box.active{border-color:rgba(0,240,255,0.3);}
.ts-box.success{border-color:rgba(16,185,129,0.3);}

.hud-container{background:var(--surface); border:1px solid var(--border); border-radius:32px; padding:32px; backdrop-filter:blur(40px); display:flex; flex-direction:column; gap:24px; box-shadow:0 20px 40px rgba(0,0,0,.5);}
.hud-header{display:flex; justify-content:space-between; align-items:flex-end; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:16px;}
.hud-label{font-size:12px; color:var(--muted); font-weight:700; letter-spacing:.05em; text-transform:uppercase;}
.hud-value{font-family:'JetBrains Mono',monospace; font-size:32px; font-weight:800; color:#fff; text-shadow:0 0 30px rgba(255,255,255,.3); line-height:1;}

/* HEARTBEAT WAVEFORM */
.heartbeat-container{height:80px; display:flex; align-items:center; justify-content:center; gap:4px; background:rgba(0,0,0,0.2); border:1px solid var(--border); border-radius:20px; padding:16px; overflow:hidden; position:relative;}
.heartbeat-bar{width:6px; background:var(--accent); border-radius:3px; transition:height 0.1s; box-shadow:0 0 10px rgba(0,240,255,0.5);}

.hud-footer{display:flex; justify-content:space-between; font-size:13px; color:var(--muted); border-top:1px solid rgba(255,255,255,0.05); padding-top:16px;}
.hud-footer b{color:#fff; font-weight:700;}

/* FOOTER */
.foot{position:relative;z-index:10;margin-top:auto;padding:32px;text-align:center;font-size:13px;color:var(--muted);border-top:1px solid var(--border);background:rgba(3,3,5,.8);backdrop-filter:blur(20px);font-weight:500}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;

export const COMMON_JS = `
document.addEventListener('DOMContentLoaded', function() {
  try {
    var dot = document.querySelector('.cursor-dot');
    var ring = document.querySelector('.cursor-ring');
    if (dot && ring && window.matchMedia('(pointer: fine)').matches) {
      document.body.classList.add('custom-cursor-active');
      var mx = 0, my = 0, rx = 0, ry = 0;
      window.addEventListener('mousemove', function(e) {
        mx = e.clientX; my = e.clientY;
        dot.style.transform = 'translate(' + mx + 'px, ' + my + 'px) translate(-50%,-50%)';
      });
      function renderRing() {
        rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2;
        ring.style.transform = 'translate(' + rx + 'px, ' + ry + 'px) translate(-50%,-50%)';
        requestAnimationFrame(renderRing);
      }
      renderRing();
      document.querySelectorAll('a, button, .radio-label').forEach(function(el) {
        el.addEventListener('mouseenter', function() { ring.classList.add('hover'); });
        el.addEventListener('mouseleave', function() { ring.classList.remove('hover'); });
      });
    }

    setInterval(function() {
      var b = document.createElement('div');
      b.className = 'bubble';
      var size = Math.random() * 40 + 10;
      b.style.width = size + 'px'; b.style.height = size + 'px';
      b.style.left = Math.random() * 100 + 'vw';
      b.style.animationDuration = (Math.random() * 5 + 8) + 's';
      b.style.opacity = Math.random() * 0.5 + 0.3;
      document.body.appendChild(b);
      setTimeout(function() { b.remove(); }, 13000);
    }, 400);

    document.body.addEventListener('click', function(e) {
      var btn = e.target.closest('.btn, .bento-item, .hud-container');
      if(btn) {
        var rect = btn.getBoundingClientRect();
        var ripple = document.createElement('span');
        ripple.className = 'ripple';
        var size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
        btn.appendChild(ripple);
        setTimeout(function() { ripple.remove(); }, 600);
      }
    });

    setTimeout(function() {
      var modal = document.getElementById('noticeModal');
      if(modal) modal.classList.add('show');
    }, 1000);

    var closeBtn = document.querySelector('.modal-close');
    var actionBtn = document.querySelector('.modal-btn');
    if(closeBtn) closeBtn.onclick = function() { document.getElementById('noticeModal').classList.remove('show'); };
    if(actionBtn) actionBtn.onclick = function() { document.getElementById('noticeModal').classList.remove('show'); };

    var typeEl = document.querySelector('.typewriter');
    if(typeEl) {
      var text = typeEl.getAttribute('data-text');
      var i = 0;
      typeEl.innerText = '';
      function type() {
        if (i < text.length) {
          typeEl.innerText += text.charAt(i);
          i++;
          setTimeout(type, 30);
        }
      }
      setTimeout(type, 500);
    }
  } catch(e) { console.warn('UI script failed', e); }
});

window.__toast=function(msg){var t=document.createElement('div');t.style.cssText='position:fixed;bottom:32px;left:50%;transform:translateX(-50%);background:rgba(255,255,255,.1);color:#fff;padding:16px 32px;border-radius:99px;font-weight:600;font-size:14px;z-index:99999;backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.2);box-shadow:0 10px 40px rgba(0,0,0,.8);transition:opacity .3s';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>{t.style.opacity='0';setTimeout(()=>t.remove(),300)},2500);};
document.addEventListener('click',function(e){
  var c=e.target.closest('[data-copy]');if(!c)return;
  var el=document.getElementById(c.getAttribute('data-copy'));if(!el)return;
  if(navigator.clipboard) navigator.clipboard.writeText(el.textContent.trim()).then(function(){ window.__toast('Đã sao chép key'); });
});
`;

export const CHECKPOINT_JS = `(function(){
  var timer=document.getElementById('timer');
  if(timer){ var t0=performance.now(); setInterval(function(){timer.innerHTML=((performance.now()-t0)/1000).toFixed(2);}, 50); }

  // HEARTBEAT WAVEFORM
  var hbContainer = document.getElementById('heartbeat');
  if(hbContainer) {
    for(var i=0; i<30; i++) {
      var bar = document.createElement('div');
      bar.className = 'heartbeat-bar';
      bar.style.height = '10%';
      hbContainer.appendChild(bar);
    }
    var bars = hbContainer.querySelectorAll('.heartbeat-bar');
    setInterval(function(){
      for(var j=0; j<bars.length; j++) {
        var h = Math.random() > 0.8 ? (40 + Math.random() * 60) : (10 + Math.random() * 20);
        bars[j].style.height = h + '%';
      }
    }, 100);
  }

  var busy=false;
  window.onTurnstileError=function(){ document.getElementById('errorBox').style.display='block'; document.getElementById('errorBox').textContent='Lỗi Captcha'; };
  window.onTurnstileSuccess=function(token){
    if(busy)return;busy=true;
    document.getElementById('tsWrap').classList.add('active');
    document.getElementById('helpText').innerHTML='<strong>Đang xác minh...</strong>';
    fetch('/api/verify-bot',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:token})})
      .then(r=>r.json()).then(d=>{
        if(d&&d.success){ document.getElementById('tsWrap').className='ts-box success'; document.getElementById('helpText').innerHTML='<strong style="color:#10b981">✓ Thành công! Đang chuyển...</strong>'; setTimeout(()=>location.href=document.getElementById('app').getAttribute('data-next'),600); }
        else { document.getElementById('errorBox').style.display='block'; document.getElementById('errorBox').textContent=(d&&d.error)||'Thất bại'; busy=false; if(window.turnstile) turnstile.reset(); }
      });
  };
})();`;

export const JS_FX = `(function(){
  try {
    var pc = document.getElementById('particle-canvas');
    if(!pc) return;
    var pctx = pc.getContext('2d');
    var pw, ph, particles = [];
    var mouse = { x: -1000, y: -1000 };
    
    window.addEventListener('mousemove', function(e) {
      mouse.x = e.clientX; mouse.y = e.clientY;
    });

    function init() {
        pw = pc.width = window.innerWidth; ph = pc.height = window.innerHeight; particles = [];
        for (var i = 0; i < 100; i++) {
            particles.push({ x: Math.random()*pw, y: Math.random()*ph, vx:(Math.random()-0.5)*0.8, vy:(Math.random()-0.5)*0.8, r: Math.random()*1.5 + 1 });
        }
    }
    
    function draw() {
        pctx.clearRect(0, 0, pw, ph);
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i]; p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > pw) p.vx *= -1; if (p.y < 0 || p.y > ph) p.vy *= -1;
            
            pctx.beginPath(); pctx.fillStyle = 'rgba(0, 240, 255, 0.6)'; pctx.shadowBlur = 8; pctx.shadowColor = 'rgba(0, 240, 255, 0.6)';
            pctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); pctx.fill(); pctx.shadowBlur = 0;
            
            for (var j = i + 1; j < particles.length; j++) {
                var p2 = particles[j], dx = p.x - p2.x, dy = p.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) { pctx.beginPath(); pctx.strokeStyle = 'rgba(0, 240, 255, ' + (1 - dist/150) * 0.3 + ')'; pctx.lineWidth = 1; pctx.moveTo(p.x, p.y); pctx.lineTo(p2.x, p2.y); pctx.stroke(); }
            }
            
            var dxm = p.x - mouse.x, dym = p.y - mouse.y, distm = Math.sqrt(dxm*dxm + dym*dym);
            if (distm < 200) { pctx.beginPath(); pctx.strokeStyle = 'rgba(0, 240, 255, ' + (1 - distm/200) * 0.5 + ')'; pctx.lineWidth = 1; pctx.moveTo(p.x, p.y); pctx.lineTo(mouse.x, mouse.y); pctx.stroke(); }
        }
        requestAnimationFrame(draw);
    }
    window.addEventListener('resize', init); init(); draw();
  } catch(e) {}
})();`;
