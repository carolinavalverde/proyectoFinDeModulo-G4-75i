import Pelicula from "./classPelicula.js";

function cargarPeliculasGuardadas() {
  for (let index = 0; index < peliculas.length; index++) {
    agregarFilaTabla(peliculas[index]);
  }
}

function numeroCodigo(numero) {
  let numeroConCeros = String(numero).padStart(6, "0");
  return numeroConCeros;
}

function agregarFilaTabla(pelicula) {
  const tabla = document
    .getElementById("tablaDePeliculas")
    .getElementsByTagName("tbody")[0];
  const nuevaFila = tabla.insertRow();

  const celdaCodigo = nuevaFila.insertCell(0);
  const celdaTitulo = nuevaFila.insertCell(1);
  const celdaCategoria = nuevaFila.insertCell(2);
  const celdaDescripcion = nuevaFila.insertCell(3);
  const celdaPublicada = nuevaFila.insertCell(4);
  const celdaAcciones = nuevaFila.insertCell(5);

  celdaCodigo.innerHTML = pelicula.codigo;
  celdaTitulo.innerHTML = pelicula.titulo;
  celdaCategoria.innerHTML = pelicula.categoria;
  celdaDescripcion.innerHTML = pelicula.descripcion;

  celdaPublicada.innerHTML =
    '<div class="form-check text-center"><input class="form-check-input mx-auto bg-transparent" type="checkbox" value="" id="flexCheckDefault" /></div>';
  celdaPublicada.classList.add("bg-transparent", "text-white");

  celdaAcciones.innerHTML =
    '<div class="w-100"><a href=""><i class="fa-regular fa-star starButton"></i></a><a href=""><i class="fa-solid fa-pen-to-square editButton mx-1"></i></a></div>';
  celdaAcciones.classList.add("bg-transparent", "text-white");

  const trashButton = document.createElement("i");
  trashButton.classList.add("fa-solid", "fa-trash", "trashButton");
  trashButton.addEventListener("click", function () {
    eliminarPelicula(pelicula);
  });

  celdaAcciones.appendChild(trashButton);

  nuevaFila.classList.add("nueva-fila");

  celdaCodigo.classList.add("bg-transparent", "text-white");
  celdaTitulo.classList.add("bg-transparent", "text-white");
  celdaCategoria.classList.add("bg-transparent", "text-white");
  celdaDescripcion.classList.add("bg-transparent", "text-white");
}

function eliminarPelicula(pelicula) {
  const indice = peliculas.indexOf(pelicula);

  if (indice !== -1) {
    peliculas.splice(indice, 1);

    const tabla = document
      .getElementById("tablaDePeliculas")
      .getElementsByTagName("tbody")[0];
    const filas = tabla.getElementsByClassName("nueva-fila");

    for (let i = 0; i < filas.length; i++) {
      const codigoFila = filas[i].getElementsByTagName("td")[0].innerHTML;

      if (codigoFila === pelicula.codigo) {
        tabla.deleteRow(i);
        break;
      }
    }

    guardarEnLocalStorage();
  }
}

function guardarEnLocalStorage() {
  localStorage.setItem("peliculasKey", JSON.stringify(peliculas));
}

const estatusDelUsuarioPresente = JSON.parse(localStorage.getItem("estatusUsuarioKey")) || "nadie";

const formularioPeliculaNueva =
  document.getElementsByClassName("formularioModal");
const peliculas = JSON.parse(localStorage.getItem("peliculasKey")) || [];

window.onload = cargarPeliculasGuardadas();
const generosPeliculas = ["Acción", "Animadas", "Navideñas", "Románticas"];

const crearPelicula = (e) => {
  e.preventDefault();

  const tituloPelicula = document.getElementById("inputTitulo");
  const numeroGeneroPelicula = document.getElementById("inputGenero");
  const descripcionPelicula = document.getElementById("inputDescripcion");

  if (true) {
    const nuevaPelicula = new Pelicula(
      numeroCodigo(peliculas.length),
      tituloPelicula.value,
      generosPeliculas[numeroGeneroPelicula.value],
      descripcionPelicula.value
    );

    peliculas.push(nuevaPelicula);
    agregarFilaTabla(nuevaPelicula);
    guardarEnLocalStorage();
    $("#modalCreatePelicula").modal("hide");
  } else {
  }

  console.log(peliculas);
};

formularioPeliculaNueva[0].addEventListener("submit", crearPelicula);
console.log(estatusDelUsuarioPresente);