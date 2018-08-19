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
    {'task': "0 tasck", 'id': 0},
    {'task': "1 tasck", 'id': 1},
    {'task': "2 tasck", 'id': 2},
    {'task': "3 tasck", 'id': 3},
    {'task': "4 tasck", 'id': 4},
    {'task': "5 tasck", 'id': 5},
    {'task': "6 tasck", 'id': 6},
    {'task': "7 tasck", 'id': 7},
    {'task': "8 tasck", 'id': 8},
    {'task': "9 tasck", 'id': 9},
    {'task': "10 tasck", 'id': 10},
    {'task': "11 tasck", 'id': 11},
    {'task': "12 tasck", 'id': 12},
    {'task': "13 tasck", 'id': 13},
    {'task': "14 tasck", 'id': 14},
    {'task': "15 tasck", 'id': 15},
    {'task': "16 tasck", 'id': 16},
    {'task': "17 tasck", 'id': 17}
];


function addTask(value = '') {
    if (!value) return console.log(`Please enter your tasck`);

    const task = {
        'task': `${value}`,
        'id': +allTask.length
    };
    allTask.push(task);
}

function delTasck(id) {

    if (!id) return console.log(`Select correct tasck`);

    for (let key in allTask) {

        if (+allTask[+key]['id'] === +id) {
            allTask.splice(+key, 1);
            console.log(`Tasck ${id}, delete successfull`);
            break;
        }

    }
}

function manyTaskDel(delTasks = []) {
    for (let id of delTasks) {
        delTasck(id);
    }
}




var date1 = Date.now();

// console.log(allTask);
console.log('\n');
console.log(manyTaskDel([1, 15, 10]));
console.log('\n');
// console.log(allTask);
var date2 = Date.now();

console.log('\n');

console.log(date2, ' ', date1, ' ', (date2 - date1) / 1000);
