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

const idades = alunos.every(alunos => alunos.idade < 25)
console.log(idades)

// método every( ) executa uma função para cada elemento de uma array
// o método retorna TRUE (e para) se TODOS dos elementos da array forem TRUE
// o método retorna FALSE se UM dos elementos da array forem FALSE