const buttonGenrate=document.getElementById('btn-msg');

const showTag = document.getElementById('tag');








/*
* Обрабочики событий если нужно.
*
* */

const styleButton=(e)=>{
    buttonGenrate.classList.add('btnred');
};

const styleButtonNone=(e)=>{
    buttonGenrate.classList.remove('btnred');
};

const showTagName=(e)=>{
showTag.=e.target;
};



/*
*
* События.
*
* */


buttonGenrate.addEventListener('click',(e)=>{alert(buttonGenrate.textContent)});
buttonGenrate.addEventListener('mouseover',styleButton);
buttonGenrate.addEventListener('mouseout',styleButtonNone);
document.body.addEventListener('click',showTagName);

