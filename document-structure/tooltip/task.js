"use strict";

const links = document.querySelectorAll(".has-tooltip");
//console.log(tooltip);
let current = 0;

links.forEach((link, i) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        if(!link.nextElementSibling || 
            !link.nextElementSibling.classList.contains('tooltip')) {
                let y = link.getBoundingClientRect().top + 20;
                let x = link.getBoundingClientRect().right - 
                link.getBoundingClientRect().width;
                let tooltip = `<div 
                class="tooltip"
                style="top: ${y.toFixed()}px; left: ${x.toFixed()}px;"
            >
                ${link.title}
            </div>`;
            link.insertAdjacentHTML('afterend', tooltip);
            }
            if (i != current) {
                [...document.querySelectorAll('.tooltip')].find(e => {
                    e.classList.contains('.tooltip_active') 
                    && e.classList.remove('.tooltip_active');
                })
            }

            link.nextElementSibling.classList.toggle('tooltip_active');
    })
})

