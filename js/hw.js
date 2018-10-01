function Building(name,floors) {
    this.name=name;
    this.floors=floors;

    this.getFloors=function () {
        return this.floors;
    };

    this.setFloors=function (floors) {
        return this.floors=floors;
    };

}


const somBuild =new Building('home',5);
const setfloors = somBuild.setFloors(100);
console.log(setfloors);

function Home(name,floors,apartaments) {
    Building.apply(this,arguments);
    this.apartaments = apartaments;

    const getFloors=this.getFloors;
            this.getFloors = function () {
                getFloors.call(this);
                return{
                    'этажи':this.floors,
                    'всего квартир':this.floors*this.apartaments
                }
            }
}

const myHome = new Home('asd',5,32);
console.log(myHome.getFloors());


function Mart(name,floors,malls) {
    this.malls=malls;
    Home.apply(this,arguments);

    const getFloors = this.getFloors;
        this.getFloors = function () {
            getFloors.call(this);
            return {
                'этажи':this.floors,
                'всего магазинов':this.floors*this.malls
            }
        }
}

const myMart= new Mart('asd',3,50);
console.log(myMart.getFloors());

