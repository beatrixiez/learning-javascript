// LET

let nome1 = 'João',
    nome2 = 'Maria'

console.log(`${nome1} nasceu em 1984.`)
console.log(`Em 2000, ${nome1} conheceu ${nome2}.`)
console.log(`${nome1} casou-se com ${nome2} em 2012.`)
console.log(`${nome2} teve 1 filho com ${nome1} em 2015.`)
console.log(`O filho de ${nome1} e ${nome2} se chama Eduardo.`)

let idadeHomem
console.log(idadeHomem)
// exibe  undefined  indicando que a variável não possui valor definido

idadeHomem = 47
console.log(idadeHomem)
// agora variável teve um valor atribuído

idadeHomem = 49
console.log(idadeHomem)
// agora a variável teve seu valor alterado

// uma constatante precisa iniciar com um valor, já que ela não pode ser alterada


// CONST

const nome = 'Pedro'
console.log(nome)

const outroNome = 'Júlia'
console.log(outroNome)

// optar por evoluir o valor de uma variável ao invés de alterar


/*
exemplo: calcular IMC
peso / (altura * altura)
*/

const primeiroNome = 'Beatriz'
const segundoNome = 'Miranda'
const idade = 19
const peso = 60
const altura = 1.68

let imc = peso / (altura * altura)

console.log(`${primeiroNome} ${segundoNome} tem ${idade} anos e pesa ${peso} quilos.\nEla tem ${altura} de altura e seu IMC é de ${imc}.`)
