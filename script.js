let cartQuantity = 0;

const button1 = document.querySelector('.start-button');

const button2 = document.querySelector('.start-button-2');

const cart = document.querySelector('.cart-quantity');
function addToCart() {
    if (cartQuantity === 0) {
        cartQuantity += 1;
    } else if (cartQuantity > 2) {
        return;
    }

    cart.innerHTML = cartQuantity;
}

button1.addEventListener('click', () => {
    addToCart();
})

button2.addEventListener('click', () => {
    addToCart();
})