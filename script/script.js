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
let idInterval = setInterval(countTimer, 1000, '25 february 2020');


        // Меню

const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = menu.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');
    const handlerMenu = () => {
        if (window.innerWidth >= 768) {
            if(!menu.style.transform || menu.style.transform === `translateX(-100%)`){
                let countPx = -100,
                    menuRight = () => {
                        countPx = countPx + 1;
                        if (countPx < 100){
                            menu.style.transform = `translateX(${countPx}%)`;
                            setInterval(menuRight, 30);
                            console.log(countPx);
                        }
                    };
                menuRight();
            } else {
                let count = 100,
                    menuRight = () => {
                        count = count - 5;
                        if (count > -105){
                            menu.style.transform = `translateX(${count}%)`;
                            setTimeout(menuRight, 7);
                        }
                        console.log(count);
                    };
                menuRight();
            }
        } else {
            if(!menu.style.transform || menu.style.transform === `translateX(-100%)`){
                menu.style.transform = `translateX(0)`;
            } else {
                menu.style.transform = `translateX(-100%)`;
            }
        }  
    };
    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
};
toggleMenu();

        // PopUp

const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close');

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {popup.style.display = 'block'});
    });
    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });
};
togglePopUp();
});


