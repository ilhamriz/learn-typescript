// EXPLICIT TYPES
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = "luigi"
age = 30;

// isLoggedIn = 'mario'
isLoggedIn = true;

// ARRAY
let ages: number[];
let ninjas: string[] = []; // use initialize so we can use .push
ninjas.push("mario");

// UNION TYPES
let mixed: (string | number | boolean)[] = [];

mixed.push("hello");
mixed.push(20);
mixed.push(false);

let uid: string | number;

uid = "123";
uid = 123;
// uid = false;

// OBJECT
let ninjaOne: object;
ninjaOne = { name: "mario", age: 20 };

let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = { name: "mario", age: 20, beltColor: "black" };
