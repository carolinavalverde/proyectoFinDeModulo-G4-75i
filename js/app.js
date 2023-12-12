import Usuario from "./classUsuario.js";

function esIgual(textoUno, textoDos) {
  if (textoUno === textoDos) {
    return true;
  } else {
    return false;
  }
}

function usuarioRepetido(nomUsuario) {
  for (let index = 0; index < usuarios.length; index++) {
    if (usuarios[index].nombreUsuario === nomUsuario) {
      return true;
    }
  }
  return false;
}

function rangoDeCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    return false;
  }
}

//esta funcion deberia ser remplazada por una solucion mas estetica
function mensajeDeError(contrasena, usuario) {
  if (!contrasena) {
    alert(
      "No existe paridad entre la contraseña y la confirmacion de la misma, vuelve a intentarlo."
    );
  }
  if (usuario) {
    alert(
      "El nombre de usuario elegido no esta disponible, intenta con uno diferente."
    );
  }
  alert('existe un error en alguno de los campos');
}

function borrarFormulario() {
  formularioDeRegistro[0].reset();
}

function guardarEnLocalStorage() {
  localStorage.setItem("usuariosKey", JSON.stringify(usuarios));
}

const formularioDeRegistro = document.getElementsByClassName(
  "textoPaginaregistro"
);
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

  if (
    esIgual(contrasena, confirContrasena) &&
    !usuarioRepetido(nombreUsuario) &&
    rangoDeCaracteres(nombreApellido,5,50) &&
    rangoDeCaracteres(nombreUsuario,6,30) &&
    rangoDeCaracteres(email,5,100) &&
    rangoDeCaracteres(telefono,6,10) &&
    rangoDeCaracteres(domicilio,6,30) &&
    rangoDeCaracteres(localidad,6,25) &&
    rangoDeCaracteres(codigoPostal,3,4) &&
    rangoDeCaracteres(contrasena,8,20) 
  ) {
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
    borrarFormulario();
    guardarEnLocalStorage();
    //una vez guardado el usuario de forma correcta me deberia redirigir a la pagina de inicio
  } else {
    mensajeDeError(
      contraCorrecta(contrasena, confirContrasena),
      usuarioRepetido(nombreUsuario)
    );
  }
};

formularioDeRegistro[0].addEventListener("submit", crearUsuario);
