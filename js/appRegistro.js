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

function marcaVerde(elemento) {
  document.getElementById(elemento).classList.remove("is-invalid");
  document.getElementById(elemento).classList.add("is-valid");
}

function marcaRoja(elemento) {
  document.getElementById(elemento).classList.remove("is-valid");
  document.getElementById(elemento).classList.add("is-invalid");
}

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
  if (!esIgual(contra, confContra) || !validarContrasena(contra)) {
    marcaRoja("contraseña");
    marcaRoja("confirmarContraseña");
  } else {
    marcaVerde("contraseña");
    marcaVerde("confirmarContraseña");
  }

  if (validarNombreApellido(nombreApellido)) {
    marcaVerde("nombreApellido");
  } else {
    marcaRoja("nombreApellido");
  }

  if (validarNombreUsuario(usuario) && !usuarioRepetido(usuario)) {
    marcaVerde("nombreUsuario");
  } else {
    marcaRoja("nombreUsuario");
  }

  if (rangoDeCaracteres(email, 5, 100) && validarMail(email)) {
    marcaVerde("email");
  } else {
    marcaRoja("email");
  }

  if (validarTel(tel)) {
    marcaVerde("telefono");
  } else {
    marcaRoja("telefono");
  }

  if (validarDomicilio(domicilio)) {
    marcaVerde("domicilio");
  } else {
    marcaRoja("domicilio");
  }

  if (validarLocalidad(localidad)) {
    marcaVerde("ciudad");
  } else {
    marcaRoja("ciudad");
  }

  if (validarCodigoPostal(codigoP)) {
    marcaVerde("codigoPostal");
  } else {
    marcaRoja("codigoPostal");
  }
}

function validarMail(mail) {
  const patron =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  if (patron.test(mail)) {
    return true;
  } else {
    return false;
  }
}

function validarContrasena(contrasena) {
  const patron = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  if (patron.test(contrasena)) {
    return true;
  } else {
    return false;
  }
}

function validarNombreApellido(nombreApellido) {
  const patron = /^[a-zA-Z\s]{5,50}$/;
  if (patron.test(nombreApellido)) {
    return true;
  } else {
    return false;
  }
}

function validarNombreUsuario(nombUsuario) {
  const patron = /^[a-zA-Z0-9]{6,30}$/;
  if (patron.test(nombUsuario)) {
    return true;
  } else {
    return false;
  }
}

function validarTel(tel) {
  const patron = /^[0-9]{6,15}$/;
  if (patron.test(tel)) {
    return true;
  } else {
    return false;
  }
}

function validarDomicilio(domicilio) {
  const patron = /^[a-zA-Z0-9\s\.,'-]{6,30}$/;
  if (patron.test(domicilio)) {
    return true;
  } else {
    return false;
  }
}

function validarLocalidad(localidad) {
  const patron = /^[a-zA-Z\s]{6,25}$/;
  if (patron.test(localidad)) {
    return true;
  } else {
    return false;
  }
}

function validarCodigoPostal(cp) {
  const patron = /^[0-9]{3,10}$/;
  if (patron.test(cp)) {
    return true;
  } else {
    return false;
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
    validarContrasena(contrasena.value) &&
    !usuarioRepetido(nombreUsuario.value) &&
    validarNombreApellido(nombreApellido.value) &&
    validarNombreUsuario(nombreUsuario.value) &&
    validarMail(email.value) &&
    rangoDeCaracteres(email.value, 5, 100) &&
    validarTel(telefono.value) &&
    validarDomicilio(domicilio.value) &&
    validarLocalidad(localidad.value) &&
    validarCodigoPostal(codigoPostal.value) &&
    rangoDeCaracteres(contrasena.value, 8, 20)
  ) {
    const nuevoUsuario = new Usuario(
      true,
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
    alertConfirmaUsuarioNuevo(usuarios[usuarios.length - 1].nombreUsuario);
    setTimeout(function() {
      window.location.href = "../index.html";
    }, 2000);   
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
