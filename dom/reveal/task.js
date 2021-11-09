"use strict";

const reveal = document.querySelectorAll('.reveal');
//console.log(reveal);

document.addEventListener('scroll', function(element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
     
    element.forEach(el, () => {
        if (elementTop > 0 && elementTop < viewportHeight) {
            reveal.classList.add('reveal_active');
        } else reveal.classList.remove('reveal_active');
    })
    return elementTop;
})

