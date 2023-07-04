'use strict';

/* DOM Elements */

const decrease = document.getElementById('decrease');

const reset = document.getElementById('reset');

const increase = document.getElementById('increase');

const value = document.querySelector('#value');


/* Variables */

let count = 0;

/* Functions */

const setCount = (count) => {
    value.innerText = count;
    if (count > 0) {
        value.style.color = 'green';
    } else if (count < 0) {
        value.style.color = 'red';
    } else {
        value.style.color = 'black';
    }
};

 /* Handlers */

const increaseCounter = () => {
    count++;
    setCount(count);
};
const decreaseCounter = () => {
    count--;
    setCount(count);
};
const resetCounter = () => {
    count = 0;
    setCount(count);
};


/* Events */

increase.addEventListener('click', increaseCounter);
decrease.addEventListener('click', decreaseCounter);
reset.addEventListener('click', resetCounter);
