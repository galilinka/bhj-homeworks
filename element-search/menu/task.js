"use strict";

const menuLink = document.querySelectorAll(".menu_main > .menu__item > .menu__link");
const menuSub = document.querySelectorAll(".menu_sub");


menuLink.forEach(link => {

    link.onclick = (e) => {
        menuSub.forEach(sub => {
            if (sub.classList.contains("menu_active")) {
                sub.classList.remove("menu_active");
            }
        })
        let parent = link.closest(".menu__item");
        let submenu = parent.querySelector(".menu_sub");
        if (submenu) {
            e.preventDefault();
            submenu.classList.add("menu_active");
        } 
    } 
})

