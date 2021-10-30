"use strict";

//Игра «Убей кротов»

(() => {
    let counterDead = 0;
    let counterLost = 0;
    const dead = document.getElementById('dead');
    const lost = document.getElementById('lost');
    const holes = document.getElementsByClassName('hole');
    const reset = text => {
        alert(text);
        dead.textContent = 0;
        lost.textContent = 0;
        counterLost = 0;
        counterDead = 0;
    };
    const getHole = hole => {
        hole.onclick = () => {
            if (hole.className.includes('hole_has-mole')) {
                counterDead++;
                dead.textContent = counterDead;
                if (counterDead === 10) reset('You win!');
            } else {
                counterLost++;
                lost.textContent = counterLost;
                if (counterLost === 5) reset('You lose!');
            }
        }
    };
    for (let i = 0; i < holes.length; i++) {
        getHole(holes[i]);
    }
})()

