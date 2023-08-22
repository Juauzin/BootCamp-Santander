function calculadora() {
    const operacao = Number(prompt('Escolha uma operacao:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - multiplicação (*)\n 4 - Divisãoreal (/)\n 5 - divisãointeira (%)\n 6 - Potenciação (**)'));

    // verificando se a operação é válida
    if (!operacao || operacao >= 7) {
        alert('erro - operação inválida');
        calculadora();
    } else {
        //variaveis
        let n1 = Number(prompt('Digite o Numero'));
        let n2 = Number(prompt('Digite o Numero'));
        let resultado;
        // verificando se as variáveis são válidas
        if (!n1 || !n2) {
            alert('erro - parâmetros inválidos');
            calculadora();
        } else {
            //definindo funcoeas
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao()
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao()
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao()
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O restante da divisao entre ${n1}e ${n2} é igual a ${resultado}`)
                novaOperacao()
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} ** ${n2} = ${resultado}`)
                novaOperacao();
            }
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operacao?\n 1 - Sim\n 2 - Não');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até Mais!')
                } else {
                    alert('Digite uma opção Valida')
                    novaOperacao();
                }
            }

            /* if (operacao == 1) {
                  soma();
              } else if (opercao == 2) {
                  subtracao();
              } else if (operacao == 3) {
                  multiplicacao();
              } else if (operacao == 4) {
                  divisaoReal();
              } else if (operacao == 5) {
                  divisaoInteira();
              } else if (operacao == 6) {
                  potenciacao();
                  */

            //usando switch case
            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
                }      
            }
        }
    }
    calculadora();
