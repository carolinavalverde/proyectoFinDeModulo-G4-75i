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
    timer: 1500,
  });
}

function borrarFormulario() {
  formularioDeRegistro[0].reset();
  document.getElementById("nombreApellido").classList.remove("is-invalid");
  document.getElementById("nombreUsuario").classList.remove("is-invalid");
  document.getElementById("email").classList.remove("is-invalid");
  document.getElementById("telefono").classList.remove("is-invalid");
  document.getElementById("domicilio").classList.remove("is-invalid");
  document.getElementById("ciudad").classList.remove("is-invalid");
  document.getElementById("codigoPostal").classList.remove("is-invalid");
  document.getElementById("contraseña").classList.remove("is-invalid");
  document.getElementById("confirmarContraseña").classList.remove("is-invalid");

  document.getElementById("nombreApellido").classList.remove("is-valid");
  document.getElementById("nombreUsuario").classList.remove("is-valid");
  document.getElementById("email").classList.remove("is-valid");
  document.getElementById("telefono").classList.remove("is-valid");
  document.getElementById("domicilio").classList.remove("is-valid");
  document.getElementById("ciudad").classList.remove("is-valid");
  document.getElementById("codigoPostal").classList.remove("is-valid");
  document.getElementById("contraseña").classList.remove("is-valid");
  document.getElementById("confirmarContraseña").classList.remove("is-valid");
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

//corregir esta clase por que no marca los campos que se llenaron de forma correcta
function marcarCampos(
  nombreApellido,
  usuario,
  email,
  tel,
  domicilio,
  localidad,
  codigoP,
  contra,
  confContra
) {
  if (!esIgual(contra, confContra)) {
    document.getElementById("contraseña").classList.add("is-invalid");
    document.getElementById("confirmarContraseña").classList.add("is-invalid");
  } else {
    document.getElementById("contraseña").classList.add("is-valid");
    document.getElementById("confirmarContraseña").classList.add("is-valid");
  }

  if (rangoDeCaracteres(nombreApellido, 5, 50)) {
    document.getElementById("nombreApellido").classList.add("is-valid");
  } else {
    document.getElementById("nombreApellido").classList.add("is-invalid");
  }

  console.log(`esto es lo que trae como usuario ${usuario} `);

  if (rangoDeCaracteres(usuario, 6, 30) && !usuarioRepetido(usuario)) {
    document.getElementById("nombreUsuario").classList.add("is-valid");
    console.log("si a entrao");
  } else {
    console.log("no entro");
    document.getElementById("nombreUsuario").classList.add("is-invalid");
  }

  if (rangoDeCaracteres(email, 5, 100)) {
    document.getElementById("email").classList.add("is-valid");
  } else {
    document.getElementById("email").classList.add("is-invalid");
  }

  if (rangoDeCaracteres(tel, 6, 10)) {
    document.getElementById("telefono").classList.add("is-valid");
  } else {
    document.getElementById("telefono").classList.add("is-invalid");
  }

  if (rangoDeCaracteres(domicilio, 6, 30)) {
    document.getElementById("domicilio").classList.add("is-valid");
  } else {
    document.getElementById("domicilio").classList.add("is-invalid");
  }

  if (rangoDeCaracteres(localidad, 6, 25)) {
    document.getElementById("ciudad").classList.add("is-valid");
  } else {
    document.getElementById("ciudad").classList.add("is-invalid");
  }

  if (rangoDeCaracteres(codigoP, 3, 4)) {
    document.getElementById("codigoPostal").classList.add("is-valid");
  } else {
    document.getElementById("codigoPostal").classList.add("is-invalid");
  }
}

const formularioDeRegistro = document.getElementsByClassName(
  "textoPaginaregistro"
);
const usuarios = JSON.parse(localStorage.getItem("usuariosKey")) || [];

const crearUsuario = (e) => {
  e.preventDefault();

  const nombreApellido = document.getElementById("nombreApellido");
  const nombreUsuario = document.getElementById("nombreUsuario");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const domicilio = document.getElementById("domicilio");
  const localidad = document.getElementById("ciudad");
  const codigoPostal = document.getElementById("codigoPostal");
  const contrasena = document.getElementById("contraseña");
  const confirContrasena = document.getElementById("confirmarContraseña");

  if (
    esIgual(contrasena.value, confirContrasena.value) &&
    !usuarioRepetido(nombreUsuario.value) &&
    rangoDeCaracteres(nombreApellido.value, 5, 50) &&
    rangoDeCaracteres(nombreUsuario.value, 6, 30) &&
    rangoDeCaracteres(email.value, 5, 100) &&
    rangoDeCaracteres(telefono.value, 6, 10) &&
    rangoDeCaracteres(domicilio.value, 6, 30) &&
    rangoDeCaracteres(localidad.value, 6, 25) &&
    rangoDeCaracteres(codigoPostal.value, 3, 4) &&
    rangoDeCaracteres(contrasena.value, 8, 20)
  ) {
    const nuevoUsuario = new Usuario(
      false,
      nombreApellido.value.trim().toLowerCase(),
      nombreUsuario.value.trim().toLowerCase(),
      email.value.trim().toLowerCase(),
      telefono.value.trim(),
      domicilio.value.trim().toLowerCase(),
      localidad.value.trim().toLowerCase(),
      codigoPostal.value.trim(),
      contrasena.value.trim()
    );
    usuarios.push(nuevoUsuario);
    borrarFormulario();
    guardarEnLocalStorage();
    alertConfirmaUsuarioNuevo(usuarios[usuarios.length-1].nombreUsuario); 
    //una vez guardado el usuario de forma correcta me deberia redirigir a la pagina de inicio
  } else {
    marcarCampos(
      nombreApellido.value,
      nombreUsuario.value,
      email.value,
      telefono.value,
      domicilio.value,
      localidad.value,
      codigoPostal.value,
      contrasena.value,
      confirContrasena.value
    );
    mensajeDeError();
  }
};

formularioDeRegistro[0].addEventListener("submit", crearUsuario);