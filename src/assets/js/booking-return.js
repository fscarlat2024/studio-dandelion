// Afiseaza codul rezervarii pe paginile de succes/anulare.
// Daca URL-ul nu are ?code=, cauta prin session_id (Stripe) via API greenfuturesinaia.com.
(async function () {
  const el = document.getElementById("booking-code");
  if (!el) return;
  const p = new URLSearchParams(location.search);
  let code = p.get("code");
  if (!code) {
    const sid = p.get("session_id");
    if (sid) {
      try {
        const r = await fetch("https://greenfuturesinaia.com/api/stripe/session/" + encodeURIComponent(sid));
        if (r.ok) {
          const j = await r.json();
          code = j && j.code;
        }
      } catch {}
    }
  }
  if (code) el.textContent = code;
})();
