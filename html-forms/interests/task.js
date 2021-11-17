'use strict'

const checkboxParent = document.querySelectorAll("div > ul > li > label > input");
//const checkboxChild = document.querySelectorAll(".interests_active");
console.log(checkboxParent);

//const checkbox = document.querySelectorAll(".interest__check").checked = true;
//console.log(checkbox);

  checkboxParent.forEach(checkbox => {
    let toggle = false;
    checkbox.onclick = () => {
        if (toggle === false) {
            toggle = true;
        } else toggle = false;
        checkbox.checked = toggle;

        let inputs = checkbox.closest(".interest").querySelectorAll("input");
        if (inputs.length){
            console.log(inputs);
            inputs.forEach(input => {
                input.checked = toggle;
            })
        }
    }
  })