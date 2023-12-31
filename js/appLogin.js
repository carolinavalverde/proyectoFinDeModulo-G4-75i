import Usuario from "./classUsuario.js";

function contraCorrecta(elMail, contra) {
  for (let index = 0; index < usuarios.length; index++) {
    if (usuarios[index].email === elMail) {
      if (usuarios[index].contrasena === contra) {
        return true;
      }
    }
  }
  return false;
}

function esAdmin(elMail) {
  for (let index = 0; index < usuarios.length; index++) {
    if (usuarios[index].email === elMail) {
      return usuarios[index].administrador;
    }
  }
}

function marcaVerde(elemento) {
  document.getElementById(elemento).classList.remove("is-invalid");
  document.getElementById(elemento).classList.add("is-valid");
}

function marcaRoja(elemento) {
  document.getElementById(elemento).classList.remove("is-valid");
  document.getElementById(elemento).classList.add("is-invalid");
}

function traerNombre(elMail){
  for (let index = 0; index < usuarios.length; index++) {
    if (usuarios[index].email === elMail) {
      return usuarios[index].nombreApellido;
    }
  }
}

function mensajelogueoCorrecto(elMail){
  Swal.fire({
    icon: "success",
    title: `Hola ${traerNombre(elMail)}`,
    showConfirmButton: false,
    timer: 1500
  });
}

function mensajelogueoIncorrecto(){
  Swal.fire({
    icon: "error",
    title: `El email o contraseña son incorrectos.`,
    showConfirmButton: false,
    timer: 1500
  });
}

function guardarEnLocalSessionStorage() {
  sessionStorage.setItem("estatusUsuarioKey", JSON.stringify(estatusDelUsuarioPresente));
}

const usuarios = JSON.parse(localStorage.getItem("usuariosKey")) || [];
let estatusDelUsuarioPresente = JSON.parse(sessionStorage.getItem("estatusUsuarioKey")) || "nadie";

const formularioInicioSesion =
  document.getElementsByClassName("formInicioSesion");

const logeo = (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const contrasena = document.getElementById("password").value.trim();

  if (contraCorrecta(email, contrasena)) {
    marcaVerde("email");
    marcaVerde("password");
    if (esAdmin(email)) {
      estatusDelUsuarioPresente = "Adminitrador";
      guardarEnLocalSessionStorage();
      setTimeout(function() {
        window.location.href = "../pages/admin.html";
      }, 2000);      
    } else {  
      estatusDelUsuarioPresente = traerNombre(email);
      guardarEnLocalSessionStorage();
      setTimeout(function() {
        window.location.href = "../index.html";
      }, 2000);        
    }

    mensajelogueoCorrecto(email);
  } else {
    mensajelogueoIncorrecto();
    marcaRoja("email");
    marcaRoja("password");
  }
};

formularioInicioSesion[0].addEventListener("submit", logeo);
