// WHILE executa uma instrução 'enquanto' determinada condição for verdadeira
// A verificação da condição é feita antes da execução

let contadora = 0

while (contadora < 10) {
    contadora++;
    console.log(contadora)
    // exibe contadora de 1 até 10
}

// A execução para quando a condição for falsa, ou seja, quando a let contadora não for menor que 10


// DO WHILE executa uma instrução 'até que' determinada condição seja falsa
// A verificação da condição é feita depois da execução

let contador = 0

do {
  contador++;
  console.log(contador)
} while (contador < 10)


// a diferença do DO WHILE para o WHILE é que, como a execução é feita antes de verificar a condição, o DO WHILE será executado pelo menos uma vez, mesmo que a condição seja falsa, pois ela ainda não foi verificada