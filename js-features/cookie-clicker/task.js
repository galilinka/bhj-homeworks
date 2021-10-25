"use strict"

//Игра-кликер

const elem = document.getElementById("clicker__counter");
  elem.onclick = function() {
    let count = 0; 
    count ++;
    clicker__counter.textContent = count;
  };

const img = document.getElementById ("cookie");
function changeSizes(){
  let counter = 0;
  counter++;
  if (counter % 2){
    img.width=100;
    img.height=100;
  }
}

img.onclick = changeSizes;