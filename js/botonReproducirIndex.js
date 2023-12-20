function abrirEnlace() {
  const videoID = "8BBlFLcMiGA";
  const enlace = `https://www.youtube.com/watch?v=${videoID}`;
  window.open(enlace, "_blank");
}

document
  .getElementById("reproducirBtnPeliDestacada")
  .addEventListener("click", abrirEnlace);
