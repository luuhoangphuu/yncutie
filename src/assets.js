export const CSS = `
:root{--bg:#000000;--glass:rgba(20,20,25,.4);--border:rgba(255,255,255,.1);--text:#ffffff;--muted:#94a3b8;--silver:#e2e8f0;--cyan:#00f0ff;--purple:#7000ff;color-scheme:dark}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased;position:relative;cursor:auto}
body.custom-cursor-active, body.custom-cursor-active a, body.custom-cursor-active button{cursor:none !important}

/* ═════════ $1B CUSTOM CURSOR ═════════ */
.cursor-dot,.cursor-ring{position:fixed;top:0;left:0;transform:translate(-50%,-50%);border-radius:50%;z-index:99999;pointer-events:none;opacity:0;transition:opacity 0.3s}
body.custom-cursor-active .cursor-dot, body.custom-cursor-active .cursor-ring{opacity:1}
.cursor-dot{width:8px;height:8px;background:#fff;mix-blend-mode:difference;transition:transform 0.1s}
.cursor-ring{width:40px;height:40px;border:1px solid rgba(255,255,255,0.5);mix-blend-mode:difference;transition:width 0.2s,height 0.2s,background 0.2s}
.cursor-ring.hover{width:64px;height:64px;background:rgba(255,255,255,0.1);border-color:#fff}

/* ═════════ BACKGROUND EFFECTS ═════════ */
.cyber-grid{position:fixed;bottom:-50vh;left:-50vw;width:200vw;height:100vh;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:80px 80px;transform:perspective(500px) rotateX(60deg);z-index:0;animation:gridMove 10s linear infinite;pointer-events:none}
@keyframes gridMove{0%{background-position:0 0}100%{background-position:0 80px}}
#particle-canvas{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:0.6}
.aurora{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;filter:blur(100px)}
.aurora-blob{position:absolute;width:600px;height:600px;border-radius:50%;opacity:.15;animation:float 20s infinite alternate}
.aurora-blob:nth-child(1){background:var(--cyan);top:-10%;left:-10%}
.aurora-blob:nth-child(2){background:var(--purple);bottom:-10%;right:-10%;animation-delay:-5s}
@keyframes float{0%{transform:translate(0,0) scale(1)}100%{transform:translate(100px,100px) scale(1.2)}}

/* ═════════ CORE UI ═════════ */
a{color:inherit;text-decoration:none}
.nav{position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:100;display:flex;justify-content:space-between;align-items:center;padding:12px 24px;background:rgba(10,10,15,.6);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:99px;width:calc(100% - 40px);max-width:800px;box-shadow:0 10px 30px rgba(0,0,0,.5)}
.logo-text{font-weight:900;font-style:italic;font-size:20px;background:linear-gradient(90deg,#fff,var(--silver));-webkit-background-clip:text;color:transparent;display:flex;align-items:center}
.logo-text svg{width:18px;height:18px;fill:var(--cyan);margin-left:4px;filter:drop-shadow(0 0 10px var(--cyan))}
.nav-links{display:flex;gap:4px}
.nav-links a{color:var(--muted);font-size:13px;font-weight:700;padding:8px 16px;border-radius:99px;transition:.3s}
.nav-links a:hover,.nav-links a.on{color:#000;background:#fff;box-shadow:0 0 20px rgba(255,255,255,0.4)}
.wrap{position:relative;z-index:10;width:100%;max-width:1100px;margin:0 auto;padding:120px clamp(16px,4vw,24px) 60px;flex:1;perspective:1200px}

/* ═════════ $1B GLASS CARDS ═════════ */
.card{position:relative;background:var(--glass);border:1px solid var(--border);border-radius:32px;padding:40px;backdrop-filter:blur(40px) saturate(150%);-webkit-backdrop-filter:blur(40px) saturate(150%);box-shadow:0 30px 60px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.1);transition:transform .2s cubic-bezier(.25,.46,.45,.94),border-color .3s;transform-style:preserve-3d;will-change:transform;overflow:hidden}
.card::before{content:'';position:absolute;inset:0;border-radius:32px;background:radial-gradient(1000px circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,.08),transparent 40%);opacity:0;transition:opacity .3s;pointer-events:none;z-index:0}
.card:hover::before{opacity:1}
.card:hover{border-color:rgba(255,255,255,.3)}
.card>*{position:relative;z-index:1;transform:translateZ(40px)}

/* ═════════ MAGNETIC & GLOW BUTTONS ═════════ */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:16px 32px;border-radius:99px;font-size:15px;font-weight:900;transition:all .3s;text-decoration:none;border:none;font-family:inherit;overflow:hidden}
.btn-primary{width:100%;background:#fff;color:#000;box-shadow:0 0 40px rgba(255,255,255,.3);min-height:60px;font-size:16px;letter-spacing:.05em;}
.btn-primary::after{content:'';position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent);transform:skewX(-20deg);transition:left .5s}
.btn-primary:hover::after{left:150%}
.btn-primary:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 10px 50px rgba(255,255,255,.5)}
.btn-secondary{background:rgba(255,255,255,.05);color:#fff;border:1px solid var(--border);}
.btn-secondary:hover{background:rgba(255,255,255,.1);border-color:#fff;transform:translateY(-2px)}

/* ═════════ CHECKPOINT (NASA ROOM) ═════════ */
.checkpoint-layout{display:grid;grid-template-columns:1.1fr .9fr;gap:32px;align-items:stretch}
@media(max-width:900px){.checkpoint-layout{grid-template-columns:1fr}}
.ckpt-left{background:var(--glass);border:1px solid var(--border);border-radius:32px;padding:48px;backdrop-filter:blur(40px);box-shadow:0 20px 40px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.1);display:flex;flex-direction:column;justify-content:center}
.ckpt-left h1{font-size:clamp(36px,5vw,52px);font-weight:900;line-height:1.1;color:#fff;margin-bottom:20px;letter-spacing:-.03em;}
.ckpt-left .lead{color:var(--muted);font-size:16px;margin-bottom:40px}
.ts-box{background:rgba(0,0,0,.6);border:1px solid var(--border);border-radius:24px;padding:40px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:32px;box-shadow:inset 0 0 40px rgba(0,0,0,.8);transition:.4s}
.ts-box.active{border-color:var(--cyan);box-shadow:inset 0 0 40px rgba(0,0,0,.8), 0 0 40px rgba(0,240,255,.2)}
.ts-box.success{border-color:#10b981;box-shadow:inset 0 0 40px rgba(0,0,0,.8), 0 0 40px rgba(16,185,129,.3)}
.ts-help{font-size:14px;color:var(--muted);text-align:center;}
.ts-help strong{color:#fff}

.ckpt-right{display:flex;flex-direction:column;gap:20px}
.telemetry-card{background:var(--glass);border:1px solid var(--border);border-radius:24px;padding:28px;backdrop-filter:blur(30px);position:relative;overflow:hidden}
.telemetry-label{font-size:13px;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px;display:block}
.telemetry-value{font-family:'JetBrains Mono',monospace;font-size:36px;font-weight:900;color:#fff;text-shadow:0 0 30px rgba(255,255,255,.4)}

/* Neon Radar */
.radar-container{position:relative;width:100px;height:100px;margin:0 auto}
.radar-ring{position:absolute;inset:0;border:1px solid rgba(0,240,255,0.2);border-radius:50%}
.radar-ring:nth-child(2){inset:20px}
.radar-ring:nth-child(3){inset:40px}
.radar-sweep{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,transparent 70%,rgba(0,240,255,0.6) 100%);animation:spin 2s linear infinite}
@keyframes spin{100%{transform:rotate(360deg)}}

/* ═════════ HOME UI (BENTO) ═════════ */
h1.hero-title{font-size:clamp(40px,7vw,72px);font-weight:900;line-height:1.05;letter-spacing:-.04em;background:linear-gradient(180deg,#fff 0%,#94a3b8 100%);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 10px 20px rgba(0,0,0,0.5))}
.radio-group{display:flex;flex-direction:column;gap:12px;margin:24px 0}
.radio-label{display:flex;align-items:center;gap:16px;padding:20px;border:1px solid var(--border);border-radius:20px;transition:.3s;background:rgba(255,255,255,.02)}
.radio-label:hover{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.3);transform:translateX(6px)}
.radio-label input{width:22px;height:22px;accent-color:#fff}
.radio-label span{font-weight:800;font-size:16px;color:#fff}
.link-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:24px}
.foot{position:relative;z-index:10;margin-top:auto;padding:32px;text-align:center;font-size:13px;color:var(--muted);border-top:1px solid var(--border);background:rgba(0,0,0,.4);font-weight:600}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
`;

