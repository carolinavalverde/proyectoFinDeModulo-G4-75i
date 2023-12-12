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
function mensajeDeError() {
  Swal.fire({
    icon: "error",
    title: "Error en los datos",
    showConfirmButton: false,
    timer: 1500
  });
}

function borrarFormulario() {
  formularioDeRegistro[0].reset();
}

function guardarEnLocalStorage() {
  localStorage.setItem("usuariosKey", JSON.stringify(usuarios));
}

function alertConfirmaUsuarioNuevo(nombreDelUsuario) {
  Swal.fire({
    icon: "success",
    title: `El usuario ${nombreDelUsuario} fue creado con exito!`,
    showConfirmButton: false,
    timer: 1500,
  });
}

const formularioDeRegistro = document.getElementsByClassName(
  "textoPaginaregistro"
);
const usuarios = [];

const crearUsuario = (e) => {
  e.preventDefault();

  const nombreApellido = document
    .getElementById("nombreApellido")
    .value.trim()
    .toLowerCase();
  const nombreUsuario = document
    .getElementById("nombreUsuario")
    .value.trim()
    .toLowerCase();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const telefono = document.getElementById("telefono").value.trim();
  const domicilio = document
    .getElementById("domicilio")
    .value.trim()
    .toLowerCase();
  const localidad = document
    .getElementById("ciudad")
    .value.trim()
    .toLowerCase();
  const codigoPostal = document.getElementById("codigoPostal").value.trim();
  const contrasena = document.getElementById("contraseña").value.trim();
  const confirContrasena = document
    .getElementById("confirmarContraseña")
    .value.trim();

  if (
    esIgual(contrasena, confirContrasena) &&
    !usuarioRepetido(nombreUsuario) &&
    rangoDeCaracteres(nombreApellido, 5, 50) &&
    rangoDeCaracteres(nombreUsuario, 6, 30) &&
    rangoDeCaracteres(email, 5, 100) &&
    rangoDeCaracteres(telefono, 6, 10) &&
    rangoDeCaracteres(domicilio, 6, 30) &&
    rangoDeCaracteres(localidad, 6, 25) &&
    rangoDeCaracteres(codigoPostal, 3, 4) &&
    rangoDeCaracteres(contrasena, 8, 20)
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
    alertConfirmaUsuarioNuevo(nombreUsuario);
    //una vez guardado el usuario de forma correcta me deberia redirigir a la pagina de inicio
  } else {
    mensajeDeError();
  }
};

formularioDeRegistro[0].addEventListener("submit", crearUsuario);
