const nuevoUsuario = true;


function Usuario() {
  return nuevoUsuario ? 'admin' : 'user';
}
const tipoDeUsuario = Usuario
const itemAdmin = document.getElementById('itemAdmin');

if (tipoDeUsuario === 'admin') {
    itemAdmin.style.display = 'block';
  } else {
    itemAdmin.style.display = 'none';
  }
  