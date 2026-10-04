// SR Laundry — mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.nav-mobile');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', function () {
    var isOpen = mobileNav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileNav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// SR Laundry — photo gallery drag-to-scroll carousel
(function () {
  document.querySelectorAll('.gallery-shell').forEach(function (shell) {
    var strip = shell.querySelector('.gallery-strip');
    if (!strip) return;

    var prevBtn = shell.querySelector('.gallery-nav.prev');
    var nextBtn = shell.querySelector('.gallery-nav.next');
    var scrollStep = function () {
      var card = strip.querySelector('.gallery-card');
      return card ? card.getBoundingClientRect().width + 16 : 260;
    };
    if (nextBtn) nextBtn.addEventListener('click', function () {
      strip.scrollBy({ left: scrollStep(), behavior: 'smooth' });
    });
    if (prevBtn) prevBtn.addEventListener('click', function () {
      strip.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
    });

    var isDown = false;
    var startX = 0;
    var startScroll = 0;
    var moved = false;

    strip.addEventListener('mousedown', function (e) {
      isDown = true;
      moved = false;
      startX = e.pageX;
      startScroll = strip.scrollLeft;
      strip.classList.add('is-dragging');
    });
    window.addEventListener('mouseup', function () {
      isDown = false;
      strip.classList.remove('is-dragging');
    });
    window.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      e.preventDefault();
      var dx = e.pageX - startX;
      if (Math.abs(dx) > 5) moved = true;
      strip.scrollLeft = startScroll - dx;
    });
    // Prevent image drag/click-through from firing after an actual drag
    strip.addEventListener('click', function (e) {
      if (moved) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  });
})();

// SR Laundry — GA4 event for WhatsApp links (no-op until the GA4 tag is added)
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href*="wa.me"]');
  if (a && typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', { page: location.pathname });
  }
});

// SR Laundry — load the Google Map only when asked (keeps the Contact page fast)
(function () {
  var box = document.getElementById('map-embed');
  var btn = document.getElementById('map-load');
  if (!box || !btn) return;
  btn.addEventListener('click', function () {
    var f = document.createElement('iframe');
    f.src = box.getAttribute('data-src');
    f.title = 'Map showing SR Laundry location in Cyberjaya';
    f.loading = 'lazy';
    f.referrerPolicy = 'no-referrer-when-downgrade';
    box.innerHTML = '';
    box.appendChild(f);
  });
})();
