import Usuario from "./classPelicula.js";
const formularioPeliculaNueva = document.getElementsByClassName(
    "formularioModal"
  );
  const peliculas = JSON.parse(localStorage.getItem("peliculasKey")) || [];
  
  const crearPelicula = (e) => {
    e.preventDefault();
  
    const tituloPelicula = document.getElementById("inputTitulo");
    const generoPelicula = document.getElementById("inputGenero");
    const descripcionPelicula = document.getElementById("inputDescripcion");
    console.log(`esto es el nombre de la pelicula ${tituloPelicula.value}`);
    console.log(`esto es el genero ${generoPelicula.value}`);
    console.log(`esto es la descripcion ${descripcionPelicula.value}`);
 
  };
  
  formularioPeliculaNueva[0].addEventListener("submit", crearPelicula);