"use strict";
//  Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, b, a) {
        this.client = c;
        this.details = b;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " to " + this.details;
    };
    return Invoice;
}());
var inOne = new Invoice('David', 'Dylan', 200);
var inTwo = new Invoice('Stephen', 'Gerard', 400);
var invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
console.log(invoices);
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
