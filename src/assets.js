export const CSS = `
:root{--bg:#07070b;--card:rgba(255,255,255,.035);--card-hi:rgba(255,255,255,.065);--line:rgba(255,255,255,.09);--text:#f4f4f7;--muted:#9a9aab;--a1:#8b5cf6;--a2:#22d3ee;--ok:#10b981;--warn:#f59e0b;--bad:#ef4444;--mx:50%;--my:0%;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased}
.bg-grid{position:fixed;inset:0;z-index:-2;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:44px 44px;-webkit-mask-image:radial-gradient(circle at 50% 30%,#000 15%,transparent 75%);mask-image:radial-gradient(circle at 50% 30%,#000 15%,transparent 75%)}
.bg-glow{position:fixed;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(600px circle at var(--mx) var(--my),rgba(139,92,246,.10),transparent 60%),radial-gradient(900px circle at 85% -10%,rgba(34,211,238,.07),transparent 55%)}
a{color:inherit}
.nav{position:sticky;top:0;z-index:20;display:flex;justify-content:space-between;align-items:center;gap:12px;padding:14px clamp(16px,4vw,40px);background:rgba(7,7,11,.72);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(--line)}
.logo{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:.14em;font-size:14px;text-decoration:none}
.logo i{width:11px;height:11px;border-radius:3px;background:linear-gradient(135deg,var(--a1),var(--a2));box-shadow:0 0 14px rgba(139,92,246,.6)}
.nav-links{display:flex;align-items:center;gap:4px}
.nav-links a{color:var(--muted);text-decoration:none;font-size:14px;font-weight:600;padding:8px 12px;border-radius:10px;transition:.2s}
.nav-links a:hover,.nav-links a.on{color:var(--text);background:var(--card-hi)}
.pill{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;padding:6px 12px;border-radius:99px;border:1px solid var(--line);background:var(--card)}
.dot{width:7px;height:7px;border-radius:50%;background:var(--ok);box-shadow:0 0 10px var(--ok);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
.wrap{width:100%;max-width:1080px;margin:0 auto;padding:clamp(28px,6vw,64px) clamp(16px,4vw,32px);flex:1}
.wrap.narrow{max-width:620px}
.hero{text-align:center;margin-bottom:34px}
.hero .pill{margin-bottom:18px}
h1{font-size:clamp(30px,6vw,52px);font-weight:800;line-height:1.1;letter-spacing:-.03em}
h1 em{font-style:normal;background:linear-gradient(90deg,var(--a1),var(--a2));-webkit-background-clip:text;background-clip:text;color:transparent}
h2{font-size:22px;font-weight:800;letter-spacing:-.02em}
.lead{color:var(--muted);max-width:560px;margin:14px auto 0;font-size:16px}
.card{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:clamp(20px,4vw,30px);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 20px 50px rgba(0,0,0,.35)}
.card+.card{margin-top:16px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
@media(max-width:760px){.grid2,.grid3{grid-template-columns:1fr}.nav-links a.hide-m{display:none}}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:14px 20px;border:0;border-radius:14px;font:inherit;font-weight:700;font-size:15px;color:#fff;text-decoration:none;cursor:pointer;transition:transform .15s,box-shadow .2s,opacity .2s}
.btn:hover{transform:translateY(-1px)}
.btn:active{transform:translateY(0)}
.btn:disabled{opacity:.45;cursor:not-allowed;transform:none}
.btn:focus-visible,input:focus-visible,textarea:focus-visible,summary:focus-visible{outline:2px solid var(--a2);outline-offset:2px}
.btn-primary{background:linear-gradient(135deg,var(--a1),#6366f1 55%,var(--a2));box-shadow:0 10px 28px rgba(99,102,241,.35)}
.btn-yt{background:#e11d2e;box-shadow:0 10px 28px rgba(225,29,46,.28)}
.btn-warn{background:linear-gradient(135deg,#f59e0b,#ef7d0b);box-shadow:0 10px 28px rgba(245,158,11,.28)}
.btn-ghost{background:var(--card-hi);border:1px solid var(--line)}
.btn+.btn,.btn+form,form+.btn{margin-top:12px}
.meter{margin-top:6px}
.meter-top{display:flex;justify-content:space-between;font-size:13px;font-weight:600;color:var(--muted);margin-bottom:8px}
.meter-top b{color:var(--text)}
.bar-track{height:8px;border-radius:99px;background:rgba(255,255,255,.07);overflow:hidden}
.bar-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,var(--a1),var(--a2))}
.tiers{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:22px 0}
@media(max-width:520px){.tiers{grid-template-columns:1fr}}
.tier{position:relative;display:block;cursor:pointer}
.tier input{position:absolute;opacity:0;inset:0}
.tier-body{display:block;border:1px solid var(--line);border-radius:16px;padding:16px;background:rgba(255,255,255,.02);transition:.2s;height:100%}
.tier-body b{display:block;font-size:16px}
.tier-body small{color:var(--muted);font-size:13px}
.tier:hover .tier-body{background:var(--card-hi)}
.tier input:checked+.tier-body{border-color:var(--a1);background:rgba(139,92,246,.12);box-shadow:0 0 0 3px rgba(139,92,246,.18)}
.tier input:focus-visible+.tier-body{outline:2px solid var(--a2);outline-offset:2px}
.feat{display:flex;gap:12px;align-items:flex-start}
.feat .ico{flex:none;width:38px;height:38px;border-radius:12px;display:grid;place-items:center;background:var(--card-hi);border:1px solid var(--line);font-weight:800}
.feat b{display:block;font-size:15px}
.feat span{font-size:13px;color:var(--muted)}
.alert{display:flex;gap:10px;padding:13px 16px;border-radius:14px;font-size:14px;font-weight:600;margin-bottom:18px;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.4);color:#fca5a5}
.notice{border:1px solid rgba(245,158,11,.35);background:rgba(245,158,11,.07);border-radius:18px;padding:16px 20px;margin-bottom:22px}
.notice h3{font-size:13px;letter-spacing:.08em;color:var(--warn);margin-bottom:6px}
.notice p{white-space:pre-line;font-size:14px;color:#e8dcc4}
.stepper{display:flex;justify-content:space-between;gap:8px;list-style:none;margin-bottom:22px}
.stepper li{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;font-size:12px;font-weight:700;color:var(--muted);position:relative}
.stepper li b{width:32px;height:32px;border-radius:50%;display:grid;place-items:center;border:1px solid var(--line);background:var(--card);font-size:13px;position:relative;z-index:1}
.stepper li+li::before{content:'';position:absolute;top:16px;right:50%;width:100%;height:2px;background:var(--line)}
.stepper li.done+li::before,.stepper li.on::before{background:linear-gradient(90deg,var(--a1),var(--a2))}
.stepper li.on{color:var(--text)}
.stepper li.on b{background:linear-gradient(135deg,var(--a1),var(--a2));border-color:transparent;color:#fff;box-shadow:0 0 18px rgba(139,92,246,.5)}
.stepper li.done b{background:var(--ok);border-color:transparent;color:#fff}
.center{text-align:center}
.muted{color:var(--muted);font-size:14px}
.mt{margin-top:18px}
.keybox{margin:20px 0;padding:22px;border-radius:16px;border:1.5px dashed rgba(139,92,246,.55);background:rgba(139,92,246,.07);text-align:center;font-family:'JetBrains Mono',ui-monospace,monospace;font-weight:700;font-size:clamp(15px,4vw,20px);word-break:break-all;user-select:all}
.badge-ok{display:inline-grid;place-items:center;width:56px;height:56px;border-radius:50%;background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.5);color:var(--ok);font-size:26px;margin-bottom:12px}
details{border:1px solid var(--line);border-radius:14px;background:var(--card);padding:0 18px}
details+details{margin-top:10px}
summary{cursor:pointer;list-style:none;padding:16px 0;font-weight:700;font-size:15px;display:flex;justify-content:space-between;gap:12px}
summary::-webkit-details-marker{display:none}
summary::after{content:'+';color:var(--muted);font-weight:800}
details[open] summary::after{content:'–'}
details p{padding:0 0 16px;color:var(--muted);font-size:14px}
.foot{padding:26px 20px;text-align:center;font-size:13px;color:var(--muted);border-top:1px solid var(--line)}
.errcode{font-size:72px;font-weight:800;line-height:1;background:linear-gradient(135deg,var(--a1),var(--a2));-webkit-background-clip:text;background-clip:text;color:transparent}
label.f{display:block;font-size:13px;font-weight:700;color:var(--muted);margin:14px 0 6px}
input[type=password],input[type=text],textarea{width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--line);background:rgba(0,0,0,.35);color:var(--text);font:inherit}
textarea{min-height:140px;resize:vertical}
.row{display:flex;gap:10px;align-items:center}
.row .btn{margin:0}
.status{margin-top:14px;font-size:14px;font-weight:600;min-height:20px}
.status.ok{color:var(--ok)}.status.bad{color:#fca5a5}
.chk{display:flex;align-items:center;gap:10px;font-weight:600;font-size:14px;margin-top:14px}
.cp{display:grid;grid-template-columns:1.05fr .95fr;gap:36px;align-items:center}
@media(max-width:900px){.cp{grid-template-columns:1fr;gap:26px}}
.term{background:#000;border:1px solid var(--line);border-radius:16px;padding:16px 18px;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:13px;height:132px;overflow:hidden;margin:22px 0;display:flex;flex-direction:column;gap:6px}
.term div{color:var(--muted)}.term div.ok{color:var(--ok)}
.ts{display:flex;justify-content:center;margin:6px 0 16px;min-height:65px}
.err{display:none;margin-top:14px;padding:12px;border-radius:12px;font-size:14px;font-weight:600;text-align:center;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.45);color:#fca5a5}
.dash-v{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:38px;font-weight:700}
.dash-v small{font-size:16px;color:var(--muted);margin-left:4px}
.dash-t{font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:6px}
.wave{display:flex;align-items:flex-end;gap:3px;height:54px;margin-top:14px}
.wave i{flex:1;background:rgba(255,255,255,.14);border-radius:3px;transition:height .2s,background .2s}
.wave i.hi{background:var(--a2)}
.radar{display:flex;gap:20px;align-items:center}
.rd{position:relative;flex:none;width:92px;height:92px;border-radius:50%;border:1px solid var(--line);background:#000;overflow:hidden}
.rd::before{content:'';position:absolute;inset:18%;border-radius:50%;border:1px solid rgba(255,255,255,.1)}
.rd::after{content:'';position:absolute;inset:0;background:conic-gradient(from 0deg,transparent 0%,rgba(34,211,238,.45) 14%,transparent 14.2%);animation:spin 2.4s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.rd i{position:absolute;width:5px;height:5px;border-radius:50%;background:#fff;box-shadow:0 0 8px #fff;z-index:2}
.stats{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--line);border-radius:16px;overflow:hidden}
.stats div{padding:14px;text-align:center;background:rgba(255,255,255,.03);border-right:1px solid var(--line)}
.stats div:last-child{border-right:0}
.stats small{display:block;font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase}
.stats b{font-size:14px}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
`;

