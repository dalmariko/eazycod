function Timer(timerContainerSelector, timeEndContainerSelector) {
    let countdown;

    let timerContainer = document.querySelector(timerContainerSelector);
    let endTimeContainer = document.querySelector(timeEndContainerSelector);


    /*
     * Функция запуска таймера
     * @param {number} seconds
     */
    this.start = function (seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;

        displayTimeLeft(seconds);

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft < 0) {
                displayEndTime(then);
                clearInterval(countdown);
                return;
            }

            displayTimeLeft(secondsLeft);

        }, 1000);


    };

    /*
     * Функция для вывода таймера в разметку Принимает секунды и выводит их в разметрку в правильном формате.
     * @param {number}seconds
     * @return {void}
     *
     */
    function displayTimeLeft(seconds) {

        const h = seconds / 3600 ^ 0;
        const m = (seconds - h * 3600) / 60 ^ 0;
        const s = seconds - h * 3600 - m * 60;
        const hou = `${h < 10 ? '0' : ''}${h}:`;

        const display = `${h ? hou : ''}${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;

        document.title = display;
        timerContainer.textContent = display;
    }

    /*
     *Функция вывода времени окончания таймера в разметку
     * @param{number} timestemp -время окончания работы траймера
     *
     * */
    function displayEndTime(then) {
        let date = new Date(then);
        let hours = date.getHours();
        let minutes = date.getMinutes();

        endTimeContainer.textContent = `Be back at ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    }

}


const myTimer = new Timer('.display__time-left', '.display__end-time');

myTimer.start(3819);