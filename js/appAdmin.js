import Pelicula from "./classPelicula.js";

function agregarFilaTabla(pelicula) {
    const tabla = document.getElementById("tablaDePeliculas").getElementsByTagName('tbody')[0];
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
    celdaPublicada.innerHTML = '<div class="form-check text-center"><input class="form-check-input mx-auto bg-transparent" type="checkbox" value="" id="flexCheckDefault" /></div>';
    celdaAcciones.innerHTML = '<div class="w-100"><a href=""><i class="fa-regular fa-star starButton"></i></a><a href=""><i class="fa-solid fa-pen-to-square editButton mx-1"></i></a><a href=""><i class="fa-solid fa-trash trashButton"></i></a></div>';
    nuevaFila.classList.add('nueva-fila'); 
}


const formularioPeliculaNueva = document.getElementsByClassName(
    "formularioModal"
  );
  const peliculas = JSON.parse(localStorage.getItem("peliculasKey")) || [];
  const generosPeliculas = [
    "Acción",
    "Aventura",
    "Fantasía",
    "Terror",
    "Comedia",
    "Drama",
    "Romance",
    "Suspenso",
    "Ciencia Ficción",
    "Musical",
    "Animación",
    "Arte",
    "Autor",
    "Catástrofe",
    "Divulgación Científica",
    "Buddy-cops",
    "Desastres",
    "Artes Marciales",
    "Espías",
    "Capa y Espada",
    "Piratas",
    "Supervivencia",
    "Alta Fantasía",
    "Sword & Sorcery",
    "Fantasía Contemporánea",
    "Bangsian Fantasy",
    "Histórico",
    "Western",
    "Policiaco",
    "Negro"
  ];
  
  const crearPelicula = (e) => {
    e.preventDefault();
  
    const tituloPelicula = document.getElementById("inputTitulo");
    const numeroGeneroPelicula = document.getElementById("inputGenero");
    const descripcionPelicula = document.getElementById("inputDescripcion");
    if (true) {
        const nuevaPelicula = new Pelicula(peliculas.length, tituloPelicula.value, generosPeliculas[numeroGeneroPelicula.value], descripcionPelicula.value);
        peliculas.push(nuevaPelicula);
        agregarFilaTabla(nuevaPelicula);
        $('#modalCreatePelicula').modal('hide');
    } else {
        
    }
    
    console.log(peliculas);
 
  };
  
  formularioPeliculaNueva[0].addEventListener("submit", crearPelicula);