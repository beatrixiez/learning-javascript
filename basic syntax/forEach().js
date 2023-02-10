// forEach(  ) é um método que executa uma função em cada item de um array
// parametros em ordem: (item, index, array)

const nomes = ['Beatriz', 'Luiz', 'Pedro', 'Ana']

nomes.forEach((item) => {
    item = 'Nome do aluno: ' + item
    console.log(item)
})