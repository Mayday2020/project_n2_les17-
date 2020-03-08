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
export default addDots;