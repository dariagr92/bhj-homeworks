"use strict";

const rightArrow = document.getElementsByClassName("slider__arrow_next");
const leftArrow = document.getElementsByClassName("slider__arrow_prev");
const slides = Array.from(document.querySelectorAll(".slider__item"));

let index = 0;

function switchSlide (){
    slides[index].className = "slider__item slider__item_active";
}

rightArrow[0].onclick = function () {
    slides[index].className = "slider__item";
    index++;
    if (index >= slides.length){
        index = 0;
    }
    switchSlide();
}

leftArrow[0].onclick = function () {
    slides[index].className = "slider__item";
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    switchSlide();
}
