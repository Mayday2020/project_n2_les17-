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
export default dataImg;