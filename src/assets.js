export const CSS = `
:root{--bg:#020203;--glass:rgba(15,15,20,.5);--border:rgba(255,255,255,.15);--text:#ffffff;--muted:#a1a1aa;--silver:#e4e4e7;--ok:#10b981;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box;cursor:none !important}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased;position:relative}
a,input,button{cursor:none !important}

/* ═════════ CUSTOM CURSOR & TRAIL ═════════ */
.cursor-dot,.cursor-outline,.cursor-trail{position:fixed;top:0;left:0;transform:translate(-50%,-50%);border-radius:50%;z-index:99999;pointer-events:none}
.cursor-dot{width:6px;height:6px;background:#fff;}
.cursor-outline{width:40px;height:40px;border:1px solid rgba(255,255,255,.5);transition:width .2s,height .2s,background .2s}
.cursor-outline.hover{width:60px;height:60px;background:rgba(255,255,255,.1);border-color:#fff}
.cursor-trail{width:15px;height:15px;background:rgba(255,255,255,.2);filter:blur(4px);z-index:99998}

/* ═════════ BUBBLE CANVAS ═════════ */
#bubble-canvas{position:fixed;inset:0;z-index:2;pointer-events:none}
.bubble { position: absolute; border-radius: 50%; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(255,255,255,0.05)); border: 1px solid rgba(255,255,255,0.3); box-shadow: inset 0 0 10px rgba(255,255,255,0.2), 0 0 10px rgba(255,255,255,0.2); pointer-events: none; animation: floatBubble 4s ease-in forwards; }
@keyframes floatBubble { 0% { transform: translateY(0) scale(1); opacity: 1; } 100% { transform: translateY(-200px) scale(1.5); opacity: 0; } }

/* ═════════ BACKGROUND EFFECTS ═════════ */
.cyber-grid{position:fixed;bottom:-50vh;left:-50vw;width:200vw;height:100vh;background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:60px 60px;transform:perspective(500px) rotateX(60deg);z-index:0;animation:gridMove 5s linear infinite;pointer-events:none}
@keyframes gridMove{0%{background-position:0 0}100%{background-position:0 60px}}
#particle-canvas{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:0.6}
.scanlines{position:fixed;inset:0;z-index:9999;pointer-events:none;background:linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,0) 50%,rgba(0,0,0,.2) 50%,rgba(0,0,0,.2));background-size:100% 4px;opacity:0.3}

/* ═════════ SNOW ═════════ */
.snow-layer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 3; background-image: radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)); background-repeat: repeat; background-size: 200px 200px; animation: snowFall 10s linear infinite; opacity: 0.6; }
@keyframes snowFall { 0% { background-position: 0px 0px, 0px 0px, 0px 0px, 0px 0px; } 100% { background-position: 200px 200px, 400px 400px, 600px 600px, 800px 800px; } }

/* ═════════ CORE UI ═════════ */
a{color:inherit;text-decoration:none}
.nav{position:relative;z-index:10;display:flex;justify-content:space-between;align-items:center;padding:16px clamp(16px,4vw,40px);background:rgba(5,5,8,.6);backdrop-filter:blur(30px);border-bottom:1px solid var(--border)}
.logo-text{font-family:'Inter',sans-serif;font-weight:900;font-style:italic;font-size:24px;background:linear-gradient(180deg,#ffffff 0%,#a1a1aa 100%);-webkit-background-clip:text;background-clip:text;color:transparent;display:flex;align-items:center}
.logo-text svg{width:22px;height:22px;fill:var(--silver);margin-left:4px;filter:drop-shadow(0 0 10px rgba(255,255,255,0.6))}
.nav-links{display:flex;align-items:center;gap:6px}
.nav-links a{color:var(--muted);font-size:14px;font-weight:700;padding:8px 16px;border-radius:10px;transition:.3s}
.nav-links a:hover,.nav-links a.on{color:#fff;background:rgba(255,255,255,.1)}
.wrap{position:relative;z-index:10;width:100%;max-width:1100px;margin:0 auto;padding:clamp(24px,5vw,48px) clamp(16px,4vw,24px);flex:1;perspective:1200px}
.wrap.narrow{max-width:620px}

/* ═════════ LIQUID GLASS CARDS ═════════ */
.card{position:relative;background:var(--glass);border:1px solid var(--border);border-radius:24px;padding:32px;backdrop-filter:blur(40px);-webkit-backdrop-filter:blur(40px);box-shadow:0 30px 60px rgba(0,0,0,.8),inset 0 1px 0 rgba(255,255,255,.15);transition:transform .1s ease-out,border-color .3s;transform-style:preserve-3d;will-change:transform;overflow:hidden}
.card::before{content:'';position:absolute;inset:0;border-radius:24px;background:radial-gradient(800px circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,.1),transparent 40%);opacity:0;transition:opacity .3s;pointer-events:none;z-index:0}
.card:hover::before{opacity:1}
.card:hover{border-color:rgba(255,255,255,.4)}
.card>*{position:relative;z-index:1;transform:translateZ(30px)}

/* Liquid Border (Glow rotating) */
.liquid-card { position: relative; padding: 2px; border-radius: 26px; background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent); background-size: 200% 200%; animation: liquidRotate 4s linear infinite; }
.liquid-inner { background: #050508; border-radius: 24px; padding: 32px; }
@keyframes liquidRotate { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }

/* ═════════ GLITCH BUTTON ═════════ */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:16px 24px;border-radius:16px;font-size:15px;font-weight:900;transition:all .2s;text-decoration:none;border:none;font-family:inherit;overflow:hidden}
.btn-primary{width:100%;background:linear-gradient(135deg,#ffffff 0%,#e4e4e7 50%,#a1a1aa 100%);color:#050508;box-shadow:0 0 20px rgba(255,255,255,.2);min-height:54px;font-size:16px;}
.btn-primary:hover { animation: glitchAnim 0.3s cubic-bezier(.25,.46,.45,.94) both infinite; }
@keyframes glitchAnim { 0% { transform: translate(0); } 20% { transform: translate(-2px, 2px); text-shadow: 2px 0 #00f0ff, -2px 0 #ff00ff; } 40% { transform: translate(-2px, -2px); text-shadow: -2px 0 #00f0ff, 2px 0 #ff00ff; } 60% { transform: translate(2px, 2px); text-shadow: 2px 0 #00f0ff, -2px 0 #ff00ff; } 80% { transform: translate(2px, -2px); text-shadow: -2px 0 #00f0ff, 2px 0 #ff00ff; } 100% { transform: translate(0); } }

/* ═════════ STEPPER ═════════ */
.stepper{display:flex;justify-content:space-between;align-items:flex-start;position:relative;margin-bottom:40px;max-width:700px;margin:0 auto;padding:0 20px;list-style:none;}
.stepper::before{content:'';position:absolute;top:18px;left:40px;right:40px;height:2px;background:rgba(255,255,255,.1);z-index:0}
.stepper li{flex:1;display:flex;flex-direction:column;align-items:center;gap:12px;position:relative;z-index:1}
.stepper li b{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#050508;border:2px solid rgba(255,255,255,.2);color:var(--muted);font-size:14px;font-weight:900;transition:.3s}
.stepper li.on b{border-color:#fff;color:#fff;box-shadow:0 0 20px rgba(255,255,255,.4);background:rgba(255,255,255,.1)}
.stepper li.done b{background:var(--silver);border-color:var(--silver);color:#000;box-shadow:0 0 20px rgba(255,255,255,.4)}

/* ═════════ CHECKPOINT (SOC) ═════════ */
.checkpoint-layout{display:grid;grid-template-columns:1.15fr .85fr;gap:24px;align-items:start}
@media(max-width:900px){.checkpoint-layout{grid-template-columns:1fr}}
.ckpt-left{background:var(--glass);border:1px solid var(--border);border-radius:24px;padding:40px;backdrop-filter:blur(40px);box-shadow:0 20px 40px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.1)}
.ckpt-left h1{font-size:clamp(32px,4vw,42px);font-weight:900;line-height:1.15;color:#fff;margin-bottom:16px;}
.ckpt-left .lead{color:var(--muted);font-size:16px;margin-bottom:32px}
.ts-box{background:linear-gradient(180deg, rgba(255,255,255,.05), rgba(0,0,0,.4));border:1px solid var(--border);border-radius:16px;padding:32px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:32px;box-shadow:inset 0 2px 10px rgba(0,0,0,.8);transition:.4s}
.ts-box.active{border-color:rgba(255,255,255,.6);box-shadow:inset 0 2px 10px rgba(0,0,0,.8), 0 0 20px rgba(255,255,255,.2)}
.ts-box.success{border-color:rgba(255,255,255,.8);box-shadow:inset 0 2px 10px rgba(0,0,0,.8), 0 0 30px rgba(255,255,255,.4)}
.ts-help{font-size:13px;color:var(--muted);text-align:center;margin-top:20px}
.ts-help strong{color:#fff}

.ckpt-right{display:flex;flex-direction:column;gap:16px}
.telemetry-card{background:var(--glass);border:1px solid var(--border);border-radius:20px;padding:24px;backdrop-filter:blur(40px)}
.telemetry-card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.telemetry-label{font-size:13px;color:var(--muted);font-weight:600}
.telemetry-value{font-family:'JetBrains Mono',monospace;font-size:24px;font-weight:900;color:#fff;text-shadow:0 0 20px rgba(255,255,255,.3)}

.wave-graph{display:flex;align-items:flex-end;gap:3px;height:40px;margin-top:12px}
.wave-bar{flex:1;background:var(--muted);border-radius:2px;height:20%;transition:height 0.2s;opacity:0.8}
.wave-bar.hi{background:#fff;opacity:1;box-shadow:0 0 8px #fff}

.split-cards{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.mini-card{background:var(--glass);border:1px solid var(--border);border-radius:16px;padding:20px;backdrop-filter:blur(20px)}
.radar-svg-mini{width:60px;height:60px;filter:drop-shadow(0 0 10px rgba(255,255,255,.2))}
.radar-sweep-circle{transform-origin: 30px 30px;animation:spin 2s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.line-chart-container{height:60px;position:relative;margin-top:12px}
.line-path{fill:none;stroke:#fff;stroke-width:2;filter:drop-shadow(0 0 5px rgba(255,255,255,.5));transition:d 0.3s ease}
.line-dot{fill:#000;stroke:#fff;stroke-width:2;transition:cx 0.3s ease, cy 0.3s ease}

/* MATRIX TERMINAL */
.hacker-term { background: #000; border: 1px solid var(--border); border-radius: 12px; padding: 16px; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #10b981; height: 100px; overflow: hidden; line-height: 1.2; opacity: 0.8; box-shadow: inset 0 0 20px rgba(0,0,0,1); display:flex; flex-direction:column; justify-content:flex-end; }
.hacker-term div { word-break: break-all; }

/* MISC */
.split-layout{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
@media(max-width:850px){.split-layout{grid-template-columns:1fr;gap:24px}}
h1.hero-title{font-size:clamp(32px,6vw,56px);font-weight:900;line-height:1.1;background:linear-gradient(180deg,#ffffff 0%,#a1a1aa 100%);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 4px 10px rgba(0,0,0,0.5))}
.radio-group{display:flex;flex-direction:column;gap:12px;margin:20px 0}
.radio-label{display:flex;align-items:center;gap:14px;padding:16px;border:1px solid var(--border);border-radius:14px;transition:.3s;background:rgba(255,255,255,.02)}
.radio-label:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.4);transform:translateX(4px)}
.radio-label input{width:20px;height:20px;accent-color:var(--silver)}
.radio-label span{font-weight:800;font-size:15px;color:#fff}
.link-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:20px}
.foot{position:relative;z-index:10;margin-top:auto;padding:24px;text-align:center;font-size:12px;color:var(--muted);border-top:1px solid var(--border);background:rgba(5,5,8,.8);font-weight:600}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;

export const COMMON_JS = `
// CUSTOM CURSOR & TRAIL
var cursorDot = document.querySelector('.cursor-dot');
var cursorOutline = document.querySelector('.cursor-outline');
var cursorTrail = document.querySelector('.cursor-trail');
var mouseX = 0, mouseY = 0, trailX = 0, trailY = 0;
if(cursorDot && cursorOutline && cursorTrail) {
  window.addEventListener('mousemove', function(e){
    mouseX = e.clientX; mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px'; cursorDot.style.top = mouseY + 'px';
    cursorOutline.animate({ left: mouseX + 'px', top: mouseY + 'px' }, { duration: 400, fill: "forwards" });
  });
  function animateTrail() {
    trailX += (mouseX - trailX) * 0.1; trailY += (mouseY - trailY) * 0.1;
    cursorTrail.style.left = trailX + 'px'; cursorTrail.style.top = trailY + 'px';
    requestAnimationFrame(animateTrail);
  }
  animateTrail();
  document.querySelectorAll('a, button, input, .radio-label').forEach(function(el){
    el.addEventListener('mouseenter', function(){ cursorOutline.classList.add('hover'); });
    el.addEventListener('mouseleave', function(){ cursorOutline.classList.remove('hover'); });
  });
}

