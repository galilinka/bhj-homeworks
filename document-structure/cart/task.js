'use strict';

const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach(product => {
    let id = product.dataset.id;
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
        let allCartProduct = document.querySelectorAll('.cart_product');
        document.querySelectorAll('.cart__product');
        let cart = 
            `<div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${image.src}">
                <div class="cart__product-count">
                    ${value.textContent}
                </div>
            </div>`;


            let searchEl = [...allCartProduct].find(el => el.dataset.id === id);
            if (searchEl) {
                let cartCount = searchEl.querySelector('.cart__product-count');
                cartCount.textContent = +cartCount.textContent + +value.textContent;
            } else cartProducts.insertAdjacentHTML('beforeend', cart);
            value.textContent = 1;
        }
    
})