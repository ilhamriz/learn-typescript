"use strict";
// CLASSES
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
;
const invOne = new Invoice('yoshi', 'testing yoshi', 300);
const invTwo = new Invoice('mario', 'testing mario', 400);
const invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = "jancok";
invTwo.amount = 1000;
console.log(invoices);
const form = document.querySelector('form');
// console.log(form.children);
// INPUTS
const type = document.querySelector("#type");
const toFrom = document.querySelector("#type");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
