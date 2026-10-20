export const CSS = `
:root{--bg:#050508;--card:rgba(15,17,26,.7);--line:rgba(255,255,255,.08);--text:#f4f4f7;--muted:#94a3b8;--gold:#facc15;--gold-hi:#fef08a;--navy:#0f172a;--navy-hi:#1e293b;--ok:#10b981;--bad:#ef4444;--cyan:#22d3ee;--mx:50%;--my:0%;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui,-apple-system,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased}
body::before{content:'';position:fixed;inset:0;z-index:-4;pointer-events:none;background:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")}
body::after{content:'';position:fixed;inset:0;z-index:-3;pointer-events:none;background:radial-gradient(ellipse at top,rgba(250,204,21,.06),transparent 60%),radial-gradient(ellipse at bottom,rgba(15,23,42,.8),transparent 80%)}
/* BACKGROUND EFFECTS */
#snow-canvas{position:fixed;inset:0;z-index:-1;pointer-events:none}
#particle-canvas{position:fixed;inset:0;z-index:-2;pointer-events:none;opacity:.4}
.bg-grid{position:fixed;inset:0;z-index:-3;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:40px 40px;-webkit-mask-image:radial-gradient(circle at 50% 20%,#000 10%,transparent 80%);mask-image:radial-gradient(circle at 50% 20%,#000 10%,transparent 80%)}
.aurora{position:fixed;inset:0;z-index:-3;pointer-events:none;overflow:hidden}
.aurora-blob{position:absolute;width:600px;height:600px;border-radius:50%;filter:blur(140px);opacity:.08;background:radial-gradient(circle,var(--gold),transparent 60%)}
.aurora-blob:nth-child(1){top:-10%;left:-10%;animation:aurora1 30s infinite}
.aurora-blob:nth-child(2){top:40%;right:-20%;background:radial-gradient(circle,var(--cyan),transparent 60%);animation:aurora2 25s infinite}
.aurora-blob:nth-child(3){bottom:-20%;left:20%;animation:aurora3 35s infinite}
@keyframes aurora1{0%,100%{transform:translate(0,0)}50%{transform:translate(150px,100px) scale(1.2)}}
@keyframes aurora2{0%,100%{transform:translate(0,0)}50%{transform:translate(-100px,-100px) scale(.8)}}
@keyframes aurora3{0%,100%{transform:translate(0,0)}50%{transform:translate(100px,-50px) scale(1.1)}}
.page-loader{position:fixed;top:0;left:0;width:100%;height:3px;z-index:10001;overflow:hidden}
.page-loader-bar{height:100%;background:linear-gradient(90deg,var(--navy),var(--gold),var(--navy));box-shadow:0 0 20px var(--gold);animation:pageLoad 1.5s forwards}
@keyframes pageLoad{0%{width:0%}100%{width:100%;opacity:0}}
/* CORE */
a{color:inherit;text-decoration:none}
.nav{position:sticky;top:0;z-index:20;display:flex;justify-content:space-between;align-items:center;padding:14px clamp(16px,4vw,40px);background:rgba(5,5,8,.85);backdrop-filter:blur(20px);border-bottom:1px solid var(--line)}
.logo{display:flex;align-items:center;gap:10px;font-weight:900;letter-spacing:.1em;font-size:15px;color:#fff}
.logo i{width:12px;height:12px;border-radius:4px;background:linear-gradient(135deg,var(--gold),#ca8a04);box-shadow:0 0 15px var(--gold)}
.nav-links{display:flex;align-items:center;gap:6px}
.nav-links a{color:var(--muted);font-size:14px;font-weight:700;padding:8px 14px;border-radius:10px;transition:.2s}
.nav-links a:hover,.nav-links a.on{color:#fff;background:rgba(255,255,255,.08)}
.pill{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:800;padding:6px 14px;border-radius:99px;border:1px solid var(--line);background:rgba(255,255,255,.03)}
.dot{width:7px;height:7px;border-radius:50%;background:var(--ok);box-shadow:0 0 10px var(--ok);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
.wrap{width:100%;max-width:800px;margin:0 auto;padding:clamp(24px,5vw,48px) clamp(16px,4vw,24px);flex:1}
.wrap.wide{max-width:1080px}
.wrap.narrow{max-width:620px}
h1{font-size:clamp(26px,5vw,36px);font-weight:900;line-height:1.2;letter-spacing:-.02em}
h2{font-size:20px;font-weight:900}
h3{font-size:16px;font-weight:800}
.lead{color:var(--muted);margin:10px 0 0;font-size:14px}
.center{text-align:center}
.mt{margin-top:16px}
/* CARDS & GLASS */
.card{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:24px;backdrop-filter:blur(20px);box-shadow:0 10px 30px rgba(0,0,0,.3);transition:.3s}
.card:hover{border-color:rgba(250,204,21,.25);box-shadow:0 15px 40px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.1)}
.card+.card{margin-top:16px}
/* ALERTS */
.alert{padding:14px 18px;border-radius:14px;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);color:#fca5a5;font-weight:600;font-size:14px;margin-bottom:16px;display:flex;align-items:flex-start;gap:10px}
/* BUTTONS */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:16px 20px;border:0;border-radius:14px;font:inherit;font-weight:900;font-size:15px;color:#000;cursor:pointer;transition:.2s;text-decoration:none}
.btn:hover{transform:translateY(-2px);filter:brightness(1.1)}
.btn:active{transform:translateY(0)}
.btn-primary{background:linear-gradient(135deg,var(--gold-hi),var(--gold));box-shadow:0 8px 25px -5px rgba(250,204,21,.4)}
.btn-primary::after{content:'';position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.6),transparent);transform:skewX(-20deg);transition:left .5s}
.btn-primary:hover::after{left:150%}
.btn-secondary{background:var(--navy-hi);color:#fff;border:1px solid rgba(255,255,255,.1)}
.btn-secondary:hover{background:var(--navy);border-color:var(--gold)}
/* 4-STEPPER */
.stepper{display:flex;justify-content:space-between;align-items:flex-start;position:relative;margin-bottom:28px}
.stepper::before{content:'';position:absolute;top:16px;left:10%;right:10%;height:2px;background:var(--line);z-index:0}
.stepper li{flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;position:relative;z-index:1;list-style:none}
.stepper li b{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:var(--bg);border:2px solid var(--line);color:var(--muted);font-size:14px;font-weight:800;transition:.3s}
.stepper li span{font-size:12px;font-weight:800;color:var(--muted);text-align:center;transition:.3s}
.stepper li.on b{border-color:var(--gold);color:var(--gold);box-shadow:0 0 15px rgba(250,204,21,.3)}
.stepper li.on span{color:#fff}
.stepper li.done b{background:var(--gold);border-color:var(--gold);color:#000;box-shadow:0 0 15px rgba(250,204,21,.4)}
.stepper li.done span{color:var(--gold)}
@media(max-width:520px){.stepper li span{font-size:10px}}
/* SUNNY-STYLE CARDS */
.sm-card{background:#fff;color:#0f172a;border-radius:20px;padding:20px;margin-bottom:16px;box-shadow:0 8px 25px rgba(0,0,0,.1);border:1px solid #e2e8f0}
.sm-card h2{color:#0f172a;display:flex;align-items:center;gap:8px;font-size:18px;margin-bottom:12px}
.sm-box{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;font-size:14px;line-height:1.6;color:#334155;margin-bottom:16px}
.sm-box b{color:#0f172a}
.price-item{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px dashed #cbd5e1;font-weight:700}
.price-item:last-child{border:0}
.price-item span:last-child{color:#d97706}
.sm-tele-btn{background:#0f172a;color:#fff;border-radius:12px;padding:14px;display:flex;align-items:center;justify-content:center;gap:10px;font-weight:800;font-size:14px;text-decoration:none;margin-bottom:16px;border:1px solid #1e293b;transition:.2s}
.sm-tele-btn:hover{background:#1e293b;transform:translateY(-2px)}
/* APP DOWNLOAD */
.dl-item{border:1px solid #e2e8f0;border-radius:16px;padding:16px;margin-bottom:14px;background:#fff}
.dl-header{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.dl-header img{width:48px;height:48px;border-radius:12px;object-fit:cover;background:#f1f5f9}
.dl-header h3{font-size:15px;color:#0f172a;margin-bottom:2px}
.dl-header p{font-size:12px;color:#64748b}
.dl-list{font-size:13px;color:#475569;margin-bottom:16px;padding-left:4px}
.dl-list li{margin-bottom:4px;list-style:none}
.dl-btn{background:#eab308;color:#000;border-radius:12px;padding:12px;display:flex;align-items:center;justify-content:center;gap:8px;font-weight:900;text-decoration:none;transition:.2s}
.dl-btn:hover{background:#ca8a04;transform:translateY(-2px)}
/* CHAT WIDGET */
.chat-float{position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#2563eb);display:flex;align-items:center;justify-content:center;box-shadow:0 10px 25px rgba(37,99,235,.4);cursor:pointer;z-index:9999;border:2px solid #fff;transition:.3s}
.chat-float:hover{transform:scale(1.1)}
.chat-float svg{width:28px;height:28px;fill:#fff}
.chat-float::after{content:'';position:absolute;top:2px;right:2px;width:12px;height:12px;background:var(--ok);border-radius:50%;border:2px solid #fff}
/* PRO CHECKPOINT */
.ckpt-shell{position:relative;padding:clamp(20px,4vw,36px);border-radius:28px;background:linear-gradient(180deg,rgba(15,23,42,.9),rgba(2,6,23,.95));border:1px solid var(--line);overflow:hidden}
.ckpt-shell::before{content:'';position:absolute;top:-50%;left:0;right:0;height:50%;background:linear-gradient(180deg,transparent,rgba(34,211,238,.05),transparent);animation:scanBeam 8s infinite;pointer-events:none}
@keyframes scanBeam{0%{top:-50%}100%{top:110%}}
.ckpt-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:32px;position:relative;z-index:2}
@media(max-width:850px){.ckpt-grid{grid-template-columns:1fr}}
.ckpt-main{display:flex;flex-direction:column;gap:16px}
.term-shell{border-radius:14px;background:#000;border:1px solid #334155;overflow:hidden}
.term-bar{padding:8px 14px;background:#0f172a;display:flex;align-items:center;gap:6px;border-bottom:1px solid #1e293b}
.t-dot{width:10px;height:10px;border-radius:50%}
.t-dot:nth-child(1){background:#ef4444}.t-dot:nth-child(2){background:#fbbf24}.t-dot:nth-child(3){background:#10b981}
.term-bar code{margin-left:8px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#64748b}
.term{padding:14px;font-family:'JetBrains Mono',monospace;font-size:12px;height:120px;overflow:hidden;display:flex;flex-direction:column;gap:4px}
.term div{color:#94a3b8;animation:termIn .3s ease-out}
.term div.ok{color:var(--ok)}
@keyframes termIn{from{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:none}}
/* FIX LỖI BUNG QUAY QUAY TẠI ĐÂY (Bỏ mask, dùng box-shadow) */
.ts-wrap{position:relative;border-radius:20px;transition:box-shadow .3s,border-color .3s;border:1px solid var(--line);background:#0f172a;padding:16px;display:flex;flex-direction:column;align-items:center;gap:12px}
.ts-wrap.active{border-color:var(--cyan);box-shadow:0 0 30px rgba(34,211,238,.2),inset 0 0 20px rgba(34,211,238,.05)}
.ts-wrap.success{border-color:var(--ok);box-shadow:0 0 30px rgba(16,185,129,.2),inset 0 0 20px rgba(16,185,129,.05)}
.ts{min-height:65px;display:flex;justify-content:center;align-items:center}
.ts-status{text-align:center;font-size:13px;color:var(--muted);transition:.3s}
.ts-status strong{color:#fff}
.err{display:none;margin-top:8px;padding:10px;border-radius:10px;font-size:12px;font-weight:600;text-align:center;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);color:#fca5a5;width:100%}
/* SIDE STATS */
.ckpt-side{display:flex;flex-direction:column;gap:12px}
.stat-card{padding:16px;border-radius:16px;background:rgba(255,255,255,.02);border:1px solid var(--line)}
.stat-label{font-size:10px;font-weight:800;letter-spacing:.1em;color:var(--muted);margin-bottom:4px;text-transform:uppercase}
.stat-value{font-family:'JetBrains Mono',monospace;font-size:24px;font-weight:800;color:#fff;line-height:1}
.stat-value small{font-size:12px;color:var(--muted)}
.stat-sub{font-size:11px;color:var(--muted);margin-top:4px;font-weight:600}
.spark{display:flex;align-items:flex-end;gap:2px;height:30px;margin:8px 0 0}
.spark i{flex:1;background:var(--cyan);border-radius:1px;height:20%;transition:height .3s}
/* SUCCESS */
.badge-ok{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,var(--ok),#047857);display:grid;place-items:center;color:#fff;font-size:28px;font-weight:900;margin:0 auto 16px;box-shadow:0 0 30px rgba(16,185,129,.4);animation:badgePop .5s cubic-bezier(.34,1.56,.64,1)}
@keyframes badgePop{0%{transform:scale(0)}100%{transform:scale(1)}}
.keybox{margin:16px 0;padding:20px;border-radius:14px;border:1.5px dashed var(--gold);background:rgba(250,204,21,.05);text-align:center;font-family:'JetBrains Mono',monospace;font-weight:800;font-size:20px;word-break:break-all;color:var(--gold);cursor:pointer;transition:.2s}
.keybox:hover{background:rgba(250,204,21,.1);box-shadow:0 0 20px rgba(250,204,21,.15)}
.btn-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}
/* MISC */
.foot{margin-top:auto;padding:24px;text-align:center;font-size:12px;color:var(--muted);border-top:1px solid var(--line);background:rgba(0,0,0,.4)}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;
export const COMMON_JS = `
window.__toast=function(msg,type){var t=document.createElement('div');t.style.cssText='position:fixed;bottom:20px;left:50%;transform:translateX(-50%) translateY(20px);background:#0f172a;color:#fff;padding:12px 24px;border-radius:12px;font-weight:700;font-size:14px;z-index:9999;opacity:0;transition:.3s;border:1px solid '+(type==='ok'?'#10b981':'#ef4444')+';box-shadow:0 10px 30px rgba(0,0,0,.5);pointer-events:none';t.textContent=msg;document.body.appendChild(t);requestAnimationFrame(()=>{t.style.opacity='1';t.style.transform='translateX(-50%) translateY(0)';});setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(-50%) translateY(20px)';setTimeout(()=>t.remove(),300);},2500);};
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
  var logs=['Khởi tạo kết nối an toàn TLS 1.3...','Phân tích dấu vết trình duyệt...','Kiểm tra mẫu lưu lượng...','Đang chờ Captcha...'],li=0;
  (function print(){if(li>=logs.length)return;var d=document.createElement('div');d.textContent='> '+logs[li];if(li===3)d.className='ok';term.appendChild(d);li++;setTimeout(print,700);})();
  var t0=performance.now(),tick=setInterval(function(){timerEl.innerHTML=((performance.now()-t0)/1000).toFixed(2)+'<small>s</small>';},60);
  var busy=false;
  function fail(msg){busy=false;err.style.display='block';err.textContent=msg;if(tsWrap)tsWrap.className='ts-wrap';if(window.turnstile)try{turnstile.reset()}catch(_){}}
  window.onTurnstileError=function(){fail('Không tải được Captcha. Hãy tắt VPN/Adblock.')};
  window.onTurnstileSuccess=function(token){
    if(busy)return;busy=true;err.style.display='none';
    if(tsWrap)tsWrap.classList.add('active');
    help.innerHTML='<strong>Đang xác minh kết nối...</strong>';
    fetch('/api/verify-bot',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:token})})
      .then(r=>r.json()).then(d=>{
        if(d&&d.success){clearInterval(tick);if(tsWrap){tsWrap.className='ts-wrap success'}help.innerHTML='<strong style="color:#10b981">✓ Xác minh thành công! Đang chuyển hướng...</strong>';setTimeout(()=>location.href=next,600);}
        else fail((d&&d.error)||'Xác minh thất bại.');
      }).catch(()=>fail('Lỗi mạng. Hãy thử lại.'));
  };
})();`;

export const JS_FX = `(function(){
  var reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduced)return;
  var c=document.createElement('canvas');c.id='snow-canvas';document.body.prepend(c);var ctx=c.getContext('2d');
  function size(){c.width=innerWidth;c.height=innerHeight}size();addEventListener('resize',size);
  var flakes=[];for(var i=0;i<45;i++)flakes.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.5+.5,vy:Math.random()*.5+.3,vx:(Math.random()-.5)*.3,o:Math.random()*.5+.2});
  function draw(){ctx.clearRect(0,0,c.width,c.height);for(var i=0;i<flakes.length;i++){var p=flakes[i];ctx.fillStyle='rgba(255,255,255,'+p.o+')';ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();p.y+=p.vy;p.x+=p.vx+Math.sin(p.y/40)*.1;if(p.y>innerHeight)p.y=-10;if(p.x>innerWidth)p.x=0;if(p.x<0)p.x=innerWidth;}requestAnimationFrame(draw);}draw();
})();`;
