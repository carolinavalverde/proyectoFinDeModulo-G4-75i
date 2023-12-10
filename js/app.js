import Usuario from "./classUsuario.js";

const formularioDeRegistro = document.querySelectorAll("form");
const usuarios = [];
const crearUsuario = (e) => {
  e.preventDefault();

  const nombreApellido = document.getElementById('nombreApellido').value;
  const nombreUsuario = document.getElementById('nombreUsuario').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const domicilio = document.getElementById('domicilio').value;
  const localidad = document.getElementById('ciudad').value;
  const codigoPostal = document.getElementById('codigoPostal').value;
  const contraseña = document.getElementById('contraseña').value;

  const nuevoUsuario = new Usuario(false,nombreApellido,nombreUsuario,email,telefono,domicilio,localidad,codigoPostal,contraseña);
  usuarios.push(nuevoUsuario);

  console.log(usuarios[0]);
};

formularioDeRegistro[1].addEventListener("submit", crearUsuario);
