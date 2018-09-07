/**
 * 1. Хранение данных
 */

const state = {
    todos: [
        {
            id: 1,
            title: 'Some title 1',
            description: 'Some description 1'
        },
        {
            id: 2,
            title: 'Some title 2',
            description: 'Some description 2'
        },
        {
            id: 3,
            title: 'Some title 3',
            description: 'Some description 3'
        }
    ]
};

/**
 * UI Elements
 */
const table = document.querySelector('.table tbody');
const alert = document.getElementById('alerContainer');


/**
 * Функция addItem добавляет один элемент в разметку
 * @param {object} item - один объект задачи
 * @returns {void}
 */
const addItem = item => {
    const template = `
        <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.description}</td>
            <td><button class="btn btn-danger">Delete</button></td>
        </tr>
    `;

    table.insertAdjacentHTML('beforeend', template);
};

/**
 * Функция deleteItem удаляет элемент из массива и из разметки
 * @param {number} id - id задачи котору нужно удалить
 * @returns {void}
 */
const deleteItem = id => {
    // Удаляем задачу из массива
    state.todos.forEach((item, index) => {
        if (item.id === id) {
            state.todos.splice(index, 1);
        }
    });

    // Заново генерируем элементы
    generateItems(state.todos);
    alert.insertAdjacentHTML('afterbegin', messageDel);
    setTimeout(() => alert.innerHTML = '', 2000);
};


/**
 * Перебираем в цикле массив с задачами и передаем по одной задаче в функцию addItem
 */
const generateItems = items => {
    table.innerHTML = '';
    state.todos.forEach((item, index) => item.id = index + 1);
    items.forEach((todo, index) => addItem(todo, index));

};

// Первый раз вызываем генерацию задач
generateItems(state.todos);


const newItem = (title, description) => {
    state.todos.unshift({id: 0, title, description});
    generateItems(state.todos);
    alert.insertAdjacentHTML('afterbegin', messageOk);
    setTimeout(() => alert.innerHTML = '', 2000);
};


const messageOk = `
<div class="alert alert-success mt-5" role="alert" >
  Поздравляю задание успешно добавленно.
</div>
`;

const messageDel = `
<div class="alert alert-danger mt-5" role="alert">
  Задание удалено !
</div>
`;


/**
 * Домашнее задание
 * * 1. Реализовать добавление новой задачи в массив и в разметку эта функция будет принимать два аргумента это title и description
 * * 2. Вывести уведомление об успешном добавление / удалении задачи. для уведомлений использовать alert из bootstrap, setTimeout
 */


//  setTimeout(function() {
//      console.log('timeout')
//  }, 2000);