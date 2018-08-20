function manager(obgect, handler) {
    for (let i in obgect) {
        return `New value: ${ handler(obgect) }`;
    }
}

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

function multiplication() {

}

function nameAndage() {

}

function reverseString() {

}

console.log(manager(controlArray, camelcaseConcat));