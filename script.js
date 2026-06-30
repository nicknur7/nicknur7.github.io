// Tiny enhancements only — site works fully without JS.
(function () {
  // Current year in footer
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Subtle active-link highlight as you scroll
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav__links a[href^='#']"));
  var map = {};
  links.forEach(function (a) {
    var id = a.getAttribute("href").slice(1);
    var el = document.getElementById(id);
    if (el) map[id] = a;
  });
  var sections = Object.keys(map).map(function (id) { return document.getElementById(id); });

  if ("IntersectionObserver" in window && sections.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) { l.style.color = ""; });
          var active = map[e.target.id];
          if (active && !active.classList.contains("nav__cta")) {
            active.style.color = "var(--ink)";
          }
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { obs.observe(s); });
  }
})();
