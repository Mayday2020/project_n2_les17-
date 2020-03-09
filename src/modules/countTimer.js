const countTimer = () => {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    const getTimeRemaining = () => {
        const dateStop = new Date(1664599600000).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000;
        
        let seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(((timeRemaining / 60) / 60) % 24);

        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        };
    };
    const zero = (n) => {
        if (n <= 9) {
            n = '0' + n;
        }
        return (n);
    };

    const updateClock = () => {
        const timer = getTimeRemaining(); 
        timerHours.textContent = zero(timer.hours);
        timerMinutes.textContent = zero(timer.minutes);
        timerSeconds.textContent = zero(timer.seconds);
        
        if (timer.timeRemaining > 0){
            setTimeout(updateClock, 1000);
        }
    };
    updateClock();
};
export default countTimer;
