/*

map() é um método para manipulação de objetos do tipo
array que percorre todos os elementos de um array, executa
uma ação, e retorno um novo array.

*/

const nome = ['Beatriz', 'Júlia', 'Alberto', 'Igor']
const idade = [19, 21, 23, 17]

const nomeIdade = nome.map((item, index) => {
    return item + ": " + idade[index]
})

console.log(nomeIdade)