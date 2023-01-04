import { Invoice } from './classes/Invoice.js';   // use .js because it will compile to js file

const invOne = new Invoice('yoshi', 'testing yoshi', 300);
const invTwo = new Invoice('mario', 'testing mario', 400);

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);

const form = document.querySelector('form') as HTMLFormElement;
// console.log(form.children);

// INPUTS
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#type") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber,
  )
})