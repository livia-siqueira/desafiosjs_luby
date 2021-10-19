(function (win, doc) {
    'use-scrict';
    /*
    Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
    métodos semelhantes aos que existem no array, mas que sirvam para os
    elementos do DOM selecionados.
    Crie os seguintes métodos:
    - forEach, map, filter, reduce, reduceRight, every e some.
    Crie também métodos que verificam o tipo do objeto passado por parâmetro.
    Esses métodos não precisam depender de criar um novo elmento do DOM, podem
    ser métodos estáticos.
    Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
    no objeto, como nos exemplos abaixo:
    DOM.isArray([1, 2, 3]); // true
    DOM.isFunction(function() {}); // true
    DOM.isNumber('numero'); // false
    Crie os seguintes métodos para verificação de tipo:
    - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    O método isNull deve retornar `true` se o valor for null ou undefined.
    */

    var a = new DOM('[data-js="link"]');
    var numberCounterTest = 0;
    var arrayMapTest;
    var arrayFilterTest;
    var testEvery;
    var testSome;

    function DOM(textString) {
        this.element = doc.querySelectorAll(textString);
    }

    DOM.prototype.on = function on(typeEvent, funCallback) {
        Array.prototype.forEach.call(this.element, function (element) {
            element.addEventListener(typeEvent, funCallback, false);
        })
    }

    DOM.prototype.off = function off(typeEvent, funCallback) {
        Array.prototype.forEach.call(this.element, function (element) {
            element.removeEventListener(typeEvent, funCallback, false);
        })
    }

    DOM.prototype.get = function get() {
        return this.element;

    }

    DOM.prototype.forEach = function forEach () {
        return Array.prototype.forEach.apply(this.element, arguments)
    };

    DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.element, arguments);
    }

    DOM.prototype.filter = function filter() {
        return Array.prototype.filter.apply(this.element, arguments);
    }

    DOM.prototype.reduce = function reduce() {
        return Array.prototype.reduce.apply(this.element, arguments);
    }
    DOM.prototype.reduceRigth = function reduceRigth() {
        return Array.prototype.reduceRight.apply(this.element, arguments);
    }

    DOM.prototype.every = function every() {
        return Array.prototype.every.apply(this.element, arguments);
    }

    DOM.prototype.some = function some() {
        return Array.prototype.some.apply(this.element, arguments);
    }

    DOM.isArray = function isArray(test) {
        return testType(test, "[object Array]");
    }

    DOM.isFunction = function isFunction(test) {
        return testType(test, "[object Function]");
    }

    DOM.isObject = function isArray(test) {
        return testType(test, "[object Object]");
    }

    DOM.isNumber = function isArray(test) {
        return testType(test, "[object Number]");
    }
    DOM.isString = function isString(test) {
        return testType(test, "[object String]");
    }

    DOM.isBoolean = function isBoolean(test) {
        return testType(test, "[object Boolean]");
    }

    DOM.isNull = function (test) {
        return testType(test, "[object Null]") || testType(test, "[object Undefined]");
    }

    function testType(test, type){
        return Object.prototype.toString.call(test) === type;
    }

    console.log("Titulos das tags a: ");
    a.forEach(function(item){
        return console.log(item.firstChild.nodeValue);
    })

    console.log("Array de elementos reduzidos ao valor de sua quantidade: ");
    a.reduce(function(){
        return numberCounterTest++;
    });
    console.log(numberCounterTest);

    console.log("Novo array, com 1 onde link=1 e 0 onde link!=1: ");
    arrayMapTest = a.map(function(item){
        return item.firstChild.nodeValue === "Link 1" ? 1 : 0;
    });
    console.log(arrayMapTest);

    console.log("Itens que possuem como texto 'Link=1': ");
    arrayFilterTest = a.filter(function(item){
        return item.firstChild.nodeValue === "Link 1";
    });
    console.log(arrayFilterTest);

    console.log("Todos os valores são igual a Link 1? ")
    testEvery = a.every(function(item) {
        return item.firstChild.nodeValue === "Link 1";
    });
    console.log(testEvery);

    console.log("Algum valor é igual a Link 1? ");
    testSome = a.some(function(item){
        return item.firstChild.nodeValue === "Link 1";
    })
    console.log(testSome);

    console.log("Testes de tipos: ");
    console.log("'a' é string? " + DOM.isString('a'));
    console.log("'function(){}' é function? " + DOM.isFunction(()=>{}));
    console.log("'a' é número? " + DOM.isNumber('a'));
    console.log("'a' é objeto? " + DOM.isObject('a'));
    console.log("'null' é null? " + DOM.isNull(null));
    console.log("'undefined' é undefined? " + DOM.isNull(undefined));
    console.log("'a'é null? " + DOM.isNull('a'));
    console.log("'a' é booleano? " + DOM.isBoolean('a'));
    console.log("'true' é booleano? " + DOM.isBoolean(true));
    console.log("'[]' é array? " + DOM.isArray([]));
    console.log("'a' é array? " + DOM.isArray('a'));



})(window, document);