export const COMMON_JS = `
(function(){
  var r=document.documentElement;
  window.addEventListener('pointermove',function(e){r.style.setProperty('--mx',e.clientX+'px');r.style.setProperty('--my',e.clientY+'px');},{passive:true});
  document.addEventListener('click',function(e){
    var b=e.target.closest('[data-copy]'); if(!b) return;
    var el=document.getElementById(b.getAttribute('data-copy')); if(!el) return;
    var txt=el.textContent.trim(), old=b.textContent;
    function done(){b.textContent='Đã sao chép ✓';setTimeout(function(){b.textContent=old;},1800);}
    function fallback(){var t=document.createElement('textarea');t.value=txt;document.body.appendChild(t);t.select();try{document.execCommand('copy');done();}catch(_){}t.remove();}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done,fallback);}else{fallback();}
  });
})();`;

export const STEP1_JS = `
(function(){
  var l=document.getElementById('ytLink'), b=document.getElementById('confirmBtn');
  if(!l||!b) return;
  var started=false;
  l.addEventListener('click',function(){
    if(started) return; started=true;
    var n=5; b.textContent='Xác nhận sau '+n+'s';
    var t=setInterval(function(){
      n--;
      if(n<=0){clearInterval(t);b.disabled=false;b.textContent='Tôi đã ủng hộ kênh';}
      else{b.textContent='Xác nhận sau '+n+'s';}
    },1000);
  });
})();`;

