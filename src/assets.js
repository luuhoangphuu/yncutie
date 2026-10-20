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

/* SNOW (FIXED Z-INDEX & VISIBILITY) */
.snow-layer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 5; background-image: radial-gradient(3px 3px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(3px 3px at 50px 160px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(3px 3px at 130px 80px, #fff, rgba(0,0,0,0)); background-repeat: repeat; background-size: 200px 200px; animation: snowFall 12s linear infinite; opacity: 0.8; filter: drop-shadow(0 0 5px rgba(255,255,255,0.8)); }
.snow-layer-2 { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 6; background-image: radial-gradient(2px 2px at 10px 10px, #fff, rgba(0,0,0,0)), radial-gradient(3px 3px at 150px 150px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 250px 50px, #fff, rgba(0,0,0,0)); background-repeat: repeat; background-size: 300px 300px; animation: snowFall 18s linear infinite; opacity: 0.6; filter: drop-shadow(0 0 8px rgba(255,255,255,1)); }
@keyframes snowFall { 0% { background-position: 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px; } 100% { background-position: 200px 200px, 400px 400px, 600px 600px, 800px 800px, 1000px 1000px; } }
#particle-canvas{position:fixed;inset:0;z-index:4;pointer-events:none;opacity:1}

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
.bento-item{background:var(--surface);border:1px solid var(--border);border-radius:32px;padding:32px;backdrop-filter:blur(40px);-webkit-backdrop-filter:blur(40px);box-shadow:0 20px 40px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.05);position:relative;overflow:hidden;transition:transform .3s,border-color .3s;display:flex;flex-direction:column;justify-content:space-between}
.bento-item:hover{border-color:rgba(255,255,255,.2);transform:translateY(-4px)}
.bento-item.col-span-2{grid-column:span 2}
.bento-item.col-span-4{grid-column:span 4}
@media(max-width:900px){.bento-grid{grid-template-columns:1fr}.bento-item.col-span-2,.bento-item.col-span-4{grid-column:span 1}}

/* GLOW */
.bento-item::before{content:'';position:absolute;inset:0;border-radius:32px;background:radial-gradient(800px circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,.05),transparent 40%);opacity:0;transition:opacity .3s;pointer-events:none;z-index:0}
.bento-item:hover::before{opacity:1}
.bento-item>*{position:relative;z-index:1}

/* TYPOGRAPHY */
h1.hero-title{font-size:clamp(40px,6vw,64px);font-weight:900;line-height:1.1;letter-spacing:-0.04em;filter:drop-shadow(0 10px 30px rgba(0,0,0,0.8));margin-bottom:12px;}
.hero-sub{color:var(--muted);font-size:16px;max-width:600px;margin-bottom:32px;}
h2{font-size:20px;font-weight:800;margin-bottom:16px;color:#fff;letter-spacing:-0.01em}

/* BUTTONS */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:16px 32px;border-radius:16px;font-size:15px;font-weight:800;transition:all .3s;text-decoration:none;border:none;font-family:inherit;overflow:hidden;cursor:pointer}
.btn-primary{width:100%;background:#fff;color:#000;box-shadow:0 0 30px rgba(255,255,255,.15);min-height:56px;font-size:15px;letter-spacing:.02em;}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 40px rgba(255,255,255,.3)}
.btn-secondary{background:rgba(255,255,255,.03);color:#fff;border:1px solid var(--border);}
.btn-secondary:hover{background:rgba(255,255,255,.08);border-color:#fff}
.btn-download{width:100%;background:linear-gradient(135deg, #e2e8f0, #94a3b8);color:#000;min-height:48px;font-size:14px;border-radius:12px;}
.btn-download:hover{transform:translateY(-2px);box-shadow:0 5px 15px rgba(255,255,255,0.2)}
.btn-tele{background:#0088cc;color:#fff;width:100%;border-radius:12px;font-size:14px;min-height:48px;box-shadow:0 4px 15px rgba(0,136,204,0.3);}

/* RADIO */
.radio-group{display:flex;flex-direction:column;gap:10px;margin:20px 0}
.radio-label{display:flex;align-items:center;gap:16px;padding:16px;border:1px solid var(--border);border-radius:16px;transition:.3s;background:rgba(255,255,255,.02);cursor:pointer}
.radio-label:hover{background:rgba(255,255,255,.04);border-color:rgba(255,255,255,.2)}
.radio-label input{width:18px;height:18px;accent-color:#fff}
.radio-label span{font-weight:600;font-size:15px;color:#fff}

/* STEPPER (4 BƯỚC) */
.stepper-wrap{display:flex; justify-content:space-between; margin:24px 0; position:relative;}
.stepper-wrap::before{content:''; position:absolute; top:14px; left:20px; right:20px; height:1px; background:var(--border); z-index:0;}
.step{display:flex; flex-direction:column; align-items:center; gap:8px; z-index:1;}
.step-num{width:28px; height:28px; border-radius:50%; background:var(--bg); border:1px solid var(--muted); color:var(--muted); display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; transition:.3s;}
.step span{font-size:11px; font-weight:600; color:var(--muted); text-transform:uppercase;}
.step.active .step-num{border-color:var(--accent); color:var(--accent); box-shadow:0 0 10px rgba(0,240,255,0.3);}
.step.active span{color:#fff;}
.step.done .step-num{background:var(--accent); border-color:var(--accent); color:#000;}

/* QUOTA GRID */
.quota-grid{display:grid; grid-template-columns:1fr 1fr; gap:12px;}
.quota-item{background:rgba(0,0,0,0.3); border:1px solid var(--border); border-radius:16px; padding:16px;}
.quota-item p{font-size:11px; color:var(--muted); text-transform:uppercase; font-weight:700; margin-bottom:4px;}
.quota-item b{font-size:20px; color:#fff; font-weight:800;}

/* APP DOWNLOAD CARDS */
.app-card{background:rgba(0,0,0,0.3); border:1px solid var(--border); border-radius:20px; padding:24px; display:flex; flex-direction:column;}
.app-icon{width:56px; height:56px; border-radius:16px; background:linear-gradient(135deg, #334155, #0f172a); display:flex; align-items:center; justify-content:center; font-weight:900; font-size:20px; color:#fff; border:1px solid rgba(255,255,255,0.1); margin-bottom:16px;}
.app-warning{color:#ef4444; font-size:12px; font-weight:700; margin-bottom:12px;}
.app-list{font-size:13px; color:var(--muted); margin-bottom:20px; line-height:1.6;}
.app-list li{list-style:none;}

/* MODAL NOTIFICATION */
.modal-overlay{position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.8); backdrop-filter:blur(10px); z-index:100000; display:none; align-items:center; justify-content:center; opacity:0; transition:opacity 0.3s;}
.modal-overlay.show{display:flex; opacity:1;}
.modal-content{background:var(--surface); border:1px solid var(--border); border-radius:24px; width:90%; max-width:500px; padding:32px; box-shadow:0 30px 60px rgba(0,0,0,0.8); position:relative; backdrop-filter:blur(40px);}
.modal-header{font-size:20px; font-weight:800; color:#fff; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center;}
.modal-close{background:none; border:none; color:var(--muted); font-size:24px; cursor:pointer; padding:0;}
.modal-body{font-size:14px; color:var(--muted); line-height:1.7; margin-bottom:24px; white-space:pre-wrap;}
.modal-btn{width:100%; padding:14px; border-radius:12px; background:#fff; color:#000; font-weight:800; border:none; cursor:pointer;}

/* CHECKPOINT (PRO HUD - FIXED LAYOUT) */
.checkpoint-layout{display:grid; grid-template-columns: 1fr 1fr; gap:32px; align-items:stretch; max-width:1000px; margin:0 auto;}
@media(max-width:850px){.checkpoint-layout{grid-template-columns: 1fr;}}
.panel{background:var(--surface); border:1px solid var(--border); border-radius:32px; padding:40px; backdrop-filter:blur(40px); box-shadow:0 20px 40px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.05); position:relative; overflow:hidden; display:flex; flex-direction:column; justify-content:center;}
.panel::before{content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);}
.panel-title{font-size:clamp(32px,4vw,44px); font-weight:800; line-height:1.1; color:#fff; margin-bottom:12px; letter-spacing:-.02em;}
.panel-sub{color:var(--muted); font-size:15px; margin-bottom:32px;}

/* TURNSTILE BOX WITH LASER SCAN */
.ts-box{position:relative; background:rgba(0,0,0,.5); border:1px solid var(--border); border-radius:24px; padding:48px 40px; display:flex; flex-direction:column; align-items:center; justify-content:center; margin-bottom:32px; transition:.4s; box-shadow:inset 0 0 40px rgba(0,0,0,1); overflow:hidden;}
.ts-box::after{content:''; position:absolute; top:0; left:0; width:100%; height:2px; background:var(--accent); box-shadow:0 0 15px var(--accent); opacity:0; transition:opacity 0.3s; animation:scanline 2s linear infinite;}
.ts-box:hover::after{opacity:1;}
@keyframes scanline{0%{top:0;} 100%{top:100%;}}
.ts-box.active{border-color:rgba(0,240,255,0.3);}
.ts-box.success{border-color:rgba(16,185,129,0.3);}

/* UNIFIED HUD */
.hud-container{background:var(--surface); border:1px solid var(--border); border-radius:32px; padding:32px; backdrop-filter:blur(40px); display:flex; flex-direction:column; gap:24px; box-shadow:0 20px 40px rgba(0,0,0,.5);}
.hud-header{display:flex; justify-content:space-between; align-items:flex-end; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:16px;}
.hud-label{font-size:12px; color:var(--muted); font-weight:700; letter-spacing:.05em; text-transform:uppercase;}
.hud-value{font-family:'JetBrains Mono',monospace; font-size:32px; font-weight:800; color:#fff; text-shadow:0 0 30px rgba(255,255,255,.3); line-height:1;}

.hud-mid{display:grid; grid-template-columns:1fr 1fr; gap:24px;}
.hud-mini{background:rgba(0,0,0,0.2); border:1px solid var(--border); border-radius:20px; padding:20px; display:flex; flex-direction:column; justify-content:center;}
.radar-svg{width:80px; height:80px; margin:0 auto; filter:drop-shadow(0 0 10px rgba(0,240,255,.3));}
.radar-sweep{transform-origin: 40px 40px; animation:spin 3s linear infinite;}
@keyframes spin{100%{transform:rotate(360deg);}}
.line-chart-container{height:60px; position:relative; margin-top:16px;}
.line-path{fill:none; stroke:var(--accent); stroke-width:2; filter:drop-shadow(0 0 8px rgba(0,240,255,.5)); transition:d 0.3s ease;}
.line-dot{fill:#000; stroke:var(--accent); stroke-width:2; transition:cx 0.3s ease, cy 0.3s ease;}

.hud-footer{display:flex; justify-content:space-between; font-size:13px; color:var(--muted); border-top:1px solid rgba(255,255,255,0.05); padding-top:16px;}
.hud-footer span{font-weight:600;}
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

    document.querySelectorAll('.bento-item, .panel, .hud-container').forEach(function(card) {
      card.addEventListener('mousemove', function(e) {
        var r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
        card.style.setProperty('--mx', x+'px'); card.style.setProperty('--my', y+'px');
      });
    });

    setTimeout(function() {
      var modal = document.getElementById('noticeModal');
      if(modal) modal.classList.add('show');
    }, 1000);

    var closeBtn = document.querySelector('.modal-close');
    var actionBtn = document.querySelector('.modal-btn');
    if(closeBtn) closeBtn.onclick = function() { document.getElementById('noticeModal').classList.remove('show'); };
    if(actionBtn) actionBtn.onclick = function() { document.getElementById('noticeModal').classList.remove('show'); };
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

  var linePath=document.querySelector('.line-path'), lineDot=document.querySelector('.line-dot'), points=[];
  if(linePath){ for(var k=0; k<=10; k++) points.push({x: k*10, y: 15});
  setInterval(function(){
    if(!linePath || !lineDot) return;
    var d = 'M '; for(var i=0; i<points.length; i++){ if(i>0) points[i].y = 15 + (Math.random()-0.5)*20; d += points[i].x+','+points[i].y+' '; }
    linePath.setAttribute('d', d); lineDot.setAttribute('cx', points[10].x); lineDot.setAttribute('cy', points[10].y);
  }, 800); }

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
            particles.push({ 
                x: Math.random()*pw, 
                y: Math.random()*ph, 
                vx:(Math.random()-0.5)*0.8, 
                vy:(Math.random()-0.5)*0.8, 
                r: Math.random()*1.5 + 1
            });
        }
    }
    
    function draw() {
        pctx.clearRect(0, 0, pw, ph);
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i]; p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > pw) p.vx *= -1; if (p.y < 0 || p.y > ph) p.vy *= -1;
            
            pctx.beginPath(); 
            pctx.fillStyle = 'rgba(0, 240, 255, 0.6)'; 
            pctx.shadowBlur = 8; pctx.shadowColor = 'rgba(0, 240, 255, 0.6)';
            pctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); pctx.fill();
            pctx.shadowBlur = 0;
            
            for (var j = i + 1; j < particles.length; j++) {
                var p2 = particles[j], dx = p.x - p2.x, dy = p.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) { 
                    pctx.beginPath(); 
                    pctx.strokeStyle = 'rgba(0, 240, 255, ' + (1 - dist/150) * 0.3 + ')'; 
                    pctx.lineWidth = 1; 
                    pctx.moveTo(p.x, p.y); pctx.lineTo(p2.x, p2.y); pctx.stroke(); 
                }
            }
            
            var dxm = p.x - mouse.x, dym = p.y - mouse.y, distm = Math.sqrt(dxm*dxm + dym*dym);
            if (distm < 200) {
                pctx.beginPath();
                pctx.strokeStyle = 'rgba(0, 240, 255, ' + (1 - distm/200) * 0.5 + ')';
                pctx.lineWidth = 1;
                pctx.moveTo(p.x, p.y); pctx.lineTo(mouse.x, mouse.y); pctx.stroke();
            }
        }
        requestAnimationFrame(draw);
    }
    window.addEventListener('resize', init); init(); draw();
  } catch(e) {}
})();`;
