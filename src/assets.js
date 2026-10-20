export const CSS = `
:root{--bg:#050508;--card:rgba(15,17,26,.6);--border:rgba(255,255,255,.12);--text:#f4f4f5;--muted:#94a3b8;--cyan:#22d3ee;--gold:#fbbf24;--ok:#10b981;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased;position:relative}

/* ═════════ BACKGROUND & SNOW ═════════ */
#snow-canvas{position:fixed;inset:0;z-index:1;pointer-events:none}
.bg-grid{position:fixed;inset:0;z-index:-2;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:40px 40px;-webkit-mask-image:radial-gradient(circle at 50% 30%,#000 10%,transparent 70%);mask-image:radial-gradient(circle at 50% 30%,#000 10%,transparent 70%)}
.bg-glow{position:fixed;top:-20%;left:50%;transform:translateX(-50%);width:100vw;height:60vh;background:radial-gradient(ellipse at top,rgba(34,211,238,.05),transparent 70%);z-index:-1;pointer-events:none}

/* ═════════ CORE UI ═════════ */
a{color:inherit;text-decoration:none}
.nav{position:relative;z-index:10;display:flex;justify-content:space-between;align-items:center;padding:16px clamp(16px,4vw,40px);background:rgba(5,5,8,.7);backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
.logo{display:flex;align-items:center;gap:10px;font-weight:900;letter-spacing:.15em;font-size:16px;color:#fff;text-shadow:0 0 15px rgba(255,255,255,.4)}
.logo i{width:14px;height:14px;border-radius:4px;background:linear-gradient(135deg,#fff,#71717a);box-shadow:0 0 20px rgba(255,255,255,.6);animation:pulseLogo 2s infinite}
@keyframes pulseLogo{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}
.nav-links{display:flex;align-items:center;gap:6px}
.nav-links a{color:var(--muted);font-size:14px;font-weight:800;padding:8px 16px;border-radius:10px;transition:.3s}
.nav-links a:hover,.nav-links a.on{color:#fff;background:rgba(255,255,255,.1)}
.wrap{position:relative;z-index:10;width:100%;max-width:800px;margin:0 auto;padding:clamp(24px,5vw,48px) clamp(16px,4vw,24px);flex:1;perspective:1200px}
.wrap.wide{max-width:1080px}
.wrap.narrow{max-width:620px}
h1{font-size:clamp(32px,5vw,48px);font-weight:900;line-height:1.1;letter-spacing:-.03em;background:linear-gradient(180deg,#ffffff 0%,#a1a1aa 100%);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 0 20px rgba(255,255,255,.15))}
.lead{color:var(--muted);margin:12px 0 0;font-size:15px;font-weight:500}
.center{text-align:center}

/* ═════════ OBSIDIAN GLASS CARDS ═════════ */
.titan-card{background:linear-gradient(180deg,rgba(20,20,26,.7) 0%,rgba(10,10,14,.9) 100%);border:1px solid rgba(255,255,255,.08);border-radius:24px;padding:28px;margin-bottom:24px;backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);box-shadow:0 20px 50px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.15);position:relative;transition:transform .2s ease-out,border-color .3s,box-shadow .3s;transform-style:preserve-3d;will-change:transform}
.titan-card:hover{border-color:rgba(34,211,238,.3);box-shadow:0 30px 70px rgba(0,0,0,.7),inset 0 1px 0 rgba(255,255,255,.25),0 0 40px rgba(34,211,238,.05)}
.titan-card h2{color:#fff;display:flex;align-items:center;gap:10px;font-size:20px;margin-bottom:20px;font-weight:900;letter-spacing:-.01em}
.titan-box{background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.05);border-radius:16px;padding:20px;font-size:14px;line-height:1.7;color:var(--muted);margin-bottom:20px;box-shadow:inset 0 4px 15px rgba(0,0,0,.6)}
.titan-box b{color:#fff}

/* ═════════ SHIMMER BUTTONS ═════════ */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:18px 24px;border:0;border-radius:16px;font:inherit;font-weight:900;font-size:16px;color:#000;cursor:pointer;transition:transform .2s,box-shadow .2s;text-decoration:none;min-height:56px;overflow:hidden;letter-spacing:.02em}
.btn-primary{background:linear-gradient(135deg,#ffffff 0%,#e4e4e7 50%,#a1a1aa 100%);color:#09090b;box-shadow:0 10px 25px -5px rgba(255,255,255,.2),inset 0 2px 0 #fff}
.btn-primary::after{content:'';position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent);transform:skewX(-20deg);animation:shine 3s infinite}
@keyframes shine{0%{left:-100%}20%{left:100%}100%{left:100%}}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 15px 35px -5px rgba(255,255,255,.3),inset 0 2px 0 #fff}
.btn-secondary{background:rgba(255,255,255,.05);color:#fff;border:1px solid var(--border)}
.btn-secondary:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.3)}

/* ═════════ STEPPER ═════════ */
.stepper{display:flex;justify-content:space-between;align-items:flex-start;position:relative;margin-bottom:36px}
.stepper::before{content:'';position:absolute;top:18px;left:10%;right:10%;height:2px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);z-index:0}
.stepper li{flex:1;display:flex;flex-direction:column;align-items:center;gap:10px;position:relative;z-index:1;list-style:none}
.stepper li b{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:#050508;border:2px solid rgba(255,255,255,.15);color:var(--muted);font-size:14px;font-weight:900;transition:.3s;box-shadow:inset 0 0 10px rgba(0,0,0,.8)}
.stepper li span{font-size:12px;font-weight:800;color:var(--muted);transition:.3s;text-transform:uppercase;letter-spacing:.05em}
.stepper li.on b{border-color:var(--cyan);color:var(--cyan);box-shadow:0 0 20px rgba(34,211,238,.4),inset 0 0 10px rgba(34,211,238,.2);background:rgba(34,211,238,.05)}
.stepper li.on span{color:var(--cyan);text-shadow:0 0 10px rgba(34,211,238,.5)}
.stepper li.done b{background:var(--cyan);border-color:var(--cyan);color:#000}
.stepper li.done span{color:#fff}

/* ═════════ CHECKBOT PRO HUD (SOC) ═════════ */
.ckpt-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:28px;align-items:stretch}
@media(max-width:850px){.ckpt-grid{grid-template-columns:1fr}}
.ckpt-left{display:flex;flex-direction:column;gap:20px}
.ckpt-right{display:flex;flex-direction:column;gap:20px;justify-content:flex-start}

/* Terminal */
.term-shell{background:#000;border:1px solid var(--border);border-radius:16px;overflow:hidden;box-shadow:inset 0 0 30px rgba(0,0,0,.9),0 10px 30px rgba(0,0,0,.5);position:relative}
.term-shell::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(34,211,238,.8),transparent);animation:scanline 3s linear infinite;pointer-events:none;box-shadow:0 0 15px #22d3ee}
@keyframes scanline{0%{top:0;opacity:0}10%{opacity:1}90%{opacity:1}100%{top:100%;opacity:0}}
.term-bar{padding:10px 16px;background:linear-gradient(180deg,#18181b,#0c0c0f);display:flex;align-items:center;gap:6px;border-bottom:1px solid rgba(255,255,255,.05)}
.t-dot{width:10px;height:10px;border-radius:50%}
.t-dot:nth-child(1){background:#ef4444}.t-dot:nth-child(2){background:#fbbf24}.t-dot:nth-child(3){background:#10b981}
.term-bar code{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);font-weight:700}
.term{position:relative;padding:16px;font-family:'JetBrains Mono',monospace;font-size:13px;height:140px;overflow:hidden;display:flex;flex-direction:column;gap:6px}
.term div{color:var(--muted);animation:termIn .3s ease-out}
.term div.ok{color:var(--ok);text-shadow:0 0 10px rgba(16,185,129,.4)}
@keyframes termIn{from{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:none}}

/* Turnstile Box */
.ts-wrap{background:linear-gradient(180deg,rgba(255,255,255,.03),transparent);border:1px solid var(--border);border-radius:20px;padding:24px;display:flex;flex-direction:column;align-items:center;gap:16px;transition:all .4s cubic-bezier(.34,1.56,.64,1);box-shadow:inset 0 0 20px rgba(0,0,0,.6);position:relative;overflow:hidden}
.ts-wrap::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent)}
.ts-wrap.active{border-color:rgba(34,211,238,.6);box-shadow:0 0 40px rgba(34,211,238,.15),inset 0 0 20px rgba(34,211,238,.05)}
.ts-wrap.success{border-color:rgba(16,185,129,.6);box-shadow:0 0 40px rgba(16,185,129,.2),inset 0 0 20px rgba(16,185,129,.1)}
.ts{min-height:65px;display:flex;justify-content:center;align-items:center}
.ts-status{font-size:13px;color:var(--muted);text-align:center;font-weight:600}
.ts-status strong{color:#fff;font-weight:900}
.err{display:none;color:#ef4444;font-size:12px;margin-top:8px;text-align:center;font-weight:700}

/* Timer & 3D Radar Sphere */
.timer-box{background:rgba(0,0,0,.6);border:1px solid var(--border);border-radius:20px;padding:24px;text-align:center;box-shadow:inset 0 0 30px rgba(0,0,0,.8)}
.timer-label{font-size:11px;font-weight:900;letter-spacing:.15em;color:var(--muted);text-transform:uppercase;margin-bottom:12px}
.timer-val{font-family:'JetBrains Mono',monospace;font-size:48px;font-weight:900;color:#fff;line-height:1;text-shadow:0 0 30px rgba(255,255,255,.6)}
.timer-val small{font-size:16px;color:var(--muted);text-shadow:none}

.sphere-box{background:rgba(0,0,0,.6);border:1px solid var(--border);border-radius:20px;padding:20px;display:flex;align-items:center;justify-content:center;position:relative;height:200px;overflow:hidden;box-shadow:inset 0 0 30px rgba(0,0,0,.8);perspective:800px}
.sphere-container{position:relative;width:100px;height:100px;transform-style:preserve-3d;animation:rotateSphere 10s infinite linear}
@keyframes rotateSphere{0%{transform:rotateX(20deg) rotateY(0deg)}100%{transform:rotateX(20deg) rotateY(360deg)}}
.sphere-core{position:absolute;top:25%;left:25%;width:50%;height:50%;background:radial-gradient(circle at 30% 30%, #fff, #22d3ee, #000);border-radius:50%;box-shadow:0 0 40px #22d3ee;animation:corePulse 2s infinite alternate}
@keyframes corePulse{0%{transform:scale(0.9)}100%{transform:scale(1.1);box-shadow:0 0 70px #22d3ee}}
.ring{position:absolute;inset:0;border-radius:50%;border:1px dashed rgba(34,211,238,.4);transform-style:preserve-3d}
.ring:nth-child(1){transform:rotateX(70deg)}
.ring:nth-child(2){transform:rotateY(70deg);border-color:rgba(255,255,255,.2)}
.ring:nth-child(3){transform:rotateX(40deg) rotateY(40deg);border-style:solid;border-color:rgba(34,211,238,.2)}
.orbit-dot{position:absolute;top:0;left:50%;width:8px;height:8px;background:#22d3ee;border-radius:50%;transform:translate(-50%,-50%);box-shadow:0 0 15px #22d3ee}
.orbit-dot.white{background:#fff;box-shadow:0 0 15px #fff}

/* ═════════ FORM RADIO ═════════ */
.radio-group{display:flex;flex-direction:column;gap:12px;margin:20px 0}
.radio-label{display:flex;align-items:center;gap:14px;padding:16px;border:1px solid var(--border);border-radius:14px;cursor:pointer;transition:.3s;background:rgba(255,255,255,.02);box-shadow:inset 0 0 15px rgba(0,0,0,.3)}
.radio-label:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.3);transform:translateX(4px)}
.radio-label input{width:20px;height:20px;accent-color:#fff;cursor:pointer}
.radio-label span{font-weight:800;font-size:15px;color:#fff}

/* ═════════ SUCCESS ═════════ */
.badge-ok{width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#10b981,#059669);display:grid;place-items:center;color:#fff;font-size:36px;font-weight:900;margin:0 auto 24px;box-shadow:0 0 50px rgba(16,185,129,.6),inset 0 2px 0 rgba(255,255,255,.5);animation:popBadge .6s cubic-bezier(.34,1.56,.64,1)}
@keyframes popBadge{0%{transform:scale(0) rotate(-45deg)}100%{transform:scale(1) rotate(0)}}
.keybox{margin:24px 0;padding:24px;border-radius:16px;border:1px dashed rgba(34,211,238,.6);background:rgba(34,211,238,.05);text-align:center;font-family:'JetBrains Mono',monospace;font-weight:900;font-size:22px;word-break:break-all;color:#22d3ee;cursor:pointer;transition:.3s;text-shadow:0 0 20px rgba(34,211,238,.4);box-shadow:inset 0 0 30px rgba(0,0,0,.6)}
.keybox:hover{background:rgba(34,211,238,.1);border-color:#22d3ee;box-shadow:inset 0 0 30px rgba(0,0,0,.6),0 0 30px rgba(34,211,238,.2)}
.btn-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}

/* ═════════ MISC ═════════ */
.foot{position:relative;z-index:10;margin-top:auto;padding:24px;text-align:center;font-size:12px;color:var(--muted);border-top:1px solid var(--border);background:rgba(5,5,8,.8);backdrop-filter:blur(10px);font-weight:600}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;

export const COMMON_JS = `
window.__toast=function(msg,type){var t=document.createElement('div');t.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:rgba(20,20,24,.95);color:#fff;padding:14px 28px;border-radius:14px;font-weight:800;font-size:14px;z-index:9999;opacity:0;transition:.3s;border:1px solid '+(type==='ok'?'#10b981':'#ef4444')+';backdrop-filter:blur(10px);box-shadow:0 10px 30px rgba(0,0,0,.8)';t.textContent=msg;document.body.appendChild(t);requestAnimationFrame(()=>{t.style.opacity='1';t.style.transform='translateX(-50%) translateY(-10px)';});setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(-50%) translateY(0)';setTimeout(()=>t.remove(),300);},2500);};
(function(){
  document.addEventListener('click',function(e){
    var c=e.target.closest('[data-copy]');if(!c)return;
    var el=document.getElementById(c.getAttribute('data-copy'));if(!el)return;
    var txt=el.textContent.trim();
    function done(){if(navigator.vibrate)navigator.vibrate(30);window.__toast('Đã sao chép key','ok');}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done,function(){window.__toast('Lỗi','bad')});}
  });
  if(matchMedia('(pointer:fine)').matches){
    document.querySelectorAll('.titan-card').forEach(function(card){
      card.addEventListener('mousemove',function(e){
        var r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top,cx=r.width/2,cy=r.height/2;
        card.style.transform='perspective(1200px) rotateX('+((y-cy)/cy)*-2+'deg) rotateY('+((x-cx)/cx)*2+'deg) translateZ(0)';
      });
      card.addEventListener('mouseleave',function(){card.style.transform='';});
    });
  }
})();`;

export const CHECKPOINT_JS = `(function(){
  var app=document.getElementById('app'),next=app?app.getAttribute('data-next')||'/':'/';
  var term=document.getElementById('terminal'),timerEl=document.getElementById('timer'),help=document.getElementById('helpText'),err=document.getElementById('errorBox'),tsWrap=document.getElementById('tsWrap');
  if(!term||!timerEl)return;
  var logs=['Khởi tạo kết nối bảo mật TLS 1.3...','Phân tích dấu vết trình duyệt...','Kiểm tra mẫu lưu lượng bất thường...','Đang chờ xác minh Captcha...'],li=0;
  (function print(){if(li>=logs.length)return;var d=document.createElement('div');d.textContent='> '+logs[li];if(li===3)d.className='ok';term.appendChild(d);li++;setTimeout(print,700);})();
  var t0=performance.now(),tick=setInterval(function(){timerEl.innerHTML=((performance.now()-t0)/1000).toFixed(2)+'<small>s</small>';},50);
  var busy=false;
  function fail(msg){busy=false;err.style.display='block';err.textContent=msg;if(tsWrap)tsWrap.className='ts-wrap';if(window.turnstile)try{turnstile.reset()}catch(_){}}
  window.onTurnstileError=function(){fail('Không tải được Captcha.')};
  window.onTurnstileSuccess=function(token){
    if(busy)return;busy=true;err.style.display='none';
    if(tsWrap)tsWrap.classList.add('active');
    help.innerHTML='<strong style="color:#22d3ee">Đang xác minh...</strong>';
    fetch('/api/verify-bot',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:token})})
      .then(r=>r.json()).then(d=>{
        if(d&&d.success){clearInterval(tick);if(tsWrap){tsWrap.className='ts-wrap success'}help.innerHTML='<strong style="color:#10b981">✓ Xác minh thành công! Đang chuyển hướng...</strong>';setTimeout(()=>location.href=next,600);}
        else fail((d&&d.error)||'Xác minh thất bại.');
      }).catch(()=>fail('Lỗi mạng.'));
  };
})();`;

export const JS_FX = `(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
  // 3D Parallax Snow
  var canvas = document.getElementById('snow-canvas');
  if(!canvas) return;
  var ctx = canvas.getContext('2d');
  var w, h;
  var flakes = [];
  
  function init() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      flakes = [];
      for (var i = 0; i < 120; i++) {
          flakes.push({
              x: Math.random() * w,
              y: Math.random() * h,
              r: Math.random() * 2.5 + 0.5,
              d: Math.random() * 1 + 0.5, // speed
              a: Math.random() * 0.6 + 0.4, // opacity
              layer: Math.random() > 0.5 ? 1 : 2 // 1 = far, 2 = near
          });
      }
  }
  
  window.addEventListener('resize', init);
  init();
  
  function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < flakes.length; i++) {
          var f = flakes[i];
          ctx.beginPath();
          ctx.fillStyle = f.layer === 1 ? 'rgba(255,255,255,' + (f.a * 0.4) + ')' : 'rgba(255,255,255,' + f.a + ')';
          ctx.arc(f.x, f.y, f.layer === 1 ? f.r * 0.6 : f.r, 0, Math.PI * 2, true);
          ctx.fill();
      }
      update();
      requestAnimationFrame(draw);
  }
  
  function update() {
      for (var i = 0; i < flakes.length; i++) {
          var f = flakes[i];
          f.y += Math.cos(f.d) + 1 + f.r / 2;
          f.x += Math.sin(f.d) * 1.5;
          
          if (f.y > h + 5) { 
              f.x = Math.random() * w; 
              f.y = -5; 
          }
          if (f.x > w + 5) f.x = -5;
          if (f.x < -5) f.x = w + 5;
      }
  }
  
  requestAnimationFrame(draw);
})();`;
