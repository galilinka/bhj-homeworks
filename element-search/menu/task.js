"use strict";

const menuLink = document.querySelectorAll(".menu_main > .menu__item > .menu__link");
const menuSub = document.querySelectorAll(".menu_sub");


menuLink.forEach(link => {

    link.onclick = (e) => {
        let parent = link.closest(".menu__item");
        let submenu = parent.querySelector(".menu_sub");
    
        menuSub.forEach(sub => {
          if (sub.classList.contains("menu_active") && sub !== submenu) {
            sub.classList.remove("menu_active");
          }
        });
        
        if (submenu) {
          e.preventDefault();
          submenu.classList.toggle("menu_active");
        }
    }
})





