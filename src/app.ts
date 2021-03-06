import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplates.js';
import { Payments } from './classes/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLFormElement;
const tofrom = document.querySelector('#tofrom') as HTMLFormElement;
const details = document.querySelector('#details') as HTMLFormElement;
const amount = document.querySelector('#amount') as HTMLFormElement;

//  List template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payments(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end');
})
