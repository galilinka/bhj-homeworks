'use strict';
const taskList = document.querySelector('.tasks__list');
const input = document.querySelector('.tasks__input');
const buttonTaskAdd = document.querySelector('.tasks__add');

buttonTaskAdd.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value.trim() != '') {
        let task = 
            `<div class="task">
                <div class="task__title">
                    ${input.value}
                </div>
                <a href="#" class="task__remove">
                    &times;
                </a>
            </div>`;
      taskList.insertAdjacentHTML('beforeend', task);
      let del = taskList.lastElementChild.querySelector('.task__remove');
      del.addEventListener('click', e => {
          e.preventDefault();
          taskList.removeChild(del.parentElement);
      });
      input.value = '';
    } else return;
})



