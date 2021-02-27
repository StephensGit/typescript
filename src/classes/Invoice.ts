export class Invoice {
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

