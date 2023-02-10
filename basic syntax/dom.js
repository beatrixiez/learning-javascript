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