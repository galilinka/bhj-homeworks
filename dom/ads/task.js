"use strict";

const rotatorCase = document.querySelectorAll('.rotator__case');
console.log(rotatorCase);

let activeText = 0;

const intervalId = setInterval(() => {
    activeText++;
    if (activeText > rotatorCase.length-1) {
        activeText = 0;
    }
    changeText(activeText);
  }, 1000);

function updateCollection(coll, cT, idx) {
    [...coll].find(item => {
      if (item.classList.contains(cT)) {
        item.classList.remove(cT);
      }
    });
    coll[idx].classList.add(cT);
  };

function changeText(idx) {
    updateCollection(rotatorCase, "rotator__case_active", idx)
}