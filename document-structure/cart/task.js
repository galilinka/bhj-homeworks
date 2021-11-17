'use strict';

const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

const cartData = {};

products.forEach(product => {
    let image = product.querySelector('img');
    let increment = product.querySelector('.product__quantity-control_inc');
    let decrement = product.querySelector('.product__quantity-control_dec');
    let value = product.querySelector('.product__quantity-value');
    let button = product.querySelector('.product__add');

    increment.onclick = () => {
        value.textContent = +value.textContent+1;
    }
    decrement.onclick = () => {
        value.textContent = +value.textContent-1;
        if (value.textContent < 1) {
            value.textContent = 1;
        }
    }
    button.onclick = () => {
        let data = {
            count: +value.textContent, 
            image: image.src
        }

        
        if (cartData[product.dataset.id]) {
            data.count += cartData[product.dataset.id].count;
        } 
        cartData[product.dataset.id] = data;
        value.textContent = 0;
        console.log(cartData);

        cartProducts.innerHTML = '';
        Object.keys(cartData).forEach(key => {
            let cart = `<div class="cart__product" data-id="${key}">
            <img class="cart__product-image" src="${cartData[key].image}">
            <div class="cart__product-count">${cartData[key].count}</div>
        </div>`
        cartProducts.innerHTML += cart;
        })
        
    }

    
})