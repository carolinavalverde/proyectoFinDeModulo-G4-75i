

const estatusDelUsuarioPresente =
  JSON.parse(sessionStorage.getItem("estatusUsuarioKey")) || "nadie";

let elementos = document.getElementsByClassName("nav-link");

if(estatusDelUsuarioPresente !== "nadie"){
  if (estatusDelUsuarioPresente === "Administrador") {
    for (let i = 0; i < elementos.length; i++) {
      if (elementos[i].textContent === "Administrador") {
        elementos[i].textContent = estatusDelUsuarioPresente;
    
        elementos[i].classList.remove("d-none");
    
        elementos[i].setAttribute("href", "../pages/admin.html");
      }
    }
  } else {
    for (let i = 0; i < elementos.length; i++) {
      if (elementos[i].textContent === "Administrador") {
        elementos[i].textContent = estatusDelUsuarioPresente;
    
        elementos[i].classList.remove("d-none");
    
        elementos[i].setAttribute("href", "../index.html");
      }
    }
  }
}