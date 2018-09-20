const rectangle = {
    width: 1,
    height: 1,
    getSquare: function ()  {
        return this.width * this.height;
    }
};

// console.log(rectangle.getSquare(rectangle.width=5,rectangle.height=4));


const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price;
    },
    getPriceWithDiscount: function () {
        return this.price - (this.price * (parseFloat(this.discount) / 100));
    }
};

// console.log(price.getPriceWithDiscount(), price.getPrice());

const user = {
    name: 'Abraham',
    getName: function () {
        return this.name;
    }
};

// console.log(user.getName());

const heigth={
    hey:10,
    up: function () {
       return this.hey+=1
    }
};

// console.log(heigth.up());

const numerator = {
    value:1,
    double: function () {
        this.value*=2;
        return this;
    },
    plusOne: function () {
        this.value+=1;
        return this;
    },
    minusOne: function () {
        this.value-=1;
        return this;
    }
};

// console.log(numerator.double().plusOne().plusOne().minusOne());
// console.log(numerator.value);

const products = {
    price:11.4,
    quantity:1986,
    allPrice:function () {
        return this.price*this.quantity;
    }
};

// console.log(products.allPrice());

const details ={
    price:3,
    quantity:332
};

//  let total = products.allPrice.call( details );
// console.log( total );


let size = {
    width:5,
    heigth:10
},
    getSquare = function () {return this.width * this.heigth};

console.log( getSquare.call(size) );