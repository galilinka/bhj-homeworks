"use strict"

//Игра «Убей кротов»
const getHole = function(index){
    for (let index = 0; index <= hole.length; index++){
        if (hole.className.includes('hole_has-mole')){
            hole.onclick = function(){      
                hole.textContent +=1;
            } else return false;
        }
    }
}
getHole();