
 <a name="home"/>

## [Документация по задачнику](#home) 

<a name="const"/>

[Константы](#const)

[Хранилище данных](#Хранилище)
 
[Функции](#Функции) 

[Обработчики](#Обработчики)   
   
[Генерация страници с сообщениями](#Генерация)
     
 <a name="const"/>

* #  Константы

```javascript
const table = document.querySelector('.table tbody');

const alert = document.getElementById('alerContainer');

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

const messageWarning = `
<div class="alert alert-warning mt-5" role="alert">
  Данных нет!
</div>
`;


const form = document.forms['add-new-itemm'];
const title = form['title'];
const description = form['description'];
```

   ##### [Обратно к оглавлению](#home)

 <a name="Хранилище"/>

* #  Хранилище данных
    
   Локальное Хранилище данных выглядит вот так: 
    
    
```javascript
const state = { todos: [ {id,title,description} ] };
```

     
  @param {object} state
  @param [array] todos
     
  @field todos.id - som id @type{number}
  
  @field todos.title - som title @type{string}
  
  @field todos.description - som description @type{string}
  
  
    
   ##### [Обратно к оглавлению](#home)
   
 <a name="Функции"/>

* ## Функции
    * ##### Добавление задачи
    * ##### Удаление задачи
        
              

 <a name="Обработчики"/>

* ## Обработчики
    * ##### Обработчик формы
    * ##### Обработчик события формы
    * ##### Обработчик события клика

 <a name="Генерация"/>

* ## Генерация страници с сообщениями
   ##### Добавление сообщений на страницу
     
     Функция добавления сообщений на страницу.
     
     @param {var} messName - переменая содержащая алерт. [смотреть раздел Контстанты](#const)
      
     @param {int} time - время до конца показа сообщения. По умолчанию 2000 мсек
      
     @returns {void}
           
       
       
```javascript
 function messAdd(messName, time = 2000){};
```       
   
    

     
   ##### Управление сообщениями

    Функция принимает одинпараметр
 
    Варианты 'ok','del','warn'
 
    @param {string} status - HTML alert параметр.
  
    @returns {void}

```javascript
function messController (status) {};
```