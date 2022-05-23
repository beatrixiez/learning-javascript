function calculadora() {
    const operacao = Number(prompt('Digite o número da operação a ser realizada:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7) {
        alert('Erro! Opção inválida.');
        calculadora()
    } else {
        let number1 = Number(prompt('Insira o primeiro valor:'));
        let number2 = Number(prompt('Insira o segundo valor:'));
        let resultado

        if (!number1 || !number2) {
            alert('Erro! Insira valores válidos.');
            calculadora()
        } else {
            function soma() {
                resultado = number1 + number2;
                alert(`${number1} + ${number2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao() {
                resultado = number1 - number2;
                alert(`${number1} - ${number2} = ${resultado}`);
                novaOperacao();
            }

            function multiplicacao() {
                resultado = number1 + number2;
                alert(`${number1} * ${number2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoReal() {
                resultado = number1 / number2;
                alert(`${number1} / ${number2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = number1 % number2;
                alert(`O resto da divisão entre ${number1} e ${number2} é igual a ${resultado}`);
                novaOperacao();
            }

            function potenciacao() {
                resultado = number1 ** number2;
                alert(`${number1} elevado à ${number2}ª potência é igual a ${resultado}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até logo!');
                } else {
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }
    }


    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao()
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao()
            break;
    }
}

calculadora();