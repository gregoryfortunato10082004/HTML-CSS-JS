function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png") //ajustar/modificar o atributo
    img.setAttribute("alt", "Foto 3x4 Gregory Fortunato com fundo verde")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
