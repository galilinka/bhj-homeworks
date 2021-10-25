"use strict"

//Таймер обратного отсчёта

    let timer = 59;
    const intervalId = setInterval(() => {
      timer = document.getElementById("timer");
      timer.textContent -=1;
    if (timer.textContent === 0) {
        window.alert('Вы победили в конкурсе!');
        clearInterval(intervalId);
      }
    }, 1000);

    


    