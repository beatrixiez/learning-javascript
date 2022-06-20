let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let varAaux = varA
varA = varB
varB = varC
varC = varAaux

/*

OU (FORMA MODERNA DE REALIZAR A MESMA AÇÃO)

[varA, varB, varC] = [varB, varC, varA]

*/

console.log(varA, varB, varC)