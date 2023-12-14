const usuarios = JSON.parse(localStorage.getItem("usuariosKey")) || [];

const formularioInicioSesion =
  document.getElementsByClassName("formInicioSesion");


const logeo = (e) =>{
    e.preventDefault();
    console.log("ya estoy en el boton inicio sesion");
}






formularioInicioSesion[0].addEventListener("submit", logeo);
