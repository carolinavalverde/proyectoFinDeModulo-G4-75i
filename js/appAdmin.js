import Pelicula from "./classPelicula.js";
import Usuario from "./classUsuario.js";

function cargarPeliculasGuardadas() {
  peliculas.map((pelicula,indice) => agregarFilaTabla(pelicula,indice));
}

let peliculaNueva = true;
let codigoPelicula;

const buttonNuevaPelicula = document.getElementById("buttonAgregarPelicula");
buttonNuevaPelicula.addEventListener("click", () => {
  peliculaNueva = true;
  const botonModal = document.getElementById("buttonSubmitModal");
  botonModal.innerHTML = "+ Agregar";

  const tituloModal = document.getElementById("modalPeliculaLabel");
  tituloModal.innerHTML = "Nueva película"
});

function agregarFilaTabla(pelicula,index) {
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

  celdaCodigo.innerHTML = String(index+1).padStart(4, "0");
  celdaTitulo.innerHTML = pelicula.titulo;
  celdaCategoria.innerHTML = pelicula.categoria;
  celdaDescripcion.innerHTML = pelicula.descripcion;

  celdaPublicada.innerHTML =
    '<div class="form-check text-center"><input class="form-check-input mx-auto bg-transparent" type="checkbox" value="" /></div>';
  celdaPublicada.classList.add("bg-transparent", "text-white");

  celdaAcciones.innerHTML =
    '<div class="w-100"><a href=""></a></div>';
  celdaAcciones.classList.add("bg-transparent", "text-white");

  const highlightButton = document.createElement("i");
  if(pelicula.destacada === false){
    highlightButton.classList.add("fa-regular", "fa-star", "starButton");
  }else if(pelicula.destacada === true){
    highlightButton.classList.add("fa-solid", "fa-star", "starButton");
  }
  highlightButton.addEventListener("click",function (){
    if(pelicula.destacada === false){
      destacarPelicula(pelicula, highlightButton);
    }else if(pelicula.destacada === true){
      noDestacarPelicula(pelicula, highlightButton);
    }
  });
  
  const editButton = document.createElement("i");
  editButton.classList.add("fa-solid", "fa-pen-to-square", "editButton", "mx-2");
  editButton.setAttribute("data-bs-toggle", "modal");
  editButton.setAttribute("data-bs-target", "#modalCreatePelicula");
  editButton.addEventListener("click", function () {
    cargarDatosEnFormulario(pelicula);
  });
  
  const trashButton = document.createElement("i");
  trashButton.classList.add("fa-solid", "fa-trash", "trashButton");
  trashButton.addEventListener("click", function () {
    eliminarPelicula(pelicula);
  });

  celdaAcciones.appendChild(highlightButton);
  celdaAcciones.appendChild(editButton);
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

    guardarEnLocalStorage();

    const tabla = document.getElementById("tablaDePeliculas").getElementsByTagName("tbody")[0];

    while (tabla.firstChild) {
      tabla.removeChild(tabla.firstChild);
    }

    cargarPeliculasGuardadas();
  }
}


function cargarDatosEnFormulario(pelicula) {
  peliculaNueva = false;

  const botonModal = document.getElementById("buttonSubmitModal");
  botonModal.innerHTML = "Actualizar";

  const tituloModal = document.getElementById("modalPeliculaLabel");
  tituloModal.innerHTML = "Actualizar película"

  const tituloPelicula = document.getElementById("inputTitulo");
  const generoPelicula = document.getElementById("inputGenero");
  const descripcionPelicula = document.getElementById("inputDescripcion");
  const uuidPelicula = document.getElementById("inputCodigo");
  const imagenPelicula = document.getElementById("inputImagen");

  if(pelicula.categoria === "Acción"){
    generoPelicula.value = 1;
  } else if(pelicula.categoria === "Animadas"){
    generoPelicula.value = 2;
  } else if(pelicula.categoria === "Navideñas"){
    generoPelicula.value = 3;
  } else if(pelicula.categoria === "Románticas"){
    generoPelicula.value = 4;
  }

  tituloPelicula.value = pelicula.titulo;
  
  descripcionPelicula.value = pelicula.descripcion;
  uuidPelicula.value = pelicula.codigo;
  imagenPelicula.value = pelicula.url;

  codigoPelicula = pelicula.codigo;

}

