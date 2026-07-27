const form = document.getElementById("orderForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const dati = Object.fromEntries(new FormData(form).entries());

  try {
    await fetch("https://script.google.com/macros/s/AKfycbyngEx24SuA0n7FDfbQ7QWaYdGK8TNGIu3njAdSkBUy21ZaL4ePcKMBYOqHFT2zGu0liw/exec", {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(dati)
    });

    document.getElementById("risposta").textContent = "✅ Ordine inviato con successo!";
    form.reset();

  } catch (err) {
    document.getElementById("risposta").textContent = "❌ Errore durante l'invio dell'ordine.";
    console.error(err);
  }
});
