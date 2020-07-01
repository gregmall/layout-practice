import {add, subtract, product, divide, exponent} from './utils.js';
const addInput1 = document.getElementById('add-input-1');

const addInput2 = document.getElementById('add-input-2');

const addButton = document.getElementById('add-button');

const addSpan = document.getElementById('add-result');

addButton.addEventListener('click', () =>{
    
    const value1 = addInput1.value;
    const value2 = addInput2.value;
    console.log(value1);
    console.log(value2);
    const sum = add(value1, value2);
    addSpan.textContent = sum;
});

const subInput1= document.getElementById('sub-input-1');
const subInput2= document.getElementById('sub-input-2');
const subButton= document.getElementById('sub-button');
const subSpan=document.getElementById('sub-result');

subButton.addEventListener('click', () =>{
    const value1 = subInput1.value;
    const value2 = subInput2.value;
    console.log(value1);
    console.log(value2);
    const sub = subtract(value1, value2);
    subSpan.textContent = sub;
});

const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multSpan= document.getElementById('mult-result');

multButton.addEventListener('click', () =>{
    const value1 = multInput1.value;
    const value2 = multInput2.value;
    console.log(value1);
    console.log(value2);
    const multiply = product(value1, value2);
    multSpan.textContent = multiply;

});

const divInput1 = document.getElementById('div-input-1');
const divInput2= document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divSpan = document.getElementById('div-result');

divButton.addEventListener('click', ()=>{
    const value1 = divInput1.value;
    const value2 = divInput2.value;
    console.log(value1);
    console.log(value2);
    const division = divide(value1, value2);
    divSpan.textContent = division;
});

const powInput1= document.getElementById('pow-input-1');
const powInput2= document.getElementById('pow-input-2');
const powButton= document.getElementById('pow-button');
const powSpan=document.getElementById('pow-result');

powButton.addEventListener('click', () =>{
    const value1 = powInput1.value;
    const value2= powInput2.value;
    console.log(value1);
    console.log(value2);
    const power = exponent (value1, value2);
    powSpan.textContent = power;
    
});


