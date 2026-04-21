// ============================================================
//  APXE CONSULTANTS — Shared components (nav, footer, mobile nav)
//  Injects markup at runtime so every page stays in sync.
// ============================================================
(function () {
  // Use absolute URLs. Clean URLs (no .html) are handled by .htaccess.
  var path = function (p) {
    if (!p || p === '/') return '/';
    return '/' + p.replace(/^\/+/, '').replace(/\.html$/, '');
  };

  // Determine active page from URL pathname
  var pathname = window.location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  var inServices = pathname.indexOf('/services') === 0;
  var inWork = pathname.indexOf('/work') === 0;
  var isActive = function (key) {
    if (key === 'home' && (pathname === '/' || pathname === '/index')) return 'is-active';
    if (key === 'about' && pathname === '/about') return 'is-active';
    if (key === 'services' && inServices) return 'is-active';
    if (key === 'work' && inWork) return 'is-active';
    if (key === 'contact' && pathname === '/contact') return 'is-active';
    return '';
  };

  var navHTML = '' +
    '<header class="nav" id="nav">' +
      '<div class="container">' +
        '<div class="nav-inner">' +
          '<a href="' + path('') + '" class="logo" aria-label="Apxe — home">' +
            '<span class="logo-mark" aria-hidden="true"></span>' +
            '<span>Apxe</span>' +
          '</a>' +
          '<nav class="nav-links" aria-label="Primary">' +
            '<a href="' + path('') + '" class="' + isActive('home') + '">Home</a>' +
            '<a href="' + path('about') + '" class="' + isActive('about') + '">About</a>' +
            '<a href="' + path('services') + '" class="' + isActive('services') + '">Services</a>' +
            '<a href="' + path('work') + '" class="' + isActive('work') + '">Work</a>' +
            '<a href="' + path('contact') + '" class="' + isActive('contact') + '">Contact</a>' +
          '</nav>' +
          '<div class="nav-actions">' +
            '<a href="https://calendly.com/apxe-consultants" target="_blank" rel="noopener" class="btn btn-primary">Book a discovery call</a>' +
            '<button class="nav-mobile" type="button" aria-label="Open menu" data-mobile-nav-open>' +
              '<span class="bars" aria-hidden="true"></span>Menu' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</header>';

  var footerHTML = '' +
    '<footer>' +
      '<div class="container">' +
        '<div class="foot-top">' +
          '<div class="foot-brand">' +
            '<a href="' + path('') + '" class="logo" style="color:#FFF">' +
              '<span class="logo-mark" aria-hidden="true"></span>' +
              '<span>Apxe</span>' +
            '</a>' +
            '<p>Business advisory built around your <span class="accent">growth.</span></p>' +
            '<div class="locations">Nashik · Mumbai · India</div>' +
          '</div>' +
          '<div class="foot-col"><h5>Services</h5><ul>' +
            '<li><a href="' + path('services/lead-generation') + '">Lead Generation</a></li>' +
            '<li><a href="' + path('services/sales') + '">Sales &amp; BD</a></li>' +
            '<li><a href="' + path('services/growth-strategy') + '">Growth Strategy</a></li>' +
            '<li><a href="' + path('services/financial-advisory') + '">Financial Advisory</a></li>' +
            '<li><a href="' + path('services/operations') + '">Operations</a></li>' +
            '<li><a href="' + path('services/marketing') + '">Marketing</a></li>' +
            '<li><a href="' + path('services/compliance') + '">Compliance &amp; Risk</a></li>' +
            '<li><a href="' + path('services/succession') + '">Succession</a></li>' +
          '</ul></div>' +
          '<div class="foot-col"><h5>Industries</h5><ul>' +
            '<li><a href="' + path('services') + '">Financial Services</a></li>' +
            '<li><a href="' + path('services') + '">Manufacturing</a></li>' +
            '<li><a href="' + path('services') + '">Real Estate</a></li>' +
            '<li><a href="' + path('services') + '">Technology</a></li>' +
            '<li><a href="' + path('services') + '">Healthcare</a></li>' +
            '<li><a href="' + path('services') + '">Retail</a></li>' +
            '<li><a href="' + path('services') + '">Education</a></li>' +
            '<li><a href="' + path('services') + '">Logistics</a></li>' +
          '</ul></div>' +
          '<div class="foot-col"><h5>Company</h5><ul>' +
            '<li><a href="' + path('about') + '">About</a></li>' +
            '<li><a href="' + path('') + '#approach">How we work</a></li>' +
            '<li><a href="' + path('services') + '">Services</a></li>' +
            '<li><a href="' + path('work') + '">Work</a></li>' +
            '<li><a href="' + path('contact') + '">Contact</a></li>' +
          '</ul></div>' +
          '<div class="foot-col"><h5>Legal</h5><ul>' +
            '<li><a href="' + path('legal/privacy') + '">Privacy Policy</a></li>' +
            '<li><a href="' + path('legal/terms') + '">Terms of Use</a></li>' +
            '<li><a href="' + path('legal/cookies') + '">Cookies</a></li>' +
          '</ul></div>' +
        '</div>' +
        '<div class="foot-bottom">' +
          '<p class="foot-disclaimer">' +
            'Apxe Consultants is a business advisory and consultancy firm. Content on this website is for general informational purposes only and does not constitute legal, financial, or regulatory advice. For advice specific to your situation, please speak with one of our consultants directly.' +
          '</p>' +
          '<div class="foot-meta">' +
            '<div class="foot-socials">' +
              '<a href="#" aria-label="LinkedIn"><svg viewBox="0 0 14 14" width="14" height="14"><rect x="1" y="5" width="2.5" height="8" fill="currentColor"/><circle cx="2.25" cy="2.5" r="1.25" fill="currentColor"/><path d="M5 5 L7.5 5 L7.5 6.2 Q 8.3 4.7 10.2 4.8 Q 13 4.9 13 8.2 L13 13 L10.5 13 L10.5 8.8 Q 10.5 7.3 9.3 7.3 Q 7.5 7.3 7.5 9 L7.5 13 L5 13 Z" fill="currentColor"/></svg></a>' +
              '<a href="#" aria-label="X / Twitter"><svg viewBox="0 0 14 14" width="14" height="14"><path d="M2 2 L12 12 M12 2 L2 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></a>' +
              '<a href="mailto:hello@apxeconsultants.com" aria-label="Email"><svg viewBox="0 0 14 14" width="14" height="14"><rect x="1.5" y="3" width="11" height="8" rx="1" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M1.5 4 L7 8 L12.5 4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg></a>' +
            '</div>' +
            '<span>© <span id="current-year">2025</span> Apxe Consultants. All rights reserved.</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>';

  var mobileNavHTML = '' +
    '<div class="mobile-nav" id="mobile-nav" role="dialog" aria-modal="true" aria-hidden="true">' +
      '<div class="mobile-nav-head">' +
        '<a href="' + path('') + '" class="logo">' +
          '<span class="logo-mark" aria-hidden="true"></span><span>Apxe</span>' +
        '</a>' +
        '<button class="mobile-nav-close" type="button" aria-label="Close menu" data-mobile-nav-close>Close</button>' +
      '</div>' +
      '<div class="mobile-nav-body">' +
        '<a href="' + path('') + '"><span class="n">01</span><span>Home</span><span class="arrow">→</span></a>' +
        '<a href="' + path('about') + '"><span class="n">02</span><span>About</span><span class="arrow">→</span></a>' +
        '<a href="' + path('services') + '"><span class="n">03</span><span>Services</span><span class="arrow">→</span></a>' +
        '<a href="' + path('work') + '"><span class="n">04</span><span>Work</span><span class="arrow">→</span></a>' +
        '<a href="' + path('contact') + '"><span class="n">05</span><span>Contact</span><span class="arrow">→</span></a>' +
      '</div>' +
      '<div class="mobile-nav-foot">' +
        '<a href="https://calendly.com/apxe-consultants" target="_blank" rel="noopener" class="btn btn-primary" style="width:100%">Book a discovery call</a>' +
      '</div>' +
    '</div>';

  // Inject into placeholders or prepend/append to body
  var injectInto = function (selector, html, mode) {
    var target = document.querySelector(selector);
    if (target) {
      target.outerHTML = html;
      return;
    }
    if (mode === 'prepend') document.body.insertAdjacentHTML('afterbegin', html);
    else document.body.insertAdjacentHTML('beforeend', html);
  };

  injectInto('[data-nav]', navHTML, 'prepend');
  injectInto('[data-footer]', footerHTML, 'append');
  injectInto('[data-mobile-nav]', mobileNavHTML, 'append');
})();
