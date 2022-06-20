// escopo global e local

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal()

/*
a variável 'escopoGlobal' pode ser acessada e alterada em qualquer
lugar do código, enquanto a 'escopoLocalInterno', declarada dentro de 
uma função, só pode ser acessada pelo console.log quando o mesmo estiver 
no mesmo bloco de código, no caso, na mesma função.
 */