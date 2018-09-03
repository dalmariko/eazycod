/*
* 1. Создать функцию которая принимает 2 элемента.
* Функция проверяет является ли первый элемент,РОДИТЕЛЕМ для второого:
*
* isParent (parent,child)
*
* 2. Получить список всех ссылок, которые не находятся внутри списка ul
* 3. Найти элемент, который находится перед и послесписка ul
* 4. Посчитать колличество элементов li в списке.
*
*
* */



function isParent(parent,child) {
   return document.querySelector(child).closest(parent)!==null;
}

console.log('Функция проверяет является ли первый элемент,РОДИТЕЛЕМ для второого: "isParent" ',isParent('div','body'));


let allLinks  = document.links;

let  [...elementsLinks]=allLinks;

let a = elementsLinks.filter(link=>{
    return !link.closest('ul');
});
console.log('Получить список всех ссылок, которые не находятся внутри списка ul ',a);


const ul = document.querySelector('ul');

let before = ul.previousElementSibling;
let after = ul.nextElementSibling;
console.log ('Найти элемент, который находится перед и послесписка ul ', before,after);

const li = ul.childElementCount;
console.log('Посчитать колличество элементов li в списке. ',li);

