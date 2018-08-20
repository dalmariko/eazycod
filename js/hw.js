function manager(obgect, handler) {
    for (let i in obgect) {
        return `New value: ${ handler(obgect) }`;
    }
}

let numbers = [10,20,30];

let controlArray = ['camelcaseconcat', 'multiplication', 'nameandage', 'reversestring'];

function camelcaseConcat(element) {
    let rez = '';
    for (let index of element) {
        for (let i=0; i < index.length; i++) {
            rez += i === 0 ? index[i].toUpperCase() : index[i];
        }
    }
    return rez;
}

function multiplication(element) {
    let rez='';
    for (let index of element){
        rez += index*10+',';
    }
    return rez;
}

function nameAndage() {

}

function reverseString() {

}

console.log(manager(controlArray, camelcaseConcat));
console.log(manager(numbers, multiplication));