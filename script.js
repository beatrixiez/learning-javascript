// Objetos são dados que possuem propriedades e valores que definem suas características

// Declarando um objeto

let pessoa = {
    nome: 'Beatriz',
    sobrenome: 'Silva',
    ultimoNome: 'Barreto',
    idade: 19,
    estudar: function () {
        alert('Estudando')
    }
}

// Acessando o valor de um objeto

console.log(pessoa['nome'])

// ou

console.log(pessoa.idade)