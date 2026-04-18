function entrar() {
  window.location.href = "catalogo.html";
}


history.scrollRestoration = "manual";

// Detecta si es recarga
if (performance.getEntriesByType("navigation")[0].type === "reload") {
  window.location.href = "index.html";
}

