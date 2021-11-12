"use strict";

const fontSize = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');
//console.log(fontSize);


fontSize.forEach((size, idx) => {
    size.addEventListener('click', function(e) {
        e.preventDefault();
        updateCollection(fontSize, "font-size_active", idx);

        const element = e.target;
        const attribute = element.dataset.size || null;
        if (attribute === "small") {
            book.classList.remove("book_fs-big");
            book.classList.add("book_fs-small");
        } else if (attribute === "big") {
            book.classList.remove("book_fs-small");
            book.classList.add("book_fs-big");
        } else {
            book.classList.remove("book_fs-small", "book_fs-big");
        } 
    })
})

// element.classList.remove("font-size_active");
// element.classList.add("font-size_active");
function updateCollection(coll, cT, idx) {
    [...coll].find(item => {
      if (item.classList.contains(cT)) {
        item.classList.remove(cT);
      }
    });
    coll[idx].classList.add(cT);
  };
