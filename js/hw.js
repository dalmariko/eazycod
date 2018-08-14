//1 В строке сделать первые буквы каждого слова большими

let words = "в строке сделать первые буквы, каждого                      слова  большими";
let bigWords = '';
let I = 0;

for (I; I < words.length; I++) {

    if (  words[I] === `\u0020` || I==0) {
        for (words[I]; words[I] === `\u0020`; I++) {
            continue;
        }
        bigWords +=' ';
        bigWords += words[I].toUpperCase();
    }else {
        bigWords += words[I];
    }
}
console.log(`Задание 1 ${bigWords}\n`);




//2 перевернуть строку

let Revstr = "edoc yzae";
let len = Revstr.length;
let newString = '';

for (let i = len - 1; i >= 0; i--) {
    newString += Revstr[i];
}
console.log(`Задание 2 ${newString}\n`);


// 3  Найти факториал числа.
let num = 10;
let fac = num;

for (let i = num; i > 0; i--) {
    fac *= i;
}
console.log(`Задание 3 ${fac} \n`);


// 4 сделать считалочку "Считаем до 10и:1,2,3,4,5,6,7,8,9,10"
let x = 1;
let end = 10;
let str = '';

str += `"Считаем до ${end}и:`;
while ( x <= end) {
    str += x !== end ? x + ',' : x + '"';
    x++;
}
console.log(`Задание 4 ${str}\n`);


// 5 На основании строки "JavaScript is a pretty good lenguage"  удалить пробелы и сделать слова с большой буквы

let somString = "javaScript is a pretty good      lenguage";
let camelCase = "";
let i = 0;

for ( i ; i < somString.length; i++) {
    if (somString[i] === `\u0020` || i==0) {
        for(somString[i];somString[i]===`\u0020`;i++) {continue;}
        camelCase += somString[i].toUpperCase();
    }else {
        camelCase +=somString[i];
    }
}
console.log(`Задание 5 ${camelCase}\n`);

//6 Найти все нечетные числа включительно от 1 до 15 и вывести их в консоль.

let start = 1;
let finish = 15;
let odd = []; //нечетные

for (i = start; i <= finish; i++) {

    if (i % 2 !== 0) {
        odd.push(i);
    }
}
console.log(`Задание 6\nсписок НЕчетных чисел: -> ${odd}`);
