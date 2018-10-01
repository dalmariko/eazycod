function Building(name, floors) {
    this.name = name;
    this.floors = floors;

    this.getFloors = function () {
        return this.floors;
    };

    this.setFloors = function (floors) {
        return this.floors = floors;
    };

}


const somBuild = new Building('home', 5);
const setfloors = somBuild.setFloors(100);
console.log(setfloors);

function Home(name, floors, apartaments) {
    Building.apply(this, arguments);
    this.apartaments = apartaments;

    const getFloors = this.getFloors;
    this.getFloors = function () {
        getFloors.call(this);
        return {
            'этажи': this.floors,
            'всего квартир': this.floors * this.apartaments
        }
    }
}

const myHome = new Home('asd', 5, 32);
console.log(myHome.getFloors());


function Mart(name, floors, malls) {
    this.malls = malls;
    Home.apply(this, arguments);

    const getFloors = this.getFloors;
    this.getFloors = function () {
        getFloors.call(this);
        return {
            'этажи': this.floors,
            'всего магазинов': this.floors * this.malls
        }
    }
}

const myMart = new Mart('asd', 3, 50);
console.log(myMart.getFloors());


function User(name, registration) {
    this.name = name;
    this.registration = registration;
}

User.prototype.getInfo = function () {
    return {
        'name': this.name,
        'registration': this.registration
    }
};

function Admin(name, registration, superadmin) {
    User.apply(this, arguments);
    // this._superAdmin = superadmin;
    Admin.prototype.getInfo = function () {
        User.prototype.getInfo(this);
        return {
            'name': this.name,
            'registration': this.registration,
            'superadmin': superadmin
        }
    }

}


function Guest(name, registration, superadmin, validate) {
    User.apply(this, arguments);
    Guest.prototype.getInfo = function () {
        User.prototype.getInfo(this);
        return {
            'name': this.name,
            'registration': this.registration,
            'superadmin': superadmin,
            'validate': validate
        }
    }
}


Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;


const user = new User('kate', '11.09.1990');
console.log(user.getInfo());

const admin = new Admin('vasya', '12.23.1933', false);
console.log(admin.getInfo());

const guest = new Guest('anna', '16.11.99', false, 'lastWeack');
console.log(guest.getInfo());
console.log(guest.validate);

