const link = document.createElement('a') // cria o elemento

link.setAttribute('href', 'https://github.com/beatrixiez') // define o atributo

const conteudo = document.createTextNode('Acesse o meu GitHub') // cria o conteudo do elemento

link.appendChild(conteudo) // adiciona o conteudo para dentro do elemento

const container = document.querySelector('#app') // seleciona o elemento div de id 'app'

container.appendChild(link) // adiciona o elemento criado ao elemento div#app


// manipulando css

link.style.color = 'gray' // altera cor do texto
link.style.textDecoration = 'none' // altera propriedade text-decoration

const box = document.querySelector('.box')

box.style.width = '100px' // altera a largura
box.style.height = '100px' // altera a altura
box.style.backgroundColor = 'blue' // altera a cor de fundo

