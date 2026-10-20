export const CSS = `
:root{--bg:#050507;--card:rgba(18,18,22,.6);--line:rgba(255,255,255,.12);--text:#f4f4f5;--muted:#a1a1aa;--silver:#e4e4e7;--cyan:#22d3ee;--ok:#10b981;--mx:50%;--my:0%;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui,-apple-system,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased}
/* DEEP BACKGROUND & SNOW */
#snow-canvas{position:fixed;inset:0;z-index:-1;pointer-events:none}
#particle-canvas{position:fixed;inset:0;z-index:-2;pointer-events:none;opacity:.4}
.bg-grid{position:fixed;inset:0;z-index:-4;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:50px 50px;-webkit-mask-image:radial-gradient(circle at 50% 30%,#000 10%,transparent 70%);mask-image:radial-gradient(circle at 50% 30%,#000 10%,transparent 70%)}
.aurora{position:fixed;inset:0;z-index:-3;pointer-events:none;overflow:hidden}
.aurora-blob{position:absolute;width:600px;height:600px;border-radius:50%;filter:blur(150px);opacity:.15;background:radial-gradient(circle,#e4e4e7,transparent 70%)}
.aurora-blob:nth-child(1){top:-10%;left:-10%;animation:aurora1 25s infinite ease-in-out}
.aurora-blob:nth-child(2){top:30%;right:-15%;background:radial-gradient(circle,#22d3ee,transparent 70%);opacity:.08;animation:aurora2 30s infinite ease-in-out}
.aurora-blob:nth-child(3){bottom:-15%;left:30%;animation:aurora3 20s infinite ease-in-out}
@keyframes aurora1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(150px,100px) scale(1.2)}}
@keyframes aurora2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-100px,-80px) scale(.9)}}
@keyframes aurora3{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(80px,-100px) scale(1.1)}}

/* CORE UI */
a{color:inherit;text-decoration:none}
.nav{position:sticky;top:0;z-index:50;display:flex;justify-content:space-between;align-items:center;padding:14px clamp(16px,4vw,40px);background:rgba(5,5,7,.7);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);border-bottom:1px solid var(--line)}
.logo{display:flex;align-items:center;gap:10px;font-weight:900;letter-spacing:.15em;font-size:15px;color:#fff;text-shadow:0 0 10px rgba(255,255,255,.3)}
.logo i{width:12px;height:12px;border-radius:4px;background:linear-gradient(135deg,#fff,#71717a);box-shadow:0 0 20px rgba(255,255,255,.6)}
.nav-links{display:flex;align-items:center;gap:6px}
.nav-links a{color:var(--muted);font-size:14px;font-weight:700;padding:8px 16px;border-radius:10px;transition:.3s;border:1px solid transparent}
.nav-links a:hover,.nav-links a.on{color:#fff;background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.1);box-shadow:0 0 15px rgba(255,255,255,.05)}
.wrap{width:100%;max-width:800px;margin:0 auto;padding:clamp(24px,5vw,48px) clamp(16px,4vw,24px);flex:1;perspective:1000px}
.wrap.wide{max-width:1080px}
.wrap.narrow{max-width:620px}
h1{font-size:clamp(28px,5vw,42px);font-weight:900;line-height:1.2;letter-spacing:-.03em;background:linear-gradient(135deg,#fff,#a1a1aa);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 0 20px rgba(255,255,255,.1))}
.lead{color:var(--muted);margin:12px 0 0;font-size:15px;font-weight:500}
.center{text-align:center}
.mt{margin-top:16px}

/* PREMIUM GLASS CARDS */
.titan-card{background:linear-gradient(180deg,rgba(30,30,36,.5),rgba(10,10,14,.8));border:1px solid rgba(255,255,255,.08);border-radius:24px;padding:24px;margin-bottom:20px;backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);box-shadow:0 20px 50px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.15);position:relative;overflow:hidden;transition:transform .2s cubic-bezier(.25,.46,.45,.94),box-shadow .3s,border-color .3s;transform-style:preserve-3d}
.titan-card:hover{border-color:rgba(255,255,255,.25);box-shadow:0 30px 70px rgba(0,0,0,.7),inset 0 1px 0 rgba(255,255,255,.3),0 0 40px rgba(255,255,255,.03)}
.titan-card h2{color:#fff;display:flex;align-items:center;gap:10px;font-size:19px;margin-bottom:16px;font-weight:800;letter-spacing:-.01em}
.titan-box{background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:18px;font-size:14px;line-height:1.7;color:var(--muted);margin-bottom:16px;box-shadow:inset 0 2px 10px rgba(0,0,0,.5)}
.titan-box b{color:#fff}

/* 4-STEPPER (TITANIUM NEON) */
.stepper{display:flex;justify-content:space-between;align-items:flex-start;position:relative;margin-bottom:32px}
.stepper::before{content:'';position:absolute;top:16px;left:10%;right:10%;height:2px;background:linear-gradient(90deg,rgba(255,255,255,.05),rgba(255,255,255,.15),rgba(255,255,255,.05));z-index:0}
.stepper li{flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;position:relative;z-index:1;list-style:none}
.stepper li b{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:#09090b;border:2px solid rgba(255,255,255,.15);color:var(--muted);font-size:14px;font-weight:800;transition:.4s cubic-bezier(.34,1.56,.64,1)}
.stepper li span{font-size:12px;font-weight:800;color:var(--muted);text-align:center;transition:.3s;letter-spacing:.02em}
.stepper li.on b{border-color:#fff;color:#fff;box-shadow:0 0 20px rgba(255,255,255,.4),inset 0 0 10px rgba(255,255,255,.2);transform:scale(1.1)}
.stepper li.on span{color:#fff;text-shadow:0 0 10px rgba(255,255,255,.5)}
.stepper li.done b{background:#fff;border-color:#fff;color:#000;box-shadow:0 0 20px rgba(255,255,255,.5)}
.stepper li.done span{color:#fff}
@media(max-width:520px){.stepper li span{font-size:10px}.stepper li b{width:30px;height:30px;font-size:12px}}

/* BUTTONS */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:16px 24px;border:0;border-radius:16px;font:inherit;font-weight:900;font-size:15px;color:#000;cursor:pointer;transition:transform .15s,box-shadow .2s,opacity .2s;overflow:hidden;text-decoration:none;min-height:54px;letter-spacing:.02em}
.btn:hover{transform:translateY(-2px)}
.btn:active{transform:translateY(0)}
.btn-primary{background:linear-gradient(135deg,#ffffff 0%,#e4e4e7 40%,#a1a1aa 100%);color:#09090b;box-shadow:0 10px 30px -5px rgba(255,255,255,.2),inset 0 1px 0 rgba(255,255,255,.9)}
.btn-primary::after{content:'';position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent);transform:skewX(-20deg);transition:left .6s cubic-bezier(.4,0,.2,1)}
.btn-primary:hover::after{left:150%}
.btn-secondary{background:rgba(255,255,255,.05);color:#fff;border:1px solid rgba(255,255,255,.15);box-shadow:inset 0 1px 0 rgba(255,255,255,.05)}
.btn-secondary:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.3)}

/* PRICING & TELEGRAM */
.titan-tele-btn{background:linear-gradient(135deg,#22d3ee,#0891b2);color:#001b22;border-radius:14px;padding:16px;display:flex;align-items:center;justify-content:center;gap:10px;font-weight:900;font-size:15px;text-decoration:none;margin-bottom:18px;transition:.3s;box-shadow:0 10px 25px -5px rgba(34,211,238,.4),inset 0 1px 0 rgba(255,255,255,.4)}
.titan-tele-btn:hover{transform:translateY(-2px);box-shadow:0 15px 35px -5px rgba(34,211,238,.5)}
.price-item{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.06);font-weight:700;color:var(--muted);font-size:14px}
.price-item:last-child{border:0}
.price-item span:last-child{color:#22d3ee;text-shadow:0 0 15px rgba(34,211,238,.4);font-family:'JetBrains Mono',monospace}

/* APP DOWNLOAD */
.dl-item{border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:18px;margin-bottom:14px;background:rgba(0,0,0,.3);transition:.3s;position:relative;overflow:hidden}
.dl-item:hover{border-color:rgba(255,255,255,.2);background:rgba(255,255,255,.03)}
.dl-header{display:flex;align-items:center;gap:14px;margin-bottom:14px}
.dl-header img{width:52px;height:52px;border-radius:14px;object-fit:cover;border:1px solid rgba(255,255,255,.1);box-shadow:0 4px 15px rgba(0,0,0,.5)}
.dl-header h3{font-size:16px;color:#fff;margin-bottom:2px;font-weight:800}
.dl-header p{font-size:12px;color:var(--muted);font-weight:600}
.dl-list{font-size:13px;color:var(--muted);margin-bottom:18px;padding-left:4px;line-height:1.7}
.dl-list li{margin-bottom:4px;list-style:none}
.dl-btn{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.15);border-radius:14px;padding:14px;display:flex;align-items:center;justify-content:center;gap:8px;font-weight:900;text-decoration:none;transition:.3s;letter-spacing:.02em}
.dl-btn:hover{background:#fff;color:#000;border-color:#fff;box-shadow:0 0 25px rgba(255,255,255,.3)}

/* FLOATING CHAT */
.chat-float{position:fixed;bottom:24px;right:24px;width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#fff,#a1a1aa);display:flex;align-items:center;justify-content:center;box-shadow:0 10px 30px rgba(255,255,255,.15),inset 0 2px 5px rgba(255,255,255,.8);cursor:pointer;z-index:9999;transition:.3s cubic-bezier(.34,1.56,.64,1);animation:float 4s ease-in-out infinite}
.chat-float:hover{transform:scale(1.15) rotate(5deg);box-shadow:0 15px 40px rgba(255,255,255,.3)}
.chat-float svg{width:28px;height:28px;fill:#000}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}

/* PRO CHECKPOINT HUD */
.ckpt-shell{position:relative;padding:clamp(24px,4vw,36px);border-radius:28px;background:linear-gradient(180deg,rgba(20,20,26,.7),rgba(5,5,8,.9));border:1px solid rgba(255,255,255,.1);box-shadow:0 40px 100px -20px rgba(0,0,0,.9),inset 0 1px 0 rgba(255,255,255,.15);overflow:hidden}
.ckpt-shell::before{content:'';position:absolute;top:-50%;left:0;right:0;height:50%;background:linear-gradient(180deg,transparent,rgba(34,211,238,.05),transparent);animation:scanBeam 8s infinite;pointer-events:none}
@keyframes scanBeam{0%{top:-50%}100%{top:110%}}
.ckpt-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:32px;position:relative;z-index:2}
@media(max-width:850px){.ckpt-grid{grid-template-columns:1fr}}
.ckpt-main{display:flex;flex-direction:column;gap:20px}

/* TERMINAL */
.term-shell{border-radius:16px;background:#000;border:1px solid rgba(255,255,255,.15);overflow:hidden;box-shadow:inset 0 0 30px rgba(0,0,0,.9),0 10px 30px rgba(0,0,0,.5)}
.term-bar{padding:10px 16px;background:linear-gradient(180deg,#18181b,#0c0c0f);display:flex;align-items:center;gap:8px;border-bottom:1px solid rgba(255,255,255,.05)}
.t-dot{width:10px;height:10px;border-radius:50%}
.t-dot:nth-child(1){background:#ef4444;box-shadow:0 0 8px rgba(239,68,68,.5)}.t-dot:nth-child(2){background:#fbbf24;box-shadow:0 0 8px rgba(251,191,36,.5)}.t-dot:nth-child(3){background:#10b981;box-shadow:0 0 8px rgba(16,185,129,.5)}
.term-bar code{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);font-weight:700}
.term{position:relative;padding:16px;font-family:'JetBrains Mono',monospace;font-size:13px;height:140px;overflow:hidden;display:flex;flex-direction:column;gap:6px}
.term div{color:var(--muted);animation:termIn .4s cubic-bezier(.25,.46,.45,.94)}
.term div.ok{color:var(--ok);text-shadow:0 0 10px rgba(16,185,129,.4)}
@keyframes termIn{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:none}}

/* TURNSTILE SECURE BOX (FIXED BUG) */
.ts-wrap{position:relative;border-radius:20px;border:1px solid rgba(255,255,255,.15);background:linear-gradient(180deg,rgba(20,20,26,.9),rgba(10,10,15,.95));padding:20px;display:flex;flex-direction:column;align-items:center;gap:14px;transition:all .4s cubic-bezier(.34,1.56,.64,1);box-shadow:inset 0 0 20px rgba(0,0,0,.5)}
.ts-wrap.active{border-color:rgba(34,211,238,.6);box-shadow:0 0 40px rgba(34,211,238,.15),inset 0 0 20px rgba(34,211,238,.05)}
.ts-wrap.success{border-color:rgba(16,185,129,.6);box-shadow:0 0 40px rgba(16,185,129,.2),inset 0 0 20px rgba(16,185,129,.1)}
.ts{min-height:65px;display:flex;justify-content:center;align-items:center}
.ts-status{text-align:center;font-size:13px;color:var(--muted);transition:.3s;font-weight:600}
.ts-status strong{color:#fff;font-weight:800}
.err{display:none;margin-top:8px;padding:12px;border-radius:10px;font-size:12px;font-weight:700;text-align:center;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);color:#fca5a5;width:100%;animation:shake .4s}
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}

/* SIDE STATS HUD */
.ckpt-side{display:flex;flex-direction:column;gap:14px}
.stat-card{padding:18px;border-radius:18px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);transition:.3s;box-shadow:inset 0 1px 0 rgba(255,255,255,.05)}
.stat-card:hover{background:rgba(255,255,255,.04);border-color:rgba(255,255,255,.2);transform:translateY(-2px)}
.stat-label{font-size:10px;font-weight:900;letter-spacing:.15em;color:var(--muted);margin-bottom:6px;text-transform:uppercase}
.stat-value{font-family:'JetBrains Mono',monospace;font-size:24px;font-weight:800;color:#fff;line-height:1;text-shadow:0 0 20px rgba(255,255,255,.3)}
.stat-value small{font-size:12px;color:var(--muted)}
.stat-sub{font-size:11px;color:var(--muted);margin-top:6px;font-weight:600}
.spark{display:flex;align-items:flex-end;gap:3px;height:36px;margin:10px 0 4px}
.spark i{flex:1;background:linear-gradient(180deg,#fff,rgba(255,255,255,.1));border-radius:2px;height:20%;transition:height .3s;box-shadow:0 0 10px rgba(255,255,255,.4)}

/* SUCCESS */
.badge-ok{width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#10b981,#059669);display:grid;place-items:center;color:#fff;font-size:32px;font-weight:900;margin:0 auto 20px;box-shadow:0 0 40px rgba(16,185,129,.5),inset 0 2px 0 rgba(255,255,255,.5);animation:badgePop .6s cubic-bezier(.34,1.56,.64,1)}
@keyframes badgePop{0%{transform:scale(0) rotate(-45deg)}100%{transform:scale(1) rotate(0)}}
.keybox{margin:20px 0;padding:24px;border-radius:16px;border:1px dashed rgba(34,211,238,.5);background:rgba(34,211,238,.05);text-align:center;font-family:'JetBrains Mono',monospace;font-weight:800;font-size:22px;word-break:break-all;color:#22d3ee;cursor:pointer;transition:.3s;text-shadow:0 0 20px rgba(34,211,238,.5);box-shadow:inset 0 0 30px rgba(0,0,0,.6),0 0 30px rgba(34,211,238,.1)}
.keybox:hover{background:rgba(34,211,238,.1);border-color:rgba(34,211,238,.8);box-shadow:inset 0 0 30px rgba(0,0,0,.6),0 0 50px rgba(34,211,238,.25);transform:scale(1.02)}
.btn-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px}

/* MISC */
.foot{margin-top:auto;padding:24px;text-align:center;font-size:12px;color:var(--muted);border-top:1px solid var(--line);background:rgba(5,5,8,.8);backdrop-filter:blur(10px);font-weight:600}
.reveal-opacity{opacity:0;transform:translateY(20px);transition:opacity .8s cubic-bezier(.25,.46,.45,.94),transform .8s cubic-bezier(.25,.46,.45,.94)}
.reveal-opacity.visible{opacity:1;transform:translateY(0)}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;

export const COMMON_JS = `
window.__toast=function(msg,type){var t=document.createElement('div');t.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(20,20,26,.95);color:#fff;padding:14px 28px;border-radius:14px;font-weight:800;font-size:14px;z-index:9999;opacity:0;transition:.3s;border:1px solid '+(type==='ok'?'rgba(16,185,129,.5)':'rgba(239,68,68,.5)')+';backdrop-filter:blur(10px);box-shadow:0 10px 40px rgba(0,0,0,.8);pointer-events:none';t.textContent=msg;document.body.appendChild(t);requestAnimationFrame(()=>{t.style.opacity='1';t.style.transform='translateX(-50%) translateY(0)';});setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(-50%) translateY(20px)';setTimeout(()=>t.remove(),300);},2500);};
window.__haptic=function(){if(navigator.vibrate)try{navigator.vibrate(30)}catch(_){}};
(function(){
  document.addEventListener('click',function(e){
    var c=e.target.closest('[data-copy]');if(!c)return;
    var el=document.getElementById(c.getAttribute('data-copy'));if(!el)return;
    var txt=el.textContent.trim();
    function done(){window.__haptic();window.__toast('Đã sao chép key','ok');}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done,function(){window.__toast('Lỗi sao chép','bad')});}
  });
})();`;

export const CHECKPOINT_JS = `(function(){
  var app=document.getElementById('app'),next=app?app.getAttribute('data-next')||'/':'/';
  var term=document.getElementById('terminal'),timerEl=document.getElementById('timer'),help=document.getElementById('helpText'),err=document.getElementById('errorBox'),tsWrap=document.getElementById('tsWrap');
  if(!term||!timerEl)return;
  var logs=['Khởi tạo kết nối bảo mật TLS 1.3...','Phân tích dấu vết trình duyệt...','Kiểm tra mẫu lưu lượng bất thường...','Đang chờ xác minh Captcha...'],li=0;
  (function print(){if(li>=logs.length)return;var d=document.createElement('div');d.textContent='> '+logs[li];if(li===3)d.className='ok';term.appendChild(d);li++;setTimeout(print,700);})();
  var t0=performance.now(),tick=setInterval(function(){timerEl.innerHTML=((performance.now()-t0)/1000).toFixed(2)+'<small>s</small>';},60);
  var busy=false;
  function fail(msg){busy=false;err.style.display='block';err.textContent=msg;if(tsWrap)tsWrap.className='ts-wrap';if(window.turnstile)try{turnstile.reset()}catch(_){}}
  window.onTurnstileError=function(){fail('Không tải được Captcha. Hãy tắt VPN/Adblock.')};
  window.onTurnstileSuccess=function(token){
    if(busy)return;busy=true;err.style.display='none';
    if(tsWrap)tsWrap.classList.add('active');
    help.innerHTML='<strong style="color:#fff">Đang xác minh kết nối an toàn...</strong>';
    fetch('/api/verify-bot',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:token})})
      .then(r=>r.json()).then(d=>{
        if(d&&d.success){clearInterval(tick);if(tsWrap){tsWrap.className='ts-wrap success'}help.innerHTML='<strong style="color:#10b981">✓ Xác minh thành công! Đang chuyển hướng...</strong>';setTimeout(()=>location.href=next,600);}
        else fail((d&&d.error)||'Xác minh thất bại.');
      }).catch(()=>fail('Lỗi mạng. Hãy thử lại.'));
  };
})();`;

export const JS_FX = `(function(){
  var reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduced)return;
  
  // 3D Snowfall Effect (3 Layers)
  var c=document.createElement('canvas');c.id='snow-canvas';document.body.prepend(c);var ctx=c.getContext('2d');
  function size(){c.width=innerWidth;c.height=innerHeight}size();addEventListener('resize',size);
  var flakes=[];
  for(var i=0;i<80;i++)flakes.push({
    x:Math.random()*innerWidth, y:Math.random()*innerHeight,
    r:Math.random()*2+0.5, // radius
    vy:Math.random()*0.8+0.2, // speed
    vx:(Math.random()-0.5)*0.5, // wind
    o:Math.random()*0.5+0.3, // opacity
    glow: Math.random() > 0.8 // some flakes glow cyan
  });
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    for(var i=0;i<flakes.length;i++){
      var p=flakes[i];
      ctx.fillStyle= p.glow ? 'rgba(34,211,238,'+p.o+')' : 'rgba(255,255,255,'+p.o+')';
      if(p.glow || p.r > 1.5){ctx.shadowBlur=8;ctx.shadowColor=p.glow?'#22d3ee':'#fff';}else{ctx.shadowBlur=0;}
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
      
      p.y+=p.vy;
      p.x+=p.vx + Math.sin(p.y/50)*0.5;
      
      if(p.y>innerHeight+10){p.y=-10;p.x=Math.random()*innerWidth;}
      if(p.x>innerWidth+10)p.x=-10;
      if(p.x<-10)p.x=innerWidth+10;
    }
    requestAnimationFrame(draw);
  }
  draw();
  
  // 3D Tilt
  document.querySelectorAll('.titan-card').forEach(function(card){
    card.addEventListener('mousemove',function(e){
      var r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top,cx=r.width/2,cy=r.height/2;
      card.style.transform='perspective(1000px) rotateX('+((y-cy)/cy)*-4+'deg) rotateY('+((x-cx)/cx)*4+'deg) translateZ(0)';
    });
    card.addEventListener('mouseleave',function(){card.style.transform='';});
  });
  
  // Reveal Animation
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},{threshold:.1});
  document.querySelectorAll('.titan-card,.stepper').forEach(function(el){el.classList.add('reveal-opacity');io.observe(el);});
})();`;