function actualizarPelicula(){
  let posicion = peliculas.findIndex((pelicula) => pelicula.codigo === codigoPelicula);
  
  const tituloPelicula = document.getElementById("inputTitulo");
  const numeroGeneroPelicula = document.getElementById("inputGenero");
  const generoPelicula = numeroGeneroPelicula.options[numeroGeneroPelicula.selectedIndex].text;
  const descripcionPelicula = document.getElementById("inputDescripcion");
  const imagenPelicula = document.getElementById("inputImagen");

  peliculas[posicion].titulo = tituloPelicula.value;
  peliculas[posicion].genero = generoPelicula;
  peliculas[posicion].descripcion = descripcionPelicula.value;
  peliculas[posicion].url = imagenPelicula.value;
  guardarEnLocalStorage();
  $("#modalCreatePelicula").modal("hide");

  const tbody = document.getElementById("bodyTablaPeliculas");
  tbody.children[posicion].children[1].innerHTML = tituloPelicula.value;
  tbody.children[posicion].children[2].innerHTML = generoPelicula;
  tbody.children[posicion].children[3].innerHTML = descripcionPelicula.value;

  codigoPelicula = null;
  peliculaNueva = true;
}

function guardarEnLocalStorage() {
  localStorage.setItem("peliculasKey", JSON.stringify(peliculas));
}

const formularioPelicula = document.getElementsByClassName("formularioModal");

const peliculas = JSON.parse(localStorage.getItem("peliculasKey")) || [];

window.onload = cargarPeliculasGuardadas();

function destacarPelicula(pelicula, highlightButton) {
  peliculas.forEach((pelicula) => noDestacarPelicula(pelicula, highlightButton));
  highlightButton.classList.remove("fa-regular");
  highlightButton.classList.add("fa-solid");
  pelicula.destacada = true;
  guardarEnLocalStorage();
  console.log(pelicula.destacada);
  recargarTabla();
  destacarPeliculaHTML(pelicula);
}

function noDestacarPelicula(pelicula, highlightButton) {
  if (pelicula.destacada) {
    highlightButton.classList.remove("fa-solid");
    highlightButton.classList.add("fa-regular");
    pelicula.destacada = false;
    guardarEnLocalStorage();
  }
}

function recargarTabla() {
  const tabla = document.getElementById("tablaDePeliculas").getElementsByTagName("tbody")[0];

  while (tabla.firstChild) {
    tabla.removeChild(tabla.firstChild);
  }

  peliculas.forEach((pelicula, index) => {
    agregarFilaTabla(pelicula, index);
  });
}

function destacarPeliculaHTML(pelicula) {
  // const imagenHTML = document.getElementById("imagenDestacadaHTML");
  // const tituloHTML = document.getElementById("tituloDestacadaHTML");
  
  
  // const tituloHTML = document.querySelector("#tituloDestacadaHTML");
  // const descripcionHTML = document.getElementById("parrafoDestacadaHTML");

  // imagenHTML.src = pelicula.url;
  // imagenHTML.alt = pelicula.titulo;
  // console.log(tituloHTML);
  // console.log(pelicula.titulo);
  // tituloHTML.innerText = pelicula.titulo;
  // descripcionHTML.innerText = pelicula.descripcion;
}


const crearPelicula = () => {
  const tituloPelicula = document.getElementById("inputTitulo");
  const numeroGeneroPelicula = document.getElementById("inputGenero");
  const generoPelicula = numeroGeneroPelicula.options[numeroGeneroPelicula.selectedIndex].text;
  const descripcionPelicula = document.getElementById("inputDescripcion");
  const imagenPelicula = document.getElementById("inputImagen");

  const nuevaPelicula = new Pelicula(
    tituloPelicula.value,
    generoPelicula,
    descripcionPelicula.value,
    false,
    false,
    imagenPelicula.value
  );

  peliculas.push(nuevaPelicula);
  console.log(peliculas);
  agregarFilaTabla(nuevaPelicula,peliculas.length-1);
  guardarEnLocalStorage();

  tituloPelicula.value = "";
  numeroGeneroPelicula.selectedIndex = 0;
  descripcionPelicula.value = "";

  $("#modalCreatePelicula").modal("hide");
  
};

formularioPelicula[0].addEventListener("submit", prepararFormulario);

function prepararFormulario(e){
  e.preventDefault();

  if(peliculaNueva){
    crearPelicula();
  }else{
    actualizarPelicula();
  }
}
