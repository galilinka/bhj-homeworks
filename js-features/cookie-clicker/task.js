"use strict";

let count = 0;
const countClicker = document.getElementById("clicker__counter");
const img = document.getElementById("cookie");
let size = img.width;

function changeSizes() {
    count++;
    countClicker.textContent = count;
    if (count % 2) {
        img.width = size * 2;
    } else {
        img.width = size;
    }
}
img.onclick = changeSizes;