let string = `
Мишка очень любит мёд!
Почему? Кто поймёт?
// В самом деле, почему
Мёд так нравится ему?
`;
// console.log(string);


//1.1. Получить индекс второго вопросительного знака.
// var Quest=string.indexOf('!')+1;
// console.log(Quest);

//1.2. Сделать второе слово «мед» с маленькой буквы.
// var Med = string.indexOf('Мёд');
// console.log(string.substr(Med,3).toLowerCase());

// 1.3. Узнать включает ли строка слово «почему».
// var Whay=string.indexOf('почему');
// var word = Whay+6;
// console.log(string.endsWith('почему',word));


//1.4. Оканчивается ли строка на вопросительный знак.
// console.log(string.endsWith('?\n'));

//1.5. Получить подстроку с 73 индекса длинной 8 символов.
// console.log(string.substr(73,8));


//1.6. Копировать строку начиная с 19 индекса по 21 включительно.
// var copyString = string.slice(19,22);
// console.log(copyString);

//1.7. Получить индекс последнего вопросительного знака.
// console.log(string.lastIndexOf('?'));

//1.8. Получить символ, находящийся по индексу знака «!» увеличенному на 1.
// var Wosc=string.indexOf('!')+1;
// console.log(string[Wosc]);




//2. Из каких строк нельзя получить число методами для чисел и почему:
// целые числа ‘18px’, ‘font-size: 18px’, ‘ffffff’,
// дробные числа: ‘3.14.2’, ‘3.15’, ‘a24.1’;

// console.log(parseInt('18px'));
// console.log(parseInt('font-size: 18px'));
// console.log(parseInt('ffffff',16));

// console.log(parseFloat('3.14.2'));
// console.log(parseFloat('3.15'));
// console.log(parseFloat('a24.1'));


//Из сторки 'font-size: 18px' потому что она сперва содержит символы.
//Из сторки 'a24.1' потому что она сперва содержит символы.
//‘3.14.2’ переведет в число но обрежет до второй точки.


//3. Выполнить сложение 1.1 + 2.2, посмотреть точен ли результат и
// соответствует ли ожидаемому 3.3. Выполнить операцию по сложению
// так чтобы результат стал 3.3.

// console.log(1.1+2.2);
// console.log( (1.1 + 2.2).toFixed(1) );



//4.Имя ослика должно быть «ИаИа»,
// нерадивый программист назвал его «Иа».
// Получите правильное имя ослика.

// var nameSlimPony = 'Иа';
// console.log(nameSlimPony.repeat(2));



/*5. Задания на let и const ( нужно в т.ч. правильно использовать const и let).
5.1. создать переменную x и y.
5.2. Присвоить в значение x число 2.
5.3 возвести х в степень 6.
5.4. из результата п. 5.3. извлечь квадратный корень.
5.5. Получить целое случайное число от 1 до 6 и присвоить его в
значение y.
5.6. Создать переменную sum равную сумме x и y.
5.7. Получить число с одним знаком после запятой, представляющее
собой
остаток от деления sum на x .*/
//
// const x = 2;
// const max=6;
// const min=1;
//
// let pow=Math.pow(x,max);
// pow = Math.sqrt(pow);
//
// const y = Math.floor( Math.random()*((max+1)-min) )+min;
//
// var sum=x+y;
//
// let lastOfDel = sum/x;
//
// lastOfDel = lastOfDel.toString(10);
//
// lastOfDel='0'+lastOfDel.substr(1);
// lastOfDel = parseFloat(lastOfDel);
// console.log( parseFloat(lastOfDel.toFixed(1)) );

/*6. Создать переменную list и присвоить ей массив из нескольких строк со
списком покупок.
6.1 Получить длинну такого массива.
6.2. Удалить первый элемент массива.
6.3. Удалить последний элемент массива.
6.4. Вставить в начало массива строку ‘start’.
6.5. Вставить в конец массива строку ‘end’.
6.6. Удалить центральный элемент массива и заменить его на строку
‘center’.*/

//
// var list =['aples','bananes','iscreem'];
// console.log(list.length);
// list.shift();
// list.pop();
// list.unshift('start');
// list.push('end');
// list.splice(1,1,'center');
// console.log(list);

/*7. Создать объект me в свойствах которого указать name, lastname, hobby
и присвоить им значения.*/

//
// const  me = {
//     name:'dima',
//         lastname:'Nagorny',
//         hobby:'alcosport'
// };

/*8. В объект созданный по задаче 7 создать свойство с именем ‘favourite
movie’ (любимый фильм) и присвоить значение.*/
//
// me['favorite movie']='titanic';
// console.log(me);


