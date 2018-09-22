
function Timer(timerContainerSelector,timeEndContainerSelector) {
    let countdown;

    let timerContainer = document.querySelector(timerContainerSelector);
    let endTimeContainer = document.querySelector(timeEndContainerSelector);



    /*
    * Функция запуска таймера
    * @param {number} seconds
     */
    this.start = function (seconds) {
        const now = Date.now();
        const then = now + seconds*1000;

        displayTimeLeft(seconds);
        displayEndTime(then);

        countdown =  setInterval(()=>{
            const secondsLeft = Math.round((then - Date.now())/1000);

                if ( secondsLeft < 0 ) return clearInterval(countdown);

            displayTimeLeft(secondsLeft);
        },1000);
    };

    /**
     * Функция для вывода таймера в разметку Принимает секунды и выводит их в разметрку в правильном формате.
     * @param {number}seconds
     * @return {void}
     *
     * 4. В приложении таймер сделать вывод таймера с учетом часов,
     *     т.е если передано количество секунд больше 60 минут то выводить в формате HH:MM:SS, пример "01:50:20".
     *    Реализация вывода таймера у нас делается в displayTimeLeft.
     */
    function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds /60);
        const remainderSeconds = seconds % 60;

        const display = `${minutes<10?'0':''}${minutes}:${remainderSeconds<10?'0':''}${remainderSeconds}`;

        document.title=display;
        timerContainer.textContent = display;
    }

/*
* Функция вывода времени окончания таймера в разметку
* @param{number} timestemp -время окончания работы траймера
*
* 3. В приложении таймер сделать вывод даты когда таймер закончит работу,
 *   для этого мы создали функцию displayEndTime.
 *  Выводиться должно в формате "Be back at HH:MM" например "Be back at 14:58"
* */
    function displayEndTime(then) {
        let date = new Date(then);
        let hours = date.getHours();
        let minutes = date.getMinutes();

        endTimeContainer.textContent = `Be back at ${hours<10?'0':''}${hours}:${minutes<10?'0':''}${minutes}`;
    }


}


const myTimer = new Timer('.display__time-left','.display__end-time');

myTimer.start(60);