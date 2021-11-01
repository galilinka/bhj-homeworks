"use strict";

const slides = document.querySelectorAll(".slider__item");
const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");
const sliderDot = document.querySelectorAll(".slider__dot");
let activSlide = 0;

sliderDot[activSlide].classList.add("slider__dot_active");

sliderArrowNext.onclick = () => {
    activSlide++;
    if (activSlide > slides.length-1){
        activSlide = 0;
    }
    chanheSlide(activSlide);
}

sliderArrowPrev.onclick = () => {
    activSlide--;
    if (activSlide < 0){
        activSlide = slides.length-1;
    }
    chanheSlide(activSlide);
}

sliderDot.forEach((dot, idx) => {
    dot.onclick = () => {
        activSlide = idx;
        chanheSlide(activSlide);
    }
})

function updateCollection(coll, cN, idx) {
    [...coll].find(item => {
      if (item.classList.contains(cN)) {
        item.classList.remove(cN);
      }
    });
    coll[idx].classList.add(cN);
  };

function chanheSlide(idx) {
    updateCollection(slides, "slider__item_active", idx)
    updateCollection(sliderDot, "slider__dot_active", idx)
}


