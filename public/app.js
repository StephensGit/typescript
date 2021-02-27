import { Invoice } from './classes/Invoice.js';
const inOne = new Invoice('David', 'Dylan', 200);
const inTwo = new Invoice('Stephen', 'Gerard', 400);
let invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
console.log(invoices);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
