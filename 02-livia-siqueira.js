// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function sum(number1, number2) {
    return number1 + number2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var receive = sum(5, 7) + 5;

// Qual o valor atualizado dessa variável?

//17

// Declare uma nova variável, sem valor.

var myVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function addValue(myVar) {
    myVar = 90;
    return "O valor da váriavel agora é " + myVar + ".";
}

// Invoque a função criada acima.

addValue(myVar);

// Qual o retorno da função? (Use comentários de bloco).
// O valor da variável agora é 90.

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function numbersFunction(number1, number2, number3) {
    if (number1 !== undefined && number2 !== undefined && number3 !== undefined) {
        return (number1 * number2 * number3) + 2;
    }
    else {
        return "Preencha todos os valores corretamente!!";
    }
}

// Invoque a função criada acima, passando só dois números como argumento.

numbersFunction(4, 7);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// "Preencha todos os valores corretamente!!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

numbersFunction(4, 7, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//56

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function conditionalsNumber(number1, number2, number3) {

    if (number1 !== undefined && number2 !== undefined && number3 !== undefined) {
        return (number1 + number2) / number3;
    } else if (number1 !== undefined && number2 === undefined && number3 === undefined) {
        return number1;
    } else if (number1 !== undefined && number2 !== undefined && number3 === undefined) {
        return number1 + number2;
    } else if (number1 === undefined && number2 === undefined && number3 === undefined) {
        return false;
    } else {
        return null;
    }

}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

conditionalsNumber(); //false
conditionalsNumber(2); //2
conditionalsNumber(2, 3); //5
conditionalsNumber(2, 3, 2); //2.5