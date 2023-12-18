const nuevoUsuario = true;

function Usuario() {
    return nuevoUsuario ? 'admin' : 'user';
  }
  
  const tipoDeUsuario = Usuario();
  
  const itemNav = document.getElementById('itemNav');
  
  
