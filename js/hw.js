let words = "сайт вопросов и ответов для программистов";
let myWords = '';

myWords += words[0].toUpperCase();
for (let i = 1; i < words.length; i++) {
    myWords += words[i];
    if (words[i] === ' ') {
        i++;
        myWords += words[i].toUpperCase();
    }

}
console.log(myWords);


let Revstr = "yzzib edoc";
let len = Revstr.length;
let newString = '';

for (let i = len - 1; i >= 0; i--) {
    newString += Revstr[i];
}
console.log(newString);