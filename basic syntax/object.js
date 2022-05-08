// Objetos são dados que possuem propriedades e valores que definem suas características

// Declarando um objeto

var pessoa = {
    nome: 'Beatriz',
    sobrenome: 'Silva',
    idade: 19,
    emails: [
        'bia@email.com',
        'beatriz@email.com'
    ],
    endereco: {
        cidade: 'São Paulo',
        pais: 'Brasil'
    },
    estudar: function () {
        alert('Estudando')
    }
}


// Acessando o valor de um objeto

console.log(pessoa['nome'])

console.log(pessoa.sobrenome)


// Trocando o valor de uma propriedade

pessoa.sobrenome = 'Miranda'


// Inserindo uma nova propriedade

pessoa["ultimoNome"] = 'Barreto';
console.log(pessoa.ultimoNome)

pessoa.endereco['estado'] = 'São Paulo'
console.log(pessoa.endereco.estado)


// Manipulando objetos: desestruturação

var nome = pessoa.nome
console.log(nome)

var idade = pessoa.idade
console.log(idade)

// ou

var {nome, sobrenome, idade, emails, endereco: {cidade, pais}, estudar} = pessoa
console.log(nome, sobrenome, idade, emails, cidade, pais, estudar)

