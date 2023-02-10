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

const numbers = [2, 3, 5, 8]

const num = numbers.map(item => item * 2)
console.log(num)

const produtos = [
    {
        nome: 'monitor',
        preco: 1200
    },
    {
        nome: 'teclado',
        preco: 800
    },
    {
        nome: 'mouse',
        preco: 300
    },
    {
        nome: 'gabinete',
        preco: 4700
    }
]

let total = 0

produtos.map(item => total += item.preco)
console.log('Valor total dos produtos: ' + total)