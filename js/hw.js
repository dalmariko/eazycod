const getSquare = (width, height) => {
    this.getSquare = width * height;
    return this;
};

const rectangle = {
    width: 1,
    height: 1,
    getSquare: getSquare
};

console.log(rectangle.getSquare(2, 4));


