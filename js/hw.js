//this is home worck aboute functions

// function reverse(value = '') {
//     if (!value) return console.log(`Please enter your text`);
//
//     let rez = '';
//
//     for (let i = value.length - 1; i >= 0; i--) {
//         rez += value[i];
//     }
//     return rez;
// }
//
// console.log(reverse('test'));
//
// function getUnicode(value = '') {
//     if (!value) return console.log(`Please enter your text`);
//
//     let rez = '';
//
//     for (let i = 0; i < value.length; i++) {
//         rez += value.charCodeAt(i) + ' ';
//     }
//
//     return rez;
// }
//
// console.log(getUnicode('hello'));
//

let allTask = [
    {'task': "ferst tasck", 'id': "0"},
    {'task': "next tasck", 'id': "1"},
    {'task': "therd tasck", 'id': "2"}
];


function addTask(value = '') {
    if (!value) return console.log(`Please enter your tasck`);

    const task = {
        'task': `${value}`,
        'id': `${allTask.length}`
    };
    allTask.push(task);
}

function reId(somArr) {

    for (let i=0; i < somArr.length; i++){
        somArr[i]['id'] = i + '';
    }
    return somArr;
}

function delTasck(id) {
    if (id === '' ||  id === undefined) return console.log('Select tascks');


    for (let key of allTask) {
        if (+(key['id']) === +id) {
            allTask.splice(key, 1);
            console.log('Tasck delete successfull');
            reId(allTask);
        }
    }
}

console.log(allTask);
