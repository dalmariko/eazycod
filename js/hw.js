// (function () {
//     function manager(obgect, handler) {
//         for (let i in obgect) {
//             return `New value: ${ handler(obgect) }`;
//         }
//     }
//
//     let numbers = [10, 20, 30];
//
//     let users = [
//         {
//             age: 25,
//             name: 'Dima'
//         },
//         {
//             age: 21,
//             name: 'Vasja'
//         }
//     ];
//
//     let abs123 = ['123', 'abc'];
//
//     let fullName = ['neo,', 'my', 'name', 'trinity'];
//
//     let controlArray = [
//         {
//             'function': camelcaseConcat,
//             'array': fullName
//         },
//         {
//             'function': multiplication,
//             'array': numbers
//         },
//         {
//             'function': nameManage,
//             'array': users
//         },
//         {
//             'function': reverseString,
//             'array': abs123
//         }
//     ];
//
//     function camelcaseConcat(element) {
//         let rez = '';
//         for (let index of element) {
//             for (let i = 0; i < index.length; i++) {
//                 rez += i === 0 ? index[i].toUpperCase() : index[i];
//             }
//         }
//         return rez;
//     }
//
//     function multiplication(element) {
//         let rez = '';
//         for (let index of element) {
//             rez += index * 10 + ',';
//         }
//         return rez;
//     }
//
//     function nameManage(elements) {
//         let rez = '';
//         for (let element of elements) {
//             rez += `${element['name']} is ${element['age']},`;
//         }
//         return rez;
//     }
//
//     function reverseString(element) {
//         let rez = '';
//         for (let index of element) {
//             for (let i = index.length - 1; i >= 0; i--) {
//                 rez += index[i];
//             }
//             rez += ',';
//         }
//         return rez;
//     }
//
//
//     for (let callbecs of controlArray) {
//         console.log( manager(callbecs['array'],callbecs['function']) );
//     }
//
// })();

(function () {

    let arr = [1, 21, 31, 12, 21, 12, 1, 1, 1, 10];

    function avrage(arr) {
        let sum = 0;
        for (let index of arr) {
            sum += index;
        }
        return sum / arr.length;
    }

    // console.log(avrage(arr));

    // 2. создать функцию которая принимает массив чисел первым аргументом и
    // втом аргументом число которое указывает на то сколько раз каждая из цифр в
    // массиве может повториться. пример вызова функции
    // deleteNth([20,37,20,21], 1) -> результат новый массив [20,37,21]
    // deleteNth([1,1,3,3,7,2,2,2,2], 3) -> результат новый массив [1, 1, 3, 3, 7, 2, 2, 2]


    function delNum(arr, repiat) {
        let finish = [];

        for (let x = 0; x < arr.length; x++) {

        }
        return finish;
    }

    console.log(delNum([20, 37, 20, 21], 1));



})();