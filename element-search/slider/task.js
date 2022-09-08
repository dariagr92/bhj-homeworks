const rightArrow = document.getElementsByClassName('slider__arrow_next');
const leftArrow = document.getElementsByClassName('slider__arrow_prev');
const slides = Array.from(document.querySelectorAll('.slider__item'));

function switchSlide (){
    slides[index].classList.add('slider__item_active');
}

let index = 0;

rightArrow.onclick = function(){
    slides[index].classList.remove('slider__item_active');
    index++;
    if (index == slides.length){
        index = 0;
    }
    switchSlide();
}

leftArrow.onclick = function(){
    slides[index].classList.remove('slider__item_active');
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    switchSlide();
}