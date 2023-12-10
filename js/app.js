import Usuario from "./classUsuario.js";

const formularioDeRegistro = document.querySelector('form');

const crearUsuario =(e)=>{
    e.preventDefault();
    
}

formularioDeRegistro.addEventListener('submit',crearUsuario);