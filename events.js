const btnTimer = document.getElementById('stopwatch__btn');
let timeOutput = document.getElementById('stopwatch__time');
let timeInput = document.getElementById("stopwatch__get-time");

const TIMER_END_TEXT = 'Время истекло!';
const TIMER_INPUT_ALERT_TEXT = 'Введите число!';
const TIMER_INPUT_TEXT = 'время таймера';
const TIMER_START_TEXT = 'Запустить';
const TIMER_PAUSE_TEXT = 'Пауза';
const TIMER_CONTINUE_TEXT = 'Продолжить';

const INPUT_COLOR_GREY = 'rgb(28, 128, 128)';

let timerInterval;
let timerSave = 0;
let timerNow = 0; 
let timerState = true;

const log = (value) => console.log(value);

function newTimer(timeEndHere){
    timerInterval = setInterval(function(){
        if(timerNow === Number(timeEndHere)){
            clearInterval(timerInterval);//
            timeOutput.innerHTML = TIMER_END_TEXT;
            btnTimer.innerText = TIMER_START_TEXT;
            timerState = true;
            timerNow = 0;
            timeInput.disabled = false;
            
        }else{
            timerNow += 1;
            log(timerNow, ' : ', timeEndHere);
            timeOutput.innerHTML = timerNow;
        }
    }, 1000);
}

function startTimer(){
    clearInterval(timerInterval);
    timerEnd = timeInput.value;
    if(isNaN(timerEnd) || timerEnd.trim() === ''){
        timeOutput.innerHTML = TIMER_INPUT_ALERT_TEXT;
    }else{
        log(timerState);
        
        if(timerState){
            newTimer(timerEnd);
            btnTimer.innerHTML = TIMER_PAUSE_TEXT;
            timerState = false;
            timeInput.disabled = true;
            
        }else{
            btnTimer.innerHTML = TIMER_CONTINUE_TEXT;
            timeOutput.innerHTML = timerNow;
            clearInterval(timerInterval);
            timerState = true;
            timeInput.disabled = true;
        }
    }
}

btnTimer.addEventListener('click', startTimer);
