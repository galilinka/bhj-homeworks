"use strict";

const fontSize = document.querySelectorAll('.font-size');
const fontSizeSmall = document.querySelector('.font-size_small');
const fontSizeBig = document.querySelector('.font-size_big');
const book = document.querySelector('.book');

fontSize.forEach(size => {
    size.onclick = () => {
        fontSize.classList.add('font-size_active');
        if (fontSizeBig) {
            book.classList.add('book_fs-big');
        } else if (fontSizeSmall) {
            book.classList.add('book_fs-small');
            }
    }
})