export const CHECKPOINT_JS = `
(function(){
  var app=document.getElementById('app');
  var next=app.getAttribute('data-next')||'/';
  if(next.charAt(0)!=='/'||next.charAt(1)==='/') next='/';
  var term=document.getElementById('terminal'), timerEl=document.getElementById('timer'),
      help=document.getElementById('helpText'), err=document.getElementById('errorBox'), wave=document.getElementById('wave');

  var i, bars=[];
  for(i=0;i<36;i++){var b=document.createElement('i');b.style.height='18%';wave.appendChild(b);bars.push(b);}
  setInterval(function(){
    for(var k=0;k<bars.length;k++){
      var on=k>bars.length-12&&Math.random()>.3;
      bars[k].style.height=(on?(20+Math.random()*80):(10+Math.random()*25))+'%';
      bars[k].className=on?'hi':'';
    }
  },180);

  var logs=['Khởi tạo kết nối TLS 1.3...','Phân tích dấu vết trình duyệt...','Quét mẫu lưu lượng bất thường...','Đang chờ xác minh Captcha...'];
  var li=0;
  (function print(){
    if(li>=logs.length) return;
    var d=document.createElement('div'); d.textContent='> '+logs[li];
    if(li===logs.length-1) d.className='ok';
    term.appendChild(d); li++; setTimeout(print,750);
  })();

  var t0=performance.now(), tick=setInterval(function(){
    timerEl.innerHTML=((performance.now()-t0)/1000).toFixed(2)+'<small>s</small>';
  },50);

  var busy=false;
  function fail(msg){
    busy=false;
    err.style.display='block'; err.textContent=msg;
    if(window.turnstile){try{turnstile.reset();}catch(_){}}
  }
  window.onTurnstileError=function(){fail('Không tải được Captcha. Hãy tắt VPN/adblock rồi tải lại trang.');};
  window.onTurnstileExpired=function(){if(window.turnstile){try{turnstile.reset();}catch(_){}}};
  window.onTurnstileSuccess=function(token){
    if(busy) return; busy=true; err.style.display='none';
    fetch('/api/verify-bot',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:token})})
      .then(function(r){return r.json().catch(function(){return {success:false,error:'Máy chủ phản hồi không hợp lệ ('+r.status+').'};});})
      .then(function(d){
        if(d&&d.success){
          clearInterval(tick);
          help.innerHTML='<b style="color:#10b981">Xác minh thành công! Đang chuyển hướng...</b>';
          setTimeout(function(){location.href=next;},500);
        } else { fail((d&&d.error)||'Xác minh thất bại, hãy thử lại.'); }
      })
      .catch(function(){fail('Lỗi mạng. Hãy kiểm tra kết nối và thử lại.');});
  };
})();`;

export const ADMIN_JS = `
(function(){
  var $=function(id){return document.getElementById(id);};
  var st=$('status');
  function say(m,ok){st.textContent=m;st.className='status '+(ok?'ok':'bad');}
  function call(body){
    return fetch('/api/admin/notice',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)})
      .then(function(r){return r.json();});
  }
  $('loadBtn').addEventListener('click',function(){
    say('Đang tải...',true);
    call({password:$('pw').value,action:'get'}).then(function(d){
      if(!d.success){say(d.error||'Lỗi.',false);return;}
      $('en').checked=!!d.notice.enabled; $('tt').value=d.notice.title||''; $('ct').value=d.notice.content||'';
      $('editor').style.display='block'; say('Đã tải thông báo hiện tại.',true);
    }).catch(function(){say('Lỗi mạng.',false);});
  });
  $('saveBtn').addEventListener('click',function(){
    say('Đang lưu...',true);
    call({password:$('pw').value,action:'save',notice:{enabled:$('en').checked,title:$('tt').value,content:$('ct').value}})
      .then(function(d){say(d.success?'Đã lưu thành công ✓':(d.error||'Lỗi.'),!!d.success);})
      .catch(function(){say('Lỗi mạng.',false);});
  });
})();`;
