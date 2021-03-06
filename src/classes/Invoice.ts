import { HasFormatter } from '../interfaces/HasFormatter.js';

// This class must follow the structure of the HasFormatter interface
 export class Invoice implements HasFormatter {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, b: string, a: number) {
        this.client = c;
        this.details = b;
        this.amount = a;
    }

    format() {
        return `${this.client} owes ${this.amount} to ${this.details}`
    }
}

