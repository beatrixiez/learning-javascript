let jogador1 = 0
let jogador2 = 0
let placar

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Os jogadores são inválidos'); {

    if (jogador1 > 0 && jogador2 < jogador1) {
        console.log('O jogador 1 marcou ponto!');
        placar = jogador1 > jogador2
    } else if (jogador2 > 0 && jogador1 < jogador2) {
        console.log('O jogador 2 marcou ponto!');
        placar = jogador2 > jogador1
    } else {
        console.log('Niguém marcou ponto!')
    }

}


// A expressão declarado dentro do SWITCH é comparada com cada CASE. Se o valor obtido na expressão é igual ao que foi declarado no CASE, então o bloco de código é executado


switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!')
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!')
        break;
    default:
        console.log('Ninguém ganhou.')
}


// BREAK finaliza a execução da condicional SWITCH

// DEFAULT é executado quando nenhum CASE for igual ao valor declarado na expressão SWITCH