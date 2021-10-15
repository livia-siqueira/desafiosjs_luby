(function () {
    'use strict';

    var name = 'Lívia';

    console.log('As letras do meu nome: ');
    for (var i = 0; i < name.length; i++) {
        console.log(name.charAt(i) + ' é a ' + (i + 1) + '° letra do meu nome');
    }

    var fullName = 'lívia-gabriele-siqueira';
    var names = fullName.split("-");
    var nameComplete = [];
    for (var i = 0; i < names.length; i++) {
        nameComplete[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);
    }
    console.log(nameComplete.join(' '));
    console.log(fullName); //nome com traço
   

    var myFriends = ['Lívia', 'Lucas', 'Flávia', 'Lúcia', 'Joana', 'Guilherme', 'Lúcio', 'Ana', 'Luiza'];
    var reduceArray = myFriends.reduce(function (acumulador, item, index) {
        var separator = ", ";
        if (index === myFriends.length - 1) {
            separator = " e "
        }
        return (acumulador + separator + item);

    }).concat(" são meus amigos!!!")
    console.log(reduceArray);

    var stringName = "Roberto";
    console.log(stringName.replace('to', 'ta'));

    var fernando = 'Fernando';
    console.log(fernando.substring(8, 3));

    var myName = 'Livia';
    var nameEnd = [];
    for (var i = 0; i < myName.length; i++) {
        if (i % 2 === 0) {
            nameEnd[i] = myName[i].toLocaleLowerCase();
        } else {
            nameEnd[i] = myName[i].toUpperCase();
        }
    }
    console.log(nameEnd.join(''));

})();