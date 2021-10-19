(function () {
    'use-strict';
    /*
 Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
 o código, conforme vimos na aula anterior. Quebrar as responsabilidades
 em funções, onde cada função faça somente uma única coisa, e faça bem feito.
 - Remova as duplicações de código;
 - agrupe os códigos que estão soltos em funções (declarações de variáveis,
 listeners de eventos, etc);
 - faça refactories para melhorar esse código, mas de forma que o mantenha com a
 mesma funcionalidade.
 */
    var $inputCalc = document.querySelector('[data-js="entryNumbers"]');
    var $buttonNumber = document.querySelectorAll('[data-js="buttonNumber"]');
    var $buttonOperations = document.querySelectorAll('[data-js="buttonOperation"]');
    var $buttonEndOperation = document.querySelector('[data-js="buttonEndOperation"]')
    var $buttonReset = document.querySelector('[data-js="reset"]');
    var regexs = {
        regexLastCaractere: /[+\-%*]$/g,
        regexGroupNumber: /([+\-*%])?(\d+(\.\d+)?)([+\-*%])?/g,
        regexFirstValue: /((^[+\-*%])?(\d+(\.\d+)?))/g,
        regexNoNumber: /\D$/g,
        regexJustNumber: /\d+/g,
    }

    function initialize() {
        initEvents();
    }

    function initEvents(){
        Array.prototype.forEach.call($buttonNumber, function (button) {
            button.addEventListener('click', handleClickAddCaracteres, false)
        });
        Array.prototype.forEach.call($buttonOperations, function (button) {
            button.addEventListener('click', handleClickAddOperatorsOrChangeTheLast, false);
        });
        $buttonEndOperation.addEventListener('click', handleClickResult, false);
        $buttonReset.addEventListener('click', cleanInput, false);
    }

    function handleClickAddCaracteres() {
        $inputCalc.value === '0' ? $inputCalc.value = '' : '';
        $inputCalc.value += this.value;
    }

    function handleClickAddOperatorsOrChangeTheLast() {
        regexs.regexLastCaractere.test($inputCalc.value) ? $inputCalc.value = $inputCalc.value.replace(regexs.regexLastCaractere, this.value)
            : handleClickAddCaracteres.call(this);
    }

    function cleanInput() {
        $inputCalc.value = 0;
    }

    function GetValuesOperation() {
        var textInput = $inputCalc.value.replace(regexs.regexLastCaractere, '');
        var groupsNumbers = textInput.match(regexs.regexGroupNumber);
        return groupsNumbers;
    }

    function Operation(oneValue, operador, lastValue) {
        switch (operador.toString()) {
            case '+':
                return (Number(oneValue) + Number(lastValue));
            case '-':
                return (Number(oneValue) - Number(lastValue));
            case '%':
                return (Number(oneValue) / Number(lastValue));
            case '*':
                return (Number(oneValue) * Number(lastValue));
        }
    }

    function handleClickResult() {
        var $result = GetValuesOperation().reduce(function (acumulador, atual) {
            var oneValue = acumulador.match(regexs.regexFirstValue);
            var operador = acumulador.match(regexs.regexNoNumber);
            var lastValue = atual.match(regexs.regexJustNumber);
            var Lastitem = atual.match(regexs.regexNoNumber);
            return Operation(oneValue, operador, lastValue) + Lastitem;
        })
        $inputCalc.value = $result;
    }

    initialize();

})(window, document);