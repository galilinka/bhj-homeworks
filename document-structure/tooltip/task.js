"use strict";

const links = document.querySelectorAll(".has-tooltip");
//console.log(tooltip);

links.forEach((link, i) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        let tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.textContent = link.title;
        if(link.nextElementSibling) {
            link.parentElement.insertBefore(tooltip, link.nextElementSibling);
        } else link.parentElement.append(tooltip);
        
        tooltip.classList.add("tooltip_active");
    })
})

