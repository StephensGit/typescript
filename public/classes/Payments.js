// This class must follow the structure of the HasFormatter interface
export class Payments {
    constructor(c, b, a) {
        this.recipient = c;
        this.details = b;
        this.amount = a;
    }
    format() {
        return `${this.recipient} is owed ${this.amount} to ${this.details}`;
    }
}
