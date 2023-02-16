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

const alunosFiltrados = alunos.filter(alunos => alunos.idade >= 18)
console.log(alunosFiltrados)

// método filter( ) cria uma nova array com os elementos que passam no teste de uma função criada
// o método não executa uma função para elementos vazios
// o método não altera a array original