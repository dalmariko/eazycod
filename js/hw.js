const buttonGenrate=document.getElementById('btn-msg');

const showTag = document.getElementById('tag');

const btnGenerateLi = document.getElementById('btn-generate');

const ul=document.querySelector('ul');


/*
* собственное событие
*
* */

const generate=new Event('addLi',{
        bubbles: true,
        cancelable: true,
        counter:ul.children.length+1
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


const liGenerate = (e,ctn)=> {
    e.preventDefault();

    ul.insertAdjacentHTML('beforeend',`<li>Item ${ctn}</li>`);
};

const calledLigenerate=(e)=>liGenerate(e,e.counter);

/*
*
* События.
*
* */


buttonGenrate.addEventListener('click',(e)=>{alert(buttonGenrate.textContent)});
buttonGenrate.addEventListener('mouseover',styleButton);
buttonGenrate.addEventListener('mouseout',styleButtonNone);
document.body.addEventListener('click',showTagName);

btnGenerateLi.addEventListener('click',calledLigenerate);
btnGenerateLi.addEventListener('addLi',liGenerate);
btnGenerateLi.dispatchEvent(generate);