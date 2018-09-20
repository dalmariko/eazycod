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


