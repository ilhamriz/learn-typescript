"use strict";
// CLASSES
class Invoice {
    // public => default
    // private => read and change inside the class
    // readonly => only read inside or outside the class
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
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
