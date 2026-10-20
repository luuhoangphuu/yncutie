export const CSS = `
/* ============ TITANIUM DESIGN TOKENS ============ */
:root{
  --bg:#0a0b0d;
  --bg-2:#101216;
  --surface:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.022));
  --surface-solid:#14161a;
  --field:rgba(0,0,0,.38);
  --border:rgba(255,255,255,.09);
  --border-strong:rgba(255,255,255,.2);
  --text:#f5f6f8;
  --muted:#9ba1ab;
  --dim:#6c727d;
  --silver:#d3d7de;
  --accent:#e7eaee;
  --ok:#86d8aa;
  --warn:#e3b96f;
  --danger:#f19a9a;
  --metal:linear-gradient(135deg,#ffffff 0%,#dfe2e7 30%,#a4abb6 62%,#eceff3 100%);
  --metal-text:linear-gradient(180deg,#ffffff 0%,#cfd4db 55%,#8f97a3 100%);
  --hairline:inset 0 1px 0 rgba(255,255,255,.09);
  --shadow:0 24px 48px -24px rgba(0,0,0,.85),0 2px 6px rgba(0,0,0,.35);
  --r-lg:24px;--r-md:16px;--r-sm:12px;
  color-scheme:dark;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Manrope','Inter',system-ui,-apple-system,'Segoe UI',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;display:flex;flex-direction:column;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased;position:relative;font-feature-settings:'cv11','ss01'}
a{color:inherit;text-decoration:none}
:focus-visible{outline:2px solid var(--silver);outline-offset:3px;border-radius:8px}
::selection{background:rgba(231,234,238,.28)}

/* ============ BACKGROUND (quiet brushed-metal atmosphere) ============ */
.bg-glow{position:fixed;inset:0;z-index:0;pointer-events:none;
  background:
    radial-gradient(900px 520px at 50% -8%,rgba(214,219,228,.16),transparent 70%),
    radial-gradient(700px 480px at 100% 100%,rgba(150,160,175,.09),transparent 70%),
    radial-gradient(600px 420px at 0% 70%,rgba(255,255,255,.04),transparent 70%)}
.bg-grid{position:fixed;inset:0;z-index:0;pointer-events:none;
  background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
  background-size:64px 64px;
  -webkit-mask-image:radial-gradient(ellipse 70% 55% at 50% 0%,#000 20%,transparent 75%);
  mask-image:radial-gradient(ellipse 70% 55% at 50% 0%,#000 20%,transparent 75%)}
#snow-canvas{position:fixed;inset:0;width:100%;height:100%;z-index:20;pointer-events:none}
.spot{position:fixed;inset:0;z-index:1;pointer-events:none;
  background:radial-gradient(420px circle at var(--px,50%) var(--py,-20%),rgba(255,255,255,.055),transparent 70%)}

/* ============ NAV ============ */
.nav{position:fixed;top:max(16px,env(safe-area-inset-top));left:50%;transform:translateX(-50%);z-index:100;display:flex;justify-content:space-between;align-items:center;padding:8px 8px 8px 22px;background:rgba(16,18,22,.62);backdrop-filter:blur(24px) saturate(140%);-webkit-backdrop-filter:blur(24px) saturate(140%);border:1px solid var(--border);border-radius:99px;width:calc(100% - 32px);max-width:720px;box-shadow:var(--shadow),var(--hairline)}
.logo-text{font-weight:800;font-size:18px;letter-spacing:-.02em;display:flex;align-items:center;gap:8px;background:var(--metal-text);-webkit-background-clip:text;background-clip:text;color:transparent}
.logo-text svg{width:18px;height:18px;fill:var(--silver);flex:none}
.nav-links{display:flex;gap:2px}
.nav-links a{color:var(--muted);font-size:13px;font-weight:600;padding:9px 18px;border-radius:99px;transition:color .2s,background .2s}
.nav-links a:hover{color:var(--text);background:rgba(255,255,255,.06)}
.nav-links a.on{color:#0b0c0e;background:var(--metal);box-shadow:0 1px 0 rgba(255,255,255,.6) inset,0 6px 16px -6px rgba(255,255,255,.35)}

/* ============ LAYOUT ============ */
.wrap{position:relative;z-index:10;width:100%;max-width:1120px;margin:0 auto;padding:128px clamp(16px,4vw,28px) 72px;flex:1}
.wrap.narrow{max-width:680px}
.center{text-align:center}

/* ============ SURFACES ============ */
.bento-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:28px}
.bento-item,.panel,.hud-container,.admin-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);box-shadow:var(--shadow),var(--hairline);position:relative;overflow:hidden}
.bento-item{padding:28px;display:flex;flex-direction:column;justify-content:space-between;transition:border-color .25s,transform .25s}
.bento-item:hover{border-color:var(--border-strong)}
.bento-item.col-span-2{grid-column:span 2}
.bento-item.col-span-4{grid-column:span 4}
.bento-item::before,.panel::before,.hud-container::before{content:'';position:absolute;inset:0;border-radius:inherit;background:radial-gradient(560px circle at var(--mx,50%) var(--my,0%),rgba(255,255,255,.06),transparent 45%);opacity:0;transition:opacity .3s;pointer-events:none;z-index:0}
.bento-item:hover::before,.panel:hover::before,.hud-container:hover::before{opacity:1}
.bento-item>*,.panel>*,.hud-container>*{position:relative;z-index:1}
@media(max-width:900px){.bento-grid{grid-template-columns:1fr}.bento-item.col-span-2,.bento-item.col-span-4{grid-column:span 1}}

/* ============ TYPOGRAPHY ============ */
h1.hero-title{font-size:clamp(44px,7vw,76px);font-weight:800;line-height:1.02;letter-spacing:-.045em;margin-bottom:14px;background:linear-gradient(100deg,#8f97a3 0%,#ffffff 22%,#c9ced6 42%,#8f97a3 60%,#f2f4f7 82%,#a9b0bb 100%);background-size:240% 100%;background-position:100% 0;-webkit-background-clip:text;background-clip:text;color:transparent;animation:sheen 2.8s cubic-bezier(.2,.7,.2,1) .2s 1 forwards}
@keyframes sheen{to{background-position:0 0}}
.hero-sub{color:var(--muted);font-size:17px;max-width:560px;margin-bottom:8px;min-height:56px}
.typewriter::after{content:'';display:inline-block;width:2px;height:1em;background:var(--silver);margin-left:3px;vertical-align:-2px;animation:blink 1.1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}
h2{font-size:19px;font-weight:700;margin-bottom:14px;color:var(--text);letter-spacing:-.015em}
h3{font-weight:700;letter-spacing:-.01em}

/* ============ BUTTONS ============ */
.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 26px;border-radius:14px;font-size:14px;font-weight:700;letter-spacing:-.005em;transition:transform .2s,box-shadow .2s,background .2s,border-color .2s,color .2s;text-decoration:none;border:1px solid transparent;font-family:inherit;overflow:hidden;cursor:pointer}
.btn:active{transform:scale(.98)}
.btn-primary{width:100%;min-height:54px;background:var(--metal);color:#0b0c0e;border-color:rgba(255,255,255,.55);box-shadow:0 1px 0 rgba(255,255,255,.8) inset,0 -1px 0 rgba(0,0,0,.12) inset,0 14px 30px -14px rgba(255,255,255,.35)}
.btn-primary:hover{transform:translateY(-1px);box-shadow:0 1px 0 rgba(255,255,255,.9) inset,0 -1px 0 rgba(0,0,0,.12) inset,0 18px 36px -14px rgba(255,255,255,.5)}
.btn-secondary{background:rgba(255,255,255,.035);color:var(--text);border-color:var(--border);box-shadow:var(--hairline)}
.btn-secondary:hover{background:rgba(255,255,255,.075);border-color:var(--border-strong)}
.btn-download{width:100%;min-height:48px;font-size:13.5px;border-radius:12px;background:rgba(255,255,255,.06);color:var(--text);border-color:var(--border-strong);box-shadow:var(--hairline)}
.btn-download:hover{background:var(--metal);color:#0b0c0e;border-color:rgba(255,255,255,.6)}
.btn-tele{width:100%;min-height:48px;font-size:14px;border-radius:12px;background:rgba(255,255,255,.04);color:var(--text);border-color:var(--border-strong);box-shadow:var(--hairline)}
.btn-tele:hover{background:rgba(255,255,255,.09)}
.ripple{position:absolute;border-radius:50%;background:rgba(255,255,255,.28);transform:scale(0);animation:rippleAnim .55s ease-out;pointer-events:none}
.btn-primary .ripple{background:rgba(0,0,0,.14)}
@keyframes rippleAnim{to{transform:scale(4);opacity:0}}

/* ============ STEPPER ============ */
.stepper-wrap{display:flex;align-items:flex-start;margin:4px 0 22px}
.step{flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;position:relative;font-size:12px;font-weight:600;color:var(--dim);text-align:center}
.step::before{content:'';position:absolute;top:15px;right:50%;width:100%;height:1px;background:var(--border)}
.step:first-child::before{display:none}
.step-num{position:relative;z-index:1;width:31px;height:31px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;background:var(--surface-solid);border:1px solid var(--border);color:var(--dim)}
.step.active{color:var(--text)}
.step.active .step-num{background:var(--metal);color:#0b0c0e;border-color:rgba(255,255,255,.6);box-shadow:0 0 0 5px rgba(255,255,255,.07)}
.step.done{color:var(--silver)}
.step.done::before,.step.active::before{background:linear-gradient(90deg,rgba(255,255,255,.5),rgba(255,255,255,.25))}
.step.done .step-num{background:rgba(255,255,255,.1);color:var(--text);border-color:var(--border-strong)}

/* ============ FORM ============ */
.radio-group{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px}
@media(max-width:480px){.radio-group{grid-template-columns:1fr}}
.radio-label{display:block;cursor:pointer}
.radio-label input{position:absolute;opacity:0;pointer-events:none}
.radio-label span{display:flex;align-items:center;gap:12px;padding:14px 16px;border:1px solid var(--border);border-radius:var(--r-sm);background:var(--field);font-size:13.5px;font-weight:600;color:var(--muted);transition:border-color .2s,background .2s,color .2s}
.radio-label span::before{content:'';flex:none;width:16px;height:16px;border-radius:50%;border:1.5px solid var(--dim);transition:border-color .2s,box-shadow .2s,background .2s}
.radio-label:hover span{border-color:var(--border-strong);color:var(--text)}
.radio-label input:checked+span{border-color:rgba(255,255,255,.5);background:rgba(255,255,255,.06);color:var(--text)}
.radio-label input:checked+span::before{border-color:#fff;background:#fff;box-shadow:inset 0 0 0 3.5px #14161a}
.radio-label input:focus-visible+span{outline:2px solid var(--silver);outline-offset:2px}
.input-group{margin-bottom:18px;text-align:left}
.input-group label{display:block;font-size:13px;font-weight:600;color:var(--muted);margin-bottom:8px}
.input-group input,.input-group textarea{width:100%;padding:14px 16px;border-radius:var(--r-sm);background:var(--field);border:1px solid var(--border);color:var(--text);font:inherit;font-size:14px;transition:border-color .2s,box-shadow .2s}
.input-group textarea{min-height:140px;resize:vertical}
.input-group input:focus,.input-group textarea:focus{outline:none;border-color:rgba(255,255,255,.5);box-shadow:0 0 0 4px rgba(255,255,255,.07)}
.input-group ::placeholder{color:var(--dim)}
.admin-card{max-width:560px;margin:0 auto;padding:40px 36px}

/* ============ CHECKPOINT ============ */
.checkpoint-layout{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:stretch;max-width:1000px;margin:0 auto}
@media(max-width:850px){.checkpoint-layout{grid-template-columns:1fr}}
.panel{padding:40px;display:flex;flex-direction:column;justify-content:center}
.panel-title{font-size:clamp(30px,4vw,42px);font-weight:800;line-height:1.1;letter-spacing:-.035em;color:var(--text);margin-bottom:12px}
.panel-sub{color:var(--muted);font-size:15px;margin-bottom:28px}
.ts-box{position:relative;background:var(--field);border:1px solid var(--border);border-radius:var(--r-md);padding:36px 24px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:20px;overflow:hidden;transition:border-color .3s}
.ts-box::after{content:'';position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent);opacity:0;transition:opacity .3s}
.ts-box.active{border-color:rgba(255,255,255,.35)}
.ts-box.active::after{opacity:1;animation:scanline 1.8s linear infinite}
.ts-box.success{border-color:rgba(134,216,170,.45)}
@keyframes scanline{0%{top:0}100%{top:100%}}
.ts-help{font-size:14px;color:var(--muted)}
.ts-help strong{color:var(--text)}
.err{color:var(--danger)}

.hud-container{padding:30px;display:flex;flex-direction:column;gap:22px}
.hud-header{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:1px solid var(--border);padding-bottom:16px}
.hud-label{font-size:12px;color:var(--muted);font-weight:600}
.hud-value{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:34px;font-weight:700;color:var(--text);line-height:1.1;font-variant-numeric:tabular-nums}
.heartbeat-container{height:76px;display:flex;align-items:center;justify-content:center;gap:4px;background:var(--field);border:1px solid var(--border);border-radius:var(--r-md);padding:14px;overflow:hidden}
.heartbeat-bar{width:5px;min-height:3px;background:linear-gradient(180deg,#fff,#8f97a3);border-radius:3px;transition:height .12s}
.hud-footer{display:flex;justify-content:space-between;font-size:13px;color:var(--muted);border-top:1px solid var(--border);padding-top:16px}
.hud-footer b{color:var(--text);font-weight:700}
.live-dot{width:8px;height:8px;background:var(--ok);border-radius:50%;box-shadow:0 0 0 0 rgba(134,216,170,.5);animation:pulse 2s infinite}
@keyframes pulse{70%{box-shadow:0 0 0 8px rgba(134,216,170,0)}100%{box-shadow:0 0 0 0 rgba(134,216,170,0)}}

/* ============ APP CARDS / QUOTA / PRICE ============ */
.app-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
@media(max-width:760px){.app-grid{grid-template-columns:1fr}}
.app-card{background:var(--field);border:1px solid var(--border);border-radius:var(--r-md);padding:22px;display:flex;flex-direction:column;transition:border-color .25s}
.app-card:hover{border-color:var(--border-strong)}
.app-icon{width:52px;height:52px;flex:none;border-radius:14px;background:linear-gradient(145deg,#4a5059,#1a1d22);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:17px;color:#fff;border:1px solid rgba(255,255,255,.14);box-shadow:var(--hairline)}
.app-warning{font-size:12.5px;font-weight:600;color:var(--warn)}
.app-list{font-size:13px;color:var(--muted);margin-bottom:20px;line-height:1.7;padding:0}
.app-list li{list-style:none}
.quota-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.quota-item{background:var(--field);border:1px solid var(--border);border-radius:14px;padding:14px 16px}
.quota-item p{font-size:12px;color:var(--muted);font-weight:600;margin-bottom:4px}
.quota-item b{font-size:20px;color:var(--text);font-weight:800;letter-spacing:-.02em}
.price-box{background:var(--field);border:1px solid var(--border);border-radius:var(--r-md);padding:8px 16px;margin-bottom:16px}
.price-row{display:flex;justify-content:space-between;padding:11px 0;color:var(--muted);font-size:13.5px;font-weight:600;border-bottom:1px dashed rgba(255,255,255,.1)}
.price-row:last-child{border-bottom:0}
.price-row span:last-child{color:var(--text);font-weight:800}
.alert{padding:14px 18px;border:1px solid rgba(241,154,154,.4);background:rgba(241,154,154,.07);color:var(--danger);border-radius:var(--r-md);font-weight:600;font-size:14px;margin-bottom:24px}

/* ============ KEY RESULT ============ */
.keybox{margin-bottom:24px;padding:28px 20px;border-radius:var(--r-md);border:1px solid var(--border-strong);background:var(--field);text-align:center;font-family:'JetBrains Mono',ui-monospace,monospace;font-weight:700;font-size:clamp(18px,4vw,24px);word-break:break-all;color:var(--text);cursor:pointer;box-shadow:inset 0 0 40px rgba(0,0,0,.6),var(--hairline);transition:border-color .2s}
.keybox:hover{border-color:rgba(255,255,255,.45)}
.back-link{display:block;margin-top:22px;font-size:14px;font-weight:600;color:var(--muted);transition:color .2s}
.back-link:hover{color:var(--text)}

/* ============ MODAL ============ */
.modal-overlay{position:fixed;inset:0;background:rgba(5,6,8,.72);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);z-index:100000;display:none;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}
.modal-overlay.show{display:flex;opacity:1}
.modal-content{background:linear-gradient(180deg,#1a1d22,#121418);border:1px solid var(--border-strong);border-radius:var(--r-lg);width:90%;max-width:480px;padding:30px;box-shadow:0 40px 80px rgba(0,0,0,.7),var(--hairline);position:relative;transform:translateY(14px);transition:transform .3s}
.modal-overlay.show .modal-content{transform:translateY(0)}
.modal-header{font-size:19px;font-weight:800;color:var(--text);margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;gap:12px;letter-spacing:-.02em}
.modal-close{background:rgba(255,255,255,.05);border:1px solid var(--border);width:32px;height:32px;border-radius:50%;color:var(--muted);font-size:18px;cursor:pointer;line-height:1;transition:color .2s,background .2s}
.modal-close:hover{color:var(--text);background:rgba(255,255,255,.1)}
.modal-body{font-size:14px;color:var(--muted);line-height:1.75;margin-bottom:24px;white-space:pre-wrap}
.modal-btn{width:100%;padding:14px;border-radius:12px;background:var(--metal);color:#0b0c0e;font-weight:800;font-family:inherit;border:1px solid rgba(255,255,255,.55);cursor:pointer;box-shadow:0 1px 0 rgba(255,255,255,.8) inset}

/* ============ FOOTER ============ */
.foot{position:relative;z-index:10;margin-top:auto;padding:28px;text-align:center;font-size:13px;color:var(--dim);border-top:1px solid var(--border);background:rgba(10,11,13,.7);backdrop-filter:blur(16px);font-weight:500}

/* ============ ENTRANCE (single orchestrated moment) ============ */
.reveal{animation:fadeIn .7s cubic-bezier(.2,.7,.2,1) both}
@keyframes fadeIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}h1.hero-title{background-position:0 0}}
`;

