// ============================================================
//  APXE CONSULTANTS — Main script
// ============================================================

// Auto-update copyright year
(function () {
  var yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// Sticky nav scroll state
(function () {
  var nav = document.getElementById('nav');
  if (!nav) return;
  var onScroll = function () {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Hero parallax effect (only on home page)
(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;
  var heroTitle = document.querySelector('.hero-title');
  var heroSub = document.querySelector('.hero-sub');

  var onScroll = function () {
    var scrollY = window.scrollY;
    var heroHeight = hero.offsetHeight;

    if (scrollY < heroHeight) {
      var progress = scrollY / heroHeight;

      if (heroTitle) {
        heroTitle.style.transform = 'translateY(' + (progress * 40) + 'px)';
        heroTitle.style.opacity = 1 - (progress * 0.5);
      }
      if (heroSub) {
        heroSub.style.transform = 'translateY(' + (progress * 30) + 'px)';
        heroSub.style.opacity = 1 - (progress * 0.4);
      }
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Scroll reveal for elements marked .reveal
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!els.length || !('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -80px 0px', threshold: 0.08 });
  els.forEach(function (el) { io.observe(el); });
})();

// Mobile menu
(function () {
  var openBtn = document.querySelector('[data-mobile-nav-open]');
  var closeBtn = document.querySelector('[data-mobile-nav-close]');
  var nav = document.getElementById('mobile-nav');
  if (!openBtn || !nav) return;

  var open = function () {
    nav.classList.add('is-open');
    nav.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  };
  var close = function () {
    nav.classList.remove('is-open');
    nav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  };

  openBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) close();
  });
})();
