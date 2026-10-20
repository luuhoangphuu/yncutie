export const CSS = `
:root{--bg:#000000;--glass:rgba(20,20,25,.4);--border:rgba(255,255,255,.1);--text:#ffffff;--muted:#94a3b8;--silver:#e2e8f0;--cyan:#00f0ff;--purple:#7000ff;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased;position:relative;cursor:auto}
body.custom-cursor-active, body.custom-cursor-active a, body.custom-cursor-active button{cursor:none !important}

/* CUSTOM CURSOR */
.cursor-dot,.cursor-ring{position:fixed;top:0;left:0;transform:translate(-50%,-50%);border-radius:50%;z-index:99999;pointer-events:none;opacity:0;transition:opacity 0.3s}
body.custom-cursor-active .cursor-dot, body.custom-cursor-active .cursor-ring{opacity:1}
.cursor-dot{width:8px;height:8px;background:#fff;mix-blend-mode:difference;transition:transform 0.1s}
.cursor-ring{width:40px;height:40px;border:1px solid rgba(255,255,255,0.5);mix-blend-mode:difference;transition:width 0.2s,height 0.2s,background 0.2s}
.cursor-ring.hover{width:64px;height:64px;background:rgba(255,255,255,0.1);border-color:#fff}

/* BACKGROUND EFFECTS */
#matrix-canvas{position:fixed;inset:0;z-index:0;pointer-events:none;opacity:0.15;}
#particle-canvas{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:0.6}
.aurora{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;filter:blur(100px)}
.aurora-blob{position:absolute;width:600px;height:600px;border-radius:50%;opacity:.15;animation:float 20s infinite alternate}
.aurora-blob:nth-child(1){background:var(--cyan);top:-10%;left:-10%}
.aurora-blob:nth-child(2){background:var(--purple);bottom:-10%;right:-10%;animation-delay:-5s}
@keyframes float{0%{transform:translate(0,0) scale(1)}100%{transform:translate(100px,100px) scale(1.2)}}
.cyber-grid{position:fixed;bottom:-50vh;left:-50vw;width:200vw;height:100vh;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:80px 80px;transform:perspective(500px) rotateX(60deg);z-index:0;animation:gridMove 10s linear infinite;pointer-events:none}
@keyframes gridMove{0%{background-position:0 0}100%{background-position:0 80px}}

/* SNOW RESTORED */
.snow-layer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 2; background-image: radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #fff, rgba(0,0,0,0)); background-repeat: repeat; background-size: 200px 200px; animation: snowFall 10s linear infinite; opacity: 0.6; }
.snow-layer-2 { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 3; background-image: radial-gradient(3px 3px at 10px 10px, #fff, rgba(0,0,0,0)), radial-gradient(3px 3px at 150px 150px, #fff, rgba(0,0,0,0)), radial-gradient(3px 3px at 250px 50px, #fff, rgba(0,0,0,0)); background-repeat: repeat; background-size: 300px 300px; animation: snowFall 15s linear infinite; opacity: 0.4; }
@keyframes snowFall { 0% { background-position: 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px; } 100% { background-position: 200px 200px, 400px 400px, 600px 600px, 800px 800px, 1000px 1000px, 1200px 1200px; } }

/* CORE UI */
a{color:inherit;text-decoration:none}
.nav{position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:100;display:flex;justify-content:space-between;align-items:center;padding:12px 24px;background:rgba(10,10,15,.6);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:99px;width:calc(100% - 40px);max-width:800px;box-shadow:0 10px 30px rgba(0,0,0,.5)}
.logo-text{font-weight:900;font-style:italic;font-size:20px;background:linear-gradient(90deg,#fff,var(--silver));-webkit-background-clip:text;color:transparent;display:flex;align-items:center}
.logo-text svg{width:18px;height:18px;fill:var(--cyan);margin-left:4px;filter:drop-shadow(0 0 10px var(--cyan))}
.nav-links{display:flex;gap:4px}
.nav-links a{color:var(--muted);font-size:13px;font-weight:700;padding:8px 16px;border-radius:99px;transition:.3s}
.nav-links a:hover,.nav-links a.on{color:#000;background:#fff;box-shadow:0 0 20px rgba(255,255,255,0.4)}
.wrap{position:relative;z-index:10;width:100%;max-width:1100px;margin:0 auto;padding:120px clamp(16px,4vw,24px) 60px;flex:1;perspective:1200px}

/* GLASS CARDS & HOLOGRAM SCAN */
.card{position:relative;background:var(--glass);border:1px solid var(--border);border-radius:32px;padding:40px;backdrop-filter:blur(40px) saturate(150%);-webkit-backdrop-filter:blur(40px) saturate(150%);box-shadow:0 30px 60px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.1);transition:transform .2s cubic-bezier(.25,.46,.45,.94),border-color .3s;transform-style:preserve-3d;will-change:transform;overflow:hidden}
.card::before{content:'';position:absolute;inset:0;border-radius:32px;background:radial-gradient(1000px circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,.08),transparent 40%);opacity:0;transition:opacity .3s;pointer-events:none;z-index:0}
.card::after{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(to right,rgba(255,255,255,0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0) 100%);transform:rotate(30deg);animation:hologramScan 6s linear infinite;pointer-events:none;z-index:0}
@keyframes hologramScan{0%{transform:translateX(-100%) rotate(30deg)}100%{transform:translateX(100%) rotate(30deg)}}
.card:hover::before{opacity:1}
.card:hover{border-color:rgba(255,255,255,.3)}
.card>*{position:relative;z-index:1;transform:translateZ(40px)}

/* BUTTONS & LIQUID SPLASH */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:16px 32px;border-radius:99px;font-size:15px;font-weight:900;transition:all .3s;text-decoration:none;border:none;font-family:inherit;overflow:hidden}
.btn-primary{width:100%;background:#fff;color:#000;box-shadow:0 0 40px rgba(255,255,255,.3);min-height:60px;font-size:16px;letter-spacing:.05em;}
.btn-primary:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 10px 50px rgba(255,255,255,.5)}
.btn-secondary{background:rgba(255,255,255,.05);color:#fff;border:1px solid var(--border);}
.btn-secondary:hover{background:rgba(255,255,255,.1);border-color:#fff;transform:translateY(-2px)}

/* TEXT FLOW */
.flow-text{background:linear-gradient(90deg,#fff,var(--cyan),#fff);background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:flowGradient 3s linear infinite;}
@keyframes flowGradient{0%{background-position:0% center}100%{background-position:200% center}}

/* NEON SPINNER TURNSTILE */
.ts-box{position:relative;background:rgba(0,0,0,.6);border:1px solid var(--border);border-radius:24px;padding:40px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:32px;box-shadow:inset 0 0 40px rgba(0,0,0,.8);transition:.4s}
.ts-box.active::before{content:'';position:absolute;inset:-2px;border-radius:26px;background:conic-gradient(from 0deg,transparent,var(--cyan),transparent);animation:spin 2s linear infinite;z-index:-1;filter:blur(10px)}
.ts-box.success::before{content:'';position:absolute;inset:-2px;border-radius:26px;background:conic-gradient(from 0deg,transparent,#10b981,transparent);animation:spin 2s linear infinite;z-index:-1;filter:blur(10px)}

/* CHECKPOINT (NASA ROOM) */
.checkpoint-layout{display:grid;grid-template-columns:1.15fr .85fr;gap:32px;align-items:stretch}
@media(max-width:900px){.checkpoint-layout{grid-template-columns:1fr}}
.ckpt-left{background:var(--glass);border:1px solid var(--border);border-radius:32px;padding:48px;backdrop-filter:blur(40px);box-shadow:0 20px 40px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.1);display:flex;flex-direction:column;justify-content:center}
.ckpt-left h1{font-size:clamp(36px,5vw,52px);font-weight:900;line-height:1.1;color:#fff;margin-bottom:20px;letter-spacing:-.03em;}
.ckpt-left .lead{color:var(--muted);font-size:16px;margin-bottom:40px}
.ts-help{font-size:14px;color:var(--muted);text-align:center;}
.ts-help strong{color:#fff}

.stepper-4{display:flex;align-items:center;justify-content:space-between;position:relative;padding-top:20px}
.stepper-4::before{content:'';position:absolute;top:32px;left:20px;right:20px;height:2px;background:rgba(255,255,255,.1);z-index:0}
.step-item{display:flex;flex-direction:column;align-items:center;gap:10px;position:relative;z-index:1}
.step-item i{width:24px;height:24px;border-radius:50%;background:var(--bg);border:2px solid var(--muted);display:flex;align-items:center;justify-content:center;transition:.3s}
.step-item i svg{width:12px;height:12px;fill:#000;display:none}
.step-item span{font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;text-align:center}
.step-item.active i{border-color:#fff;box-shadow:0 0 15px rgba(255,255,255,.4);background:rgba(255,255,255,.1)}
.step-item.active span{color:#fff}
.step-item.done i{background:#fff;border-color:#fff}
.step-item.done i svg{display:block}

.ckpt-right{display:flex;flex-direction:column;gap:20px}
.telemetry-card{background:var(--glass);border:1px solid var(--border);border-radius:24px;padding:28px;backdrop-filter:blur(30px);position:relative;overflow:hidden}
.telemetry-card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.telemetry-label{font-size:13px;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.1em}
.telemetry-value{font-family:'JetBrains Mono',monospace;font-size:28px;font-weight:900;color:#fff;text-shadow:0 0 30px rgba(255,255,255,.4)}
.wave-graph{display:flex;align-items:flex-end;gap:3px;height:40px;margin-top:12px}
.wave-bar{flex:1;background:var(--muted);border-radius:2px;height:20%;transition:height 0.2s;opacity:0.8}
.wave-bar.hi{background:#fff;opacity:1;box-shadow:0 0 8px #fff}
.split-cards{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.mini-card{background:var(--glass);border:1px solid var(--border);border-radius:20px;padding:20px;backdrop-filter:blur(20px)}
.radar-svg-mini{width:60px;height:60px;filter:drop-shadow(0 0 10px rgba(255,255,255,.2))}
.radar-sweep-circle{transform-origin: 30px 30px;animation:spin 2s linear infinite}
.line-chart-container{height:60px;position:relative;margin-top:12px}
.line-path{fill:none;stroke:#fff;stroke-width:2;filter:drop-shadow(0 0 5px rgba(255,255,255,.5));transition:d 0.3s ease}
.line-dot{fill:#000;stroke:#fff;stroke-width:2;transition:cx 0.3s ease, cy 0.3s ease}
.hacker-term { background: #000; border: 1px solid var(--border); border-radius: 12px; padding: 16px; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #10b981; height: 100px; overflow: hidden; line-height: 1.2; opacity: 0.8; box-shadow: inset 0 0 20px rgba(0,0,0,1); display:flex; flex-direction:column; justify-content:flex-end; }
.hacker-term div { word-break: break-all; }

/* HOME */
h1.hero-title{font-size:clamp(40px,7vw,72px);font-weight:900;line-height:1.05;letter-spacing:-.04em;filter:drop-shadow(0 10px 20px rgba(0,0,0,0.5))}
.radio-group{display:flex;flex-direction:column;gap:12px;margin:24px 0}
.radio-label{display:flex;align-items:center;gap:16px;padding:20px;border:1px solid var(--border);border-radius:20px;transition:.3s;background:rgba(255,255,255,.02)}
.radio-label:hover{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.3);transform:translateX(6px)}
.radio-label input{width:22px;height:22px;accent-color:#fff}
.radio-label span{font-weight:800;font-size:16px;color:#fff}
.link-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:24px}
.foot{position:relative;z-index:10;margin-top:auto;padding:32px;text-align:center;font-size:13px;color:var(--muted);border-top:1px solid var(--border);background:rgba(0,0,0,.4);font-weight:600}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;

export const COMMON_JS = `
document.addEventListener('DOMContentLoaded', function() {
  try {
    // CUSTOM CURSOR
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
        rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
        ring.style.transform = 'translate(' + rx + 'px, ' + ry + 'px) translate(-50%,-50%)';
        requestAnimationFrame(renderRing);
      }
      renderRing();
      document.querySelectorAll('a, button, .radio-label').forEach(function(el) {
        el.addEventListener('mouseenter', function() { ring.classList.add('hover'); });
        el.addEventListener('mouseleave', function() { ring.classList.remove('hover'); });
      });
    }

    // LIQUID SPLASH ON CLICK
    document.body.addEventListener('mousedown', function(e) {
      var splash = document.createElement('div');
      splash.style.cssText = 'position:fixed;top:'+e.clientY+'px;left:'+e.clientX+'px;width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,0.4);transform:translate(-50%,-50%);pointer-events:none;z-index:99999;transition:all 0.5s ease-out;backdrop-filter:blur(5px);';
      document.body.appendChild(splash);
      requestAnimationFrame(function() {
        splash.style.width = '150px'; splash.style.height = '150px'; splash.style.opacity = '0';
      });
      setTimeout(function() { splash.remove(); }, 500);
    });

    // MAGNETIC BUTTONS
    document.querySelectorAll('.btn').forEach(function(btn) {
      btn.addEventListener('mousemove', function(e) {
        var r = btn.getBoundingClientRect(), x = e.clientX - r.left - r.width/2, y = e.clientY - r.top - r.height/2;
        btn.style.transform = 'translate(' + x*0.2 + 'px,' + y*0.2 + 'px)';
      });
      btn.addEventListener('mouseleave', function() { btn.style.transform = 'translate(0,0)'; });
    });

    // 3D PARALLAX
    document.querySelectorAll('.card, .ckpt-left, .telemetry-card, .mini-card').forEach(function(card) {
      card.addEventListener('mousemove', function(e) {
        var r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
        card.style.transform = 'perspective(1200px) rotateX(' + ((y-r.height/2)/r.height)*-4 + 'deg) rotateY(' + ((x-r.width/2)/r.width)*4 + 'deg)';
        card.style.setProperty('--mx', x+'px'); card.style.setProperty('--my', y+'px');
      });
      card.addEventListener('mouseleave', function() { card.style.transform = ''; });
    });

    // BACKGROUND PARALLAX
    var snowLayers = document.querySelectorAll('.snow-layer, .snow-layer-2');
    var grid = document.querySelector('.cyber-grid');
    window.addEventListener('mousemove', function(e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 20;
      var y = (e.clientY / window.innerHeight - 0.5) * 20;
      if(snowLayers[0]) snowLayers[0].style.transform = 'translate(' + (x*0.5) + 'px,' + (y*0.5) + 'px)';
      if(snowLayers[1]) snowLayers[1].style.transform = 'translate(' + x + 'px,' + y + 'px)';
      if(grid) grid.style.transform = 'perspective(500px) rotateX(60deg) translate(' + (x*2) + 'px,' + (y*2) + 'px)';
    });
  } catch(e) { console.warn('Cursor/UI script failed', e); }
});

