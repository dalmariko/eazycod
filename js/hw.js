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


let reve = new Shifr('dima', 'D@%$');

console.log(reve.Shifr());
console.log(reve.shifrMes());
console.log(reve.unShifr());
console.log(reve.clean());
console.log(reve.Shifr());
