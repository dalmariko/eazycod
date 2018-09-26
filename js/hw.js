/**
 * Констроуктор для машин
 *
 * @param {string} name
 * @param {number} age
 * @constructor
 *
 * @method getName {sring} return Name
 * @method getBerdYear {sring} return berdth year car
 *
 */

function Car(name, age) {
    this.name = name;
    this.age = age;

    this.getName = function () {
        return this.name.slice(0, 1).toUpperCase() + this.name.slice(1);
    };

    this.getBerdYear = function () {
        let Year = new Date().getFullYear();
        return Year - this.age;
    }
}

// let lexus = new Car('lexus',2);
// console.log(lexus.getName());
// console.log(lexus.getBerdYear());

/**
 * Класс для шифрования и дешифрования.
 *
 * @param string {string}
 * @constructor
 *
 * @method Shifr шифрует строку
 * @method unShifr Дешифрует строку
 * @method shifrMes Показывает оригинал строки
 * @method clean очищает все методы
 *
 */

function Shifr(string, key) {
    let res = [];

    this.Shifr = function () {
        for (let i = 0; i < string.length; i++) {
            res[i] = string[i].charCodeAt() ^ key[i % key.length].charCodeAt();
        }
        return res;
    };

    this.unShifr = function () {
        let unsif = '';
        for (let i = 0; i < res.length; i++) {
            unsif += String.fromCharCode(res[i] ^ key[i % key.length].charCodeAt());
        }
        return unsif;
    };

    this.shifrMes = function () {
        let mes = '';
        for (let i = 0; i < res.length; i++) {
            mes += String.fromCharCode(res[i]);
        }
        return mes;
    };

    this.clean = function () {
        string = '';
        key = '';
        res = '';
    };

}


// let reve = new Shifr('dima', 'D@%$');
//
// console.log(reve.Shifr());
// console.log(reve.shifrMes());
// console.log(reve.unShifr());
// console.log(reve.clean());
// console.log(reve.Shifr());
//

//Замыкание

function minus(num1 = 0){
   return function(num2 = 0) {
        return num1-num2;
    }
}

// console.log(minus(10)(6));
// console.log(minus(5)(6));
// console.log(minus(10)());
// console.log(minus()(6));
// console.log(minus()());


function MultiplyMaker(value) {
let rez=1;
  rez *= value;
    return function (value) {
       return rez *= value;
   };
}

// const multiply = MultiplyMaker(2);
// console.log(multiply(2));
// console.log(multiply(1));
// console.log(multiply(3));
// console.log(multiply(10));

// Модуль

const stringModule = (function () {
let str;

    function setString(value) {
        return str = value+'';
    }

    function getSting() {
        return str;
    }

    function reveString() {
        return str.split('').reverse().join('');
    }

    function lengthString() {
        return str.length;
    }
    return{
        setString,getSting,reveString,lengthString
    }
})();


// stringModule.setString('abcde');
// console.log(stringModule.getSting());
// console.log(stringModule.reveString());
// console.log(stringModule.lengthString());


// Модуль калькулятор

const calculatorModule = (function () {
   let rez;

    function setNum(num) {
         rez = num*1;
         return this;
    }

    function equally() {
        return rez.toFixed(2);
    }
    
    function sum(num) {
        rez += num;
        return this;
    }

    function multi(num) {
        rez *= num;
        return this;
    }

    function minus(num) {
        rez -= num;
        return this;
    }

    function divide(num) {
        rez /= num;
        return this;
    }

    function degree(num) {
        rez = Math.pow(rez,num);
        return this;
    }

    return{
        setNum,equally,sum,multi,minus,divide,degree
    }
})();


calculatorModule.setNum(5);
calculatorModule.sum(10);
calculatorModule.degree(4);
calculatorModule.divide(33.4);
calculatorModule.minus(.32);
calculatorModule.multi(.1);
console.log(calculatorModule.equally());


let go=calculatorModule.setNum(4.3543).sum(4).equally();
console.log(go);