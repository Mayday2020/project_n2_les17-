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
let idInterval = setInterval(countTimer, 1000, '6 march 2020');


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


const sendFormPopUp = () => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.getElementById('form3'),
        inputs = form.querySelectorAll('input');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: #FFF;';
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};
    
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body, () => {
            statusMessage.textContent = successMessage;
            inputs.forEach((elem) => {
                elem.value = '';
            });
        }, (error) => {
            statusMessage.textContent = errorMessage;
            console.error(error);
        });
    });

    const postData = (body, outputData, errorData) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState !==4){
                return;
            }
            if (request.status === 200){
                outputData();
            } else {
                errorData(request.status);
            }
        });
    
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(body));
    };


};
sendFormPopUp();



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

        // Доты
        
const addDots = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
          ulDots = document.querySelector('.portfolio-dots');

    for (let i = 0; i < slide.length; i++){
        const addDot = () => {
            let dotUnit = document.createElement('li');
            ulDots.append(dotUnit);
            dotUnit.classList = 'dot';
        };
        addDot();    
    }
    const dotUnits = document.querySelectorAll('.dot');
    dotUnits[0].className = 'dot-active dot';

};
addDots();

        // Слайдер

const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        btn = document.querySelectorAll('.portfolio-btn'),
        dot = document.querySelectorAll('.dot'),
        slider = document.querySelector('.portfolio-content');
    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };


    slider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if (!target.matches('.portfolio-btn, .dot')){
            return;
        }
        
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        
        if (target.matches('#arrow-right')){
            currentSlide++;
        } else if (target.matches('#arrow-left')){
            currentSlide--;
        } else if (target.matches('.dot')){
            dot.forEach((elem, index) => {
                if (elem === target){
                    currentSlide = index;
                }
            });
        }
        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if(currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.portfolio-btn') ||
             event.target.matches('.dot')){
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.portfolio-btn') ||
             event.target.matches('.dot')){
            startSlide();
        }
    });

    startSlide(3000);

};
slider();

        // Команда

const dataImg = () => {
    const command = document.getElementById('command'),
        img = command.querySelectorAll('.command__photo');

    img.forEach((elem) => {
        let dataSrc;
        elem.addEventListener('mouseenter', (e) => {
            dataSrc = event.target.src;
            event.target.src = event.target.dataset.img;
        });
        elem.addEventListener('mouseout', (e) => {
            event.target.src = dataSrc;
        });
    });
};
dataImg();      

        // Калькулятор

const calc = (price = 100) => {                                 //
    const calcBlock = document.querySelector('.calc-block'),    //
        calcInput = calcBlock.querySelectorAll('input');        //
                                                                // 
    calcInput.forEach((elem) => {                               // Валидатор
        elem.addEventListener('input', () => {                  //
            elem.value = elem.value.replace(/\D/g, '');         //
        });                                                     //
    });                                                         //
    
    const calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');
    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;

        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if (calcCount.value > 1){
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5){
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10){
            dayValue *= 1.5;
        }

        if (typeValue && squareValue){
            total = price * typeValue * squareValue * countValue * dayValue;
        }

        totalValue.textContent = total;
    };

    calcBlock.addEventListener('change', (event) => {
        const target = event.target;
        if (target.matches('select') || target.matches('input')){
            countSum();
        }
    });
};
calc(100);

        // send-ajax-form

const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.getElementById('form1'),
        inputs = form.querySelectorAll('input');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};
    
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body, () => {
            statusMessage.textContent = successMessage;
            inputs.forEach((elem) => {
                elem.value = '';
            });
        }, (error) => {
            statusMessage.textContent = errorMessage;
            console.error(error);
        });
    });

    const postData = (body, outputData, errorData) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState !==4){
                return;
            }
            if (request.status === 200){
                outputData();
            } else {
                errorData(request.status);
            }
        });
    
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(body));
    };


};
sendForm();

        // textarea form

const sendFormTextarea = () => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.getElementById('form2'),
        inputs = form.querySelectorAll('input');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};
    
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body, () => {
            statusMessage.textContent = successMessage;
            inputs.forEach((elem) => {
                elem.value = '';
            });
            
        }, (error) => {
            statusMessage.textContent = errorMessage;
            console.error(error);
        });
    });

    const postData = (body, outputData, errorData) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState !==4){
                return;
            }
            if (request.status === 200){
                outputData();
            } else {
                errorData(request.status);
            }
        });
    
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(body));
    };

    
};
sendFormTextarea();



let formPhone = document.querySelector('.form-phone');
const showLog = function() {
    this.value = this.value.replace(/\D/g, '');
};
formPhone.addEventListener('input', showLog);




let formName = document.querySelector('.form-name');
const showLog2 = function() {
    this.value = this.value.replace(/\d/g, '');
};
formName.addEventListener('input', showLog2);



let formMess = document.getElementById('form2-message');



});


