function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img do perfil
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // Modo claro ativo: trocar imagem e alt
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto 3x4 Gregory Fortunato com fundo verde")
  } else {
    // Modo escuro ativo: imagem padrão e alt original
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute("alt", "Foto 3x4 Gregory Fortunato com fundo preto")
  }
}
