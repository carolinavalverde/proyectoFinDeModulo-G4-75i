const btnVerMas = document.getElementsByTagName("button");

const verMas = () => {
  const seccion = document.querySelector("#contenedorPadre");

  if (btnVerMas[0].innerText === "Ver más") {
    console.log("desde la función ver más");

    const parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerText =
      "Adaptación del cómic de Marvel Los Vengadores, el legendario grupo de superhéroes formado por Ironman, Hulk, Thor y el Capitán América entre otros.";
    parrafoNuevo.className = "textoDetallePelicula";

    seccion.insertBefore(parrafoNuevo, btnVerMas[0]);

    btnVerMas[0].innerHTML = "Ocultar";
    btnVerMas[0].className = "btn btn-danger my-0";
  } else {
    seccion.removeChild(seccion.children[2]);
    btnVerMas[0].innerHTML = "Ver más";
    btnVerMas[0].className = "btn btn-primary";
  }
};

const obtenerTexto = (e) => {
  e.preventDefault();
  const inputBusqueda = document.querySelector("#inputBusqueda");
  console.log(inputBusqueda.value);
};

const formularioBusqueda = document.querySelector("form");

btnVerMas[0].addEventListener("click", verMas);
formularioBusqueda.addEventListener("submit", obtenerTexto);
