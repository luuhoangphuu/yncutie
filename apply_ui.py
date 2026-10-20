import os

os.makedirs('src', exist_ok=True)

# ═══════════════════════════════════════════
# 1. GHI ĐÈ ASSETS.JS (CSS + JS FX)
# ═══════════════════════════════════════════
assets_code = r'''export const CSS = `
:root{--bg:#050508;--glass:rgba(20,20,25,.6);--border:rgba(255,255,255,.15);--text:#ffffff;--muted:#a1a1aa;--silver:#e4e4e7;--ok:#10b981;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased;position:relative}

/* ═════════ BACKGROUND EFFECTS ═════════ */
#particle-canvas{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:0.6}
.aurora{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
.aurora-blob{position:absolute;width:800px;height:800px;border-radius:50%;filter:blur(120px);opacity:.1;background:radial-gradient(circle,var(--silver),transparent 60%);animation:aurora1 20s infinite ease-in-out alternate}
.aurora-blob:nth-child(1){top:-20%;left:-10%}
.aurora-blob:nth-child(2){bottom:-20%;right:-10%;background:radial-gradient(circle,#ffffff,transparent 60%);animation:aurora2 25s infinite ease-in-out alternate}
@keyframes aurora1{0%{transform:translate(0,0) scale(1)}100%{transform:translate(200px,100px) scale(1.2)}}
@keyframes aurora2{0%{transform:translate(0,0) scale(1)}100%{transform:translate(-200px,-100px) scale(1.1)}}

/* PURE CSS SNOW */
.snow-layer { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 2; background-image: radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #fff, rgba(0,0,0,0)); background-repeat: repeat; background-size: 200px 200px; animation: snowFall 10s linear infinite; opacity: 0.6; }
.snow-layer-2 { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 3; background-image: radial-gradient(3px 3px at 10px 10px, #fff, rgba(0,0,0,0)), radial-gradient(3px 3px at 150px 150px, #fff, rgba(0,0,0,0)), radial-gradient(3px 3px at 250px 50px, #fff, rgba(0,0,0,0)); background-repeat: repeat; background-size: 300px 300px; animation: snowFall 15s linear infinite; opacity: 0.4; }
@keyframes snowFall { 0% { background-position: 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px; } 100% { background-position: 200px 200px, 400px 400px, 600px 600px, 800px 800px, 1000px 1000px, 1200px 1200px; } }

/* ═════════ CORE UI ═════════ */
a{color:inherit;text-decoration:none}
.nav{position:relative;z-index:10;display:flex;justify-content:space-between;align-items:center;padding:16px clamp(16px,4vw,40px);background:rgba(5,5,8,.6);backdrop-filter:blur(30px);border-bottom:1px solid var(--border)}
.logo-container{display:flex;align-items:center;gap:12px;text-decoration:none}
.logo-text{font-family:'Inter',sans-serif;font-weight:900;font-style:italic;font-size:24px;letter-spacing:-0.05em;background:linear-gradient(180deg,#ffffff 0%,#a1a1aa 100%);-webkit-background-clip:text;background-clip:text;color:transparent;position:relative;display:flex;align-items:center}
.logo-text svg{width:20px;height:20px;fill:var(--silver);margin-left:4px;filter:drop-shadow(0 0 10px rgba(255,255,255,0.6))}
.nav-links{display:flex;align-items:center;gap:6px}
.nav-links a{color:var(--muted);font-size:14px;font-weight:700;padding:8px 16px;border-radius:10px;transition:.3s}
.nav-links a:hover,.nav-links a.on{color:#fff;background:rgba(255,255,255,.1)}
.wrap{position:relative;z-index:10;width:100%;max-width:1100px;margin:0 auto;padding:clamp(24px,5vw,48px) clamp(16px,4vw,24px);flex:1;perspective:1200px}
.wrap.narrow{max-width:620px}

/* ═════════ GLASS CARDS (3D TILT) ═════════ */
.card{position:relative;background:var(--glass);border:1px solid var(--border);border-radius:24px;padding:32px;backdrop-filter:blur(40px);-webkit-backdrop-filter:blur(40px);box-shadow:0 30px 60px rgba(0,0,0,.8),inset 0 1px 0 rgba(255,255,255,.15);transition:transform .2s cubic-bezier(.25,.46,.45,.94),border-color .3s;transform-style:preserve-3d;will-change:transform}
.card:hover{border-color:rgba(255,255,255,.3)}
.card::before{content:'';position:absolute;inset:0;border-radius:24px;background:radial-gradient(800px circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,.08),transparent 40%);opacity:0;transition:opacity .3s;pointer-events:none;z-index:0}
.card:hover::before{opacity:1}
.card>*{position:relative;z-index:1}

/* ═════════ STEPPER (HOME) ═════════ */
.stepper{display:flex;justify-content:space-between;align-items:flex-start;position:relative;margin-bottom:40px;max-width:700px;margin-left:auto;margin-right:auto;padding:0 20px;list-style:none;}
.stepper::before{content:'';position:absolute;top:18px;left:40px;right:40px;height:2px;background:rgba(255,255,255,.1);z-index:0}
.stepper li{flex:1;display:flex;flex-direction:column;align-items:center;gap:12px;position:relative;z-index:1;margin:0;padding:0;}
.stepper li b{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#050508;border:2px solid rgba(255,255,255,.2);color:var(--muted);font-size:14px;font-weight:900;transition:.3s}
.stepper li span{font-size:12px;font-weight:800;color:var(--muted);transition:.3s;text-transform:uppercase;letter-spacing:.05em;text-align:center}
.stepper li.on b{border-color:#fff;color:#fff;box-shadow:0 0 20px rgba(255,255,255,.4);background:rgba(255,255,255,.1)}
.stepper li.on span{color:#fff;text-shadow:0 0 10px rgba(255,255,255,.5)}
.stepper li.done b{background:var(--silver);border-color:var(--silver);color:#000;box-shadow:0 0 20px rgba(255,255,255,.4)}
.stepper li.done span{color:#fff}

/* ═════════ BUTTONS (SHIMMER) ═════════ */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:16px 24px;border-radius:16px;font-size:15px;font-weight:900;cursor:pointer;transition:all .2s;text-decoration:none;border:none;font-family:inherit;overflow:hidden}
.btn-primary{width:100%;background:linear-gradient(135deg,#ffffff 0%,#e4e4e7 50%,#a1a1aa 100%);color:#050508;box-shadow:0 0 20px rgba(255,255,255,.2);min-height:54px;font-size:16px;}
.btn-primary::after{content:'';position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent);transform:skewX(-20deg);animation:shine 3s infinite}
@keyframes shine{0%{left:-100%}20%{left:100%}100%{left:100%}}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 0 30px rgba(255,255,255,.4);}
.btn-secondary{background:rgba(255,255,255,.05);color:#fff;border:1px solid var(--border);}
.btn-secondary:hover{background:rgba(255,255,255,.1);border-color:var(--silver);box-shadow:0 0 15px rgba(255,255,255,.2);}

/* ═════════ SECURITY CHECKPOINT (SOC) ═════════ */
.checkpoint-layout{display:grid;grid-template-columns:1.15fr .85fr;gap:24px;align-items:start}
@media(max-width:900px){.checkpoint-layout{grid-template-columns:1fr}}

.ckpt-left{background:var(--glass);border:1px solid var(--border);border-radius:24px;padding:40px;box-shadow:0 20px 40px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.1);backdrop-filter:blur(40px);-webkit-backdrop-filter:blur(40px)}
.eyebrow{display:flex;align-items:center;gap:10px;color:var(--silver);font-size:13px;font-weight:700;letter-spacing:.05em;margin-bottom:16px}
.eyebrow::before{content:'';width:24px;height:2px;background:var(--silver);border-radius:2px;box-shadow:0 0 10px var(--silver)}
.ckpt-left h1{font-size:clamp(32px,4vw,42px);font-weight:900;line-height:1.15;color:#fff;margin-bottom:16px;text-shadow:0 2px 10px rgba(0,0,0,.5)}
.ckpt-left .lead{color:var(--muted);font-size:16px;margin-bottom:32px}
.ts-box{background:linear-gradient(180deg, rgba(255,255,255,.05), rgba(0,0,0,.4));border:1px solid var(--border);border-radius:16px;padding:32px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:32px;box-shadow:inset 0 2px 10px rgba(0,0,0,.8);transition:.4s}
.ts-box.active{border-color:rgba(255,255,255,.6);box-shadow:inset 0 2px 10px rgba(0,0,0,.8), 0 0 20px rgba(255,255,255,.1)}
.ts-box.success{border-color:rgba(255,255,255,.8);box-shadow:inset 0 2px 10px rgba(0,0,0,.8), 0 0 20px rgba(255,255,255,.2)}
.ts-help{font-size:13px;color:var(--muted);text-align:center;margin-top:20px;line-height:1.6}
.ts-help strong{color:#fff}

/* Stepper 4 Bước (Checkpoint) */
.stepper-4{display:flex;align-items:center;justify-content:space-between;position:relative;padding-top:20px}
.stepper-4::before{content:'';position:absolute;top:32px;left:20px;right:20px;height:2px;background:rgba(255,255,255,.1);z-index:0}
.step-item{display:flex;flex-direction:column;align-items:center;gap:10px;position:relative;z-index:1}
.step-item i{width:24px;height:24px;border-radius:50%;background:var(--bg);border:2px solid var(--muted);display:flex;align-items:center;justify-content:center;transition:.3s}
.step-item i svg{width:12px;height:12px;fill:#000;display:none}
.step-item span{font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;text-align:center}
.step-item.active i{border-color:#fff;box-shadow:0 0 15px rgba(255,255,255,.4);background:rgba(255,255,255,.1)}
.step-item.active span{color:#fff}
.step-item.done i{background:#fff;border-color:#fff;box-shadow:0 0 15px rgba(255,255,255,.4)}
.step-item.done i svg{display:block}

/* Right Panel (Telemetry) */
.ckpt-right{display:flex;flex-direction:column;gap:16px}
.status-header{display:flex;justify-content:flex-end;align-items:center;gap:8px;font-size:13px;font-weight:600;color:#fff;padding-right:8px}
.status-header i{width:8px;height:8px;border-radius:50%;background:#fff;box-shadow:0 0 10px #fff;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}

.telemetry-card{background:var(--glass);border:1px solid var(--border);border-radius:20px;padding:24px;backdrop-filter:blur(40px);-webkit-backdrop-filter:blur(40px);box-shadow:0 10px 30px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.05)}
.telemetry-card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.telemetry-label{font-size:13px;color:var(--muted);font-weight:600}
.telemetry-value{font-family:'JetBrains Mono',monospace;font-size:24px;font-weight:900;color:#fff;text-shadow:0 0 20px rgba(255,255,255,.3)}

.wave-graph{display:flex;align-items:flex-end;gap:3px;height:40px;margin-top:12px}
.wave-bar{flex:1;background:var(--muted);border-radius:2px;height:20%;transition:height 0.2s;opacity:0.8}
.wave-bar.hi{background:#fff;opacity:1;box-shadow:0 0 8px #fff}
.wave-bar.mid{background:var(--silver);opacity:0.9}

/* DYNAMIC MINI CARDS */
.split-cards{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.mini-card{background:var(--glass);border:1px solid var(--border);border-radius:16px;padding:20px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 10px 30px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.05);overflow:hidden;position:relative;backdrop-filter:blur(20px)}
.radar-mini-container{display:flex;align-items:center;gap:12px;position:relative;z-index:2}
.radar-svg-mini{width:60px;height:60px;filter:drop-shadow(0 0 10px rgba(255,255,255,.2))}
.radar-sweep-circle{transform-origin: 30px 30px;animation:spin 3s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.radar-ping{animation:ping 2s infinite}
@keyframes ping{0%{r:2;opacity:1}100%{r:15;opacity:0}}

.line-chart-container{height:60px;position:relative;margin-top:12px;z-index:2}
.line-chart-svg{width:100%;height:100%;overflow:visible}
.line-path{fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 5px rgba(255,255,255,.5));transition:d 0.3s ease}
.line-dot{fill:#000;stroke:#fff;stroke-width:2;filter:drop-shadow(0 0 8px rgba(255,255,255,.8));transition:cx 0.3s ease, cy 0.3s ease}

.protocol-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;text-align:left}
.proto-item p{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px}
.proto-item b{font-size:15px;color:#fff;font-weight:800}

.faq-block h3{font-size:15px;color:#fff;font-weight:800;margin-bottom:16px}
.faq-item{margin-bottom:12px;border-bottom:1px solid rgba(255,255,255,.05);padding-bottom:12px}
.faq-item p{font-size:13px;color:var(--muted);line-height:1.6}
.faq-item strong{color:#000;background:#fff;padding:2px 6px;border-radius:4px;font-size:11px;margin-right:6px;font-weight:900}

/* ═════════ HOME UI ═════════ */
.split-layout{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
@media(max-width:850px){.split-layout{grid-template-columns:1fr;gap:24px}}
h1.hero-title{font-size:clamp(32px,6vw,56px);font-weight:900;line-height:1.1;letter-spacing:-.04em;background:linear-gradient(180deg,#ffffff 0%,#a1a1aa 100%);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 4px 10px rgba(0,0,0,0.5))}
.radio-group{display:flex;flex-direction:column;gap:12px;margin:20px 0}
.radio-label{display:flex;align-items:center;gap:14px;padding:16px;border:1px solid var(--border);border-radius:14px;cursor:pointer;transition:.3s;background:rgba(255,255,255,.02)}
.radio-label:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.4);transform:translateX(4px)}
.radio-label input{width:20px;height:20px;accent-color:var(--silver);cursor:pointer}
.radio-label span{font-weight:800;font-size:15px;color:#fff}

.link-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:20px}
.link-grid a{width:100%;}

/* ═════════ MISC ═════════ */
.foot{position:relative;z-index:10;margin-top:auto;padding:24px;text-align:center;font-size:12px;color:var(--muted);border-top:1px solid var(--border);background:rgba(5,5,8,.8);backdrop-filter:blur(20px);font-weight:600}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;

export const COMMON_JS = `
window.__toast=function(msg,type){var t=document.createElement('div');t.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:rgba(20,20,24,.95);color:#fff;padding:14px 28px;border-radius:14px;font-weight:800;font-size:14px;z-index:9999;opacity:0;transition:.3s;border:1px solid #fff;backdrop-filter:blur(20px);box-shadow:0 10px 30px rgba(0,0,0,.8)';t.textContent=msg;document.body.appendChild(t);requestAnimationFrame(()=>{t.style.opacity='1';t.style.transform='translateX(-50%) translateY(-10px)';});setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(-50%) translateY(0)';setTimeout(()=>t.remove(),300);},2500);};
(function(){
  document.addEventListener('click',function(e){
    var c=e.target.closest('[data-copy]');if(!c)return;
    var el=document.getElementById(c.getAttribute('data-copy'));if(!el)return;
    var txt=el.textContent.trim();
    function done(){if(navigator.vibrate)navigator.vibrate(30);window.__toast('Đã sao chép key');}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done,function(){window.__toast('Lỗi')});}
  });
  // 3D Tilt cho TẤT CẢ các thẻ Card
  if(matchMedia('(pointer:fine)').matches){
    document.querySelectorAll('.card, .ckpt-left, .telemetry-card, .mini-card').forEach(function(card){
      card.addEventListener('mousemove',function(e){
        var r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top,cx=r.width/2,cy=r.height/2;
        card.style.transform='perspective(1000px) rotateX('+((y-cy)/cy)*-2+'deg) rotateY('+((x-cx)/cx)*2+'deg) translateZ(0)';
        card.style.setProperty('--mx',x+'px'); card.style.setProperty('--my',y+'px');
      });
      card.addEventListener('mouseleave',function(){card.style.transform='';});
    });
  }
})();`;

export const CHECKPOINT_JS = `(function(){
  var app=document.getElementById('app'),next=app?app.getAttribute('data-next')||'/':'/';
  var term=document.getElementById('terminal'),timerEl=document.getElementById('timer'),help=document.getElementById('helpText'),err=document.getElementById('errorBox'),tsWrap=document.getElementById('tsWrap');
  var steps=document.querySelectorAll('.step-item');
  
  if(!timerEl)return;
  
  // REAL TIMER
  var t0=performance.now(), tick=setInterval(function(){timerEl.innerHTML=((performance.now()-t0)/1000).toFixed(2)+'<small>s</small>';}, 50);

  // DYNAMIC WAVE GRAPH
  var waves=document.querySelectorAll('.wave-bar');
  setInterval(function(){
    for(var i=0;i<waves.length;i++){
      var h = Math.random()>0.8 ? (30+Math.random()*70) : (10+Math.random()*20);
      waves[i].style.height = h+'%';
      if(Math.random()>0.9) waves[i].className = 'wave-bar hi';
      else if(Math.random()>0.95) waves[i].className = 'wave-bar mid';
      else waves[i].className = 'wave-bar';
    }
  },150);

  // DYNAMIC LINE CHART
  var linePath = document.querySelector('.line-path');
  var lineDot = document.querySelector('.line-dot');
  var points = [];
  for(var k=0; k<=10; k++) points.push({x: k*10, y: 15});

  setInterval(function(){
    if(!linePath || !lineDot) return;
    var d = 'M ';
    for(var i=0; i<points.length; i++){
      if(i>0) points[i].y = 15 + (Math.random() - 0.5) * 20;
      d += points[i].x + ',' + points[i].y + ' ';
    }
    linePath.setAttribute('d', d);
    var last = points[points.length-1];
    lineDot.setAttribute('cx', last.x);
    lineDot.setAttribute('cy', last.y);
  }, 800);

  var busy=false;
  function fail(msg){busy=false;err.style.display='block';err.textContent=msg;if(tsWrap)tsWrap.className='ts-box';if(window.turnstile)try{turnstile.reset()}catch(_){}}
  window.onTurnstileError=function(){fail('Không tải được Captcha.')};
  window.onTurnstileSuccess=function(token){
    if(busy)return;busy=true;err.style.display='none';
    if(tsWrap)tsWrap.classList.add('active');
    
    // DỪNG ĐỒNG HỒ
    clearInterval(tick);
    timerEl.innerHTML = ((performance.now()-t0)/1000).toFixed(2) + '<small>s</small>';
    
    help.innerHTML='<strong>Đang xác minh...</strong>';
    if(steps[2]) steps[2].classList.add('active');

    fetch('/api/verify-bot',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:token})})
      .then(r=>r.json()).then(d=>{
        if(d&&d.success){
          if(tsWrap){tsWrap.className='ts-box success'}
          help.innerHTML='<strong style="color:#fff">✓ Xác minh thành công! Đang chuyển hướng...</strong>';
          for(var i=0;i<steps.length;i++){ steps[i].classList.remove('active'); steps[i].classList.add('done'); }
          setTimeout(()=>location.href=next,600);
        }
        else fail((d&&d.error)||'Xác minh thất bại.');
      }).catch(()=>fail('Lỗi mạng.'));
  };
})();`;

export const JS_FX = `(function(){
  try {
    if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var pc = document.getElementById('particle-canvas');
    if(!pc) return;
    var pctx = pc.getContext('2d');
    var pw, ph, particles = [];
    
    function initParticles() {
        pw = pc.width = window.innerWidth;
        ph = pc.height = window.innerHeight;
        particles = [];
        var count = window.innerWidth < 768 ? 30 : 80;
        for (var i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * pw,
                y: Math.random() * ph,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 1.5 + 0.5
            });
        }
    }
    
    function drawParticles() {
        pctx.clearRect(0, 0, pw, ph);
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > pw) p.vx *= -1;
            if (p.y < 0 || p.y > ph) p.vy *= -1;
            
            pctx.beginPath();
            pctx.fillStyle = 'rgba(255,255,255,0.5)';
            pctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            pctx.fill();
            
            for (var j = i + 1; j < particles.length; j++) {
                var p2 = particles[j];
                var dx = p.x - p2.x, dy = p.y - p2.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    pctx.beginPath();
                    pctx.strokeStyle = 'rgba(255,255,255,' + (1 - dist/150) * 0.15 + ')';
                    pctx.lineWidth = 1;
                    pctx.moveTo(p.x, p.y);
                    pctx.lineTo(p2.x, p2.y);
                    pctx.stroke();
                }
            }
        }
        requestAnimationFrame(drawParticles);
    }
    
    window.addEventListener('resize', initParticles);
    initParticles();
    drawParticles();
  } catch(e) {}
})();`;
'''

