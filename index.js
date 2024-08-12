const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    alert("Gracias por Inscribirse, Nos Contactaremos a la Brevedad ");
  }
  form.reset();
});
