"use strict"

//Игра-кликер

const element = document.getElementById("clicker__counter");
  element.onclick =function(){      
    element.textContent +=1;
}

const image = document.getElementById ("clicker__cookie");
function changeSizes(){
    image.width=100;
    image.height=100;
}

img.onclick = changeSizes;