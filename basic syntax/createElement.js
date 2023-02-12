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

console.log(box.clientHeight) // exibe a altura do elemento
console.log(box.clientWidth) // exibe a largura do elemento
console.log(box.offsetTop) // retorna a distancia do do elemento até o topo da página
console.log(box.offsetLeft) // retorna a distancia do do elemento até a margem esquerda da página
console.log(window.innerWidth) // retorna a largura da janela, sem toolbar e scrollbar
console.log(window.outerWidth) // retorna a largura da janela, incluindo toolbar e scrollbar
console.log(window.pageYOffset) // retorna os pixels que um documento rolou no eixo Y

const media = window.matchMedia('(max-width: 540px)') // retorna true or false com os dados da consulta

if(media.matches) {
    console.log('Tela é mobile') // se for menor que 540px
} else {
    console.log('Tela é desktop') // se for maior que 540px
}