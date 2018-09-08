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
        <tr data-id="${item.id}">
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.description}</td>
            <td><button class="btn btn-danger remove-item">Delete</button></td>
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
        if (item.id === Number(id)) {
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


/*
 *Функция добавления новой задачи
 * @param {string} e
 *
 * @returns {void}
 *
 *
 * */

const addNewItem = (title, description) => {
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



const form = document.forms['add-new-itemm'];

const title = form['title'];
const description = form['description'];

/*
*Функция обрабатывает событие формы. Добавление новой задачи
* @param {Event} e
*
* @returns {void}
*
*
* */

const onSubmitForm = e =>{
    e.preventDefault();
    // console.log('submit');
    // console.log(title.value, description.value);

    if(title.value && description.value){
        addNewItem(title.value,description.value)
    }else{
    //   вывести сообщение об том что данных нет.
    }
};

/*
 * Функция обработки события клика на таблице . Реализация шаблона делегирования сбытия. Удалние задачи из таблици.
 *
 *  @param {Event} e - объект
 *
 * @returns {void}
 * */

const onTableClick = e => {
    // console.log(e.target);
    if(e.target.classList.contains('remove-item')){
            const tr = e.target.closest('tr');
            const id = tr.dataset.id;
            deleteItem(id);
    }
};

/*
* Обркботка события ввода с клавиатуры input[name=title]
*
*  @param {Event} e
*
* @returns {void}
* */
const onTitlekeyUp = e =>{
    // console.log(e);
    // if(title.value){
    //     // console.log(description);
    // description.disable = false;
    // }else{
    //     description.disable = true;
    // }
    description.disable = !title.value;

};


/*Все события*/


form.addEventListener('submit',onSubmitForm);
title.addEventListener('keyup',onTitlekeyUp);
table.addEventListener('click',onTableClick);



