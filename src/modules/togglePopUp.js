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
export default togglePopUp;