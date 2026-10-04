/* ==========================================================================
   TrueNorth Dental — main.js
   No frameworks, no dependencies. Every feature degrades gracefully:
   the markup is usable before this file runs.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ------------------------------------------------------------ 1. Header */
  (function header() {
    var el = $('#siteHeader');
    var bar = $('#scrollProgress span');
    if (!el) return;

    var ticking = false;
    function update() {
      var y = window.scrollY || window.pageYOffset;
      el.classList.toggle('is-scrolled', y > 8);
      if (bar) {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? Math.min(100, (y / h) * 100) : 0) + '%';
      }
      var top = $('#toTop');
      if (top) top.classList.toggle('is-visible', y > 700);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  })();

  /* ------------------------------------------------------ 2. Mobile drawer */
  (function drawer() {
    var nav = $('#primaryNav');
    var toggle = $('#navToggle');
    var overlay = $('#navOverlay');
    if (!nav || !toggle) return;

    var lastFocus = null;

    function focusables() {
      return $$('a[href], button:not([disabled]), input, select, textarea', nav)
        .filter(function (n) { return n.offsetParent !== null || n === document.activeElement; });
    }

    function open() {
      lastFocus = document.activeElement;
      nav.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      document.body.classList.add('nav-open');
      if (overlay) { overlay.hidden = false; requestAnimationFrame(function () { overlay.classList.add('is-open'); }); }
      var first = focusables()[0];
      if (first) first.focus();
    }

    function close() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      document.body.classList.remove('nav-open');
      if (overlay) {
        overlay.classList.remove('is-open');
        window.setTimeout(function () { overlay.hidden = true; }, 320);
      }
      $$('.nav__item--has-menu.is-open', nav).forEach(function (li) {
        li.classList.remove('is-open');
        var b = $('.nav__sub-toggle', li);
        if (b) b.setAttribute('aria-expanded', 'false');
        var d = $('.dropdown', li);
        if (d) d.classList.remove('is-open');
      });
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    function isOpen() { return nav.classList.contains('is-open'); }

    toggle.addEventListener('click', function () { isOpen() ? close() : open(); });

    $$('[data-nav-close]').forEach(function (btn) {
      btn.addEventListener('click', close);
    });

    document.addEventListener('keydown', function (e) {
      if (!isOpen()) return;
      if (e.key === 'Escape') { close(); return; }
      if (e.key !== 'Tab') return;
      var list = focusables();
      if (!list.length) return;
      var first = list[0];
      var last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    // Close when a real navigation link inside the drawer is followed.
    $$('a[href]', nav).forEach(function (a) {
      a.addEventListener('click', function () {
        var href = a.getAttribute('href') || '';
        if (href.charAt(0) === '#' || href.indexOf('#') > -1 || href.charAt(0) === '/') {
          if (window.matchMedia('(max-width: 1060px)').matches) close();
        }
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 1060 && isOpen()) close();
    });
  })();

  /* --------------------------------------------------- 3. Submenu toggles */
  (function submenus() {
    $$('.nav__sub-toggle').forEach(function (btn) {
      var li = btn.closest('.nav__item--has-menu');
      var menu = li ? $('.dropdown', li) : null;
      if (!li || !menu) return;

      btn.addEventListener('click', function () {
        var isMobile = window.matchMedia('(max-width: 1060px)').matches;
        if (!isMobile) return; // desktop uses hover / focus-within
        var willOpen = !menu.classList.contains('is-open');
        // Accordion behaviour: only one open at a time on mobile.
        $$('.nav__item--has-menu.is-open').forEach(function (other) {
          if (other === li) return;
          other.classList.remove('is-open');
          var ob = $('.nav__sub-toggle', other);
          var od = $('.dropdown', other);
          if (ob) ob.setAttribute('aria-expanded', 'false');
          if (od) od.classList.remove('is-open');
        });
        menu.classList.toggle('is-open', willOpen);
        li.classList.toggle('is-open', willOpen);
        btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });
    });
  })();

  /* ------------------------------------------------------- 4. Scroll reveal */
  (function reveal() {
    var els = $$('.reveal');
    if (!els.length) return;

    function finish(el) { el.classList.add('is-done'); }

    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); finish(el); });
      return;
    }

    els.forEach(function (el) {
      el.addEventListener('animationend', function (e) {
        if (e.target === el) finish(el);
      });
      // Safety net in case the animation never fires (background tab, etc.)
      window.setTimeout(function () { if (el.classList.contains('is-visible')) finish(el); }, 1700);
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    els.forEach(function (el) { io.observe(el); });
  })();

  /* --------------------------------------------------- 5. Animated counters */
  (function counters() {
    var nodes = $$('[data-count]');
    if (!nodes.length) return;

    function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }

    function format(value, decimals) {
      var n = decimals ? value.toFixed(decimals) : Math.round(value);
      var parts = String(n).split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    }

    function run(el) {
      var target = parseFloat(el.getAttribute('data-count'));
      if (isNaN(target)) return;
      var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      var prefix = el.getAttribute('data-prefix') || '';
      var suffix = el.getAttribute('data-suffix') || '';

      if (reduceMotion) { el.textContent = prefix + format(target, decimals) + suffix; return; }

      var duration = 1500;
      var start = null;
      function tick(ts) {
        if (start === null) start = ts;
        var p = Math.min(1, (ts - start) / duration);
        el.textContent = prefix + format(target * easeOutExpo(p), decimals) + suffix;
        if (p < 1) window.requestAnimationFrame(tick);
        else el.textContent = prefix + format(target, decimals) + suffix;
      }
      window.requestAnimationFrame(tick);
    }

    if (!('IntersectionObserver' in window)) { nodes.forEach(run); return; }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        run(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    nodes.forEach(function (n) { io.observe(n); });
  })();

  /* ---------------------------------------------------------- 6. Carousel */
  (function carousels() {
    $$('[data-carousel]').forEach(function (root) {
      var viewport = $('.carousel__viewport', root);
      var track = $('.carousel__track', root);
      if (!viewport || !track) return;
      var slides = $$('.carousel__slide', track);
      if (slides.length < 2) return;

      root.classList.add('carousel--js');

      var prev = $('[data-carousel-prev]', root);
      var next = $('[data-carousel-next]', root);
      var dotsWrap = $('[data-carousel-dots]', root);
      var index = 0;
      var timer = null;

      function metrics() {
        var cs = getComputedStyle(viewport);
        var padL = parseFloat(cs.paddingLeft) || 0;
        var padR = parseFloat(cs.paddingRight) || 0;
        var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        var slideW = slides[0].getBoundingClientRect().width;
        var step = slideW + gap;
        var avail = viewport.clientWidth - padL - padR;
        var perView = Math.max(1, Math.round((avail + gap) / step));
        return { step: step, perView: perView, maxIndex: Math.max(0, slides.length - perView) };
      }

      function buildDots() {
        if (!dotsWrap) return;
        var pages = metrics().maxIndex + 1;
        dotsWrap.innerHTML = '';
        for (var i = 0; i < pages; i++) {
          var b = document.createElement('button');
          b.type = 'button';
          b.setAttribute('aria-label', 'Go to review group ' + (i + 1));
          b.setAttribute('tabindex', '-1');
          b.addEventListener('click', (function (n) { return function () { go(n); }; })(i));
          dotsWrap.appendChild(b);
        }
        paintDots();
      }

      function paintDots() {
        if (!dotsWrap) return;
        $$('button', dotsWrap).forEach(function (b, i) {
          b.classList.toggle('is-active', i === index);
        });
      }

      function go(i) {
        var m = metrics();
        index = i < 0 ? m.maxIndex : (i > m.maxIndex ? 0 : i);
        track.style.transform = 'translate3d(' + (-index * m.step) + 'px,0,0)';
        paintDots();
      }

      if (prev) prev.addEventListener('click', function () { go(index - 1); stop(); });
      if (next) next.addEventListener('click', function () { go(index + 1); stop(); });

      // Native scroll-snap drives the no-JS state; sync the index when JS takes over.
      var resizeTimer = null;
      window.addEventListener('resize', function () {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(function () { buildDots(); go(Math.min(index, metrics().maxIndex)); }, 160);
      });

      function start() {
        if (reduceMotion) return;
        stop();
        timer = window.setInterval(function () { go(index + 1); }, 6200);
      }
      function stop() { if (timer) { window.clearInterval(timer); timer = null; } }

      root.addEventListener('mouseenter', stop);
      root.addEventListener('mouseleave', start);
      root.addEventListener('focusin', stop);
      root.addEventListener('focusout', start);

      viewport.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); stop(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); stop(); }
      });

      buildDots();
      go(0);
      start();
    });
  })();

  /* ------------------------------------------------------ 7. Blog filtering */
  (function filters() {
    $$('[data-filter]').forEach(function (root) {
      var grid = $('[data-filter-grid]');
      var count = $('[data-filter-count]');
      if (!grid) return;
      var cards = $$('[data-cat]', grid);

      $$('[data-filter-btn]', root).forEach(function (btn) {
        btn.addEventListener('click', function () {
          var cat = btn.getAttribute('data-filter-btn');
          $$('[data-filter-btn]', root).forEach(function (b) {
            var on = b === btn;
            b.classList.toggle('is-active', on);
            b.setAttribute('aria-pressed', on ? 'true' : 'false');
          });
          var shown = 0;
          cards.forEach(function (card) {
            var match = cat === 'all' || card.getAttribute('data-cat') === cat;
            card.classList.toggle('is-hidden', !match);
            if (match) shown++;
          });
          if (count) count.textContent = shown + (shown === 1 ? ' article' : ' articles');
        });
      });
    });
  })();

  /* ---------------------------------------------------------- 8. Back to top */
  (function toTop() {
    var btn = $('#toTop');
    if (!btn) return;
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  })();

  /* -------------------------------------------------- 9. Form enhancement */
  (function forms() {
    $$('form.form').forEach(function (form) {
      var started = form.querySelector('[name="startedAt"]');
      if (started) started.value = String(Date.now());

      form.addEventListener('submit', function (e) {
        var ok = true;
        var firstBad = null;

        $$('[required]', form).forEach(function (field) {
          var wrap = field.closest('.field');
          var invalid = false;

          if (field.type === 'checkbox') invalid = !field.checked;
          else if (!String(field.value || '').trim()) invalid = true;
          else if (field.type === 'email') invalid = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(field.value.trim());
          else if (field.type === 'tel') invalid = field.value.replace(/\D/g, '').length < 10;

          if (wrap) wrap.classList.toggle('field--error', invalid);
          if (invalid) {
            ok = false;
            field.setAttribute('aria-invalid', 'true');
            if (!firstBad) firstBad = field;
          } else {
            field.removeAttribute('aria-invalid');
          }
        });

        // Honeypot: a filled hidden field means a bot.
        var hp = form.querySelector('[name="website"]');
        if (hp && hp.value) { e.preventDefault(); return; }

        if (!ok) {
          e.preventDefault();
          if (firstBad) firstBad.focus();
          return;
        }
        var submit = form.querySelector('[type="submit"]');
        if (submit) {
          submit.disabled = true;
          submit.textContent = 'Sending…';
        }
      });

      // Clear the error state as soon as the user starts fixing it.
      $$('input, select, textarea', form).forEach(function (field) {
        field.addEventListener('input', function () {
          var wrap = field.closest('.field');
          if (wrap) wrap.classList.remove('field--error');
        });
      });
    });
  })();

  /* --------------------------------------------------- 10. FAQ smoothness */
  (function faq() {
    // Native <details> already works without JS; this only tidies focus.
    $$('.faq__item').forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) return;
        var summary = $('.faq__q', item);
        if (summary && document.activeElement !== summary && item.dataset.autoFocus === 'true') summary.focus();
      });
    });
  })();

  /* ----------------------------------------------- 11. Active section (TOC) */
  (function toc() {
    var toc = $('.toc__list');
    if (!toc || !('IntersectionObserver' in window)) return;
    var links = $$('a', toc);
    var targets = links.map(function (a) {
      var id = (a.getAttribute('href') || '').replace('#', '');
      return id ? document.getElementById(id) : null;
    }).filter(Boolean);
    if (!targets.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-120px 0px -70% 0px', threshold: 0 });
    targets.forEach(function (t) { io.observe(t); });
  })();

  /* ------------------------------------- 12. Smooth in-page anchor offsets */
  (function anchors() {
    $$('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (!id || id === '#') return;
        var target = document.getElementById(id.slice(1));
        if (!target) return;
        e.preventDefault();
        var header = $('#siteHeader');
        var offset = (header ? header.getBoundingClientRect().height : 0) + 20;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });
        if (history.replaceState) history.replaceState(null, '', id);
      });
    });
  })();

  /* --------------------------------------------------- 13. Marquee fallback */
  (function marquee() {
    // The duplicate set is rendered server-side, so nothing is required here.
    // If reduced motion is on, CSS already stops the animation.
    if (!reduceMotion) return;
    $$('[data-marquee]').forEach(function (m) {
      var vp = m.querySelector('.marquee__viewport') || m;
      vp.style.overflowX = 'auto';
    });
  })();

  /* ------------------------------------------ 14. Sticky mobile action bar */
  (function mobileBar() {
    var bar = $('#mobileBar');
    if (!bar) return;

    var showAfter = 420;
    var ticking = false;

    function update() {
      var y = window.scrollY || window.pageYOffset;
      var mobile = window.matchMedia('(max-width: 760px)').matches;
      // Hide again at the very bottom so it never covers the footer's own CTA.
      var nearBottom = y + window.innerHeight > document.documentElement.scrollHeight - 120;
      var show = mobile && y > showAfter && !nearBottom;

      bar.classList.toggle('is-visible', show);
      if (show) bar.removeAttribute('hidden');
      else bar.setAttribute('hidden', '');
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  })();
})();
