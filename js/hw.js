/**
 * Констроуктор для машин
 * @param name
 * @param age
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

