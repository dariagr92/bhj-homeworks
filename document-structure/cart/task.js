const products = document.querySelectorAll('.product');

products.forEach((item) =>  {
    const quantityInc = item.querySelector('.product__quantity-control_inc');
    const quantityDec = item.querySelector('.product__quantity-control_dec');
    let quantity = item.querySelector('.product__quantity-value');

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
            let productId = item.dataset.id;
            let productImg = item.querySelector("img").getAttribute('src');
            let cartQuantity = quantity.textContent;

            if (!cartProducts.querySelector(`[data-id='${productId}']`)){
                cartProducts.insertAdjacentHTML('beforeend', 
                `<div class="cart__product" data-id="${productId}">
                <img class="cart__product-image" src="${productImg}">
                <div class="cart__product-count">${cartQuantity}</div>
                </div>`);
            } else {
                cartProducts.querySelector('.cart__product-count').textContent = Number(cartQuantity) + Number(quantity.textContent);
            }
           
            }   
        );
});
