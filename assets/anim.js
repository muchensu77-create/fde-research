/* FDE 调研站 · 滚动动效 (Apple 风) */
(function () {
  // 1. 滚动揭入
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  var REVEAL_SEL = '.reveal,.card,.stats,.tablewrap,.note,.think,.quote,.kdom,.mdbox,.wrap h2';
  function initReveal() {
    document.querySelectorAll(REVEAL_SEL).forEach(function (el) { io.observe(el); });
  }

  // 2. 导航毛玻璃阴影
  function initNav() {
    var n = document.querySelector('.nav');
    if (!n) return;
    var onScroll = function () { n.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // 3. 统计数字滚动计数
  function initCount() {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('.stat .n').forEach(function (el) {
      var raw = el.textContent.trim();
      var m = raw.match(/^(\d[\d,]*)/);
      if (!m) return;                       // 非纯数字开头(如"≈55%")保持原样
      var target = parseInt(m[1].replace(/,/g, ''), 10);
      var suffix = raw.slice(m[1].length);
      if (reduce) return;
      var co = new IntersectionObserver(function (ents) {
        ents.forEach(function (en) {
          if (!en.isIntersecting) return;
          var dur = 950, t0 = null;
          function step(ts) {
            if (!t0) t0 = ts;
            var p = Math.min((ts - t0) / dur, 1);
            var v = Math.floor((1 - Math.pow(1 - p, 3)) * target);
            el.textContent = v.toLocaleString() + suffix;
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = target.toLocaleString() + suffix;
          }
          requestAnimationFrame(step);
          co.unobserve(en.target);
        });
      }, { threshold: 0.6 });
      co.observe(el);
    });
  }

  function init() { initNav(); initReveal(); initCount(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
