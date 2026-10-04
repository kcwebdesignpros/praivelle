/*
 * Contrast audit — run in a real browser against a running dev server.
 *
 * Catches the class of bug that CSS review misses: text that inherits a
 * light-on-dark colour but ends up on a light surface (or vice versa) and is
 * therefore invisible. It computes the effective background by walking up the
 * DOM, treating gradients as their average colour stop so dark gradient
 * sections are not reported as false positives.
 *
 * Usage:
 *   npm start                                  # in one shell
 *   agent-browser open http://127.0.0.1:3000/  # then, for each route:
 *   agent-browser eval "$(cat scripts/audit-contrast.js)"
 *
 * Returns JSON: { page, problems, items: [{ sel, color, bg, ratio, y, text }] }.
 * Anything with ratio < 2.6 is almost certainly unreadable and needs fixing.
 */
(function () {
  function parse(c) {
    var m = String(c).match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    var p = m[1].split(',').map(Number);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  }
  function lum(c) {
    var f = function (x) { x = x / 255; return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
  }
  /* Effective background: walk up until we find an opaque colour OR a gradient.
     For a gradient we average its colour stops so the ratio is still meaningful. */
  function bgOf(el) {
    var n = el;
    while (n && n !== document.documentElement) {
      var cs = getComputedStyle(n);
      var img = cs.backgroundImage;
      if (img && img !== 'none' && /gradient/i.test(img)) {
        var stops = img.match(/rgba?\([^)]+\)/g) || [];
        var acc = { r: 0, g: 0, b: 0, a: 0 }, k = 0;
        stops.forEach(function (s) {
          var p = parse(s);
          if (p && p.a > 0.15) { acc.r += p.r; acc.g += p.g; acc.b += p.b; acc.a += p.a; k++; }
        });
        if (k) return { r: acc.r / k, g: acc.g / k, b: acc.b / k, a: 1, gradient: true };
      }
      var c = parse(cs.backgroundColor);
      if (c && c.a > 0.6) return c;
      n = n.parentElement;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  }
  var out = [];
  var sel = 'h1,h2,h3,h4,h5,p,span,strong,li,a,em,small,dt,dd,label,button';
  Array.prototype.forEach.call(document.querySelectorAll(sel), function (el) {
    var t = (el.textContent || '').trim();
    if (!t) return;
    var own = '';
    Array.prototype.forEach.call(el.childNodes, function (n) {
      if (n.nodeType === 3) own += n.nodeValue;
    });
    if (!own.trim()) return;
    var cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity === 0) return;
    var r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return;
    var fg = parse(cs.color);
    if (!fg) return;
    var bg = bgOf(el);
    var l1 = lum(fg), l2 = lum(bg);
    var ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    if (ratio < 2.6) {
      out.push({
        sel: el.tagName.toLowerCase() + '.' + String(el.className || '').split(' ').slice(0, 2).join('.'),
        color: cs.color,
        bg: 'rgb(' + Math.round(bg.r) + ',' + Math.round(bg.g) + ',' + Math.round(bg.b) + ')' + (bg.gradient ? ' (gradient avg)' : ''),
        ratio: Math.round(ratio * 100) / 100,
        y: Math.round(r.top + window.scrollY),
        text: t.slice(0, 48)
      });
    }
  });
  var seen = {}, uniq = [];
  out.forEach(function (o) {
    var k = o.sel + '|' + o.color + '|' + o.bg;
    if (!seen[k]) { seen[k] = 1; uniq.push(o); }
  });
  return JSON.stringify({ page: location.pathname, problems: uniq.length, items: uniq.slice(0, 25) }, null, 1);
})()
