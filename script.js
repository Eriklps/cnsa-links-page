function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')


  const img = document.querySelector("#profile img")


  if(html.classList.contains('light')){

    img.setAttribute('src', 'assets/logo-cnsa-azul.png')
    img.setAttribute('alt','Foto de Mayk Brito, usando jaqueta preta, sem barba e óculos escuros. Fundo em gradiente roxo e azul')
  }else {

    img.setAttribute('src', 'assets/logo-cnsa-branco.png')
    img.setAttribute('alt','Foto de Mayk Brito, usando camisa preta, barba e óculos. Fundo Amarelo')
  }
}