export const COMMON_JS = `
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Soft light that follows the pointer (desktop only)
    var spot = document.querySelector('.spot');
    if (spot && window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', function(e) {
        spot.style.setProperty('--px', e.clientX + 'px');
        spot.style.setProperty('--py', e.clientY + 'px');
      }, { passive: true });
    }

    // Per-card highlight
    document.querySelectorAll('.bento-item, .panel, .hud-container').forEach(function(card) {
      card.addEventListener('mousemove', function(e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      }, { passive: true });
    });

    // Button ripple
    document.body.addEventListener('click', function(e) {
      var btn = e.target.closest('.btn');
      if (!btn) return;
      var rect = btn.getBoundingClientRect();
      var ripple = document.createElement('span');
      ripple.className = 'ripple';
      var size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      btn.appendChild(ripple);
      setTimeout(function() { ripple.remove(); }, 600);
    });

    // Notice modal
    var modal = document.getElementById('noticeModal');
    if (modal) {
      setTimeout(function() { modal.classList.add('show'); }, 700);
      var hide = function() { modal.classList.remove('show'); };
      var closeBtn = modal.querySelector('.modal-close');
      var actionBtn = modal.querySelector('.modal-btn');
      if (closeBtn) closeBtn.onclick = hide;
      if (actionBtn) actionBtn.onclick = hide;
      modal.addEventListener('click', function(e) { if (e.target === modal) hide(); });
      document.addEventListener('keydown', function(e) { if (e.key === 'Escape') hide(); });
    }

    // Typewriter (respects reduced motion)
    var typeEl = document.querySelector('.typewriter');
    if (typeEl) {
      var text = typeEl.getAttribute('data-text') || '';
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        typeEl.textContent = text;
      } else {
        var i = 0;
        typeEl.textContent = '';
        (function type() {
          if (i < text.length) {
            typeEl.textContent += text.charAt(i++);
            setTimeout(type, 22);
          }
        })();
      }
    }
  } catch (e) { console.warn('UI script failed', e); }
});

window.__toast = function(msg) {
  var t = document.createElement('div');
  t.setAttribute('role', 'status');
  t.style.cssText = 'position:fixed;bottom:max(28px,env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);background:rgba(24,27,32,.92);color:#f5f6f8;padding:13px 26px;border-radius:99px;font-weight:600;font-size:14px;z-index:99999;backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.18);box-shadow:0 14px 40px rgba(0,0,0,.6);transition:opacity .3s';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(function() { t.style.opacity = '0'; setTimeout(function() { t.remove(); }, 300); }, 2200);
};

document.addEventListener('click', function(e) {
  var c = e.target.closest('[data-copy]'); if (!c) return;
  var el = document.getElementById(c.getAttribute('data-copy')); if (!el) return;
  if (navigator.clipboard) navigator.clipboard.writeText(el.textContent.trim()).then(function() { window.__toast('Đã sao chép key'); });
});
`;

