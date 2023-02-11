/* 

algumas propriedades do DOM, que é uma 
representação orientada a objetos de uma página web

*/

const title = document.querySelector('h2')

// retorna o conteúdo em texto de um elemento
console.log(title.innerText)

// retorna DOMTokenList com o nome das classes do elemento
console.log(title.classList)

// retorna o ID do elemento
console.log(title.id)

const description = document.querySelector('.description')
console.log(description.className) // volta string com as classes da tag

// adiciona classes ao elemento
description.classList.add('paragraph', 'subtitle')

// remove classes do elemento
description.classList.remove('paragraph')

// adiciona uma classe caso ela mão exista e remove caso ela exista
description.classList.toggle('active')

// verifica a existencia de uma classe e retorna true ou false
description.classList.contains('active')

// troca uma classe por outra
description.classList.replace('description', 'paragraph')

const img = document.querySelector('img')

// traz o conteúdo (valor) do atributo selecionado
console.log(img.getAttribute('alt'))

// adiciona um novo atributo ou altera o valor de um já existente
img.setAttribute('name', 'novo atributo criado')
img.setAttribute('alt', 'Descrição da imagem alterada')

// remove um atributo
img.removeAttribute('name')