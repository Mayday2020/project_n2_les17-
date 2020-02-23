window.addEventListener('DOMContentLoaded', function(){
'use strict';


        // Timer 

const countTimer = (deadLine) => {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    const getTimeRemaining = () => {
        const dateStop = new Date(deadLine).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            zero = (n) => {
                if (n <= 9) {
                    n = '0' + n;
                }
                return n;
            };
        
        let seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
        minutes = zero(minutes);
        seconds = zero(seconds);
        hours = zero(hours);
        if (timeRemaining < 0) {
            clearInterval(idInterval);
            hours = '00';
            minutes = '00';
            seconds = '00';
        }
        return {timeRemaining, hours, minutes, seconds};
    };
    
    const updateClock = () => {
        let timer = getTimeRemaining(); 
        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
        
    };
    updateClock();
};
let idInterval = setInterval(countTimer, 1000, '24 february 2020');
});