

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

function marcaVerde(elemento) {
  document.getElementById(elemento).classList.remove("is-invalid");
  document.getElementById(elemento).classList.add("is-valid");
}

function marcaRoja(elemento) {
  document.getElementById(elemento).classList.remove("is-valid");
  document.getElementById(elemento).classList.add("is-invalid");
}

const usuarios = JSON.parse(localStorage.getItem("usuariosKey")) || [];

const formularioInicioSesion =
  document.getElementsByClassName("formInicioSesion");


const logeo = (e) =>{
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const contrasena = document.getElementById("password").value.trim();

    if (contraCorrecta(email, contrasena) ) {
      marcaVerde("email");
      marcaVerde("password"); 
      window.location.href = "../index.html";     
    } else {
      marcaRoja("email");
      marcaRoja("password");
    }
    
}






formularioInicioSesion[0].addEventListener("submit", logeo);
