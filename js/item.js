const add = document.querySelector('#item-add');
const subtract = document.querySelector('#item-rest');
const quantity = document.querySelector('#quantity');

// console.log(add, subtract, quantity);

add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);
subtract.addEventListener('click', () => {
    quantity.value = Number(quantity.value) === 0
    ? 0
    : Number(quantity.value) - 1;
    
    quantity.value = Number(quantity.value) < 0
    ? 0
    : Number(quantity.value)+0;
});
quantity.addEventListener('change', () => {
    quantity.value = Number(quantity.value) < 0
    ? 0
    : Number(quantity.value)+0;
});


