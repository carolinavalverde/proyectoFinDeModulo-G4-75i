

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


const usuarios = JSON.parse(localStorage.getItem("usuariosKey")) || [];

const formularioInicioSesion =
  document.getElementsByClassName("formInicioSesion");


const logeo = (e) =>{
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const contrasena = document.getElementById("password").value.trim();

    if (contraCorrecta(email, contrasena) ) {
      
    } else {
      
    }
    console.log(`el mail: ${email}`);
    console.log(`la contraseña: ${contrasena}`);
}






formularioInicioSesion[0].addEventListener("submit", logeo);
