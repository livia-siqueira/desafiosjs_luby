/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Carioca';
console.log(championship);
/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Vasco da Gama', 'Nova Iguaçu', 'Botafogo', 'Madureira', 'Resende'];
/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/

function showTeamPosition(num) {
    var controlPosition = num;
    return (!!teams[--num]) ? 'O time que está em ' + controlPosition + 'º lugar é o ' + teams[num]
    : 'Não temos a informação do time que está nessa posição.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/

showTeamPosition(2); //'O time que está em 2º lugar é o Nova Iguaçu'
showTeamPosition(5); //'O time que está em 5º lugar é o Resende'
showTeamPosition(8); //'Não temos a informação do time que está nessa posição.'
showTeamPosition(3); //'O time que está em 3º lugar é o Botafogo'


/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

var controlCounter = 20;
while (controlCounter < 30) {
    controlCounter++;
    return (controlCounter);
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/

function convertToHex(color) {
    var isColorHexaDecimal;
    switch (color) {
        case 'red':
            isColorHexaDecimal = '#FF0000';
            break;
        case 'blue':
            isColorHexaDecimal = '#0000ff';
            break;
        case 'pink':
            isColorHexaDecimal = '#ffc0cb';
            break;
        case 'gray':
            isColorHexaDecimal = '#808080';
            break;
        case 'green':
            isColorHexaDecimal = '#008000';
            break;
        default:
            return 'Não temos o equivalente Hexadecimal para ' + color + ' :/';
    }

    return 'O hexadecimal para a cor ' + color + ' é ' + isColorHexaDecimal;
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('red'); //'O hexadecimal para a cor red é #FF0000'
convertToHex('pink'); // 'O hexadecimal para a cor pink é #ffc0cb'
convertToHex('blue'); // 'O hexadecimal para a cor blue é #0000ff'
convertToHex('gray'); // 'O hexadecimal para a cor gray é #808080'
convertToHex('green'); // 'O hexadecimal para a cor green é #008000' 
convertToHex('orange'); // 'Não temos o equivalente Hexadecimal para orange'
convertToHex('black'); //'Não temos o equivalente Hexadecimal para black'
convertToHex('white'); //'Não temos o equivalente Hexadecimal para white'