export const CHECKPOINT_JS = `(function(){
  var timer = document.getElementById('timer');
  if (timer) {
    var t0 = performance.now();
    setInterval(function() {
      timer.innerHTML = ((performance.now() - t0) / 1000).toFixed(2) + '<small style="font-size:16px;color:var(--muted)">s</small>';
    }, 50);
  }

  var hb = document.getElementById('heartbeat');
  if (hb) {
    for (var i = 0; i < 30; i++) {
      var bar = document.createElement('div');
      bar.className = 'heartbeat-bar';
      bar.style.height = '10%';
      hb.appendChild(bar);
    }
    var bars = hb.querySelectorAll('.heartbeat-bar');
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInterval(function() {
        for (var j = 0; j < bars.length; j++) {
          bars[j].style.height = (Math.random() > 0.8 ? (40 + Math.random() * 60) : (10 + Math.random() * 20)) + '%';
        }
      }, 140);
    }
  }

  var busy = false;
  var errBox = document.getElementById('errorBox');
  function showErr(m) { errBox.style.display = 'block'; errBox.textContent = m; }

  window.onTurnstileError = function() { showErr('Lỗi Captcha. Hãy tải lại trang và thử lại.'); };
  window.onTurnstileSuccess = function(token) {
    if (busy) return; busy = true;
    errBox.style.display = 'none';
    document.getElementById('tsWrap').classList.add('active');
    document.getElementById('helpText').innerHTML = '<strong>Đang xác minh...</strong>';
    fetch('/api/verify-bot', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: token }) })
      .then(function(r) { return r.json(); })
      .then(function(d) {
        if (d && d.success) {
          document.getElementById('tsWrap').className = 'ts-box success';
          document.getElementById('helpText').innerHTML = '<strong style="color:var(--ok)">✓ Thành công! Đang chuyển...</strong>';
          setTimeout(function() { location.href = document.getElementById('app').getAttribute('data-next'); }, 600);
        } else {
          document.getElementById('tsWrap').classList.remove('active');
          showErr((d && d.error) || 'Xác minh thất bại. Vui lòng thử lại.');
          document.getElementById('helpText').innerHTML = 'Bấm vào ô <strong>Verify you are human</strong> để thử lại.';
          busy = false;
          if (window.turnstile) turnstile.reset();
        }
      })
      .catch(function() {
        document.getElementById('tsWrap').classList.remove('active');
        showErr('Lỗi mạng. Vui lòng thử lại.');
        busy = false;
        if (window.turnstile) turnstile.reset();
      });
  };
})();`;