export const COMMON_JS = `
document.addEventListener('DOMContentLoaded', function() {
  try {
    // CURSOR FIXED
    var dot = document.querySelector('.cursor-dot');
    var ring = document.querySelector('.cursor-ring');
    if (dot && ring && window.matchMedia('(pointer: fine)').matches) {
      document.body.classList.add('custom-cursor-active');
      var mx = 0, my = 0, rx = 0, ry = 0;
      window.addEventListener('mousemove', function(e) {
        mx = e.clientX; my = e.clientY;
        dot.style.transform = 'translate(' + mx + 'px, ' + my + 'px) translate(-50%,-50%)';
      });
      function renderRing() {
        rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
        ring.style.transform = 'translate(' + rx + 'px, ' + ry + 'px) translate(-50%,-50%)';
        requestAnimationFrame(renderRing);
      }
      renderRing();
      document.querySelectorAll('a, button, .radio-label').forEach(function(el) {
        el.addEventListener('mouseenter', function() { ring.classList.add('hover'); });
        el.addEventListener('mouseleave', function() { ring.classList.remove('hover'); });
      });
    }

    // MAGNETIC BUTTONS
    document.querySelectorAll('.btn').forEach(function(btn) {
      btn.addEventListener('mousemove', function(e) {
        var r = btn.getBoundingClientRect(), x = e.clientX - r.left - r.width/2, y = e.clientY - r.top - r.height/2;
        btn.style.transform = 'translate(' + x*0.2 + 'px,' + y*0.2 + 'px)';
      });
      btn.addEventListener('mouseleave', function() { btn.style.transform = 'translate(0,0)'; });
    });

    // 3D PARALLAX
    document.querySelectorAll('.card').forEach(function(card) {
      card.addEventListener('mousemove', function(e) {
        var r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
        card.style.transform = 'perspective(1200px) rotateX(' + ((y-r.height/2)/r.height)*-4 + 'deg) rotateY(' + ((x-r.width/2)/r.width)*4 + 'deg)';
        card.style.setProperty('--mx', x+'px'); card.style.setProperty('--my', y+'px');
      });
      card.addEventListener('mouseleave', function() { card.style.transform = ''; });
    });

    // TEXT SCRAMBLE
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
    document.querySelectorAll('.scramble').forEach(function(el) {
      var orig = el.innerText;
      el.addEventListener('mouseover', function() {
        var iter = 0;
        var intv = setInterval(function() {
          el.innerText = orig.split("").map(function(l, i) {
            if(i < iter) return orig[i];
            return letters[Math.floor(Math.random()*letters.length)];
          }).join("");
          if(iter >= orig.length) clearInterval(intv);
          iter += 1/2;
        }, 30);
      });
    });
  } catch(e) { console.warn('Cursor/UI script failed', e); }
});

window.__toast=function(msg){var t=document.createElement('div');t.style.cssText='position:fixed;bottom:32px;left:50%;transform:translateX(-50%);background:rgba(255,255,255,.1);color:#fff;padding:16px 32px;border-radius:99px;font-weight:800;font-size:14px;z-index:99999;backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.2);box-shadow:0 10px 40px rgba(0,0,0,.8);transition:opacity .3s';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>{t.style.opacity='0';setTimeout(()=>t.remove(),300)},2500);};
document.addEventListener('click',function(e){
  var c=e.target.closest('[data-copy]');if(!c)return;
  var el=document.getElementById(c.getAttribute('data-copy'));if(!el)return;
  if(navigator.clipboard) navigator.clipboard.writeText(el.textContent.trim()).then(function(){ window.__toast('Đã sao chép key'); });
});
`;

