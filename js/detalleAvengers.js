const btnVerMas = document.getElementsByTagName("button");
console.log(btnVerMas[0]);

const verMas = () => {
  const seccion = document.querySelector("#contenedorPadre");

  if (btnVerMas[0].innerHTML === "Ver más") {
    console.log("desde la función ver más");

    const parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerText =
      "Adaptación del cómic de Marvel Los Vengadores, el legendario grupo de superhéroes formado por Ironman, Hulk, Thor y el Capitán América entre otros.";
    parrafoNuevo.className = "textoDetallePelicula";

    seccion.insertBefore(parrafoNuevo, btnVerMas[0]);

    btnVerMas[0].innerHTML = "Ocultar";
    btnVerMas[0].className = "btn btn-danger my-0";
  } else {
    console.log(seccion.children[0]);
    seccion.removeChild(seccion.children[0]);
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
