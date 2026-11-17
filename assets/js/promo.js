// SR Laundry — year-end promotion pop-up (10% off bills of RM50 and above).
// Expires by itself at the end of 31 Dec 2026 (Malaysia time). To remove it earlier or later,
// change END below, or delete the <script src=".../promo.js"> line from the pages.
(function () {
  var END = Date.parse('2027-01-01T00:00:00+08:00');
  if (Date.now() >= END) return;

  var KEY = 'sr-promo-seen-2026-12';
  var QUIET_DAYS = 3; // after closing, do not show again for this many days
  try {
    var seen = Number(window.localStorage.getItem(KEY));
    if (seen && Date.now() - seen < QUIET_DAYS * 864e5) return;
  } catch (e) { /* storage blocked: show it anyway */ }

  var ms = (document.documentElement.lang || '').toLowerCase().indexOf('ms') === 0;
  var t = ms ? {
    kicker: 'Promosi terhad',
    big: 'Diskaun 10%',
    head: 'untuk setiap bil RM50 ke atas',
    note: 'Sah hingga 31 Disember 2026.',
    cta: 'Tuntut di WhatsApp',
    later: 'Mungkin lain kali',
    close: 'Tutup',
    wa: 'Hai, saya ingin guna promosi diskaun 10% (bil RM50 ke atas)'
  } : {
    kicker: 'Limited-time offer',
    big: '10% off',
    head: 'when your bill is RM50 or more',
    note: 'Valid until 31 December 2026.',
    cta: 'Claim on WhatsApp',
    later: 'Maybe later',
    close: 'Close',
    wa: "Hi, I'd like to use the 10% off promotion (bills RM50 and above)"
  };
  var href = 'https://wa.me/60102547242?text=' + encodeURIComponent(t.wa);

  var overlay = document.createElement('div');
  overlay.className = 'promo-overlay';
  overlay.innerHTML =
    '<div class="promo-card" role="dialog" aria-modal="true" aria-labelledby="promo-title">' +
      '<button type="button" class="promo-close" aria-label="' + t.close + '">&times;</button>' +
      '<span class="promo-kicker">' + t.kicker + '</span>' +
      '<div class="promo-big" id="promo-title">' + t.big + '</div>' +
      '<p class="promo-head">' + t.head + '</p>' +
      '<p class="promo-note">' + t.note + '</p>' +
      '<a class="btn-primary promo-cta" href="' + href + '" target="_blank" rel="noopener">' + t.cta + '</a>' +
      '<button type="button" class="promo-later">' + t.later + '</button>' +
    '</div>';

  var opener = null;

  function close() {
    try { window.localStorage.setItem(KEY, String(Date.now())); } catch (e) {}
    overlay.classList.remove('is-open');
    document.removeEventListener('keydown', onKey);
    setTimeout(function () {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      if (opener && opener.focus) { try { opener.focus(); } catch (e) {} }
    }, 250);
  }

  function onKey(e) {
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return;
    var f = overlay.querySelectorAll('a[href], button');
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function show() {
    // do not interrupt if the mobile menu is open
    var nav = document.querySelector('.nav-mobile.is-open');
    if (nav) { setTimeout(show, 4000); return; }
    opener = document.activeElement;
    document.body.appendChild(overlay);
    overlay.querySelector('.promo-close').addEventListener('click', close);
    overlay.querySelector('.promo-later').addEventListener('click', close);
    overlay.querySelector('.promo-cta').addEventListener('click', function () {
      try { if (window.gtag) window.gtag('event', 'promo_click', { promo: '10pct_rm50_dec2026' }); } catch (e) {}
      close();
    });
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    document.addEventListener('keydown', onKey);
    // next frame so the fade-in runs
    requestAnimationFrame(function () {
      overlay.classList.add('is-open');
      overlay.querySelector('.promo-cta').focus();
    });
  }

  function start() { setTimeout(show, 6000); }
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
