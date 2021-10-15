/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var newArray = [7, 6, 5, 4, 3];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function arrayFunction(newArray) {
    return newArray;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

function indiceArrayFunction(newArray) {
    return newArray[1];
}

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function valuesFunction(newArray, num) {
    return newArray[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var fiveValuesArray = ['Livia', 19, true, null, { prop1: 'Livia', prop2: '19 anos' }]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

valuesFunction(fiveValuesArray, 0);
valuesFunction(fiveValuesArray, 1);
valuesFunction(fiveValuesArray, 2);
valuesFunction(fiveValuesArray, 3);
valuesFunction(fiveValuesArray, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(name) {

    var objBook = {
        '1984': {
            quantidade: 388,
            autor: 'George Orwell',
            editora: 'Intriseca',
        },
        'Admirável Mundo Novo': {
            quantidade: 380,
            autor: 'Huxley',
            editora: 'Intriseca',
        },
        'Toda Luz que não podemos ver': {
            quantidade: 560,
            autor: 'Doerr',
            editora: 'Intriseca',
        }
    }
    return name !== undefined ? objBook[name] : objBook;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

book(); /* {
    '1984': { quantidade: 388, autor: 'George Orwell', editora: 'Intriseca' },
    'Admirável Mundo Novo': { quantidade: 380, autor: 'Huxley', editora: 'Intriseca' },
    'Toda Luz que não podemos ver': { quantidade: 560, autor: 'Doerr', editora: 'Intriseca' }
}

Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var titleBook = '1984';
var returnBook = book(titleBook)
var description = 'O livro ' + titleBook + ' tem ' + returnBook.quantidade + ' páginas';


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

var descriptionAutor = 'O autor do livro ' + titleBook + ' é ' + returnBook.autor; 
//'O autor do livro 1984 é George Orwell'


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

var descriptionEditora = 'O livro ' + titleBook + ' foi publicado pelo editora ' + returnBook.editora;
//'O livro 1984 foi publicado pelo editora Intriseca'