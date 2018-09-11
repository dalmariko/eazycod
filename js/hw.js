const buttonGenrate=document.getElementById('btn-msg');

const showTag = document.getElementById('tag');

const btnGenerateLi = document.getElementById('btn-generate');




/*
* собственное событие
*
* */

const generate=new CustomEvent('addLi',{
    detail:{ctn:0}
});

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
 showTag.insertAdjacentText('beforeend',e.target.tagName+' ');
};


const liGenerate = (e)=>{
console.log(e.detail.ctn+1);
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

btnGenerateLi.addEventListener('addLi',liGenerate,false);
buttonGenrate.dispatchEvent(generate);