// Objetos são dados que possuem propriedades e valores que definem suas características

// Declarando um objeto

let pessoa = {
    nome: 'Beatriz',
    sobrenome: 'Silva',
    idade: 19,
    estudar: function () {
        alert('Estudando')
    }
}

// Acessando o valor de um objeto

console.log(pessoa['nome'])

// ou

console.log(pessoa.sobrenome)

// Manipulando objetos: desestruturação

var nome = pessoa.nome
console.log(nome)

var idade = pessoa.idade
console.log(idade)

// ou

var {nome, sobrenome, idade, estudar} = pessoa
console.log(nome, sobrenome, idade, estudar)

