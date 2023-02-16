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

const idades = alunos.reduce( (acc, alunos) => {
    return acc + alunos.idade
}, 0 )

console.log(idades)

// método reduce( ) executa uma função para cada elemento de uma array
// o método retorna um valor único: o resultado do acumulado da função
// o método não executa uma função para elementos vazios
// o método não altera a array original