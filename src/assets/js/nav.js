// Meniu hamburger pe telefon: deschide/inchide la apasare.
(function () {
  var btn = document.getElementById('navToggle');
  var menu = document.getElementById('navLinks');
  if (!btn || !menu) return;

  function close() {
    menu.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
  function toggle() {
    var open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    toggle();
  });

  // Inchide cand se apasa pe un link (nu pe butonul de tema)
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) close();
  });

  // Inchide la click in afara meniului
  document.addEventListener('click', function (e) {
    if (menu.classList.contains('open') && !menu.contains(e.target) && e.target !== btn) close();
  });

  // Inchide cu Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  // Inchide daca se trece pe desktop (resize)
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 820) close();
  });
})();
