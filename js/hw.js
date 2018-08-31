(function () {
    function manager(obgect, handler) {
        let rez = 'New value: ';
        for (let i in obgect) {
            rez += handler(obgect[i]);
        }
        return rez;
    }

    let numbers = [10, 20, 30];

    let users = [
        {
            age: 25,
            name: 'Dima'
        },
        {
            age: 21,
            name: 'Vasja'
        }
    ];

    let abs123 = ['ABC', '123'];

    let fullName = ['neo,', 'my', 'name', 'trinity'];


    function camelcaseConcat(element) {
        let rez = '';
        for (let i = 0; i < element.length; i++) {
            rez += i === 0 ? element[i].toUpperCase() : element[i];
        }
        return rez;
    }

    function multiplication(element) {
        return element * 10 + ',';
    }

    function nameManage(element) {
        return `${element['name']} is ${element['age']},`;
    }

    function reverseString(element) {
        let rez = '';
        for (let i = element.length - 1; i >= 0; i--) {
            rez += element[i];
        }
        rez += ',';
        return rez;
    }


    let controlArray = [
        {
            'function': camelcaseConcat,
            'array': fullName
        },
        {
            'function': multiplication,
            'array': numbers
        },
        {
            'function': nameManage,
            'array': users
        },
        {
            'function': reverseString,
            'array': abs123
        }
    ];

    for (let callbecs of controlArray) {
        console.log(manager(callbecs['array'], callbecs['function']));
    }


// Написьть функцию для расчета кол-ва топлива ракеты которая будет лететь на марс
// Входные данные: 401000000км, 1000л/100км;
// Сколько литров потратит ракета что бы долитеть до марса?

    function fuelTuMars(Dlinna, liters, litKil) {

        let rashod = liters / litKil;
        return Dlinna * rashod;
    }


// Написать функцию, расчитает время полета
// Входные данные: 401000000км, 12000км/ч;
// За сколько часов ракета будет на марсе

    function timeToMars(Dlinna, speed) {
        let time = (Dlinna / speed);
        let celoeTime = parseInt(time);
        let drob = Math.floor((time - celoeTime) * 60);
        return celoeTime + drob;
    }

    console.log(fuelTuMars(401000000, 1000, 100));
    console.log(timeToMars(401000000, 12000));


})();

(function () {
    // Доп Задание
    // 1. Подсчитать сренее арифметическое значение чисел в массиве.

    let arr = [1, 21, 31, 12, 21, 12, 1, 1, 1, 10];

    function avrage(arr) {
        let sum = 0;
        for (let index of arr) {
            sum += index;
        }
        return sum / arr.length;
    }

    console.log(avrage(arr));

    // 2. создать функцию которая принимает массив чисел первым аргументом и
    // втом аргументом число которое указывает на то сколько раз каждая из цифр в
    // массиве может повториться. пример вызова функции
    // deleteNth([20,37,20,21], 1) -> результат новый массив [20,37,21]
    // deleteNth([1,1,3,3,7,2,2,2,2], 3) -> результат новый массив [1, 1, 3, 3, 7, 2, 2, 2]


    function delNum(arr, repeat) {
        let Count = {}, newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (Count.hasOwnProperty(arr[i]))
                Count[arr[i]] += 1;
            else
                Count[arr[i]] = 1;

            if (Count[arr[i]] > repeat)
                continue;

            newArr.push(arr[i]);

        }
        return newArr;
    }

    console.log(delNum([20, 37, 20, 21], 1));
    console.log(delNum([21, 20, 2, 21, 21, 20, 20, 20, 56, 27], 2));

})();