// BUBBLE BURST ON CLICK
document.addEventListener('mousedown', function(e) {
  for(var i=0; i<8; i++) {
    var b = document.createElement('div');
    b.className = 'bubble';
    var size = Math.random() * 30 + 10;
    b.style.width = size + 'px'; b.style.height = size + 'px';
    b.style.left = (e.clientX - size/2) + (Math.random()-0.5)*60 + 'px';
    b.style.top = (e.clientY - size/2) + (Math.random()-0.5)*60 + 'px';
    b.style.animationDuration = (Math.random() * 1 + 1) + 's';
    document.body.appendChild(b);
    setTimeout(function(){ b.remove(); }, 2000);
  }
});

// TEXT SCRAMBLE
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
document.querySelectorAll('.scramble-text').forEach(function(el){
  var originalText = el.innerText;
  var interval = null;
  el.addEventListener('mouseover', function(){
    var iteration = 0; clearInterval(interval);
    interval = setInterval(function(){
      el.innerText = originalText.split("").map(function(letter, index){
        if(index < iteration) return originalText[index];
        return letters[Math.floor(Math.random() * letters.length)];
      }).join("");
      if(iteration >= originalText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  });
});

// MAGNETIC BUTTONS
document.querySelectorAll('.btn').forEach(function(btn){
  btn.addEventListener('mousemove', function(e){
    var rect = btn.getBoundingClientRect(), x = e.clientX - rect.left - rect.width/2, y = e.clientY - rect.top - rect.height/2;
    btn.style.transform = 'translate(' + (x * 0.3) + 'px, ' + (y * 0.3) + 'px)';
  });
  btn.addEventListener('mouseleave', function(){ btn.style.transform = 'translate(0px, 0px)'; });
});

// 3D PARALLAX
if(matchMedia('(pointer:fine)').matches){
  document.querySelectorAll('.card, .ckpt-left, .telemetry-card, .mini-card').forEach(function(card){
    card.addEventListener('mousemove',function(e){
      var r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top,cx=r.width/2,cy=r.height/2;
      card.style.transform='perspective(1000px) rotateX('+((y-cy)/cy)*-5+'deg) rotateY('+((x-cx)/cx)*5+'deg) translateZ(0)';
      card.style.setProperty('--mx',x+'px'); card.style.setProperty('--my',y+'px');
    });
    card.addEventListener('mouseleave',function(){card.style.transform='';});
  });
}

window.__toast=function(msg){var t=document.createElement('div');t.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:rgba(20,20,24,.95);color:#fff;padding:14px 28px;border-radius:14px;font-weight:800;font-size:14px;z-index:9999;opacity:0;transition:.3s;border:1px solid #fff;backdrop-filter:blur(20px);box-shadow:0 10px 30px rgba(0,0,0,.8)';t.textContent=msg;document.body.appendChild(t);requestAnimationFrame(()=>{t.style.opacity='1';t.style.transform='translateX(-50%) translateY(-10px)';});setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(-50%) translateY(0)';setTimeout(()=>t.remove(),300);},2500);};
document.addEventListener('click',function(e){
  var c=e.target.closest('[data-copy]');if(!c)return;
  var el=document.getElementById(c.getAttribute('data-copy'));if(!el)return;
  if(navigator.clipboard) navigator.clipboard.writeText(el.textContent.trim()).then(function(){ window.__toast('Đã sao chép key'); });
});
`;

export const CHECKPOINT_JS = `(function(){
  var timerEl=document.getElementById('timer');
  if(!timerEl)return;
  var t0=performance.now(), tick=setInterval(function(){timerEl.innerHTML=((performance.now()-t0)/1000).toFixed(2)+'<small>s</small>';}, 50);

  var waves=document.querySelectorAll('.wave-bar');
  setInterval(function(){ for(var i=0;i<waves.length;i++){ waves[i].style.height = (Math.random()>0.8 ? (30+Math.random()*70) : (10+Math.random()*20))+'%'; waves[i].className = Math.random()>0.9?'wave-bar hi':'wave-bar'; } },150);

  var linePath=document.querySelector('.line-path'), lineDot=document.querySelector('.line-dot'), points=[];
  for(var k=0; k<=10; k++) points.push({x: k*10, y: 15});
  setInterval(function(){
    if(!linePath || !lineDot) return;
    var d = 'M '; for(var i=0; i<points.length; i++){ if(i>0) points[i].y = 15 + (Math.random()-0.5)*20; d += points[i].x+','+points[i].y+' '; }
    linePath.setAttribute('d', d); lineDot.setAttribute('cx', points[10].x); lineDot.setAttribute('cy', points[10].y);
  }, 800);

  var hexEl = document.getElementById('hex-dump');
  if(hexEl){
    setInterval(function(){
      var hex = '';
      for(var i=0; i<20; i++) hex += Math.floor(Math.random()*16).toString(16).toUpperCase() + ' ';
      var div = document.createElement('div'); div.textContent = '> 0x' + hex;
      hexEl.appendChild(div);
      if(hexEl.children.length > 8) hexEl.removeChild(hexEl.firstChild);
      hexEl.scrollTop = hexEl.scrollHeight;
    }, 150);
  }

  var busy=false;
  window.onTurnstileError=function(){ document.getElementById('errorBox').style.display='block'; document.getElementById('errorBox').textContent='Lỗi Captcha'; };
  window.onTurnstileSuccess=function(token){
    if(busy)return;busy=true;
    clearInterval(tick); timerEl.innerHTML=((performance.now()-t0)/1000).toFixed(2)+'<small>s</small>';
    document.getElementById('tsWrap').classList.add('active');
    document.getElementById('helpText').innerHTML='<strong>Đang xác minh...</strong>';
    fetch('/api/verify-bot',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:token})})
      .then(r=>r.json()).then(d=>{
        if(d&&d.success){ document.getElementById('tsWrap').className='ts-box success'; document.getElementById('helpText').innerHTML='<strong>✓ Thành công! Đang chuyển...</strong>'; setTimeout(()=>location.href=document.getElementById('app').getAttribute('data-next'),600); }
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
    function initParticles() {
        pw = pc.width = window.innerWidth; ph = pc.height = window.innerHeight; particles = [];
        for (var i = 0; i < 100; i++) particles.push({ x: Math.random()*pw, y: Math.random()*ph, vx:(Math.random()-0.5)*0.8, vy:(Math.random()-0.5)*0.8, r: Math.random()*1.5+0.5 });
    }
    function drawParticles() {
        pctx.clearRect(0, 0, pw, ph);
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i]; p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > pw) p.vx *= -1; if (p.y < 0 || p.y > ph) p.vy *= -1;
            pctx.beginPath(); pctx.fillStyle = 'rgba(255,255,255,0.6)'; pctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); pctx.fill();
            for (var j = i + 1; j < particles.length; j++) {
                var p2 = particles[j], dx = p.x - p2.x, dy = p.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) { pctx.beginPath(); pctx.strokeStyle = 'rgba(255,255,255,' + (1 - dist/150) * 0.2 + ')'; pctx.lineWidth = 1; pctx.moveTo(p.x, p.y); pctx.lineTo(p2.x, p2.y); pctx.stroke(); }
            }
        }
        requestAnimationFrame(drawParticles);
    }
    window.addEventListener('resize', initParticles); initParticles(); drawParticles();
  } catch(e) {}
})();`;
