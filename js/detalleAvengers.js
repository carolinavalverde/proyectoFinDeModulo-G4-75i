const btnVerMas = document.getElementById("btnVerMas");

btnVerMas.addEventListener("click", () => {
  const contenidoVerMas = document.querySelector(".contenidoVerMas");

  contenidoVerMas.style.display =
    contenidoVerMas.style.display === "none" ? "block" : "none";

  btnVerMas.innerHTML =
    contenidoVerMas.style.display === "none" ? "Ver más" : "Ocultar";
  btnVerMas.className =
    contenidoVerMas.style.display === "none"
      ? "btn btn-primary"
      : "btn btn-danger my-3";
});
