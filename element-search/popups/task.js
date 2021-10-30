"use strict";

const modalMain = document.querySelector("#modal_main");
const modalMainShow = modalMain.querySelector(".show-success");
const modalSucces = document.querySelector("#modal_success");
const modalCloses = document.querySelectorAll(".modal__close_times");

modalMain.classList.add('modal_active');



modalMainShow.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSucces.classList.add('modal_active');
}

modalCloses.forEach(close => {
    
    close.onclick = () => {
        console.log(close.closest(".modal"));
        close.closest(".modal").classList.remove('modal_active');
    }
})
