import { Invoice } from './classes/Invoice.js';

const inOne = new Invoice('David', 'Dylan', 200);
const inTwo = new Invoice('Stephen', 'Gerard', 400);

let invoices: Invoice[] = [];
invoices.push(inOne);
invoices.push(inTwo);

console.log(invoices);


const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLFormElement;
const tofrom = document.querySelector('#tofrom') as HTMLFormElement;
const details = document.querySelector('#details') as HTMLFormElement;
const amount = document.querySelector('#amount') as HTMLFormElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.value
        );
})