window.__toast=function(msg){var t=document.createElement('div');t.style.cssText='position:fixed;bottom:32px;left:50%;transform:translateX(-50%);background:rgba(255,255,255,.1);color:#fff;padding:16px 32px;border-radius:99px;font-weight:800;font-size:14px;z-index:99999;backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.2);box-shadow:0 10px 40px rgba(0,0,0,.8);transition:opacity .3s';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>{t.style.opacity='0';setTimeout(()=>t.remove(),300)},2500);};
document.addEventListener('click',function(e){
  var c=e.target.closest('[data-copy]');if(!c)return;
  var el=document.getElementById(c.getAttribute('data-copy'));if(!el)return;
  if(navigator.clipboard) navigator.clipboard.writeText(el.textContent.trim()).then(function(){ window.__toast('Đã sao chép key'); });
});
`;

export const CHECKPOINT_JS = `(function(){
  var timer=document.getElementById('timer');
  if(timer){ var t0=performance.now(); setInterval(function(){timer.innerHTML=((performance.now()-t0)/1000).toFixed(2)+'<small>s</small>';}, 50); }

  var waves=document.querySelectorAll('.wave-bar');
  if(waves.length) setInterval(function(){ for(var i=0;i<waves.length;i++){ waves[i].style.height = (Math.random()>0.8 ? (30+Math.random()*70) : (10+Math.random()*20))+'%'; waves[i].className = Math.random()>0.9?'wave-bar hi':'wave-bar'; } },150);

  var linePath=document.querySelector('.line-path'), lineDot=document.querySelector('.line-dot'), points=[];
  if(linePath){ for(var k=0; k<=10; k++) points.push({x: k*10, y: 15});
  setInterval(function(){
    if(!linePath || !lineDot) return;
    var d = 'M '; for(var i=0; i<points.length; i++){ if(i>0) points[i].y = 15 + (Math.random()-0.5)*20; d += points[i].x+','+points[i].y+' '; }
    linePath.setAttribute('d', d); lineDot.setAttribute('cx', points[10].x); lineDot.setAttribute('cy', points[10].y);
  }, 800); }

  var hexEl = document.getElementById('hex-dump');
  if(hexEl){ setInterval(function(){ var hex = ''; for(var i=0; i<20; i++) hex += Math.floor(Math.random()*16).toString(16).toUpperCase() + ' '; var div = document.createElement('div'); div.textContent = '> 0x' + hex; hexEl.appendChild(div); if(hexEl.children.length > 8) hexEl.removeChild(hexEl.firstChild); hexEl.scrollTop = hexEl.scrollHeight; }, 150); }

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
    // MATRIX RAIN
    var mc = document.getElementById('matrix-canvas');
    if (mc) {
      var mctx = mc.getContext('2d');
      mc.width = window.innerWidth; mc.height = window.innerHeight;
      var cols = Math.floor(mc.width / 20) + 1;
      var ypos = Array(cols).fill(0);
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
      setInterval(function() {
        mctx.fillStyle = 'rgba(0,0,0,0.05)';
        mctx.fillRect(0, 0, mc.width, mc.height);
        mctx.fillStyle = '#0f0';
        mctx.font = '15pt monospace';
        for (var i = 0; i < ypos.length; i++) {
          var text = chars[Math.floor(Math.random() * chars.length)];
          mctx.fillText(text, i * 20, ypos[i] * 20);
          if (ypos[i] * 20 > mc.height && Math.random() > 0.975) ypos[i] = 0;
          ypos[i]++;
        }
      }, 50);
      window.addEventListener('resize', function() { mc.width = window.innerWidth; mc.height = window.innerHeight; });
    }

    // PARTICLES
    var pc = document.getElementById('particle-canvas');
    if(!pc) return;
    var pctx = pc.getContext('2d');
    var pw, ph, particles = [];
    function init() {
        pw = pc.width = window.innerWidth; ph = pc.height = window.innerHeight; particles = [];
        for (var i = 0; i < 80; i++) particles.push({ x: Math.random()*pw, y: Math.random()*ph, vx:(Math.random()-0.5)*0.5, vy:(Math.random()-0.5)*0.5, r: Math.random()*1.5+0.5 });
    }
    function draw() {
        pctx.clearRect(0, 0, pw, ph);
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i]; p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > pw) p.vx *= -1; if (p.y < 0 || p.y > ph) p.vy *= -1;
            pctx.beginPath(); pctx.fillStyle = 'rgba(255,255,255,0.4)'; pctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); pctx.fill();
            for (var j = i + 1; j < particles.length; j++) {
                var p2 = particles[j], dx = p.x - p2.x, dy = p.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 180) { pctx.beginPath(); pctx.strokeStyle = 'rgba(255,255,255,' + (1 - dist/180) * 0.15 + ')'; pctx.lineWidth = 1; pctx.moveTo(p.x, p.y); pctx.lineTo(p2.x, p2.y); pctx.stroke(); }
            }
        }
        requestAnimationFrame(draw);
    }
    window.addEventListener('resize', init); init(); draw();
  } catch(e) {}
})();`;
