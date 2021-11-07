"use strict";

const dropdownList = document.querySelector(".dropdown__list");
const dropdownLink = document.querySelectorAll(".dropdown__link");
const dropdownValue = document.querySelector(".dropdown__value");

dropdownValue.onclick = () => {
    dropdownList.classList.toggle("dropdown__list_active");
}

dropdownLink.forEach(link => {
    link.onclick = (event) => {
        event.preventDefault();
        dropdownValue.textContent = link.textContent;
        dropdownList.classList.remove("dropdown__list_active");
    }
});
