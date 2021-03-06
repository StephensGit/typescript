// This class must follow the structure of the HasFormatter interface
export class Invoice {
    constructor(c, b, a) {
        this.client = c;
        this.details = b;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} to ${this.details}`;
    }
}
