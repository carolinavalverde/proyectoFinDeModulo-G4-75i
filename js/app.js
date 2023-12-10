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
  const confircontrasena = document.getElementById("confirmarContraseña").value;

  if (contraCorrecta(contrasena, confircontrasena) && !usuarioRepetido(nombreUsuario)) {
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
  } else {
    alert(`Existe un problema con la contraseña, vuelvelo a intentar...${!usuarioRepetido(nombreUsuario)}`);
  }

  console.log(usuarios[usuarios.length-1]);
  console.log(usuarios.length);
};

formularioDeRegistro[1].addEventListener("submit", crearUsuario);
