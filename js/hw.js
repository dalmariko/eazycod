(function () {
    function reverse(value = '') {
        if (!value) return console.log(`Please enter your text`);

        let rez = '';

        for (let i = value.length - 1; i >= 0; i--) {
            rez += value[i];
        }
        return rez;
    }

    console.log(reverse('test'));

    function getUnicode(value = '') {
        if (!value) return console.log(`Please enter your text`);

        let rez = '';

        for (let i = 0; i < value.length; i++) {
            rez += value.charCodeAt(i) + ' ';
        }

        return rez;
    }

    console.log(getUnicode('hello'));


    function randomDay(max = 32, min = 1) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    var d = new Date();


    function monts(month = d.getMonth()) {

        let arrMonts = [
            'Січень Январь', 'Лютий Февраль', 'Березень	Март',
            'Квітень Апрель', 'Травень Май', 'Червень Июнь',
            'Липень Июль', 'Серпень Август', 'Вересень Сентябрь',
            'Жовтень Октябрь', 'Листопад Ноябрь', 'Грудень Декабрь'
        ];

        for (let key in arrMonts) if (+key === +month) return arrMonts[+key];

    }


    let arrDays = [];

    let timeFinish = `${d.getFullYear()} ${monts()} ${d.getDay() + randomDay(32, 1)} at ${d.getHours() + randomDay(2, 8)}:${d.getMinutes() + randomDay(18, 60)}:${d.getSeconds()}`;

    var timeBegin = `${d.getFullYear()} ${monts()} ${d.getDate()} at ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    let allTask = [
        {
            'task': "0 tasck",
            'id': 0,
            'timeBegin': timeBegin,
            'timeFinish': timeFinish
        },
        {
            'task': "1 tasck",
            'id': 1,
            'timeBegin': timeBegin,
            'timeFinish': timeFinish
        },
        {
            'task': "2 tasck",
            'id': 2,
            'timeBegin': timeBegin,
            'timeFinish': timeFinish
        },
    ];


    function addTask(value = '') {
        if (!value) return console.log(`Please enter your tasck`);
        const task = {
            'task': `${value}`,
            'id': +allTask.length
        };

        allTask.push(task);
    }

    function delTasck(id) {

        if (!id) return console.log(`Select correct tasck`);

        for (let key in allTask) {
            if (+allTask[+key]['id'] === +id) {
                allTask.splice(+key, 1);
                console.log(`Tasck ${id}, delete successfull`);
                break;
            }
        }
    }

    function manyTaskDel(delTasks = []) {
        for (let id of delTasks) {
            delTasck(id);
        }
    }

    function viewTasks(allTasks = []) {
        let rez = '';
        for (let key of allTasks) {
            rez += `
     <section class="task">
        <ul class="taskContent">
            <li class="id"><span>${key['id']}</span></li>
            <li class="exercise"><span>${key['task']}</span></li>
            <li class="timeBegin"><span>${key['timeBegin']}</span></li>
            <li class="timeFinish"><span>${key['timeFinish']}</span></li>
        </ul>
    </section>
                `;
        }
        return rez;
    }

    let doc = document;
    let container = doc.getElementsByClassName('container')[0];
    container.innerHTML = viewTasks(allTask);


})();
