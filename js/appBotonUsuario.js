const estatusDelUsuarioPresente =
  JSON.parse(localStorage.getItem("estatusUsuarioKey")) || "nadie";

let elementos = document.getElementsByClassName("nav-link");
let urlActual = window.location.href.slice(-10);
console.log(urlActual);

for (let i = 0; i < elementos.length; i++) {

  if (elementos[i].textContent === "Administrador") {
    elementos[i].textContent = estatusDelUsuarioPresente; 
    elementos[i].classList.remove("d-none"); 
    elementos[i].setAttribute("href", "../pages/admin.html");
  }
}

console.log(estatusDelUsuarioPresente);
