(function () {
    function manager(obgect, handler) {
        for (let i in obgect) {
            return `New value: ${ handler(obgect) }`;
        }
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

    let abs123 = ['123', 'abc'];

    let fullName = ['neo,', 'my', 'name', 'trinity'];

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

    function camelcaseConcat(element) {
        let rez = '';
        for (let index of element) {
            for (let i = 0; i < index.length; i++) {
                rez += i === 0 ? index[i].toUpperCase() : index[i];
            }
        }
        return rez;
    }

    function multiplication(element) {
        let rez = '';
        for (let index of element) {
            rez += index * 10 + ',';
        }
        return rez;
    }

    function nameManage(elements) {
        let rez = '';
        for (let element of elements) {
            rez += `${element['name']} is ${element['age']},`;
        }
        return rez;
    }

    function reverseString(element) {
        let rez = '';
        for (let index of element) {
            for (let i = index.length - 1; i >= 0; i--) {
                rez += index[i];
            }
            rez += ',';
        }
        return rez;
    }


    for (let callbecs of controlArray) {
        console.log( manager(callbecs['array'],callbecs['function']) );
    }

})();
