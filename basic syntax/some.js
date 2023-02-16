const alunos = [

    {
        nome: 'Ana',
        idade: 17
    },
    {
        nome: 'Pedro',
        idade: 26
    },
    {
        nome: 'Júlia',
        idade: 24
    },
    {
        nome: 'Marcos',
        idade: 18
    }

]

const idades = alunos.some(alunos => alunos.idade < 18)
console.log(idades)

// o método retorna TRUE (e para) se UM dos elementos da array forem TRUE
// o método retorna FALSE se TODOS dos elementos da array forem FALSE
// o método não executa uma função para elementos vazios
// o método não altera a array original