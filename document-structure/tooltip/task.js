const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

tooltips.forEach(tooltip => {
    const hint = document.createElement('div');
    hint.textContent = tooltip.title;

    tooltip.addEventListener('click', (event) => {
        event.preventDefault();
        hint.classList.add('tooltip');
        hint.classList.toggle('tooltip_active');
        tooltip.insertAdjacentElement("beforeBegin", hint);
        hint.style.position = "absolute";
        let position = tooltip.getBoundingClientRect();
        hint.style.left = `${position.left}px`;
        hint.style.top = `${position.bottom}px`;


        
    });
});