// Tuyết trắng rơi ngẫu nhiên: mỗi bông có tốc độ, kích thước, hướng gió và độ lắc riêng.
export const JS_FX = `(function(){
  try {
    var c = document.getElementById('snow-canvas');
    if (!c) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var ctx = c.getContext('2d');
    var W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var flakes = [], wind = 0, windTarget = 0, tick = 0, running = true;

    function resize() {
      W = window.innerWidth; H = window.innerHeight;
      c.width = W * dpr; c.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(160, Math.max(60, W / 9)));
      while (flakes.length < n) flakes.push(make(true));
      flakes.length = n;
    }

    function make(anywhere) {
      var r = Math.random() * 2.6 + 0.8;
      return {
        x: Math.random() * W,
        y: anywhere ? Math.random() * H : -10,
        r: r,
        vy: 0.35 + r * 0.38 + Math.random() * 0.5,      // bông to rơi nhanh hơn
        vx: (Math.random() - 0.5) * 0.9,                 // trôi trái/phải ngẫu nhiên
        sway: Math.random() * 1.2 + 0.2,                 // biên độ lắc
        phase: Math.random() * Math.PI * 2,
        spin: 0.004 + Math.random() * 0.016,
        a: 0.45 + Math.random() * 0.5
      };
    }

    function frame() {
      if (!running) return;
      tick++;
      // gió đổi hướng từ từ, không theo quy luật
      if (tick % 140 === 0) windTarget = (Math.random() - 0.5) * 2.4;
      wind += (windTarget - wind) * 0.01;

      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < flakes.length; i++) {
        var f = flakes[i];
        f.phase += f.spin;
        f.x += f.vx + Math.sin(f.phase) * f.sway + wind * (f.r / 3);
        f.y += f.vy;
        if (f.y > H + 10 || f.x < -20 || f.x > W + 20) {
          var n = make(false);
          if (f.x < -20) n.x = W + 10; else if (f.x > W + 20) n.x = -10;
          flakes[i] = n; continue;
        }
        var g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 2);
        g.addColorStop(0, 'rgba(255,255,255,' + f.a + ')');
        g.addColorStop(0.45, 'rgba(255,255,255,' + (f.a * 0.8) + ')');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(f.x, f.y, f.r * 2, 0, 6.2832); ctx.fill();
      }
      requestAnimationFrame(frame);
    }

    document.addEventListener('visibilitychange', function() {
      running = !document.hidden;
      if (running) requestAnimationFrame(frame);
    });
    window.addEventListener('resize', resize);
    resize(); requestAnimationFrame(frame);
  } catch (e) { console.warn('snow failed', e); }
})();`;