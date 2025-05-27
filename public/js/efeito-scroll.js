document.addEventListener("DOMContentLoaded", () => {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("reveal");
        entrada.target.classList.remove("hidden");
      }
    });
  }, {
    threshold: 0.2 // ativa quando 20% do elemento estiver visível
  });

  document.querySelectorAll('.hidden').forEach((elemento) => {
    observador.observe(elemento);
  });
});
