export const CSS = `
:root{--bg:#020202;--card:rgba(255,255,255,.03);--border:rgba(255,255,255,.15);--text:#ffffff;--muted:#a1a1aa;--silver:#e4e4e7;--ok:#10b981;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased;position:relative}

/* ═════════ BACKGROUND EFFECTS ═════════ */
#particle-canvas{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:0.7}
#snow-canvas{position:fixed;inset:0;z-index:2;pointer-events:none}
.aurora{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
.aurora-blob{position:absolute;width:800px;height:800px;border-radius:50%;filter:blur(100px);opacity:.15;background:radial-gradient(circle,var(--silver),transparent 60%);animation:aurora1 15s infinite ease-in-out alternate}
.aurora-blob:nth-child(1){top:-20%;left:-10%}
.aurora-blob:nth-child(2){bottom:-20%;right:-10%;background:radial-gradient(circle,#ffffff,transparent 60%);animation:aurora2 20s infinite ease-in-out alternate}
@keyframes aurora1{0%{transform:translate(0,0) scale(1)}100%{transform:translate(200px,100px) scale(1.2)}}
@keyframes aurora2{0%{transform:translate(0,0) scale(1)}100%{transform:translate(-200px,-100px) scale(1.1)}}

/* ═════════ CORE UI ═════════ */
a{color:inherit;text-decoration:none}
.nav{position:relative;z-index:10;display:flex;justify-content:space-between;align-items:center;padding:16px clamp(16px,4vw,40px);background:rgba(2,2,2,.4);backdrop-filter:blur(30px);border-bottom:1px solid var(--border)}
.logo{display:flex;align-items:center;gap:10px;font-weight:900;letter-spacing:.15em;font-size:16px;color:#fff;text-shadow:0 0 20px rgba(255,255,255,.4)}
.logo i{width:14px;height:14px;border-radius:4px;background:linear-gradient(135deg,#ffffff,var(--silver));box-shadow:0 0 20px rgba(255,255,255,.8);animation:pulseLogo 2s infinite}
@keyframes pulseLogo{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}
.nav-links{display:flex;align-items:center;gap:6px}
.nav-links a{color:var(--muted);font-size:14px;font-weight:800;padding:8px 16px;border-radius:10px;transition:.3s}
.nav-links a:hover,.nav-links a.on{color:#fff;background:rgba(255,255,255,.1);box-shadow:0 0 20px rgba(255,255,255,.1)}
.wrap{position:relative;z-index:10;width:100%;max-width:1000px;margin:0 auto;padding:clamp(24px,5vw,48px) clamp(16px,4vw,24px);flex:1;perspective:1200px}
.wrap.narrow{max-width:620px}

/* Metallic Text */
h1{font-size:clamp(32px,6vw,56px);font-weight:900;line-height:1.1;letter-spacing:-.04em;background:linear-gradient(180deg,#ffffff 0%,#a1a1aa 100%);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 4px 10px rgba(0,0,0,0.5))}
.lead{color:var(--muted);margin:16px 0 0;font-size:16px;font-weight:500;max-width:500px}
.center{text-align:center}

/* ═════════ LIQUID GLASS CARDS ═════════ */
.card{position:relative;background:var(--card);border:1px solid var(--border);border-radius:24px;padding:32px;backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);box-shadow:0 30px 60px rgba(0,0,0,.8),inset 0 1px 0 rgba(255,255,255,.2),inset 0 -1px 0 rgba(0,0,0,.5);transition:transform .2s cubic-bezier(.25,.46,.45,.94),border-color .3s,box-shadow .3s;transform-style:preserve-3d;will-change:transform}
.card:hover{border-color:rgba(255,255,255,.4);box-shadow:0 40px 80px rgba(0,0,0,.9),inset 0 1px 0 rgba(255,255,255,.3),inset 0 -1px 0 rgba(0,0,0,.6),0 0 40px rgba(255,255,255,.08)}
.card::before{content:'';position:absolute;inset:0;border-radius:24px;background:radial-gradient(800px circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,.08),transparent 40%);opacity:0;transition:opacity .3s;pointer-events:none;z-index:0}
.card:hover::before{opacity:1}
.card>*{position:relative;z-index:1}

/* ═════════ SPLIT LAYOUT ═════════ */
.split-layout{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
@media(max-width:850px){.split-layout{grid-template-columns:1fr;gap:24px}}

/* ═════════ FORM RADIO ═════════ */
.radio-group{display:flex;flex-direction:column;gap:12px;margin:20px 0}
.radio-label{display:flex;align-items:center;gap:14px;padding:16px;border:1px solid var(--border);border-radius:14px;cursor:pointer;transition:.3s;background:rgba(255,255,255,.02)}
.radio-label:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.4);transform:translateX(4px)}
.radio-label input{width:20px;height:20px;accent-color:var(--silver);cursor:pointer}
.radio-label span{font-weight:800;font-size:15px;color:#fff}

/* ═════════ SHIMMER BUTTONS ═════════ */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:18px 24px;border:0;border-radius:16px;font:inherit;font-weight:900;font-size:16px;color:#000;cursor:pointer;transition:all .2s;text-decoration:none;min-height:56px;overflow:hidden;letter-spacing:.02em;box-shadow:0 0 20px rgba(255,255,255,.2)}
.btn-primary{background:linear-gradient(135deg,#ffffff 0%,#e4e4e7 50%,#a1a1aa 100%);color:#020202;border:1px solid rgba(255,255,255,.9)}
.btn-primary::after{content:'';position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,1),transparent);transform:skewX(-20deg);animation:shine 3s infinite}
@keyframes shine{0%{left:-100%}20%{left:100%}100%{left:100%}}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 0 40px rgba(255,255,255,.4),inset 0 2px 0 #fff}
.btn-secondary{background:rgba(255,255,255,.03);color:#fff;border:1px solid var(--border);box-shadow:none}
.btn-secondary:hover{background:rgba(255,255,255,.08);border-color:var(--silver);box-shadow:0 0 20px rgba(255,255,255,.15)}

/* ═════════ STEPPER ═════════ */
.stepper{display:flex;justify-content:space-between;align-items:flex-start;position:relative;margin-bottom:36px;max-width:600px;margin-left:auto;margin-right:auto}
.stepper::before{content:'';position:absolute;top:18px;left:10%;right:10%;height:2px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);z-index:0}
.stepper li{flex:1;display:flex;flex-direction:column;align-items:center;gap:10px;position:relative;z-index:1;list-style:none}
.stepper li b{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:#020202;border:2px solid rgba(255,255,255,.15);color:var(--muted);font-size:14px;font-weight:900;transition:.3s;box-shadow:inset 0 0 10px rgba(255,255,255,.05)}
.stepper li span{font-size:11px;font-weight:800;color:var(--muted);transition:.3s;text-transform:uppercase;letter-spacing:.05em}
.stepper li.on b{border-color:#fff;color:#fff;box-shadow:0 0 20px rgba(255,255,255,.4),inset 0 0 10px rgba(255,255,255,.1);background:rgba(255,255,255,.05)}
.stepper li.on span{color:#fff;text-shadow:0 0 10px rgba(255,255,255,.5)}
.stepper li.done b{background:var(--silver);border-color:var(--silver);color:#000;box-shadow:0 0 20px rgba(255,255,255,.5)}
.stepper li.done span{color:#fff}

/* ═════════ CHECKBOT HUD ═════════ */
.ckpt-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:28px;align-items:stretch}
@media(max-width:850px){.ckpt-grid{grid-template-columns:1fr}}
.ckpt-left{display:flex;flex-direction:column;gap:20px}
.ckpt-right{display:flex;flex-direction:column;gap:20px;justify-content:flex-start}

/* Terminal */
.term-shell{background:#000;border:1px solid var(--border);border-radius:16px;overflow:hidden;box-shadow:inset 0 0 40px rgba(0,0,0,1),0 10px 30px rgba(0,0,0,.6);position:relative}
.term-shell::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent);animation:scanline 2.5s linear infinite;pointer-events:none;box-shadow:0 0 20px #fff}
@keyframes scanline{0%{top:0;opacity:0}10%{opacity:1}90%{opacity:1}100%{top:100%;opacity:0}}
.term-bar{padding:10px 16px;background:linear-gradient(180deg,#111,#000);display:flex;align-items:center;gap:6px;border-bottom:1px solid rgba(255,255,255,.05)}
.t-dot{width:10px;height:10px;border-radius:50%}
.t-dot:nth-child(1){background:#ff5f56}.t-dot:nth-child(2){background:#ffbd2e}.t-dot:nth-child(3){background:#27c93f}
.term-bar code{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);font-weight:700}
.term{position:relative;padding:16px;font-family:'JetBrains Mono',monospace;font-size:13px;height:140px;overflow:hidden;display:flex;flex-direction:column;gap:6px}
.term div{color:var(--muted);animation:termIn .3s ease-out}
.term div.ok{color:var(--ok);text-shadow:0 0 10px rgba(16,185,129,.4)}
@keyframes termIn{from{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:none}}
.cursor{display:inline-block;width:8px;height:14px;background:#fff;animation:blink 1s infinite;vertical-align:middle;margin-left:4px;box-shadow:0 0 15px #fff}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}

/* Turnstile Box (Liquid Metal) */
.ts-wrap{position:relative;background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(0,0,0,.5));border:1px solid var(--border);border-radius:20px;padding:20px;display:flex;flex-direction:column;align-items:center;gap:16px;transition:all .4s cubic-bezier(.34,1.56,.64,1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 10px 30px rgba(0,0,0,.5);overflow:hidden}
.ts-wrap::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent)}
.ts-wrap.active{border-color:rgba(255,255,255,.5);box-shadow:0 0 40px rgba(255,255,255,.15),inset 0 1px 0 rgba(255,255,255,.3)}
.ts-wrap.success{border-color:rgba(16,185,129,.6);box-shadow:0 0 40px rgba(16,185,129,.2),inset 0 1px 0 rgba(255,255,255,.2)}
.ts{min-height:65px;display:flex;justify-content:center;align-items:center}
.ts-status{font-size:13px;color:var(--muted);text-align:center;font-weight:600}
.ts-status strong{color:#fff;font-weight:900}
.err{display:none;color:#ef4444;font-size:12px;margin-top:8px;text-align:center;font-weight:700}

/* Hologram Radar & Timer */
.timer-box{background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(0,0,0,.6));border:1px solid var(--border);border-radius:20px;padding:24px;text-align:center;box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 10px 30px rgba(0,0,0,.5)}
.timer-label{font-size:11px;font-weight:900;letter-spacing:.15em;color:var(--muted);text-transform:uppercase;margin-bottom:12px}
.timer-val{font-family:'JetBrains Mono',monospace;font-size:48px;font-weight:900;color:#fff;line-height:1;text-shadow:0 0 30px rgba(255,255,255,.5),0 4px 10px rgba(0,0,0,0.8)}
.timer-val small{font-size:16px;color:var(--silver);text-shadow:none}

.radar-box{background:#000;border:1px solid var(--border);border-radius:20px;padding:20px;display:flex;align-items:center;justify-content:center;position:relative;height:200px;overflow:hidden;box-shadow:inset 0 0 40px rgba(0,0,0,1),0 10px 30px rgba(0,0,0,.5)}
.radar-svg{width:130px;height:130px;filter:drop-shadow(0 0 10px rgba(255,255,255,.2))}
.radar-sweep{transform-origin: 50px 50px;animation:spin 4s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.blink-dot{animation:blink 1.5s infinite}

/* ═════════ SUCCESS ═════════ */
.badge-ok{width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#10b981,#059669);display:grid;place-items:center;color:#fff;font-size:36px;font-weight:900;margin:0 auto 24px;box-shadow:0 0 50px rgba(16,185,129,.6),inset 0 2px 0 rgba(255,255,255,.5);animation:popBadge .6s cubic-bezier(.34,1.56,.64,1)}
@keyframes popBadge{0%{transform:scale(0) rotate(-45deg)}100%{transform:scale(1) rotate(0)}}
.keybox{margin:24px 0;padding:24px;border-radius:16px;border:1px dashed rgba(255,255,255,.4);background:rgba(255,255,255,.05);text-align:center;font-family:'JetBrains Mono',monospace;font-weight:900;font-size:22px;word-break:break-all;color:#fff;cursor:pointer;transition:.3s;text-shadow:0 0 20px rgba(255,255,255,.4);box-shadow:inset 0 0 30px rgba(0,0,0,.6)}
.keybox:hover{background:rgba(255,255,255,.1);border-color:#fff;box-shadow:inset 0 0 30px rgba(0,0,0,.6),0 0 30px rgba(255,255,255,.2)}
.btn-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}

/* ═════════ MISC ═════════ */
.foot{position:relative;z-index:10;margin-top:auto;padding:24px;text-align:center;font-size:12px;color:var(--muted);border-top:1px solid var(--border);background:rgba(2,2,2,.6);backdrop-filter:blur(20px);font-weight:600}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;

export const COMMON_JS = `
window.__toast=function(msg,type){var t=document.createElement('div');t.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:rgba(20,20,24,.95);color:#fff;padding:14px 28px;border-radius:14px;font-weight:800;font-size:14px;z-index:9999;opacity:0;transition:.3s;border:1px solid '+(type==='ok'?'#10b981':'#ef4444')+';backdrop-filter:blur(20px);box-shadow:0 10px 30px rgba(0,0,0,.8)';t.textContent=msg;document.body.appendChild(t);requestAnimationFrame(()=>{t.style.opacity='1';t.style.transform='translateX(-50%) translateY(-10px)';});setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(-50%) translateY(0)';setTimeout(()=>t.remove(),300);},2500);};
(function(){
  document.addEventListener('click',function(e){
    var c=e.target.closest('[data-copy]');if(!c)return;
    var el=document.getElementById(c.getAttribute('data-copy'));if(!el)return;
    var txt=el.textContent.trim();
    function done(){if(navigator.vibrate)navigator.vibrate(30);window.__toast('Đã sao chép key','ok');}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done,function(){window.__toast('Lỗi','bad')});}
  });
  
  // Liquid 3D Tilt & Spotlight
  document.querySelectorAll('.card').forEach(function(card){
    card.addEventListener('mousemove',function(e){
      var r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top,cx=r.width/2,cy=r.height/2;
      card.style.transform='perspective(1200px) rotateX('+((y-cy)/cy)*-2+'deg) rotateY('+((x-cx)/cx)*2+'deg) translateZ(0)';
      card.style.setProperty('--mx',x+'px');
      card.style.setProperty('--my',y+'px');
    });
    card.addEventListener('mouseleave',function(){card.style.transform='';});
  });
})();`;

export const CHECKPOINT_JS = `(function(){
  var app=document.getElementById('app'),next=app?app.getAttribute('data-next')||'/':'/';
  var term=document.getElementById('terminal'),timerEl=document.getElementById('timer'),help=document.getElementById('helpText'),err=document.getElementById('errorBox'),tsWrap=document.getElementById('tsWrap');
  if(!term||!timerEl)return;
  
  var logs=['Khởi tạo kết nối bảo mật TLS 1.3...','Phân tích dấu vết trình duyệt...','Kiểm tra mẫu lưu lượng bất thường...','Đang chờ xác minh Captcha...'],li=0;
  (function print(){
    if(li>=logs.length)return;
    var d=document.createElement('div');
    d.textContent='> '+logs[li];
    if(li===3){d.className='ok';d.innerHTML+='<span class="cursor"></span>';}
    term.appendChild(d);li++;setTimeout(print,700);
  })();
  
  var t0=performance.now(),tick=setInterval(function(){timerEl.innerHTML=((performance.now()-t0)/1000).toFixed(2)+'<small>s</small>';},50);
  
  var busy=false;
  function fail(msg){busy=false;err.style.display='block';err.textContent=msg;if(tsWrap)tsWrap.className='ts-wrap';if(window.turnstile)try{turnstile.reset()}catch(_){}}
  window.onTurnstileError=function(){fail('Không tải được Captcha.')};
  window.onTurnstileSuccess=function(token){
    if(busy)return;busy=true;err.style.display='none';
    if(tsWrap)tsWrap.classList.add('active');
    help.innerHTML='<strong style="color:#fff">Đang xác minh...</strong>';
    fetch('/api/verify-bot',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:token})})
      .then(r=>r.json()).then(d=>{
        if(d&&d.success){clearInterval(tick);if(tsWrap){tsWrap.className='ts-wrap success'}help.innerHTML='<strong style="color:#10b981">✓ Xác minh thành công! Đang chuyển hướng...</strong>';setTimeout(()=>location.href=next,600);}
        else fail((d&&d.error)||'Xác minh thất bại.');
      }).catch(()=>fail('Lỗi mạng.'));
  };
})();`;

export const JS_FX = `(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
  var isMobile = window.innerWidth < 768;

  // 1. Particle Network (Hạt bay)
  var pc = document.getElementById('particle-canvas');
  var pctx = pc.getContext('2d');
  var pw, ph, particles = [];
  
  function initParticles() {
      pw = pc.width = window.innerWidth;
      ph = pc.height = window.innerHeight;
      particles = [];
      var count = isMobile ? 30 : 80;
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
          pctx.fillStyle = 'rgba(255,255,255,0.6)';
          pctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          pctx.fill();
          
          for (var j = i + 1; j < particles.length; j++) {
              var p2 = particles[j];
              var dx = p.x - p2.x, dy = p.y - p2.y;
              var dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 130) {
                  pctx.beginPath();
                  pctx.strokeStyle = 'rgba(255,255,255,' + (1 - dist/130) * 0.2 + ')';
                  pctx.lineWidth = 1;
                  pctx.moveTo(p.x, p.y);
                  pctx.lineTo(p2.x, p2.y);
                  pctx.stroke();
              }
          }
      }
      requestAnimationFrame(drawParticles);
  }
  
  // 2. Snowfall (Tuyết rơi)
  var sc = document.getElementById('snow-canvas');
  var sctx = sc.getContext('2d');
  var sw, sh, flakes = [];
  
  function initSnow() {
      sw = sc.width = window.innerWidth;
      sh = sc.height = window.innerHeight;
      flakes = [];
      var count = isMobile ? 40 : 100;
      for (var i = 0; i < count; i++) {
          flakes.push({
              x: Math.random() * sw,
              y: Math.random() * sh,
              r: Math.random() * 2 + 0.5,
              d: Math.random() * 1 + 0.5,
              a: Math.random() * 0.6 + 0.4
          });
      }
  }
  
  function drawSnow() {
      sctx.clearRect(0, 0, sw, sh);
      sctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      sctx.beginPath();
      for (var i = 0; i < flakes.length; i++) {
          var f = flakes[i];
          sctx.moveTo(f.x, f.y);
          sctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
      }
      sctx.fill();
      
      for (var i = 0; i < flakes.length; i++) {
          var f = flakes[i];
          f.y += Math.cos(f.d) + 1 + f.r / 2;
          f.x += Math.sin(f.d) * 1.2;
          if (f.y > sh + 5) { f.x = Math.random() * sw; f.y = -5; }
          if (f.x > sw + 5) f.x = -5;
          if (f.x < -5) f.x = sw + 5;
      }
      requestAnimationFrame(drawSnow);
  }
  
  window.addEventListener('resize', function() {
      initParticles();
      initSnow();
  });
  
  initParticles();
  initSnow();
  
  drawParticles();
  drawSnow();
})();`;
