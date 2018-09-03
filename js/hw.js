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

//1
const head = document.head;
console.log(head);

//2
const body = document.body;
console.log(body);

//3
const elements = body.children;
console.log(elements);

//4
for (let i = 0; i < elements.length; i++) {
    ferstFullElement = elements[i].children;
    //а
    ferstFullElement.length > 0 ? console.log(elements[i]) : '';

    for (let i = 0; i < ferstFullElement.length; i++) {
        //б
        i !== 0 && i !== ferstFullElement.length - 1 ? console.log(ferstFullElement[i]) : '';
    }
}




