"use strict";

// const reveal = document.querySelector('.reveal');
// console.log(reveal);

// function getCoords(el) { 
//     let box = el.getBoundingClientRect();
//     alert(box);
//     return box.top < window.innerHeight && box.bottom >= 0;
// }

const isInViewport = function (element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    return elementTop < viewportHeight ? true : false; 
}; 
const reveal = document.querySelector('.reveal');
isInViewport(reveal);
console.log(reveal);

    // reveal.addEventListener("scroll", function() {
    //     const viewportHeight = window.innerHeight;
    //     getCoords();

    //     if (viewportHeight.classList.contains(element)) {
    //         reveal.classList.add('reveal_active');
    //     }
        
    //     return element < viewportHeight ? true : false;
    // })


// 1. получить размер box
// 2. переделать на All 
// 3. добавить цикл
// 4. если есть во вьюпорт - active 
