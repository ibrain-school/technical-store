function updateQuantity(button, increment) {
    const quantityInput = button.parentElement.querySelector('.quantity__input');
    let currentValue = parseInt(quantityInput.value);
    const minValue = parseInt(quantityInput.min);
    if (increment) {
        quantityInput.value = currentValue + 1;
    } else if (currentValue > minValue) {
        quantityInput.value = currentValue - 1;
    }
};

document.querySelectorAll('.shopping__prev_btn').forEach(button => {
    button.addEventListener('click', function() {
        updateQuantity(button, false);
    });
});

document.querySelectorAll('.shopping__next_btn').forEach(button => {
    button.addEventListener('click', function() {
        updateQuantity(button, true);
    });
});

// document.getElementById('cart-button').addEventListener('click', function() {
//     let cart = [];
//     if (cart.length === 0) {
//         document.getElementById('shopping__cart-empty').style.display = 'block';
//         document.getElementById('shopping__cart-full').style.display = 'none';
//     } else {
//         document.getElementById('shopping__cart-empty').style.display = 'none';
//         document.getElementById('shopping__cart-full').style.display = 'block';
//     }
// });

let cart = [
    { id: 1, name: "Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)", price: 21770, quantity: 1 },
    { id: 2, name: "Смартфон TECNO Pova 4 LG7n 8GB/128GB (серый)", price: 21770, quantity: 1 },
];
document.getElementById('cart-button').click();