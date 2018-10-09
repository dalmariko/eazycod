/**
 * AJAX (Asynchronous JavaScript And Xml);
 * GET  - получить информацию
 * POST - передать инфу на сервер
 * PUT - изменить сущкествующие данные
 * DELETE - удалить данные на сервере
 *
 * JSON
 */
/*

 const api_url = "https://jsonplaceholder.typicode.com";

 const xhr = new XMLHttpRequest();

 //  Настройка
 xhr.open("POST", `${api_url}/posts`);
 xhr.setRequestHeader("Content-type", "application/json");
 // отправка запроса

 const post = {
 title: "New title",
 body: "Some text",
 userId: 1
 };

 xhr.send(JSON.stringify(post));
 // console.log(xhr.responseText, new Date());

 xhr.addEventListener("load", () => {
 console.log(JSON.parse(xhr.responseText), new Date());
 });

 xhr.addEventListener("error", () => {
 console.log(xhr.statusText);
 });
 */


// TODO: Сделать запрос на сервер по адресу "https://jsonplaceholder.typicode.com/users"

// TODO: Получить ответ преобразовать его из json в обычный массив объектов

// TODO: вывести на страницу список пользователей, выводить только имя (name)

// TODO: при клике на имя пользователя у меня должен открыться блок с подробной информацией об этом пользователе

// const url = 'https://jsonplaceholder.typicode.com';
// const xhr = new XMLHttpRequest();
// xhr.open('get', `${url}/users`);
// xhr.setRequestHeader("Content-type", "application/json");
// xhr.send();
// xhr.addEventListener('load', () => {
//     const getAllUsers = document.querySelector('.users');
//
//     const users = JSON.parse(xhr.responseText);
//     console.log(users);
//
//
//
// });
//
//
// xhr.addEventListener('error', () => {
//     console.error(`Произошла ошибка соединения по адрессу ${url}`);
// });

/*

 users.forEach((item)=>{
 const usersInfo =
 `
 <h4>${item.name}</h4>
 <h5>${item.email}</h5>
 <h6>${item.phone}</h6>
 <h7>${item.username}</h7>
 </br>
 </br>
 <h8><a href="${item.website}">${item.website}</a></h8>
 <hr>
 `;

 getAllUsers.insertAdjacentHTML('afterbegin', usersInfo);
 });
 */






//Пробежаться по массиву
//


