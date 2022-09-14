const products = document.querySelectorAll('.product');

products.forEach((item) =>  {
    const quantityInc = item.querySelector('.product__quantity-control_inc');
    const quantityDec = item.querySelector('.product__quantity-control_dec');
    const quantity = item.querySelector('.product__quantity-value');

        quantityInc.addEventListener('click', () => {
            quantity.textContent++;
        });

        quantityDec.addEventListener('click', () => {
            quantity.textContent--;
            if (quantity.textContent < 1){
                quantity.textContent = 1;
            } 
        });

    const addButton = item.querySelector('.product__add');

        addButton.addEventListener('click', (e) => {
            let cartProducts = document.querySelector('.cart__products');
            if (cartProducts.querySelector(`[data-id='${item.dataset.id}']`)){
                let cartQuantity = Number(cartProducts.querySelector(`[data-id='${item.dataset.id}']`).querySelector('.cart__product-count').innerText) + quantity;
                Number(cartProducts.querySelector(`[data-id='${item.dataset.id}']`).querySelector('.cart__product-count').innerText) = cartQuantity;
            } else {
            cartProducts.insertAdjacentHTML('beforeend', 
            `<div class="cart__product" data-id="${item.dataset.id}">
            <img class="cart__product-image" src="${item.querySelector("img").getAttribute('src')}">
            <div class="cart__product-count">${quantity.textContent}</div>
            </div>`);
        };
    }
);
});
