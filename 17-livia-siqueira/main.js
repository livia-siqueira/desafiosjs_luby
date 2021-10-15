(function () {
    'use strict';

    var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';

    var withMyName = text.replace(/Manuel Marques de Sousa/g, 'Lívia Gabriele Siqueira');
    console.log("With my name: ", withMyName);

    var withMyCity = text.replace(/brasileiro/g, 'sapucaiense');
    console.log("With my city: ", withMyCity);

    var noNumbers = text.replace(/d/g, '-');
    console.log("No numbers: ", noNumbers);

    var lettersNumbers = text.replace(/[D-Za-h]/g, '0');
    console.log("Exchange letters for 0: ", lettersNumbers);

    var noA = text.replace(/A/gi, '4');
    console.log("Exchange A and a for 4: ", noA);

    var phraseUpperCase = text.replace(/O Centauro de Luvas/g, function ($1) {
        return ($1).toUpperCase();
    })
    console.log(phraseUpperCase);

    var getMonthNumber = function getMonthNumber(nameMonth) {
        var numberMonth;
        switch (nameMonth) {
            case 'janeiro':
                numberMonth = '01';
                break;
            case 'fevereiro':
                numberMonth = '02';
                break;
            case 'março':
                numberMonth = '03';
                break;
            case 'abril':
                numberMonth = '04';
                break;
            case 'maio':
                numberMonth = '05';
                break;
            case 'junho':
                numberMonth = '06';
                break;
            case 'julho':
                numberMonth = '07';
                break;
            case 'agosto':
                numberMonth = '08';
                break;
            case 'setembro':
                numberMonth = '09';
                break;
            case 'outubro':
                numberMonth = '10';
                break;
            case 'novembro':
                numberMonth = '11';
                break;
            case 'dezembro':
                numberMonth = '12';
                break;
            default:
                "Mês inválido";
        }
        return numberMonth;
    }
    console.log(getMonthNumber('março'));
    console.log(getMonthNumber('setembro'));
    console.log(getMonthNumber('dezembro'));

    var regexDate = /(\d\d) de (junho|julho) de (\d\d\d\d)/g;
    console.log(regexDate);
    
    function replaceDate(text) {
        return text.replace(regexDate, function(){
            return arguments[1] + '/' + getMonthNumber(arguments[2]) + "/" + arguments[3];
        });
    }
    replaceDate(text);


})();