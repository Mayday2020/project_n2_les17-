const validForm = () => {
    let formPhone = document.querySelectorAll('.form-phone');
    const showLog = function() {
        this.value = this.value.replace(/[^+\d]/g, '');
    };
    formPhone.forEach((item) => {item.addEventListener('input', showLog);});
    
    
    
    let formName = document.querySelectorAll('.form-name');
    const showLog2 = function() {
        this.value = this.value.replace(/[^ А-Яа-я]/g, '');
    };
    formName.forEach((item) => {item.addEventListener('input', showLog2);});
    
    
    let formMess = document.getElementById('form2-message');
    formMess.addEventListener('input', showLog2);
};
export default validForm;