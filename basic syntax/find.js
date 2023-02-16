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

const alunoMarcos = alunos.find(alunos => alunos.nome == 'Marcos')
console.log(alunoMarcos)

// método find( ) executa uma função para cada elemento de uma array
// retorna o valor do primeiro elemento que passar no teste
// retorna undefined se o elemento não é encontrado
// o método não executa uma função para elementos vazios
// o método não altera a array original

const alunoMarcosIndex = alunos.findIndex(alunos => alunos.nome == 'Marcos')
console.log(alunoMarcosIndex)

// traz o index do elemento