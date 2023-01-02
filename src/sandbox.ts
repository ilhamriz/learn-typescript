// let greet: Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  return action === "add" ? (numOne + numTwo) : (numOne - numTwo);
}

// example 3
type person = {
  name: string,
  age: number
};
let logDetails: (obj: person) => void;

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}