/**
 * Констроуктор для машин
 * @param {string} name
 * @param {num} age
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
 * @method leShifr шифрует строку
 * @method unShifr Дешифрует строку
 * @method showString Показывает оригинал строки
 * @method clear очищает все методы
 *
 */

function Shifr(string) {

    this.leShifr = function () {
        let str = '';
        for (let i = 0; i < string.length; i++) {
            str += i !== string.length - 1 ? string[i].charCodeAt() + ' ' : string[i].charCodeAt();
        }
        return str;
    };

    this.unShifr = function () {
        let deStr = '';
        this.leShifr().split(' ').forEach((item) => {
            deStr += String.fromCharCode(item);
        });
        return deStr;
    };

    this.showString = function () {
        return string;
    };

    this.clear = function () {
        return string = '';
    };
}


// let reve = new Shifr('dima 11 12 1985');
// console.log(reve.leShifr());
// console.log(reve.unShifr());
// console.log(reve.showString());
// console.log(reve.clear());
// console.log(reve.leShifr());



