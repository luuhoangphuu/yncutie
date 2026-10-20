export const CSS = `
:root{--bg:#08080a;--card:rgba(20,20,24,.8);--border:rgba(255,255,255,.15);--text:#ffffff;--muted:#a1a1aa;--silver:#e4e4e7;--cyan:#22d3ee;--ok:#10b981;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased}

/* ═════════ TITANIUM & SNOW BACKGROUND ═════════ */
#snow-canvas{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1;pointer-events:none}
.bg-grid{position:fixed;inset:0;z-index:-1;background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:40px 40px;-webkit-mask-image:radial-gradient(circle at 50% 50%,#000 20%,transparent 80%);mask-image:radial-gradient(circle at 50% 50%,#000 20%,transparent 80%)}
.bg-glow{position:fixed;top:-20%;left:50%;transform:translateX(-50%);width:100vw;height:60vh;background:radial-gradient(ellipse at top,rgba(255,255,255,.08),transparent 70%);z-index:-1;pointer-events:none}

/* ═════════ CORE UI ═════════ */
a{color:inherit;text-decoration:none}
.nav{position:relative;z-index:50;display:flex;justify-content:space-between;align-items:center;padding:16px clamp(16px,4vw,40px);background:rgba(8,8,10,.8);backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
.logo{display:flex;align-items:center;gap:10px;font-weight:900;letter-spacing:.15em;font-size:16px;color:#fff}
.logo i{width:14px;height:14px;border-radius:4px;background:linear-gradient(135deg,#fff,#71717a);box-shadow:0 0 20px rgba(255,255,255,.6)}
.nav-links{display:flex;align-items:center;gap:6px}
.nav-links a{color:var(--muted);font-size:14px;font-weight:700;padding:8px 16px;border-radius:10px;transition:.3s}
.nav-links a:hover,.nav-links a.on{color:#fff;background:rgba(255,255,255,.1)}
.wrap{position:relative;z-index:10;width:100%;max-width:800px;margin:0 auto;padding:clamp(24px,5vw,48px) clamp(16px,4vw,24px);flex:1}
.wrap.wide{max-width:1080px}
.wrap.narrow{max-width:620px}
h1{font-size:clamp(28px,5vw,40px);font-weight:900;line-height:1.2;letter-spacing:-.03em;background:linear-gradient(135deg,#ffffff,#a1a1aa);-webkit-background-clip:text;background-clip:text;color:transparent}
.lead{color:var(--muted);margin:12px 0 0;font-size:15px}
.center{text-align:center}

/* ═════════ TITANIUM CARDS ═════════ */
.titan-card{background:linear-gradient(180deg,rgba(255,255,255,.05) 0%,rgba(20,20,24,.9) 100%);border:1px solid var(--border);border-radius:24px;padding:24px;margin-bottom:20px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:0 20px 40px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.2);position:relative;transition:border-color .3s}
.titan-card:hover{border-color:rgba(255,255,255,.4)}
.titan-card h2{color:#fff;display:flex;align-items:center;gap:10px;font-size:20px;margin-bottom:16px;font-weight:800}
.titan-box{background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:18px;font-size:14px;line-height:1.7;color:var(--muted);margin-bottom:16px}
.titan-box b{color:#fff}

/* ═════════ BUTTONS ═════════ */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:16px 24px;border:0;border-radius:16px;font:inherit;font-weight:900;font-size:15px;color:#000;cursor:pointer;transition:all .2s;text-decoration:none;min-height:54px}
.btn-primary{background:linear-gradient(135deg,#ffffff 0%,#e4e4e7 50%,#a1a1aa 100%);color:#09090b;box-shadow:0 10px 20px -5px rgba(255,255,255,.2),inset 0 1px 0 #fff}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 15px 30px -5px rgba(255,255,255,.3),inset 0 1px 0 #fff}
.btn-secondary{background:rgba(255,255,255,.05);color:#fff;border:1px solid var(--border)}
.btn-secondary:hover{background:rgba(255,255,255,.1)}

/* ═════════ STEPPER (4 BƯỚC) ═════════ */
.stepper{display:flex;justify-content:space-between;align-items:flex-start;position:relative;margin-bottom:32px}
.stepper::before{content:'';position:absolute;top:16px;left:10%;right:10%;height:2px;background:rgba(255,255,255,.1);z-index:0}
.stepper li{flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;position:relative;z-index:1;list-style:none}
.stepper li b{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:#08080a;border:2px solid rgba(255,255,255,.2);color:var(--muted);font-size:14px;font-weight:800;transition:.3s}
.stepper li span{font-size:12px;font-weight:800;color:var(--muted);transition:.3s}
.stepper li.on b{border-color:#fff;color:#fff;box-shadow:0 0 15px rgba(255,255,255,.5)}
.stepper li.on span{color:#fff}
.stepper li.done b{background:#fff;border-color:#fff;color:#000}
.stepper li.done span{color:#fff}

/* ═════════ CHECKBOT PRO (KHÔNG BỊ ĐEN) ═════════ */
.ckpt-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:24px;align-items:stretch}
@media(max-width:768px){.ckpt-grid{grid-template-columns:1fr}}
.ckpt-left{display:flex;flex-direction:column;gap:16px}
.ckpt-right{display:flex;flex-direction:column;gap:16px;justify-content:center}

.term-shell{background:#000;border:1px solid var(--border);border-radius:16px;overflow:hidden;box-shadow:inset 0 0 20px rgba(0,0,0,.9)}
.term-bar{padding:10px 16px;background:#121215;display:flex;align-items:center;gap:6px;border-bottom:1px solid rgba(255,255,255,.05)}
.t-dot{width:10px;height:10px;border-radius:50%}
.t-dot:nth-child(1){background:#ef4444}.t-dot:nth-child(2){background:#fbbf24}.t-dot:nth-child(3){background:#10b981}
.term{position:relative;padding:16px;font-family:'JetBrains Mono',monospace;font-size:13px;height:120px;overflow:hidden;display:flex;flex-direction:column;gap:4px}
.term div{color:var(--muted);animation:termIn .3s ease-out}
.term div.ok{color:var(--ok)}
@keyframes termIn{from{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:none}}

/* Turnstile Box */
.ts-wrap{background:linear-gradient(180deg,rgba(255,255,255,.05),transparent);border:1px solid var(--border);border-radius:16px;padding:20px;display:flex;flex-direction:column;align-items:center;gap:12px;transition:all .3s}
.ts-wrap.active{border-color:rgba(34,211,238,.5);box-shadow:0 0 30px rgba(34,211,238,.1)}
.ts-wrap.success{border-color:rgba(16,185,129,.5);box-shadow:0 0 30px rgba(16,185,129,.2)}
.ts-status{font-size:13px;color:var(--muted);text-align:center}
.ts-status strong{color:#fff}
.err{display:none;color:#ef4444;font-size:12px;margin-top:8px;text-align:center}

/* Đồng hồ & Radar */
.timer-box{background:rgba(0,0,0,.5);border:1px solid var(--border);border-radius:16px;padding:20px;text-align:center}
.timer-label{font-size:10px;font-weight:900;letter-spacing:.15em;color:var(--muted);text-transform:uppercase;margin-bottom:8px}
.timer-val{font-family:'JetBrains Mono',monospace;font-size:36px;font-weight:900;color:#fff;line-height:1;text-shadow:0 0 20px rgba(255,255,255,.4)}
.timer-val small{font-size:14px;color:var(--muted)}

.radar-box{background:rgba(0,0,0,.5);border:1px solid var(--border);border-radius:16px;padding:20px;display:flex;align-items:center;justify-content:center;position:relative;height:140px;overflow:hidden}
.radar-circle{width:80px;height:80px;border-radius:50%;border:1px solid rgba(34,211,238,.3);position:relative;display:flex;align-items:center;justify-content:center}
.radar-circle::before{content:'';position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,transparent 70%,rgba(34,211,238,.5) 100%);animation:spin 2s linear infinite}
.radar-dot{width:8px;height:8px;background:#22d3ee;border-radius:50%;box-shadow:0 0 10px #22d3ee}
@keyframes spin{to{transform:rotate(360deg)}}

/* ═════════ INPUT & FORM ═════════ */
.radio-group{display:flex;flex-direction:column;gap:10px;margin:16px 0}
.radio-label{display:flex;align-items:center;gap:12px;padding:14px;border:1px solid var(--border);border-radius:12px;cursor:pointer;transition:.3s;background:rgba(255,255,255,.02)}
.radio-label:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.3)}
.radio-label input{width:18px;height:18px;accent-color:#fff}
.radio-label span{font-weight:700;font-size:15px;color:#fff}

/* ═════════ SUCCESS ═════════ */
.badge-ok{width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#10b981,#059669);display:grid;place-items:center;color:#fff;font-size:32px;font-weight:900;margin:0 auto 20px;box-shadow:0 0 40px rgba(16,185,129,.5),inset 0 2px 0 rgba(255,255,255,.5)}
.keybox{margin:20px 0;padding:24px;border-radius:16px;border:1px dashed rgba(34,211,238,.5);background:rgba(34,211,238,.05);text-align:center;font-family:'JetBrains Mono',monospace;font-weight:800;font-size:22px;word-break:break-all;color:#22d3ee;cursor:pointer;transition:.3s}
.keybox:hover{background:rgba(34,211,238,.1);border-color:#22d3ee}
.btn-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}

/* ═════════ MISC ═════════ */
.foot{position:relative;z-index:10;margin-top:auto;padding:24px;text-align:center;font-size:12px;color:var(--muted);border-top:1px solid var(--border);background:rgba(8,8,10,.8)}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;

export const COMMON_JS = `
window.__toast=function(msg,type){var t=document.createElement('div');t.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:rgba(20,20,24,.95);color:#fff;padding:12px 24px;border-radius:12px;font-weight:700;font-size:14px;z-index:9999;opacity:0;transition:.3s;border:1px solid '+(type==='ok'?'#10b981':'#ef4444')+';backdrop-filter:blur(10px);box-shadow:0 10px 30px rgba(0,0,0,.8)';t.textContent=msg;document.body.appendChild(t);requestAnimationFrame(()=>{t.style.opacity='1';t.style.transform='translateX(-50%) translateY(-10px)';});setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(-50%) translateY(0)';setTimeout(()=>t.remove(),300);},2500);};
(function(){
  document.addEventListener('click',function(e){
    var c=e.target.closest('[data-copy]');if(!c)return;
    var el=document.getElementById(c.getAttribute('data-copy'));if(!el)return;
    var txt=el.textContent.trim();
    function done(){if(navigator.vibrate)navigator.vibrate(30);window.__toast('Đã sao chép key','ok');}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done,function(){window.__toast('Lỗi','bad')});}
  });
})();`;

export const CHECKPOINT_JS = `(function(){
  var app=document.getElementById('app'),next=app?app.getAttribute('data-next')||'/':'/';
  var term=document.getElementById('terminal'),timerEl=document.getElementById('timer'),help=document.getElementById('helpText'),err=document.getElementById('errorBox'),tsWrap=document.getElementById('tsWrap');
  if(!term||!timerEl)return;
  
  // Log chạy chữ
  var logs=['Khởi tạo kết nối bảo mật TLS 1.3...','Phân tích dấu vết trình duyệt...','Kiểm tra mẫu lưu lượng bất thường...','Đang chờ xác minh Captcha...'],li=0;
  (function print(){if(li>=logs.length)return;var d=document.createElement('div');d.textContent='> '+logs[li];if(li===3)d.className='ok';term.appendChild(d);li++;setTimeout(print,700);})();
  
  // ĐỒNG HỒ ĐẾM GIÂY (Fix)
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
  // TUYẾT RƠI TRẮNG (Fix z-index)
  var c=document.createElement('canvas');c.id='snow-canvas';document.body.appendChild(c);var ctx=c.getContext('2d');
  function size(){c.width=innerWidth;c.height=innerHeight}size();addEventListener('resize',size);
  var flakes=[];
  for(var i=0;i<100;i++)flakes.push({
    x:Math.random()*innerWidth, y:Math.random()*innerHeight,
    r:Math.random()*2+0.5, vy:Math.random()*1+0.5, vx:(Math.random()-0.5)*0.5, o:Math.random()*0.6+0.4
  });
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    for(var i=0;i<flakes.length;i++){
      var p=flakes[i];
      ctx.fillStyle='rgba(255,255,255,'+p.o+')'; // Tuyết trắng
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
      p.y+=p.vy; p.x+=p.vx+Math.sin(p.y/60)*0.5;
      if(p.y>innerHeight+10){p.y=-10;p.x=Math.random()*innerWidth;}
      if(p.x>innerWidth+10)p.x=-10; if(p.x<-10)p.x=innerWidth+10;
    }
    requestAnimationFrame(draw);
  }
  draw();
})();`;
