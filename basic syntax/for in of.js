// Um laço FOR tem sua declaração repetida até que sua condição seja falsa

let frutas = [
    'melancia',
    'abacaxi',
    'acerola',
    'caju',
    'goiaba',
    'tangerina'
]

let bebidas = {
    cha: 'morango',
    suco: 'uva',
    refrigerante: 'laranja',
    refresco: 'limão'
}

for (indice = 0; indice < frutas.length; indice++) {
    console.log(indice)
    // traz os indices da array 'frutas'
}


// FOR IN percorre todas as propriedades de um objeto a partir de uma variável específica, ou seja, executa repetição a partir de uma propriedade

// FOR IN em array

for (i in frutas) {
    console.log(i)
    // traz as propriedades (números em strings)
}

// FOR IN em objeto

for (i in bebidas) {
    console.log(i)
    // traz as propriedades do objeto 'bebidas'
}


// ao contrário do for in, o FOR OF executa repetição a partir dos valores do objeto iterável

for (i of frutas) {
    console.log(i)
    //traz os valores da array 'frutas'
}

// FOR OF não funciona em objetos pois suas propriedades variam
// é possível chamar os valores utilizando a sintaxe 'objeto.propriedade', porém cada caractere do valor retorna em linhas separadas

for (i of bebidas.refresco) {
    console.log(i)
}