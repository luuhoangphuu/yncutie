export const CSS = `
:root{--bg:#050505;--surface:rgba(20,20,25,.5);--border:rgba(255,255,255,.08);--text:#ffffff;--muted:#94a3b8;--accent:#00f0ff;--purple:#7000ff;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased;position:relative;cursor:auto}
body.custom-cursor-active, body.custom-cursor-active a, body.custom-cursor-active button{cursor:none !important}

/* CUSTOM CURSOR */
.cursor-dot,.cursor-ring{position:fixed;top:0;left:0;transform:translate(-50%,-50%);border-radius:50%;z-index:99999;pointer-events:none;opacity:0;transition:opacity 0.3s}
body.custom-cursor-active .cursor-dot, body.custom-cursor-active .cursor-ring{opacity:1}
.cursor-dot{width:8px;height:8px;background:#fff;mix-blend-mode:difference;transition:transform 0.1s}
.cursor-ring{width:40px;height:40px;border:1px solid rgba(255,255,255,0.5);mix-blend-mode:difference;transition:width 0.2s,height 0.2s,background 0.2s}
.cursor-ring.hover{width:64px;height:64px;background:rgba(255,255,255,0.1);border-color:#fff}

/* BACKGROUND LAYERS (GIỮ NGUYÊN HIỆU ỨNG) */
#matrix-canvas{position:fixed;inset:0;z-index:0;pointer-events:none;opacity:0.08;}
#particle-canvas{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:0.4}
.cyber-grid{position:fixed;bottom:-50vh;left:-50vw;width:200vw;height:100vh;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:80px 80px;transform:perspective(500px) rotateX(60deg);z-index:0;animation:gridMove 10s linear infinite;pointer-events:none}
@keyframes gridMove{0%{background-position:0 0}100%{background-position:0 80px}}
.aurora{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;filter:blur(120px);opacity:0.5}
.aurora-blob{position:absolute;width:800px;height:800px;border-radius:50%;opacity:.1;animation:float 20s infinite alternate}
.aurora-blob:nth-child(1){background:var(--accent);top:-20%;left:-10%}
.aurora-blob:nth-child(2){background:var(--purple);bottom:-20%;right:-10%;animation-delay:-5s}
@keyframes float{0%{transform:translate(0,0) scale(1)}100%{transform:translate(100px,100px) scale(1.2)}}

/* SNOW (GIỮ NGUYÊN) */
.snow-layer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 2; background-image: radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #fff, rgba(0,0,0,0)); background-repeat: repeat; background-size: 200px 200px; animation: snowFall 10s linear infinite; opacity: 0.4; }
.snow-layer-2 { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 3; background-image: radial-gradient(3px 3px at 10px 10px, #fff, rgba(0,0,0,0)), radial-gradient(3px 3px at 150px 150px, #fff, rgba(0,0,0,0)), radial-gradient(3px 3px at 250px 50px, #fff, rgba(0,0,0,0)); background-repeat: repeat; background-size: 300px 300px; animation: snowFall 15s linear infinite; opacity: 0.3; }
@keyframes snowFall { 0% { background-position: 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px; } 100% { background-position: 200px 200px, 400px 400px, 600px 600px, 800px 800px, 1000px 1000px, 1200px 1200px; } }

/* CORE UI */
a{color:inherit;text-decoration:none}
.nav{position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:100;display:flex;justify-content:space-between;align-items:center;padding:12px 24px;background:rgba(10,10,15,.7);backdrop-filter:blur(30px);border:1px solid var(--border);border-radius:99px;width:calc(100% - 40px);max-width:800px;box-shadow:0 10px 40px rgba(0,0,0,.5)}
.logo-text{font-weight:900;font-style:italic;font-size:20px;background:linear-gradient(90deg,#fff,#94a3b8);-webkit-background-clip:text;color:transparent;display:flex;align-items:center;letter-spacing:-0.05em}
.logo-text svg{width:18px;height:18px;fill:var(--accent);margin-left:4px;filter:drop-shadow(0 0 10px var(--accent))}
.nav-links{display:flex;gap:4px}
.nav-links a{color:var(--muted);font-size:13px;font-weight:700;padding:8px 16px;border-radius:99px;transition:.3s}
.nav-links a:hover,.nav-links a.on{color:#000;background:#fff;box-shadow:0 0 20px rgba(255,255,255,0.2)}
.wrap{position:relative;z-index:10;width:100%;max-width:1200px;margin:0 auto;padding:120px clamp(16px,4vw,24px) 60px;flex:1;perspective:1200px}

/* BENTO GRID (CHUẨN APPLE) */
.bento-grid{display:grid;grid-template-columns:repeat(4, 1fr);gap:20px;margin-top:40px}
.bento-item{background:var(--surface);border:1px solid var(--border);border-radius:32px;padding:32px;backdrop-filter:blur(40px);-webkit-backdrop-filter:blur(40px);box-shadow:0 20px 40px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.1);position:relative;overflow:hidden;transition:transform .3s,border-color .3s;display:flex;flex-direction:column;justify-content:space-between}
.bento-item:hover{border-color:rgba(255,255,255,.2);transform:translateY(-4px)}
.bento-item.col-span-2{grid-column:span 2}
.bento-item.col-span-4{grid-column:span 4}
@media(max-width:900px){.bento-grid{grid-template-columns:1fr}.bento-item.col-span-2,.bento-item.col-span-4{grid-column:span 1}}

/* GLOW & HOLOGRAM */
.bento-item::before{content:'';position:absolute;inset:0;border-radius:32px;background:radial-gradient(800px circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,.06),transparent 40%);opacity:0;transition:opacity .3s;pointer-events:none;z-index:0}
.bento-item:hover::before{opacity:1}
.bento-item::after{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(to right,rgba(255,255,255,0) 0%,rgba(255,255,255,0.03) 50%,rgba(255,255,255,0) 100%);transform:rotate(30deg);animation:hologramScan 8s linear infinite;pointer-events:none;z-index:0}
@keyframes hologramScan{0%{transform:translateX(-100%) rotate(30deg)}100%{transform:translateX(100%) rotate(30deg)}}
.bento-item>*{position:relative;z-index:1}

/* TYPOGRAPHY */
h1.hero-title{font-size:clamp(50px,8vw,90px);font-weight:900;line-height:1;letter-spacing:-0.05em;filter:drop-shadow(0 10px 30px rgba(0,0,0,0.8));margin-bottom:16px;}
.hero-sub{color:var(--muted);font-size:18px;max-width:600px;margin-bottom:32px;}
.flow-text{background:linear-gradient(90deg,#fff,var(--muted),#fff);background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:flowGradient 4s linear infinite;}
@keyframes flowGradient{0%{background-position:0% center}100%{background-position:200% center}}
h2{font-size:24px;font-weight:900;margin-bottom:16px;color:#fff;letter-spacing:-0.02em}

/* BUTTONS */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:16px 32px;border-radius:16px;font-size:15px;font-weight:900;transition:all .3s;text-decoration:none;border:none;font-family:inherit;overflow:hidden;cursor:pointer}
.btn-primary{width:100%;background:#fff;color:#000;box-shadow:0 0 30px rgba(255,255,255,.2);min-height:60px;font-size:16px;}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 40px rgba(255,255,255,.4)}
.btn-secondary{background:rgba(255,255,255,.05);color:#fff;border:1px solid var(--border);}
.btn-secondary:hover{background:rgba(255,255,255,.1);border-color:#fff}
.radio-group{display:flex;flex-direction:column;gap:12px;margin:20px 0}
.radio-label{display:flex;align-items:center;gap:16px;padding:20px;border:1px solid var(--border);border-radius:20px;transition:.3s;background:rgba(255,255,255,.02);cursor:pointer}
.radio-label:hover{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.3);transform:translateX(4px)}
.radio-label input{width:20px;height:20px;accent-color:#fff}
.radio-label span{font-weight:700;font-size:16px;color:#fff}

/* CHECKPOINT (COMMAND CENTER) */
.checkpoint-layout{display:grid;grid-template-columns:1.2fr .8fr;gap:24px;align-items:start}
@media(max-width:900px){.checkpoint-layout{grid-template-columns:1fr}}
.panel{background:var(--surface);border:1px solid var(--border);border-radius:32px;padding:40px;backdrop-filter:blur(40px);box-shadow:0 20px 40px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.1);position:relative;overflow:hidden}
.panel::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent)}
.panel-title{font-size:clamp(32px,4vw,48px);font-weight:900;line-height:1.1;color:#fff;margin-bottom:16px;letter-spacing:-.03em;}
.panel-sub{color:var(--muted);font-size:16px;margin-bottom:40px}

.ts-box{position:relative;background:rgba(0,0,0,.8);border:1px solid var(--border);border-radius:24px;padding:40px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:32px;transition:.4s;box-shadow:inset 0 0 40px rgba(0,0,0,1)}
.ts-box.active::before{content:'';position:absolute;inset:-2px;border-radius:26px;background:conic-gradient(from 0deg,transparent,var(--accent),transparent);animation:spin 2s linear infinite;z-index:-1;filter:blur(10px)}
.ts-box.success::before{content:'';position:absolute;inset:-2px;border-radius:26px;background:conic-gradient(from 0deg,transparent,#10b981,transparent);animation:spin 2s linear infinite;z-index:-1;filter:blur(10px)}
@keyframes spin{100%{transform:rotate(360deg)}}

/* TELEMETRY */
.telemetry-grid{display:flex;flex-direction:column;gap:16px}
.telemetry-card{background:var(--surface);border:1px solid var(--border);border-radius:24px;padding:24px;backdrop-filter:blur(30px);position:relative;overflow:hidden}
.telemetry-label{font-size:11px;color:var(--muted);font-weight:800;text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px;display:block}
.telemetry-value{font-family:'JetBrains Mono',monospace;font-size:28px;font-weight:900;color:#fff;text-shadow:0 0 30px rgba(255,255,255,.3)}

.wave-graph{display:flex;align-items:flex-end;gap:4px;height:40px;margin-top:16px}
.wave-bar{flex:1;background:var(--muted);border-radius:2px;height:20%;transition:height 0.2s;opacity:0.6}
.wave-bar.hi{background:#fff;opacity:1;box-shadow:0 0 10px #fff}

.split-cards{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.mini-card{background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:20px;backdrop-filter:blur(20px)}
.radar-svg-mini{width:60px;height:60px;filter:drop-shadow(0 0 10px rgba(255,255,255,.2))}
.radar-sweep-circle{transform-origin: 30px 30px;animation:spin 2.5s linear infinite}
.line-chart-container{height:50px;position:relative;margin-top:12px}
.line-path{fill:none;stroke:#fff;stroke-width:2;filter:drop-shadow(0 0 5px rgba(255,255,255,.5));transition:d 0.3s ease}
.line-dot{fill:#000;stroke:#fff;stroke-width:2;transition:cx 0.3s ease, cy 0.3s ease}

.hacker-term { background: #000; border: 1px solid var(--border); border-radius: 16px; padding: 16px; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #10b981; height: 90px; overflow: hidden; line-height: 1.4; opacity: 0.8; box-shadow: inset 0 0 20px rgba(0,0,0,1); display:flex; flex-direction:column; justify-content:flex-end; }
.hacker-term div { word-break: break-all; }

/* FOOTER */
.foot{position:relative;z-index:10;margin-top:auto;padding:32px;text-align:center;font-size:13px;color:var(--muted);border-top:1px solid var(--border);background:rgba(5,5,5,.8);backdrop-filter:blur(20px);font-weight:600}
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

    document.body.addEventListener('mousedown', function(e) {
      var splash = document.createElement('div');
      splash.style.cssText = 'position:fixed;top:'+e.clientY+'px;left:'+e.clientX+'px;width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,0.3);transform:translate(-50%,-50%);pointer-events:none;z-index:99999;transition:all 0.6s cubic-bezier(0.1, 0.8, 0.2, 1);backdrop-filter:blur(5px);';
      document.body.appendChild(splash);
      requestAnimationFrame(function() {
        splash.style.width = '200px'; splash.style.height = '200px'; splash.style.opacity = '0';
      });
      setTimeout(function() { splash.remove(); }, 600);
    });

    document.querySelectorAll('.btn').forEach(function(btn) {
      btn.addEventListener('mousemove', function(e) {
        var r = btn.getBoundingClientRect(), x = e.clientX - r.left - r.width/2, y = e.clientY - r.top - r.height/2;
        btn.style.transform = 'translate(' + x*0.15 + 'px,' + y*0.15 + 'px)';
      });
      btn.addEventListener('mouseleave', function() { btn.style.transform = 'translate(0,0)'; });
    });

    document.querySelectorAll('.bento-item, .panel, .telemetry-card, .mini-card').forEach(function(card) {
      card.addEventListener('mousemove', function(e) {
        var r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
        card.style.setProperty('--mx', x+'px'); card.style.setProperty('--my', y+'px');
      });
    });

    var snowLayers = document.querySelectorAll('.snow-layer, .snow-layer-2');
    var grid = document.querySelector('.cyber-grid');
    window.addEventListener('mousemove', function(e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 20;
      var y = (e.clientY / window.innerHeight - 0.5) * 20;
      if(snowLayers[0]) snowLayers[0].style.transform = 'translate(' + (x*0.5) + 'px,' + (y*0.5) + 'px)';
      if(snowLayers[1]) snowLayers[1].style.transform = 'translate(' + x + 'px,' + y + 'px)';
      if(grid) grid.style.transform = 'perspective(500px) rotateX(60deg) translate(' + (x*2) + 'px,' + (y*2) + 'px)';
    });
  } catch(e) { console.warn('UI script failed', e); }
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
