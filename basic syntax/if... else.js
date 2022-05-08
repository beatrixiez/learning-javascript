let jogador1 = 0
let jogador2 = 0
let placar

if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!')
} else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!')
} else {
    console.log('Ninguém marcou ponto')
}


// Aninhamento ou ninho de IFs

if (jogador1 != -1) {
    if (jogador1 > 0) {
        console.log('Jogador 1 marcou ponto!')
    } else if (jogador2 > 0) {
        console.log('Jogador 2 marcou ponto!')
    } else {
        console.log('Ninguém marcou ponto')
    }
}


// IF ternário

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Os jogadores são inválidos');
if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!')
} else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!')
} else {
    console.log('Ninguém marcou ponto')
}

