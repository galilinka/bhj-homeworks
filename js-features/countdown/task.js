"use strict"

//Таймер обратного отсчёта

const time = function(){
    const timer = document.getElementById("timer");
    timer.textContent -=1;
    }
    
    setInterval(time,1000)

    window.alert("Вы победили в конкурсе!");