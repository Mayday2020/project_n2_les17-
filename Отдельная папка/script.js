'use strict';

const dayTime = document.querySelector('#day-time'),
      today = document.querySelector('#today'),
      time = document.querySelector('#time'),
      timeBeforeNY = document.querySelector('#timeBeforeNewYear'),
      aWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      morningOr = ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'],
      zero = (n) => {if (n <= 9) {n = '0' + n;} return n;};

const func = () => {

};

const week = () => {
    const date = new Date(),
        dayOfWeek = date.getDay(),
        hourOfDay = date.getHours();
    today.textContent = aWeek[dayOfWeek];
    if (hourOfDay >= 6 && hourOfDay <= 10){
        dayTime.textContent = 'Доброе утро';
    } else if (hourOfDay > 10 && hourOfDay <= 17){
        dayTime.textContent = 'Добрый день';
    } else if (hourOfDay >= 18 && hourOfDay < 22){
        dayTime.textContent = 'Добрый вечер';
    } else {dayTime.textContent = 'Доброй ночи';}
};

const countTimer = (deadLine) => {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds'),
        dateStop = new Date(deadLine).getTime(),
        dateNow = new Date().getTime(),
        dateRemaining = (dateStop - dateNow) / 1000,
        timeRemaining = dateNow / 1000;
    let days = Math.floor(dateRemaining / 60 / 60 / 24),
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60 % 24) + 3;
        
        minutes = zero(minutes);
        seconds = zero(seconds);
        hours = zero(hours);

        timerHours.textContent = hours;
        timerMinutes.textContent = minutes;
        timerSeconds.textContent = seconds;
        timeBeforeNY.textContent = days;
    week();
};

setInterval(countTimer, 1000, '1 january 2021');



//setInterval(func, 1000, '1 january 2021');

/*

*/