//this is home worck aboute functions

function reverse(value = '') {
    if (!value) return console.log(`Please enter your text`);

    let rez = '';

    for (let i = value.length - 1; i >= 0; i--) {
        rez += value[i];
    }
    return rez;
}

console.log(reverse('test'));

function getUnicode(value = '') {
    if (!value) return console.log(`Please enter your text`);

    let rez = '';

    for (let i = 0; i < value.length; i++) {
        rez += value.charCodeAt(i) + ' ';
    }

    return rez;
}

console.log(getUnicode('hello'));


let allTask = [];


function addTask(value = '') {
    if (!value) return console.log(`Please enter your tasck`);

    const task = {
        value: `${value}`,
        id: `${allTask.length}`
    };

    allTask.push(task);
    console.log(allTask);
}

function delTasck(id = '') {
    if (!id) return console.log('Select tascks');

    id = parseInt(id, 10);

    for (let key of allTask) {
        if (allTask[key][+id] === id) {
            allTask.splice(key, 1);
            console.log('Tasck delete successfull');
        }
    }
}
