import { HasFormatter } from '../interfaces/HasFormatter.js';

// This class must follow the structure of the HasFormatter interface
 export class Payments implements HasFormatter {
    recipient: string;
    details: string;
    amount: number;

    constructor(c: string, b: string, a: number) {
        this.recipient = c;
        this.details = b;
        this.amount = a;
    }

    format() {
        return `${this.recipient} is owed ${this.amount} to ${this.details}`
    }
}