# ═══════════════════════════════════════════
# 2. GHI ĐÈ UI.JS (Cấu trúc HTML)
# ═══════════════════════════════════════════
ui_code = r'''import { CSS, COMMON_JS, CHECKPOINT_JS, JS_FX } from './assets.js';
export const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function layout(title, body, nonce, head = '') {
  return `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>${esc(title)} · Zwic Apex</title><link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,600;0,800;0,900;1,900&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet"><style>${CSS}</style>${head}</head><body>
<div class="aurora"><div class="aurora-blob"></div><div class="aurora-blob"></div></div>
<canvas id="particle-canvas"></canvas>
<div class="snow-layer"></div>
<div class="snow-layer-2"></div>
${body}
<script nonce="${nonce}">${COMMON_JS}</script><script nonce="${nonce}">${JS_FX}</script></body></html>`;
}

const logoHtml = `<a class="logo-container" href="/"><div class="logo-text">Zwic <svg viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg></div></a>`;
const nav = (active = '') => `<header class="nav">${logoHtml}<nav class="nav-links"><a href="/" class="${active==='home'?'on':''}">Trang chủ</a><a href="/faq" class="${active==='faq'?'on':''}">FAQ</a></nav></header>`;
const foot = () => `<footer class="foot">2026 Bảo Mật bởi HoangPhu</footer>`;
const shell = (active, inner, width = '') => `${nav(active)}<main class="wrap ${width}">${inner}</main>${foot()}`;
const stepper = (n) => `<ol class="stepper">${['Chọn key','Vượt link','Xác thực','Nhận key'].map((t,i)=>`<li class="${i+1<n?'done':i+1===n?'on':''}"><b>${i+1<n?'✓':i+1}</b><span>${t}</span></li>`).join('')}</ol>`;

export function renderCheckpoint(env, nonce, next = '/') {
  const head = '<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>';
  const body = `${nav('')}<main class="wrap"><div class="checkpoint-layout" id="app" data-next="${esc(next)}">
  
  <div class="ckpt-left">
    <div class="eyebrow">Trạm kiểm tra bảo mật</div>
    <h1>Xác minh nhanh trước khi vào cửa hàng</h1>
    <p class="lead">Hệ thống đang kiểm tra kết nối của bạn để chặn bot và spam. Thường chỉ mất vài giây.</p>
    
    <div class="ts-box" id="tsWrap">
      <div class="cf-turnstile" data-sitekey="${esc(env.TURNSTILE_SITE_KEY)}" data-theme="dark" data-callback="onTurnstileSuccess" data-error-callback="onTurnstileError"></div>
      <div class="err" id="errorBox"></div>
    </div>
    <p class="ts-help" id="helpText">Nếu thấy ô <strong>Verify you are human</strong>, bấm vào đó. Không cần tải lại trang, cửa hàng sẽ tự mở khi xác minh xong.</p>

    <div class="stepper-4">
      <div class="step-item done"><i><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg></i><span>Kết nối TLS</span></div>
      <div class="step-item done"><i><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg></i><span>Lọc tại edge</span></div>
      <div class="step-item active"><i><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg></i><span>Xác minh<br>trình duyệt</span></div>
      <div class="step-item"><i><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg></i><span>Vào cửa hàng</span></div>
    </div>
  </div>

  <div class="ckpt-right">
    <div class="status-header"><i></i> Kết nối đang được bảo vệ</div>
    
    <div class="telemetry-card">
      <div class="telemetry-card-header">
        <span class="telemetry-label">Thời gian xác minh</span>
        <span class="telemetry-value" id="timer">0.00<small>s</small></span>
      </div>
      <div class="wave-graph">
        ${Array(40).fill('<div class="wave-bar"></div>').join('')}
      </div>
      <div style="display:flex; justify-content:space-between; margin-top:12px; font-size:11px; color:var(--muted)">
        <span>Nhịp xử lý của trình duyệt</span>
        <span><span style="color:#fff">●</span> trực tiếp</span>
      </div>
    </div>

    <div class="split-cards">
      <div class="mini-card">
        <div class="radar-mini-container">
          <svg class="radar-svg-mini" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="28" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
            <circle cx="30" cy="30" r="18" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
            <circle cx="30" cy="30" r="8" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
            <line x1="30" y1="2" x2="30" y2="58" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
            <line x1="2" y1="30" x2="58" y2="30" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
            <g class="radar-sweep-circle">
               <path d="M30 30 L30 2 A28 28 0 0 1 58 30 Z" fill="rgba(255,255,255,0.15)"/>
               <line x1="30" y1="30" x2="30" y2="2" stroke="rgba(255,255,255,0.8)" stroke-width="1.5"/>
            </g>
            <circle cx="40" cy="20" r="2" fill="#fff" class="radar-ping" style="animation-delay: 0s"/>
            <circle cx="20" cy="45" r="2" fill="#fff" class="radar-ping" style="animation-delay: 0.7s"/>
          </svg>
          <div>
            <div style="font-size:11px;color:var(--muted);margin-bottom:4px">Quét lưu lượng</div>
            <div style="font-size:14px;color:#fff;font-weight:800">Đang bảo vệ</div>
            <div style="font-size:10px;color:var(--muted);font-weight:600">WAF · Bot · DDoS</div>
          </div>
        </div>
      </div>
      
      <div class="mini-card">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:11px;color:var(--muted)">Độ trễ tới edge</span>
          <span style="font-size:13px;color:#fff;font-weight:800">316 ms</span>
        </div>
        <div class="line-chart-container">
          <svg class="line-chart-svg" viewBox="0 0 100 30" preserveAspectRatio="none">
            <path class="line-path" d="M0,15 L10,15 L20,15 L30,15 L40,15 L50,15 L60,15 L70,15 L80,15 L90,15 L100,15" />
            <circle class="line-dot" cx="100" cy="15" r="2" />
          </svg>
        </div>
      </div>
    </div>

    <div class="telemetry-card">
      <div class="protocol-grid">
        <div class="proto-item"><p>Giao thức</p><b>HTTP/2</b></div>
        <div class="proto-item"><p>Mạng edge</p><b>Anycast</b></div>
        <div class="proto-item"><p>Lớp bảo vệ</p><b>Cloudflare</b></div>
      </div>
    </div>

    <div class="telemetry-card faq-block">
      <h3>Bị kẹt ở bước này?</h3>
      <div class="faq-item">
        <p><strong>1</strong> Đợi khoảng 10 giây, bấm tải lại liên tục chỉ khiến bị kiểm tra lại từ đầu.</p>
      </div>
      <div class="faq-item">
        <p><strong>2</strong> Bật JavaScript và cookie, tạm tắt VPN hoặc trình chặn quảng cáo nếu có.</p>
      </div>
    </div>

  </div>
</div></main>${foot()}<script nonce="${nonce}">${CHECKPOINT_JS}</script>`;
  return layout('Trạm kiểm tra', body, nonce, head);
}

export function renderHome(env, error, notice, quota, nonce) {
  const inner = `${error ? `<div class="card" style="padding:16px;border-color:#ef4444;color:#fca5a5;font-weight:700;margin-bottom:24px">⚠ ${esc(error)}</div>` : ''}
${stepper(1)}
<div class="split-layout">
  <div>
    <h1 class="hero-title">Nhận Key<br><span style="color:var(--silver)">Tốc Độ Ánh Sáng</span></h1>
    <p style="color:var(--muted);margin:16px 0 0;font-size:16px;font-weight:500;max-width:500px">Hệ thống cấp phát key tự động, bảo mật đa tầng. Nhận key miễn phí chỉ trong vài bước.</p>
    <div style="margin-top:20px;display:flex;gap:12px">
      <span style="background:rgba(255,255,255,.1);color:#fff;padding:6px 12px;border-radius:8px;font-size:12px;font-weight:800;border:1px solid rgba(255,255,255,.2)">24/7 Uptime</span>
      <span style="background:rgba(255,255,255,.05);color:#fff;padding:6px 12px;border-radius:8px;font-size:12px;font-weight:800;border:1px solid rgba(255,255,255,.1)">Anti-Bot</span>
    </div>
  </div>
  
  <div class="card">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
      <span style="font-weight:900;font-size:16px;color:#fff;letter-spacing:.02em">Chọn loại key</span>
      <span style="background:rgba(255,255,255,.1);color:#fff;font-size:12px;font-weight:800;padding:4px 14px;border-radius:99px;border:1px solid rgba(255,255,255,.1)">Bước 1</span>
    </div>
    <form method="POST" action="/start">
      <div class="radio-group">
        <label class="radio-label">
          <input type="radio" name="tier" value="Normal" checked>
          <span>Key Normal (1 lượt vượt)</span>
        </label>
        <label class="radio-label">
          <input type="radio" name="tier" value="VIP">
          <span>Key VIP (2 lượt vượt)</span>
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Get Key</button>
    </form>
  </div>
</div>

<div class="card" style="margin-top:24px">
  <h2 style="color:#fff;display:flex;align-items:center;gap:10px;font-size:20px;margin-bottom:20px;font-weight:900">ℹ️ Thông tin & Bảng giá</h2>
  <div style="background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.05);border-radius:16px;padding:20px;margin-bottom:20px">
    <p style="color:var(--muted)">© Bản quyền thuộc về <b style="color:#fff">Zwic Apex</b>.</p>
    <p style="color:#ef4444;font-weight:700;margin-top:8px">‼ Mọi chỗ buôn bán khác nguồn đều là giả mạo.</p>
    <div style="margin-top:16px;border-top:1px solid rgba(255,255,255,.1);padding-top:16px">
      <div style="display:flex;justify-content:space-between;padding:10px 0;color:var(--muted);font-weight:700;border-bottom:1px dashed rgba(255,255,255,.05)"><span>Key 1 ngày</span><span style="color:#fff;font-family:'JetBrains Mono'">10k</span></div>
      <div style="display:flex;justify-content:space-between;padding:10px 0;color:var(--muted);font-weight:700;border-bottom:1px dashed rgba(255,255,255,.05)"><span>Key 7 ngày</span><span style="color:#fff;font-family:'JetBrains Mono'">50k</span></div>
      <div style="display:flex;justify-content:space-between;padding:10px 0;color:var(--muted);font-weight:700;"><span>Key 30 ngày</span><span style="color:#fff;font-family:'JetBrains Mono'">150k</span></div>
    </div>
  </div>
  
  <div class="link-grid">
    <a href="https://zalo.me/0996492296" class="btn btn-secondary">Zalo</a>
    <a href="${esc(env.YOUTUBE_CHANNEL_URL || 'https://youtube.com/@zwicxsharereg')}" class="btn btn-secondary">YouTube</a>
  </div>
</div>`;
  return layout('Trang chủ', shell('home', inner));
}

export function renderStep({ link, current, required, error }, nonce) {
  const isVip = required > 1;
  const inner = `${error ? `<div class="card" style="padding:16px;border-color:#ef4444;color:#fca5a5;font-weight:700;margin-bottom:24px">⚠ ${esc(error)}</div>` : ''}
${stepper(2)}
<div class="card center">
  <h2 style="justify-content:center">${isVip ? 'Vượt link VIP' : 'Vượt link'} (${current}/${required})</h2>
  <p style="color:var(--muted);font-size:15px;margin:12px 0 24px">Mở liên kết, hoàn thành các bước trên trang đó. Hệ thống tự nhận khi bạn quay lại.</p>
  
  <div style="position:relative;width:110px;height:110px;margin:0 auto 24px">
    <svg viewBox="0 0 100 100" style="transform:rotate(-90deg);width:110px;height:110px;filter:drop-shadow(0 0 15px rgba(255,255,255,.4))">
      <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="6"/>
      <circle cx="50" cy="50" r="45" fill="none" stroke="var(--silver)" stroke-width="6" stroke-linecap="round" stroke-dasharray="283" stroke-dashoffset="0" id="cdRing"/>
    </svg>
    <div id="cdText" style="position:absolute;inset:0;display:grid;place-items:center;font-family:'JetBrains Mono',monospace;font-size:32px;font-weight:900;color:#fff;text-shadow:0 0 20px rgba(255,255,255,.5)">3</div>
  </div>
  <p id="cdLabel" style="font-size:14px;font-weight:800;color:var(--muted);margin-bottom:24px">Đang chuẩn bị...</p>
  
  <a class="btn btn-primary" href="${esc(link)}" target="_blank" rel="noopener noreferrer" id="openBtn">Mở liên kết ↗</a>
</div>
<script nonce="${nonce}">(function(){var fg=document.getElementById('cdRing'),txt=document.getElementById('cdText'),lbl=document.getElementById('cdLabel');if(!fg)return;var t=3,total=3,circ=283;var iv=setInterval(function(){t--;if(t<0)t=0;txt.textContent=t>0?t:'▶';fg.style.strokeDashoffset=circ*(1-t/total);if(t<=0){clearInterval(iv);lbl.innerHTML='<span style="color:#fff;text-shadow:0 0 10px rgba(255,255,255,.5)">Đã sẵn sàng</span>';}},1000);})();</script>`;
  return layout('Vượt liên kết', shell('', inner, 'narrow'), nonce);
}

export function renderSuccess(key, duration, tier, nonce) {
  const t = tier || 'Normal';
  const inner = `${stepper(4)}
<div class="card center" style="padding:40px 24px">
  <div class="badge-ok" style="margin:0 auto 24px;width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#ffffff,#a1a1aa);display:grid;place-items:center;color:#000;font-size:36px;font-weight:900;box-shadow:0 0 50px rgba(255,255,255,.4),inset 0 2px 0 rgba(255,255,255,.8)">✓</div>
  <h2 style="justify-content:center;font-size:24px">Nhận key thành công</h2>
  <div style="margin:16px 0">
    <span style="background:rgba(255,255,255,.1);padding:6px 16px;border-radius:99px;font-size:13px;font-weight:800;border:1px solid rgba(255,255,255,.4);color:#fff">Tier: ${esc(t)}</span>
  </div>
  <div class="keybox" id="keyText" style="margin:24px 0;padding:24px;border-radius:16px;border:1px dashed rgba(255,255,255,.4);background:rgba(255,255,255,.05);text-align:center;font-family:'JetBrains Mono',monospace;font-weight:900;font-size:22px;word-break:break-all;color:#fff;cursor:pointer;text-shadow:0 0 20px rgba(255,255,255,.4);box-shadow:inset 0 0 30px rgba(0,0,0,.6)">${esc(key)}</div>
  <div class="link-grid">
    <button class="btn btn-primary" type="button" data-copy="keyText">Sao chép</button>
    <button class="btn btn-secondary" type="button" id="dlBtn">Tải .txt</button>
  </div>
  <a href="/" style="display:block;margin-top:20px;font-size:14px;font-weight:800;color:var(--muted);text-decoration:underline">Nhận key mới</a>
</div>
<script nonce="${nonce}">(function(){var k=document.getElementById('keyText');if(!k)return;var key=k.textContent.trim();var dl=document.getElementById('dlBtn');if(dl)dl.onclick=function(){var txt='Zwic Apex\n===========\n\n'+key+'\n\nTier: ${esc(t)}\nNhận lúc: '+new Date().toLocaleString('vi-VN')+'\n\n© Zwic Apex';var b=new Blob([txt],{type:'text/plain;charset=utf-8'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='zwicapex-${esc(t)}.txt';a.click();window.__toast('Đã tải file key');};})();</script>`;
  return layout('Nhận key', shell('', inner, 'narrow'), nonce);
}

export function renderFAQ(nonce) {
  const qa = [
    ['Key này dùng để làm gì?', 'Key dùng để kích hoạt ứng dụng Zwic Apex.'],
    ['Vì sao phải vượt liên kết?', 'Quảng cáo giúp duy trì hệ thống và giữ cho việc nhận key miễn phí.'],
    ['Mất phiên thì làm sao?', 'Phiên gắn với IP. Nếu đổi Wi-Fi/4G hoặc bật VPN giữa chừng, bạn cần bắt đầu lại.'],
    ['Hết lượt hôm nay?', 'Mỗi IP được nhận tối đa 12 key mỗi ngày. Reset lúc 0h giờ VN.'],
    ['Mua key ở đâu?', 'Liên hệ Zalo 0996492296 hoặc qua kênh YouTube chính thức.']
  ];
  const inner = `<h1 class="center" style="margin-bottom:32px">Câu hỏi thường gặp</h1><div style="max-width:700px;margin:0 auto">${qa.map(([q, a]) => `<div class="card" style="padding:24px;margin-bottom:14px"><h3 style="margin-bottom:10px;color:#fff;font-size:16px;font-weight:800">${esc(q)}</h3><p style="color:var(--muted);font-size:14px;margin:0;line-height:1.7">${esc(a)}</p></div>`).join('')}</div>`;
  return layout('FAQ', shell('faq', inner));
}

export function renderAdmin(nonce) {
  const inner = `<div class="card"><h2>Quản trị thông báo</h2><p style="color:var(--muted);font-size:14px;margin:10px 0 20px">Nhập mật khẩu để tải và chỉnh sửa.</p><label style="font-size:12px;font-weight:800;color:var(--muted);letter-spacing:.1em">Mật khẩu</label><div style="display:flex;gap:10px;margin:8px 0 20px"><input id="pw" type="password" style="flex:1;padding:14px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;font-family:inherit;outline:none"><button id="loadBtn" class="btn btn-primary" style="width:auto;padding:0 24px">Tải</button></div><div id="editor" style="display:none"><label style="display:flex;align-items:center;gap:10px;margin-bottom:16px;font-weight:700;cursor:pointer"><input id="en" type="checkbox" style="width:18px;height:18px;accent-color:var(--silver)"> Hiển thị thông báo</label><label style="font-size:12px;font-weight:800;color:var(--muted);letter-spacing:.1em">Tiêu đề</label><input id="tt" type="text" style="width:100%;padding:14px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;margin:8px 0 16px;font-family:inherit;outline:none"><label style="font-size:12px;font-weight:800;color:var(--muted);letter-spacing:.1em">Nội dung</label><textarea id="ct" style="width:100%;padding:14px;border-radius:12px;border:1px solid var(--border);background:rgba(0,0,0,.4);color:#fff;margin:8px 0 20px;font-family:'JetBrains Mono',monospace;min-height:140px;outline:none"></textarea><button id="saveBtn" class="btn btn-primary" type="button">Lưu</button></div><div id="status" style="margin-top:16px;font-weight:800;text-align:center"></div></div>
<script nonce="${nonce}">(function(){var $=id=>document.getElementById(id),st=$('status');function say(m,ok){st.textContent=m;st.style.color=ok?'#fff':'#ef4444';}function call(b){return fetch('/api/admin/notice',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(b)}).then(r=>r.json())}$('loadBtn').onclick=function(){say('Đang tải...',1);call({password:$('pw').value,action:'get'}).then(d=>{if(!d.success){say(d.error||'Lỗi',0);return}$('en').checked=!!d.notice.enabled;$('tt').value=d.notice.title||'';$('ct').value=d.notice.content||'';$('editor').style.display='block';say('Đã tải',1)}).catch(()=>say('Lỗi mạng',0))};$('saveBtn').onclick=function(){say('Đang lưu...',1);call({password:$('pw').value,action:'save',notice:{enabled:$('en').checked,title:$('tt').value,content:$('ct').value}}).then(d=>say(d.success?'Đã lưu':'Lỗi',!!d.success)).catch(()=>say('Lỗi mạng',0))};})();</script>`;
  return layout('Admin', shell('', inner, 'narrow'));
}

export function renderError(code, msg, nonce) {
  const inner = `<div class="card center" style="padding:48px 24px"><h1 style="font-size:80px;color:#ef4444;margin-bottom:16px;text-shadow:0 0 40px rgba(239,68,68,.5)">${esc(code)}</h1><h2 style="color:#fff;margin-bottom:24px;">${esc(msg)}</h2><a class="btn btn-primary" href="/" style="max-width:240px;margin:0 auto">Về trang chủ</a></div>`;
  return layout('Lỗi ' + code, shell('', inner, 'narrow'));
}
'''

with open('src/assets.js', 'w', encoding='utf-8') as f:
    f.write(assets_code)
with open('src/ui.js', 'w', encoding='utf-8') as f:
    f.write(ui_code)
print("✅ Đã ghi đè thành công: Đại tu toàn diện UI/UX, Check Session!"
