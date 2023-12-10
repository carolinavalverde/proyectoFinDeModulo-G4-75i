import Usuario from "./classUsuario.js";

function contraCorrecta(contra, confirContra) {
    if (contra.length > 7 && contra === confirContra) {
        return true;
    } else{
        return false;
    }
}

function usuarioRepetido(nomUsuario){
    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].nombreUsuario === nomUsuario ) {
            return true;
        }        
    }
    return false;
}

function mensajeDeError(contrasena, usuario){
    if (!contrasena) {
        alert('No existe paridad entre la contraseña y la confirmacion de la misma, vuelve a intentarlo.');
    }
    if (usuario) {
        alert('El nombre de usuario elegido no esta disponible, intenta con uno diferente.');
    }
}

function guardarEnLocalStorage(){
    localStorage.setItem('usuariosKey', JSON.stringify(usuarios));
}

const formularioDeRegistro = document.querySelectorAll("form");
const usuarios = [];

const crearUsuario = (e) => {
  e.preventDefault(); 

  const nombreApellido = document.getElementById("nombreApellido").value;
  const nombreUsuario = document.getElementById("nombreUsuario").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const domicilio = document.getElementById("domicilio").value;
  const localidad = document.getElementById("ciudad").value;
  const codigoPostal = document.getElementById("codigoPostal").value;
  const contrasena = document.getElementById("contraseña").value;
  const confirContrasena = document.getElementById("confirmarContraseña").value;

  if (contraCorrecta(contrasena, confirContrasena) && !usuarioRepetido(nombreUsuario)) {
    const nuevoUsuario = new Usuario(
        false,
        nombreApellido,
        nombreUsuario,
        email,
        telefono,
        domicilio,
        localidad,
        codigoPostal,
        contrasena
      );
      usuarios.push(nuevoUsuario);
      formularioDeRegistro[1].reset();
      guardarEnLocalStorage();
      //una vez guardado el usuario de forma correcta me deberia redirigir a la pagina de inicio 
  } else {
    mensajeDeError(contraCorrecta(contrasena, confirContrasena),usuarioRepetido(nombreUsuario));
  }
 
};

formularioDeRegistro[1].addEventListener("submit", crearUsuario);
