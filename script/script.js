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
let idInterval = setInterval(countTimer, 1000, '26 february 2020');


        // Меню

const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            menuA = menu.querySelectorAll('a');
    const handlerMenu = () => {
            menu.classList.toggle('active-menu');
    };
    menu.addEventListener('click', (event) => {
        let target = event.target;
        console.log(target);
        if (target){
            menuA.forEach((item) => {
                if(item === target){
                    handlerMenu();
                }
            });
        }
    });
    btnMenu.addEventListener('click', handlerMenu);
};
toggleMenu();

        // PopUp

const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn');
    const popupOpacity = () => {
        popup.style.display = 'block';
        if (window.innerWidth >= 768) {
            popup.style.opacity = '0';
            let count = 0;
            let menuRight = () => {
                count = count + 0.05;
                if (count <= 1.05){
                    popup.style.opacity = count;
                    setTimeout(menuRight, 15);
                }
            };
            menuRight();
        } 
    };
    popupBtn.forEach((elem) => {
        elem.addEventListener('click', popupOpacity);
    });
    popup.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('popup-close')){
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if(!target) {
            popup.style.display = 'none';
            }
        }
    });
};
togglePopUp();

        // Табы

const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),        // Родитель
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
        for(let i = 0; i < tabContent.length; i++) {
            if (index === i){
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            } else {
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
        }
    };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            console.log(target);
            target = target.closest('.service-header-tab');
            console.log(target);
            if (target){
                tab.forEach((item, i) => {
                    if(item === target){
                        toggleTabContent(i);
                    }
                });
            }
        });
};
tabs();



});
