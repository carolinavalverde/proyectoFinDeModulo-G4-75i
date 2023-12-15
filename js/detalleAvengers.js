const btnVerMas = document.getElementById("btnVerMas");
const formularioBusqueda = document.getElementById("formularioBusqueda");

const verMas = () => {
  const seccion = document.querySelector("#contenedorPadre");

  if (btnVerMas.innerText === "Ver más") {
    const parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerText =
      "Adaptación del cómic de Marvel Los Vengadores, el legendario grupo de superhéroes formado por Ironman, Hulk, Thor y el Capitán América entre otros.";
    parrafoNuevo.className = "textoDetallePelicula";

    seccion.insertBefore(parrafoNuevo, btnVerMas);

    btnVerMas.innerHTML = "Ocultar";
    btnVerMas.className = "btn btn-danger my-0";
  } else {
    seccion.removeChild(seccion.children[2]);
    btnVerMas.innerHTML = "Ver más";
    btnVerMas.className = "btn btn-primary";
  }
};

const obtenerTexto = (e) => {
  e.preventDefault();

  const inputBusqueda = document.querySelector("#inputBusqueda");
  console.log("Texto de búsqueda:", inputBusqueda.value);
};

btnVerMas.addEventListener("click", verMas);
formularioBusqueda.addEventListener("submit", obtenerTexto);
