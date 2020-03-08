'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import sendFormPopUp from './modules/sendFormPopUp';
import tabs from './modules/tabs';
import addDots from './modules/addDots';
import slider from './modules/slider';
import dataImg from './modules/dataImg';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import sendFormTextarea from './modules/sendFormTextarea';
import validForm from './modules/validForm';


        // Timer 
countTimer();
        // Меню
toggleMenu();
        // PopUp
togglePopUp();
        // Popup Form
sendFormPopUp();
        // Табы
tabs();
        // Доты    
addDots();
        // Слайдер
slider();
        // Команда
dataImg();      
        // Калькулятор
calc(100);
        // send-ajax-form
sendForm();
        // textarea form
sendFormTextarea();
        // Валидатор
validForm();