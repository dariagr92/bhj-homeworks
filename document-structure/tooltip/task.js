    const hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));

    
    

hasTooltips.forEach((el) => {
    let hint = document.createElement('div');
    hint.classList.add('tooltip');
    el.insertAdjacentElement("afterend", hint);

    el.addEventListener('click', (e) => {
    e.preventDefault();

    let tooltipActive = document.querySelector('.tooltip_active');  
    
    if (tooltipActive){
        if (tooltipActive.textContent === el.title){
        tooltipActive.classList.toggle('tooltip_active');
        } else {  
            tooltipActive.classList.remove('tooltip_active');
            hint.classList.add('tooltip_active');
        }
    } else {
        hint.classList.add('tooltip_active');
    }
        hint.textContent = el.title;
        hint.style.left = `${el.getBoundingClientRect().left}px`;
        hint.style.top = `${el.getBoundingClientRect().bottom + window.scrollY}px`;
        hint.style.position = "absolute";
        });
       });
