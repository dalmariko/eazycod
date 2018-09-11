const buttonGenrate = document.getElementById('btn-msg');

const showTag = document.getElementById('tag');

const btnGenerateLi = document.getElementById('btn-generate');

const ul = document.querySelector('ul');


/*
 * собственное событие
 *
 * */



/*
 * Обрабочики событий если нужно.
 *
 * */

const styleButton = e => {
    buttonGenrate.classList.add('btnred');
};

const styleButtonNone = e => {
    buttonGenrate.classList.remove('btnred');
};

const showTagName = e => {
    showTag.insertAdjacentText('beforeend', e.target.tagName + ' ');
};


const liGenerate = e => {
    e.preventDefault();
    ul.insertAdjacentHTML('beforeend', `<li>Item ${e.detail.counter}</li>`);
};

const gli = () => {
    const generate = new CustomEvent('addLi', {
        detail: {
            counter: ul.children.length + 1
        }
    });
    btnGenerateLi.dispatchEvent(generate);
};

/*
 *
 * События.
 *
 * */


buttonGenrate.addEventListener('click', (e) => {
    alert(buttonGenrate.textContent)
});
buttonGenrate.addEventListener('mouseover', styleButton);
buttonGenrate.addEventListener('mouseout', styleButtonNone);
document.body.addEventListener('click', showTagName);

btnGenerateLi.addEventListener('click', gli);
btnGenerateLi.addEventListener('addLi', liGenerate);
