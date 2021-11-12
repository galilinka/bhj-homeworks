'use strict'

const chatWidget = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const chat = document.getElementById('chat-widget__messages');
console.log(chatWidget);

chatWidget.onclick = () => {
    chatWidget.classList.add('chat-widget_active');
}

window.addEventListener('keydown', (e) => {
    if (e.key === "Enter" && input.value.trim().length) {
        console.log(e.key);
        message(input.value.trim(), 'message message_client');
        input.value = '';
        message('ggg', 'message')
    } 
})

function createEl(tag, className, content) {
    let el = document.createElement(tag);
    el.className = className;
    el.append(content);
    return el;
  }

  function message(mes, companion) {
    let text = createEl('div', 'message__text', mes);
        let time = createEl('div', 'message__time', `${new Date().getHours()}:${new Date().getMinutes()}`);
        let message = createEl('div', companion, time);
        message.append(text);
        chat.append(message);
  }
  
  
