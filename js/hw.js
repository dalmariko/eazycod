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

function Car(name,age) {
this.name=name;
this.age=age;

    this.getName=function () {
         return this.name.slice(0,1).toUpperCase()+this.name.slice(1);
    };

    this.getBerdYear = function () {
        let Year =new Date().getFullYear();
        return Year-this.age;
    }
}

// let lexus = new Car('lexus',2);
// console.log(lexus.getName());
// console.log(lexus.getBerdYear());



function Shifr(string) {
    let str='';
    this.leShifr=function () {

        for (let i = 0; i<string.length;i++){
            str += i!==string.length-1 ?  string[i].charCodeAt()+' ':string[i].charCodeAt();
            }
        return str;
    };

    this.showString = function () {
            let deStr='';
            let separStr = str.split(' ');
            console.log(separStr);
        separStr.forEach((item)=> {
            deStr += String.fromCharCode(item);
        });
        return deStr ;
    };

    this.clear=function () {
            return string='';
    };
}


let reve = new Shifr('dima');

console.log (reve.leShifr());
console.log (reve.showString());
console.log (reve.clear());

