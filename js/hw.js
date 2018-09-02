/*
* Зная структуру HTML
* с помощью изученных методов получить в консоль
*
* 1 head
* 2 body
* 3 все дочерние элементы body
* 4 первый div и все его дочерние узлы
*   а)вывести все дочерние узлы в консоль
*   б)вывести в консоль все дочерние узлы,
*  кроме первого и последнего.
*
*
* Для навигациипо ДОМу использовать методы,
* которые возвращают только элементы.
*
* */


const head=document.head;
// console.log(head);

const body=document.body;
// console.log(body);

const children=body.children;
// console.log(children);

let [... allElements]=children;
// console.log(allElements);

console.log( allElements[0]);

let div=allElements.forEach( (item) =>{
return item;
});

console.log(div);