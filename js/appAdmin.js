import Pelicula from "./classPelicula.js";
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
    } else {
        
    }
    
    console.log(peliculas);
 
  };
  
  formularioPeliculaNueva[0].addEventListener("submit", crearPelicula);