const users = [
    {
        email: "Sincere@april.biz",
        id: 1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        username: "Bret",
        website: "hildegard.org",
        address: {
            city: "Gwenborough",
            street: "Kulas Light",
            suite: "Apt. 556",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        company: {
            bs: "harness real-time e-markets",
            catchPhrase: "Multi-layered client-server neural-net",
            name: "Romaguera-Crona",
        }
    }
];






























function addUserInfo(userInfo) {
    const allUsers = document.querySelector('.users');
    allUsers.insertAdjacentHTML('beforeend', userInfo);
}

function parse(keyInfo) {
    console.log(Object.keys(keyInfo).length);
    let info='';
   for (let key in keyInfo){
     info+=`<li><b>${key} : </b><span>${keyInfo[key]}</span></li>`;
    };
   return info;
}

function getInfoUser(user) {
    let name;
    let id;
    let userInfo;
    let info = '';
    let moreInfo = '';
    name = user['name'];
    id = user['id'];

for(let key in user){
    if (typeof user[key] !=='object' && user[key]!==name){
        info +=`<li><b>${key} : </b><span>${user[key]}</span></li>`;
    }else if(typeof user[key] ==='object'){
        moreInfo += `<li><b>${key} :</b><ul>${parse(user[key])}</ul></li>`;
    }
}

    userInfo =
        `
        <div data-set="${id}">
            <h2>${name}</h2>
            <ul>
                ${info}
                <ul>
                    ${moreInfo}
                </ul>                    
            </ul>
        </div>
    `;
    addUserInfo(userInfo);
}


users.forEach((user) => getInfoUser(user));

























/*
const userInfo = `
<h3>${item.name}</h3>
<ul>
    <li>${item.id}</li>
    <li>${item.phone}</li>
    <li>${item.username}</li>
    <li>${item.website}</li>
    <li>address :
        <ul>
            <li>${item.address.city}</li>
            <li>${item.address.street}</li>
            <li>${item.address.suite}</li>
            <li>${item.address.zipcode}</li>
            <li>geo :
                    <ul>
                        <li>${item.address.geo.lat}</li>
                        <li>${item.address.geo.lng}</li>
                    </ul>
            </li>
        </ul>
    </li>
    <li>company :
            <ul>
                <li>${item.company.bs}</li>
                <li>${item.company.catchPhrase}</li>
                <li>${item.company.name}</li>
            </ul>
    </li>
</ul>
`;
*/




















/*

function getInfo(users) {
    // const usersInfo = document.querySelector('.users');
   const user = Object.keys(users);

    // for (let item of user) {
    user.forEach((item)=>{
       console.log(item);
    });

//         const user = `
// <h3>${item.name}</h3>
// <ul>
//     <li>${item.id}</li>
//     <li>${item.phone}</li>
//     <li>${item.username}</li>
//     <li>${item.website}</li>
//     <li>address :
//         <ul>
//             <li>${item.address.city}</li>
//             <li>${item.address.street}</li>
//             <li>${item.address.suite}</li>
//             <li>${item.address.zipcode}</li>
//             <li>geo :
//                     <ul>
//                         <li>${item.address.geo.lat}</li>
//                         <li>${item.address.geo.lng}</li>
//                     </ul>
//             </li>
//         </ul>
//     </li>
//     <li>company :
//             <ul>
//                 <li>${item.company.bs}</li>
//                 <li>${item.company.catchPhrase}</li>
//                 <li>${item.company.name}</li>
//             </ul>
//     </li>
// <!--</ul>
// `;
        // usersInfo.insertAdjacentHTML('afterbegin', user);
    // };
}
getInfo(users);

*/

// class UserInfo {
//     constructor(users){
//         this.users=users;
//     }
//
//     //Запускает парсинг и строит разметку
//     init(){
//         this.fields=this.getFields();
//         // this.getAllUsers = document.querySelector('.users');
//
//     }
//
//     //Добавляем разметку
//     addTemplate(){
//         const usersInfo = this.template();
//         this.getAllUsers.insertAdjacentHTML('afterbegin', usersInfo);
//     }
//
//     // разметка
//     template(){
//         const userInfo =
//             `
//             <ul>
//                 <li></li>
//             </ul>
//             `;
//     }
//
//     getFields(){
//         return Object.keys(this.users);
//     }
//
//     //Получает информацию об одном юзере
//     getOneUserInfo(){
//        for( let prop of this.fields ){
//            console.log(prop);
//        }
//     }
//
// }
//
// const oneUser = new UserInfo(users);
// oneUser.init();
// oneUser.getOneUserInfo();

/*

 function recursivUserInfo(user) {
 let prop = Object.keys(user);
 console.log(prop);
 const getAllUsers = document.querySelector('.users');

 function addInfo() {

 }

 prop.forEach((item) => {
 const usersInfo =
 `
 <li>${item}:${user[item]}</li>
 `;
 getAllUsers.insertAdjacentHTML('afterbegin', usersInfo);
 });

 }

 users.forEach(recursivUserInfo);
 */

/*
 users.forEach((item)=>{
 console.log(Object.keys(item));
 });*/
/*
 let show;
 Object.keys(user).forEach((key)=>{
 // console.log(typeof user[key]);

 if (user[key].length > 0){
 recursivUserInfo(user[key]);
 }
 show =`${key} : ${user[key]}`;
 console.log(show);
 });
 return show;*/
// for (let key of prop) {
//
//     // console.log(key);
//     if (typeof  user[key] === 'object') {
//         recursivUserInfo(user[key]);
//     }else {
//         show = `${key} : ${user[key]}`;
//     }
//     console.log(show);
// }