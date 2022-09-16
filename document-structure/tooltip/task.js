const hasTooltips = Array.from(document.querySelector('.has-tooltip'));
let tooltip = document.querySelector('.tooltip');
let hint = document.createElement('div');   
hint.classList.add('tooltip');


hasTooltips.forEach((el) => el.addEventListener('click', (e) => {
    e.preventDefault();
    
    hint.style.position = "absolute";
    el.insertAdjacentElement("afterend", hint);

    if (hint.textContent === el.title){
        hint.classList.toggle('tooltip_active');
    } else {       
        hint.classList.add('tooltip_active');
        let position = el.getBoundingClientRect();
        hint.style.left = `${position.left}px`;
        hint.style.top = `${position.bottom}px`;
        hint.textContent = el.title;
    }
    
}));

