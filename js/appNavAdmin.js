const nuevoUsuario = false;

function Usuario() {
    return nuevoUsuario ? 'admin' : 'user';
  }
  
  const tipoDeUsuario = Usuario();
  
  const itemNav = document.getElementById('itemNav');
  
  if (tipoDeUsuario === 'admin') {
    itemNav.style.display = 'block';
  } else {
    itemNav.style.display = 'none';
  }
