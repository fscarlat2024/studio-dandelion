// Afiseaza numarul de telefon abia la click (anti-scraping + discretie)
(function () {
  var els = document.querySelectorAll('.reveal-phone');
  els.forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (el.getAttribute('data-revealed') === '1') return; // deja afisat -> tel: dialeaza
      e.preventDefault();
      var show = el.getAttribute('data-show') || '';
      var tel = el.getAttribute('data-tel') || '';
      el.textContent = '📞 ' + show;
      if (tel) el.setAttribute('href', 'tel:' + tel);
      el.setAttribute('data-revealed', '1');
    });
  });
})();
