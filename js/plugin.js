
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
            if ( secondsLeft < 0){
                return clearInterval(countdown);
            }
            displayTimeLeft(secondsLeft);
        },1000);
    };

    /**
     * Функция для вывода таймера в разметку Принимает секунды и выводит их в разметрку в правильном формате.
     * @param {number}seconds
     * @return {void}
     *
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
* */
    function displayEndTime() {

    }


}


const myTimer = new Timer('.display__time-left','.display__end-time');

myTimer.start(3600);