"use strict";

const fontSize = document.querySelectorAll('.font-size');
const fontSizeSmall = document.querySelector('.font-size_small');
const fontSizeBig = document.querySelector('.font-size_big');
const book = document.querySelector('.book');
//const a = document.querySelector("a");
//console.log(a.dataset.dataSize);


fontSize.forEach(size => {
    size.addEventListener('click', function(e) {
        e.preventDefault();

        fontSize.forEach(font => {
            if (font.classList.contains("font-size_active")) {
              font.classList.remove("font-size_active");
            }
        });
        
    })
})