export const CHECKPOINT_JS = `(function(){
  var t0=performance.now(), timer=document.getElementById('timer');
  if(timer) setInterval(function(){timer.innerHTML=((performance.now()-t0)/1000).toFixed(2)+'<small>s</small>';}, 50);

  var busy=false;
  window.onTurnstileError=function(){ document.getElementById('errorBox').style.display='block'; document.getElementById('errorBox').textContent='Lỗi Captcha'; };
  window.onTurnstileSuccess=function(token){
    if(busy)return;busy=true;
    document.getElementById('tsWrap').classList.add('active');
    document.getElementById('helpText').innerHTML='<strong>Đang xác minh...</strong>';
    fetch('/api/verify-bot',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:token})})
      .then(r=>r.json()).then(d=>{
        if(d&&d.success){ document.getElementById('tsWrap').className='ts-box success'; document.getElementById('helpText').innerHTML='<strong style="color:#10b981">✓ Thành công! Đang chuyển...</strong>'; setTimeout(()=>location.href=document.getElementById('app').getAttribute('data-next'),600); }
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
    function init() {
        pw = pc.width = window.innerWidth; ph = pc.height = window.innerHeight; particles = [];
        for (var i = 0; i < 80; i++) particles.push({ x: Math.random()*pw, y: Math.random()*ph, vx:(Math.random()-0.5)*0.5, vy:(Math.random()-0.5)*0.5, r: Math.random()*1.5+0.5 });
    }
    function draw() {
        pctx.clearRect(0, 0, pw, ph);
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i]; p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > pw) p.vx *= -1; if (p.y < 0 || p.y > ph) p.vy *= -1;
            pctx.beginPath(); pctx.fillStyle = 'rgba(255,255,255,0.4)'; pctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); pctx.fill();
            for (var j = i + 1; j < particles.length; j++) {
                var p2 = particles[j], dx = p.x - p2.x, dy = p.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 180) { pctx.beginPath(); pctx.strokeStyle = 'rgba(255,255,255,' + (1 - dist/180) * 0.15 + ')'; pctx.lineWidth = 1; pctx.moveTo(p.x, p.y); pctx.lineTo(p2.x, p2.y); pctx.stroke(); }
            }
        }
        requestAnimationFrame(draw);
    }
    window.addEventListener('resize', init); init(); draw();
  } catch(e) {}
})();`;
