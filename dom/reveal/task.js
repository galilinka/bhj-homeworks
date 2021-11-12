"use strict";

const reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', function() {
    const viewportHeight = window.innerHeight;
     
    reveal.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop > 0 && elementTop < viewportHeight) {
            el.classList.add('reveal_active');
        } else {
            el.classList.remove('reveal_active');
        }
    })
})

