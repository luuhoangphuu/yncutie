export const CSS = `
:root{--bg:#050508;--card:rgba(20,20,25,.7);--border:rgba(255,255,255,.12);--text:#ffffff;--muted:#a1a1aa;--silver:#e4e4e7;--ok:#ffffff;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased;position:relative}

/* ═════════ BACKGROUND EFFECTS ═════════ */
#particle-canvas{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:0.4}
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
.nav{position:relative;z-index:10;display:flex;justify-content:space-between;align-items:center;padding:16px clamp(16px,4vw,40px);background:rgba(5,5,8,.8);backdrop-filter:blur(30px);border-bottom:1px solid var(--border)}
.logo-container{display:flex;align-items:center;gap:12px;text-decoration:none}
.logo-text{font-family:'Inter',sans-serif;font-weight:900;font-style:italic;font-size:24px;letter-spacing:-0.05em;background:linear-gradient(180deg,#ffffff 0%,#a1a1aa 100%);-webkit-background-clip:text;background-clip:text;color:transparent;position:relative;display:flex;align-items:center}
.logo-text svg{width:20px;height:20px;fill:var(--silver);margin-left:4px;filter:drop-shadow(0 0 10px rgba(255,255,255,0.6))}
.nav-links{display:flex;align-items:center;gap:6px}
.nav-links a{color:var(--muted);font-size:14px;font-weight:700;padding:8px 16px;border-radius:10px;transition:.3s}
.nav-links a:hover,.nav-links a.on{color:#fff;background:rgba(255,255,255,.1)}
.wrap{position:relative;z-index:10;width:100%;max-width:1100px;margin:0 auto;padding:clamp(24px,5vw,48px) clamp(16px,4vw,24px);flex:1;perspective:1200px}
.wrap.narrow{max-width:620px}

/* ═════════ STEPPER ═════════ */
.stepper{display:flex;justify-content:space-between;align-items:flex-start;position:relative;margin-bottom:40px;max-width:700px;margin-left:auto;margin-right:auto;padding:0 20px;list-style:none;}
.stepper::before{content:'';position:absolute;top:18px;left:40px;right:40px;height:2px;background:rgba(255,255,255,.1);z-index:0}
.stepper li{flex:1;display:flex;flex-direction:column;align-items:center;gap:12px;position:relative;z-index:1;margin:0;padding:0;}
.stepper li b{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#050508;border:2px solid rgba(255,255,255,.2);color:var(--muted);font-size:14px;font-weight:900;transition:.3s}
.stepper li span{font-size:12px;font-weight:800;color:var(--muted);transition:.3s;text-transform:uppercase;letter-spacing:.05em;text-align:center}
.stepper li.on b{border-color:#fff;color:#fff;box-shadow:0 0 20px rgba(255,255,255,.4);background:rgba(255,255,255,.1)}
.stepper li.on span{color:#fff;text-shadow:0 0 10px rgba(255,255,255,.5)}
.stepper li.done b{background:var(--silver);border-color:var(--silver);color:#000;box-shadow:0 0 20px rgba(255,255,255,.4)}
.stepper li.done span{color:#fff}

/* ═════════ BUTTONS ═════════ */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 24px;border-radius:14px;font-size:15px;font-weight:900;cursor:pointer;transition:all .2s;text-decoration:none;border:none;font-family:inherit;}
.btn-primary{width:100%;background:linear-gradient(135deg,#ffffff 0%,#e4e4e7 50%,#a1a1aa 100%);color:#050508;box-shadow:0 0 20px rgba(255,255,255,.2);min-height:54px;font-size:16px;}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 0 30px rgba(255,255,255,.4);}
.btn-secondary{background:rgba(255,255,255,.05);color:#fff;border:1px solid var(--border);}
.btn-secondary:hover{background:rgba(255,255,255,.1);border-color:var(--silver);}

/* ═════════ SECURITY CHECKPOINT ═════════ */
.checkpoint-layout{display:grid;grid-template-columns:1.15fr .85fr;gap:24px;align-items:start}
@media(max-width:900px){.checkpoint-layout{grid-template-columns:1fr}}

.ckpt-left{background:var(--card);border:1px solid var(--border);border-radius:24px;padding:40px;box-shadow:0 20px 40px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.1);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)}
.eyebrow{display:flex;align-items:center;gap:10px;color:var(--silver);font-size:13px;font-weight:700;letter-spacing:.05em;margin-bottom:16px}
.eyebrow::before{content:'';width:24px;height:2px;background:var(--silver);border-radius:2px;box-shadow:0 0 10px var(--silver)}
.ckpt-left h1{font-size:clamp(32px,4vw,42px);font-weight:900;line-height:1.15;color:#fff;margin-bottom:16px;text-shadow:0 2px 10px rgba(0,0,0,.5)}
.ckpt-left .lead{color:var(--muted);font-size:16px;margin-bottom:32px}
.ts-box{background:linear-gradient(180deg, rgba(255,255,255,.05), rgba(0,0,0,.4));border:1px solid var(--border);border-radius:16px;padding:32px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:32px;box-shadow:inset 0 2px 10px rgba(0,0,0,.8)}
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

.telemetry-card{background:var(--card);border:1px solid var(--border);border-radius:20px;padding:24px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:0 10px 30px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.05)}
.telemetry-card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.telemetry-label{font-size:13px;color:var(--muted);font-weight:600}
.telemetry-value{font-family:'JetBrains Mono',monospace;font-size:24px;font-weight:900;color:#fff;text-shadow:0 0 20px rgba(255,255,255,.3)}

.wave-graph{display:flex;align-items:flex-end;gap:3px;height:40px;margin-top:12px}
.wave-bar{flex:1;background:var(--muted);border-radius:2px;height:20%;transition:height 0.2s;opacity:0.8}
.wave-bar.hi{background:#fff;opacity:1;box-shadow:0 0 8px #fff}
.wave-bar.mid{background:var(--silver);opacity:0.9}

/* DYNAMIC MINI CARDS */
.split-cards{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.mini-card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:20px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 10px 30px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.05);overflow:hidden;position:relative}
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
.card{position:relative;background:var(--card);border:1px solid var(--border);border-radius:24px;padding:32px;backdrop-filter:blur(40px);-webkit-backdrop-filter:blur(40px);box-shadow:0 30px 60px rgba(0,0,0,.8),inset 0 1px 0 rgba(255,255,255,.1);transition:transform .2s, border-color .3s}
.card:hover{border-color:rgba(255,255,255,.3)}
.radio-group{display:flex;flex-direction:column;gap:12px;margin:20px 0}
.radio-label{display:flex;align-items:center;gap:14px;padding:16px;border:1px solid var(--border);border-radius:14px;cursor:pointer;transition:.3s;background:rgba(255,255,255,.02)}
.radio-label:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.4);transform:translateX(4px)}
.radio-label input{width:20px;height:20px;accent-color:var(--silver);cursor:pointer}
.radio-label span{font-weight:800;font-size:15px;color:#fff}

/* Link Grid Fix */
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
  if(matchMedia('(pointer:fine)').matches){
    document.querySelectorAll('.card').forEach(function(card){
      card.addEventListener('mousemove',function(e){
        var r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top,cx=r.width/2,cy=r.height/2;
        card.style.transform='perspective(1000px) rotateX('+((y-cy)/cy)*-2+'deg) rotateY('+((x-cx)/cx)*2+'deg) translateZ(0)';
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
  
  // REAL TIMER (Chạy đến khi xác minh xong)
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

  // DYNAMIC LINE CHART (Jitter)
  var linePath = document.querySelector('.line-path');
  var lineDot = document.querySelector('.line-dot');
  var points = [];
  for(var k=0; k<=10; k++) points.push({x: k*10, y: 15}); // 10 points across 100px width

  setInterval(function(){
    if(!linePath || !lineDot) return;
    var d = 'M ';
    for(var i=0; i<points.length; i++){
      if(i>0) {
        // Add random jitter to y-axis (between 5 and 25)
        points[i].y = 15 + (Math.random() - 0.5) * 20;
      }
      d += points[i].x + ',' + points[i].y + ' ';
    }
    linePath.setAttribute('d', d);
    
    // Update dot position to the last point
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
    
    // DỪNG ĐỒNG HỒ TẠI ĐÂY
    clearInterval(tick);
    var finalTime = ((performance.now()-t0)/1000).toFixed(2);
    timerEl.innerHTML = finalTime + '<small>s</small>';
    
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
        var count = window.innerWidth < 768 ? 30 : 70;
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
            pctx.fillStyle = 'rgba(255,255,255,0.4)';
            pctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            pctx.fill();
            
            for (var j = i + 1; j < particles.length; j++) {
                var p2 = particles[j];
                var dx = p.x - p2.x, dy = p.y - p2.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 130) {
                    pctx.beginPath();
                    pctx.strokeStyle = 'rgba(255,255,255,' + (1 - dist/130) * 0.15 + ')';
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
