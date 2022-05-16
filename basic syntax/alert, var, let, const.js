// exibição de uma mensagem na tela

alert('Esta mensagem será exibida');

// tipos primitivos de variáveis

// boolean
let vOUf = false;
console.log(typeof(vOUf));

// number
let numeroQualquer = 19;
console.log(typeof(numeroQualquer));

// string
let nome = 'Beatriz';
console.log(typeof(nome));

// declaração de variáveis e constantes

var variavel = 'Ana';
variavel = 'Beatriz';
console.log(variavel);

let idade = 18;
idade = 19;
console.log(idade);

const genero = 'feminino';
console.log(genero);

// escopo global e local

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal()

// a variável 'escopoGlobal' pode ser acessada e alterada em qualquer lugar do código, enquanto a 'escopoLocalInterno', declarada dentro de uma função, só pode ser acessada pelo console.log quando o mesmo estiver no mesmo bloco de código, no caso, na mesma função.



