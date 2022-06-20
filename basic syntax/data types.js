// STRINGS: manipulam e armazenam textos
// necessitam de aspas simples, aspas duplas ou crases

let nome = 'Beatriz Miranda'
console.log(nome)
// exibe   Beatriz Miranda   no console

console.log('Beatriz Miranda')
// exibe   Beatriz Miranda   no console

console.log("Beatriz Miranda")
// exibe   Beatriz Miranda   no console

console.log("Beatriz 'Miranda'")
// exibe   Beatriz 'Miranda'   no console

console.log('Beatriz "Miranda"')
// exibe   Beatriz "Miranda"   no console

console.log(`'Beatriz' "Miranda"`)
// exibe   'Beatriz' "Miranda"   no console
// essas são as template strings

console.log("Beatriz \"Miranda\"")
// exibe   Beatriz "Miranda"   no console
// utilizado \' ou \" no início e fim de um texto, também é possível realçá-lo com aspas

console.log('Beatriz\'s house is near here')
// exibe   Beatriz's house is near here   no console

console.log('Beatriz\nMiranda')
//após \n realiza uma quebra de linha


// NUMBERS
// não ficam entre aspas

let numero = 12345
console.log(numero)
// exibe   12345   no console

console.log(12345)
// exibe   12345   no console

console.log(12.345)
// exibe   12.345   no console
// para representar números decimais utilizamos um ponto

console.log('Beatriz Miranda', 19)
// exibe   'Beatriz Miranda' 19   no console
// string + number


// exemplo
console.log('Meu nome é "Beatriz". Estou aprendendo \'JavaScript\' as', 14, 'horas da tarde.')


// UNDEFINED e NULL

let cidade
console.log(cidade)
// traz UNDEFINED pois a variável não teve um valor atribuído

let cep = null
console.log(cep)
// traz NULL, um valor de objeto não definido intencionalmente


// BOOLEAN (true OR false)
let vORf = false
console.log(vORf)


// TIPO DE DADOS PRIMITIVOS

console.log(typeof(nome)) // string
console.log(typeof(numero)) // number
console.log(typeof(cidade)) // undefined
console.log(typeof(cep)) // object
console.log(typeof(vORf)) // boolean