const formularioPeliculaNueva = document.getElementsByClassName(
    "formularioModal"
  );
  //const usuarios = JSON.parse(localStorage.getItem("usuariosKey")) || [];
  
  const crearPelicula = (e) => {
    e.preventDefault();
  
    const nombrePelicula = document.getElementById("inputTitulo");
    const generoPelicula = document.getElementById("inputGenero");
    const descripcionPelicula = document.getElementById("inputDescripcion");
    console.log(`esto es el nombre de la pelicula ${nombrePelicula}`);
 
  };
  
  formularioPeliculaNueva[0].addEventListener("submit", crearPelicula);