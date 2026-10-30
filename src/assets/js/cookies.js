/* Consimtamant cookie GDPR + incarcare Google Analytics doar dupa Accept.
   CSP-safe: zero inline. ID-ul GA vine din data-ga pe <body>. */
(function () {
  "use strict";
  var KEY = "dandelion-consent";      // "accept" | "reject"
  var body = document.body;
  var gaId = body ? body.getAttribute("data-ga") : "";
  var banner = document.getElementById("cookie-banner");

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function save(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }

  function loadGA() {
    if (!gaId || window.__gaLoaded) return;
    window.__gaLoaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(gaId);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", gaId, { anonymize_ip: true });
  }

  function hide() { if (banner) banner.hidden = true; }

  function accept() { save("accept"); hide(); loadGA(); }
  function reject() { save("reject"); hide(); }

  var choice = stored();
  if (choice === "accept") {
    loadGA();
  } else if (choice === "reject") {
    // nimic
  } else if (banner) {
    banner.hidden = false;
  }

  if (banner) {
    var ok = banner.querySelector("[data-cookie-accept]");
    var no = banner.querySelector("[data-cookie-reject]");
    if (ok) ok.addEventListener("click", accept);
    if (no) no.addEventListener("click", reject);
  }
})();
