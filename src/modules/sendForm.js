const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.getElementById('form1'),
        inputs = form.querySelectorAll('input');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: white; margin-top: 10px;';
    const stopDiv = () => {
        setTimeout((() => {form.removeChild(statusMessage);
            statusMessage.style.cssText = 'background-color: none; color: white;';}), 4000);
    };
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        
        postData(formData)
            .then((response) => {
                if (response.status !== 200){
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                statusMessage.style.cssText = 'background-color: green; color: white;';
                inputs.forEach((elem) => {
                elem.value = '';
                });
                stopDiv();
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                statusMessage.style.cssText = 'background-color: red; color: white;';
                console.error(error);
                stopDiv();
            });
    });

    const postData = (formData) => {
        return fetch('./server.php', {
            'method': 'POST',
            'headers': {'Content-Type': 'text/html'},
            'body': formData
        });
        
    };
};
export default sendForm;