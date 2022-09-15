const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

tooltips.forEach(tooltip => {

        
    
    tooltip.addEventListener('click', (event) => {
        event.preventDefault();
        const activeTooltip = Array.from(document.querySelectorAll('.tooltip_active'));

        let hint = document.createElement('div');
        hint.textContent = tooltip.title;
        hint.classList.add('tooltip');
        hint.classList.add('tooltip_active');
        tooltip.insertAdjacentElement("afterBegin", hint);
        

        hint.style.position = "absolute";
        let position = tooltip.getBoundingClientRect();
        hint.style.left = `${position.left}px`;
        hint.style.top = `${position.bottom}px`;

        activeTooltip.forEach(item => {
            if (item.classList.contains('tooltip_active')){
                item.classList.remove('tooltip_active');
            } else {
                item.classList.add('tooltip_active');
            }
     })
});
});