export const CSS = `
:root{--bg:#050508;--card:rgba(20,20,26,.6);--card-hi:rgba(30,30,38,.8);--line:rgba(255,255,255,.1);--text:#f4f4f5;--muted:#a1a1aa;--silver:#e4e4e7;--cyan:#22d3ee;--ok:#10b981;--mx:50%;--my:0%;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui,-apple-system,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased}
/* DEEP BACKGROUND EFFECTS */
#snow-canvas{position:fixed;inset:0;z-index:-1;pointer-events:none}
#particle-canvas{position:fixed;inset:0;z-index:-2;pointer-events:none;opacity:.6}
.bg-grid{position:fixed;inset:0;z-index:-3;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:44px 44px;-webkit-mask-image:radial-gradient(circle at 50% 30%,#000 15%,transparent 75%);mask-image:radial-gradient(circle at 50% 30%,#000 15%,transparent 75%)}
.aurora{position:fixed;inset:0;z-index:-3;pointer-events:none;overflow:hidden}
.aurora-blob{position:absolute;width:500px;height:500px;border-radius:50%;filter:blur(120px);opacity:.12;background:radial-gradient(circle,#e4e4e7,transparent 70%)}
.aurora-blob:nth-child(1){top:-10%;left:-10%;animation:aurora1 25s infinite ease-in-out}
.aurora-blob:nth-child(2){top:40%;right:-15%;background:radial-gradient(circle,#22d3ee,transparent 70%);opacity:.08;animation:aurora2 30s infinite ease-in-out}
.aurora-blob:nth-child(3){bottom:-15%;left:30%;animation:aurora3 20s infinite ease-in-out}
@keyframes aurora1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(150px,100px) scale(1.3)}}
@keyframes aurora2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-100px,-80px) scale(.85)}}
@keyframes aurora3{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(80px,-100px) scale(1.15)}}
/* CORE UI */
a{color:inherit;text-decoration:none}
.nav{position:sticky;top:0;z-index:20;display:flex;justify-content:space-between;align-items:center;padding:14px clamp(16px,4vw,40px);background:rgba(5,5,8,.75);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--line)}
.logo{display:flex;align-items:center;gap:10px;font-weight:900;letter-spacing:.1em;font-size:15px;color:#fff}
.logo i{width:12px;height:12px;border-radius:4px;background:linear-gradient(135deg,#fff,#71717a);box-shadow:0 0 15px rgba(255,255,255,.4)}
.nav-links{display:flex;align-items:center;gap:6px}
.nav-links a{color:var(--muted);font-size:14px;font-weight:700;padding:8px 14px;border-radius:10px;transition:.2s}
.nav-links a:hover,.nav-links a.on{color:#fff;background:rgba(255,255,255,.08)}
.pill{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:800;padding:6px 14px;border-radius:99px;border:1px solid var(--line);background:rgba(255,255,255,.03)}
.dot{width:7px;height:7px;border-radius:50%;background:var(--ok);box-shadow:0 0 10px var(--ok);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
.wrap{width:100%;max-width:800px;margin:0 auto;padding:clamp(24px,5vw,48px) clamp(16px,4vw,24px);flex:1;perspective:1000px}
.wrap.wide{max-width:1080px}
.wrap.narrow{max-width:620px}
h1{font-size:clamp(26px,5vw,36px);font-weight:900;line-height:1.2;letter-spacing:-.02em}
h2{font-size:20px;font-weight:900}
h3{font-size:16px;font-weight:800}
.lead{color:var(--muted);margin:10px 0 0;font-size:14px}
.center{text-align:center}
.mt{margin-top:16px}
/* DYNAMIC CARDS */
.card{background:var(--card);border:1px solid var(--line);border-radius:24px;padding:24px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:0 20px 40px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.1);transition:transform .15s ease-out,box-shadow .3s,border-color .3s;will-change:transform;transform-style:preserve-3d}
.card:hover{border-color:rgba(255,255,255,.25);box-shadow:0 30px 60px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.2),0 0 30px rgba(255,255,255,.05)}
.card+.card{margin-top:16px}
/* BUTTONS */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:16px 20px;border:0;border-radius:16px;font:inherit;font-weight:900;font-size:15px;color:#000;cursor:pointer;transition:transform .15s,box-shadow .2s,opacity .2s;overflow:hidden;text-decoration:none;min-height:52px}
.btn:hover{transform:translateY(-2px)}
.btn:active{transform:translateY(0)}
.btn-primary{background:linear-gradient(135deg,#ffffff 0%,#e4e4e7 50%,#a1a1aa 100%);color:#09090b;box-shadow:0 10px 30px -5px rgba(255,255,255,.3),inset 0 1px 0 rgba(255,255,255,.8)}
.btn-primary::after{content:'';position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent);transform:skewX(-20deg);transition:left .6s}
.btn-primary:hover::after{left:150%}
.btn-secondary{background:rgba(255,255,255,.05);color:#fff;border:1px solid var(--line)}
.btn-secondary:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.3)}
/* 4-STEPPER (TITANIUM) */
.stepper{display:flex;justify-content:space-between;align-items:flex-start;position:relative;margin-bottom:28px}
.stepper::before{content:'';position:absolute;top:16px;left:10%;right:10%;height:2px;background:var(--line);z-index:0}
.stepper li{flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;position:relative;z-index:1;list-style:none}
.stepper li b{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:var(--bg);border:2px solid var(--line);color:var(--muted);font-size:14px;font-weight:800;transition:.3s}
.stepper li span{font-size:12px;font-weight:800;color:var(--muted);text-align:center;transition:.3s}
.stepper li.on b{border-color:#fff;color:#fff;box-shadow:0 0 15px rgba(255,255,255,.3)}
.stepper li.on span{color:#fff}
.stepper li.done b{background:#fff;border-color:#fff;color:#000;box-shadow:0 0 15px rgba(255,255,255,.4)}
.stepper li.done span{color:#fff}
@media(max-width:520px){.stepper li span{font-size:10px}}
/* DARK TITANIUM INFO CARDS */
.titan-card{background:linear-gradient(180deg,rgba(30,30,38,.8),rgba(15,15,20,.9));border:1px solid var(--line);border-radius:20px;padding:24px;margin-bottom:16px;box-shadow:0 10px 30px rgba(0,0,0,.5);position:relative;overflow:hidden}
.titan-card::before{content:'';position:absolute;top:0;left:0;width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent)}
.titan-card h2{color:#fff;display:flex;align-items:center;gap:8px;font-size:18px;margin-bottom:12px;text-shadow:0 0 20px rgba(255,255,255,.2)}
.titan-box{background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px;font-size:14px;line-height:1.6;color:var(--muted);margin-bottom:16px}
.titan-box b{color:#fff}
.price-item{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed rgba(255,255,255,.1);font-weight:700;color:var(--muted)}
.price-item:last-child{border:0}
.price-item span:last-child{color:var(--cyan);text-shadow:0 0 10px rgba(34,211,238,.4)}
.titan-tele-btn{background:#fff;color:#000;border-radius:12px;padding:14px;display:flex;align-items:center;justify-content:center;gap:10px;font-weight:900;font-size:14px;text-decoration:none;margin-bottom:16px;transition:.3s;box-shadow:0 8px 25px rgba(255,255,255,.15)}
.titan-tele-btn:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(255,255,255,.25)}
/* APP DOWNLOAD TITANIUM */
.dl-item{border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:16px;margin-bottom:14px;background:rgba(0,0,0,.2);transition:.3s}
.dl-item:hover{border-color:rgba(255,255,255,.2);background:rgba(255,255,255,.03)}
.dl-header{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.dl-header img{width:48px;height:48px;border-radius:12px;object-fit:cover;border:1px solid rgba(255,255,255,.1)}
.dl-header h3{font-size:15px;color:#fff;margin-bottom:2px}
.dl-header p{font-size:12px;color:var(--muted)}
.dl-list{font-size:13px;color:var(--muted);margin-bottom:16px;padding-left:4px}
.dl-list li{margin-bottom:4px;list-style:none}
.dl-btn{background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.2);border-radius:12px;padding:12px;display:flex;align-items:center;justify-content:center;gap:8px;font-weight:900;text-decoration:none;transition:.3s}
.dl-btn:hover{background:#fff;color:#000;border-color:#fff;box-shadow:0 0 20px rgba(255,255,255,.3)}
/* CHAT WIDGET */
.chat-float{position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#fff,#a1a1aa);display:flex;align-items:center;justify-content:center;box-shadow:0 10px 30px rgba(255,255,255,.2);cursor:pointer;z-index:9999;transition:.3s;animation:float 3s ease-in-out infinite}
.chat-float:hover{transform:scale(1.1);box-shadow:0 15px 40px rgba(255,255,255,.4)}
.chat-float svg{width:28px;height:28px;fill:#000}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
/* PRO CHECKPOINT (DEEP HUD) */
.ckpt-shell{position:relative;padding:clamp(20px,4vw,36px);border-radius:28px;background:linear-gradient(180deg,rgba(20,20,26,.8),rgba(5,5,8,.95));border:1px solid var(--line);box-shadow:0 30px 80px -20px rgba(0,0,0,.8),inset 0 1px 0 rgba(255,255,255,.1);overflow:hidden}
.ckpt-shell::before{content:'';position:absolute;top:-50%;left:0;right:0;height:50%;background:linear-gradient(180deg,transparent,rgba(255,255,255,.06),transparent);animation:scanBeam 8s infinite;pointer-events:none}
@keyframes scanBeam{0%{top:-50%}100%{top:110%}}
.ckpt-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:32px;position:relative;z-index:2}
@media(max-width:850px){.ckpt-grid{grid-template-columns:1fr}}
.ckpt-main{display:flex;flex-direction:column;gap:16px}
.term-shell{border-radius:14px;background:#000;border:1px solid var(--line);overflow:hidden;box-shadow:inset 0 0 20px rgba(0,0,0,.8)}
.term-bar{padding:8px 14px;background:linear-gradient(180deg,#18181b,#0c0c0f);display:flex;align-items:center;gap:6px;border-bottom:1px solid rgba(255,255,255,.05)}
.t-dot{width:10px;height:10px;border-radius:50%}
.t-dot:nth-child(1){background:#ef4444}.t-dot:nth-child(2){background:#fbbf24}.t-dot:nth-child(3){background:#10b981}
.term-bar code{margin-left:8px;font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted)}
.term{position:relative;padding:14px;font-family:'JetBrains Mono',monospace;font-size:12px;height:120px;overflow:hidden;display:flex;flex-direction:column;gap:4px}
.term::after{content:'';position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(34,211,238,.5),transparent);animation:termScan 3s linear infinite;pointer-events:none}
@keyframes termScan{0%{top:-2px;opacity:0}10%{opacity:1}90%{opacity:1}100%{top:100%;opacity:0}}
.term div{color:var(--muted);animation:termIn .3s ease-out}
.term div.ok{color:var(--ok)}
@keyframes termIn{from{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:none}}
/* FIX LỖI TURNSTILE: Bọc viền kính bạc, không dùng mask xoay */
.ts-wrap{position:relative;border-radius:20px;transition:box-shadow .3s,border-color .3s;border:1px solid var(--line);background:linear-gradient(180deg,rgba(20,20,26,.9),rgba(10,10,15,.9));padding:16px;display:flex;flex-direction:column;align-items:center;gap:12px;backdrop-filter:blur(10px)}
.ts-wrap.active{border-color:rgba(34,211,238,.5);box-shadow:0 0 30px rgba(34,211,238,.15),inset 0 0 20px rgba(34,211,238,.05)}
.ts-wrap.success{border-color:rgba(16,185,129,.5);box-shadow:0 0 30px rgba(16,185,129,.2),inset 0 0 20px rgba(16,185,129,.08)}
.ts{min-height:65px;display:flex;justify-content:center;align-items:center}
.ts-status{text-align:center;font-size:13px;color:var(--muted);transition:.3s}
.ts-status strong{color:#fff}
.err{display:none;margin-top:8px;padding:10px;border-radius:10px;font-size:12px;font-weight:600;text-align:center;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);color:#fca5a5;width:100%}
/* SIDE STATS HUD */
.ckpt-side{display:flex;flex-direction:column;gap:12px}
.stat-card{padding:16px;border-radius:16px;background:rgba(255,255,255,.02);border:1px solid var(--line);transition:.3s}
.stat-card:hover{background:rgba(255,255,255,.04);border-color:rgba(255,255,255,.15)}
.stat-label{font-size:10px;font-weight:800;letter-spacing:.1em;color:var(--muted);margin-bottom:4px;text-transform:uppercase}
.stat-value{font-family:'JetBrains Mono',monospace;font-size:24px;font-weight:800;color:#fff;line-height:1;text-shadow:0 0 20px rgba(255,255,255,.2)}
.stat-value small{font-size:12px;color:var(--muted)}
.stat-sub{font-size:11px;color:var(--muted);margin-top:4px;font-weight:600}
.spark{display:flex;align-items:flex-end;gap:2px;height:30px;margin:8px 0 0}
.spark i{flex:1;background:linear-gradient(180deg,#fff,rgba(255,255,255,.1));border-radius:1px;height:20%;transition:height .3s;box-shadow:0 0 8px rgba(255,255,255,.3)}
/* SUCCESS */
.badge-ok{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#10b981,#059669);display:grid;place-items:center;color:#fff;font-size:28px;font-weight:900;margin:0 auto 16px;box-shadow:0 0 30px rgba(16,185,129,.4),inset 0 2px 0 rgba(255,255,255,.4);animation:badgePop .5s cubic-bezier(.34,1.56,.64,1)}
@keyframes badgePop{0%{transform:scale(0)}100%{transform:scale(1)}}
.keybox{margin:16px 0;padding:20px;border-radius:14px;border:1.5px dashed rgba(255,255,255,.3);background:rgba(255,255,255,.03);text-align:center;font-family:'JetBrains Mono',monospace;font-weight:800;font-size:20px;word-break:break-all;color:#22d3ee;cursor:pointer;transition:.2s;text-shadow:0 0 15px rgba(34,211,238,.4);box-shadow:inset 0 0 20px rgba(0,0,0,.5)}
.keybox:hover{background:rgba(255,255,255,.06);border-color:rgba(34,211,238,.6);box-shadow:inset 0 0 20px rgba(0,0,0,.5),0 0 30px rgba(34,211,238,.15)}
.btn-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}
/* MISC */
.foot{margin-top:auto;padding:24px;text-align:center;font-size:12px;color:var(--muted);border-top:1px solid var(--line);background:rgba(5,5,8,.6);backdrop-filter:blur(10px)}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;

export const COMMON_JS = `
window.__toast=function(msg,type){var t=document.createElement('div');t.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(20,20,26,.95);color:#fff;padding:12px 24px;border-radius:12px;font-weight:700;font-size:14px;z-index:9999;opacity:0;transition:.3s;border:1px solid '+(type==='ok'?'rgba(16,185,129,.5)':'rgba(239,68,68,.5)')+';backdrop-filter:blur(10px);box-shadow:0 10px 30px rgba(0,0,0,.5);pointer-events:none';t.textContent=msg;document.body.appendChild(t);requestAnimationFrame(()=>{t.style.opacity='1';t.style.transform='translateX(-50%) translateY(0)';});setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(-50%) translateY(20px)';setTimeout(()=>t.remove(),300);},2500);};
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
  // 1. Snowfall
  var c=document.createElement('canvas');c.id='snow-canvas';document.body.prepend(c);var ctx=c.getContext('2d');
  function size(){c.width=innerWidth;c.height=innerHeight}size();addEventListener('resize',size);
  var flakes=[];for(var i=0;i<90;i++)flakes.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.8+.3,vy:Math.random()*.5+.3,vx:(Math.random()-.5)*.3,s:Math.random()*2+.5,o:Math.random()*.4+.3});
  function draw(){ctx.clearRect(0,0,c.width,c.height);for(var i=0;i<flakes.length;i++){var p=flakes[i];ctx.fillStyle='rgba(255,255,255,'+p.o+')';ctx.shadowBlur=3;ctx.shadowColor='rgba(255,255,255,.7)';ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();p.y+=p.vy;p.x+=p.vx+Math.sin(p.y/40)*p.s*.08;if(p.y>innerHeight+10)p.y=-10;if(p.y<-10)p.y=innerHeight+10;if(p.x>innerWidth+10)p.x=-10;if(p.x<-10)p.x=innerWidth+10;}requestAnimationFrame(draw);}draw();
  
  // 2. Particle Network
  var pc=document.createElement('canvas');pc.id='particle-canvas';document.body.prepend(pc);var pctx=pc.getContext('2d');
  function psize(){pc.width=innerWidth;pc.height=innerHeight}psize();addEventListener('resize',psize);
  var pts=[];for(var j=0;j<40;j++)pts.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4});
  function pdraw(){pctx.clearRect(0,0,pc.width,pc.height);for(var a=0;a<pts.length;a++){var p1=pts[a];p1.x+=p1.vx;p1.y+=p1.vy;if(p1.x<0||p1.x>pc.width)p1.vx*=-1;if(p1.y<0||p1.y>pc.height)p1.vy*=-1;pctx.fillStyle='rgba(255,255,255,.3)';pctx.beginPath();pctx.arc(p1.x,p1.y,1.5,0,Math.PI*2);pctx.fill();for(var b=a+1;b<pts.length;b++){var p2=pts[b],dist=Math.hypot(p1.x-p2.x,p1.y-p2.y);if(dist<150){pctx.strokeStyle='rgba(255,255,255,'+(1-dist/150)*.15+')';pctx.lineWidth=1;pctx.beginPath();pctx.moveTo(p1.x,p1.y);pctx.lineTo(p2.x,p2.y);pctx.stroke();}}}requestAnimationFrame(pdraw);}pdraw();
  
  // 3. 3D Tilt
  document.querySelectorAll('.card,.titan-card').forEach(function(card){
    card.addEventListener('mousemove',function(e){var r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top,cx=r.width/2,cy=r.height/2;card.style.transform='perspective(1000px) rotateX('+((y-cy)/cy)*-3+'deg) rotateY('+((x-cx)/cx)*3+'deg) translateZ(0)';});
    card.addEventListener('mouseleave',function(){card.style.transform='';});
  });
})();`;
