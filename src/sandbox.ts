// function to get the circ of circle based of the diameter.
const circumference = (diameter: number) => {
  //defining the parameter type to number
  return diameter * Math.PI;
};

//argument has to be a number type
console.log(circumference(5.5));

//arrays
let names = ["luigi", "mario", "yoshi"];
names.push("toad");
// names.push(3)  ;
// names[0] = 3;
console.log(names);
// Can only add type that was made when declaring. 3 (number) will throw error.

let mixed = ["ken", 4, "chun-li", 8, 9, true];
mixed[0] = 3; // Ken(string) = 3(number)
// TypeScript sees this array declared as: String, Numbers, Booleans - therefore they can be changed between those types.

//Objects
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

//!explicit types
let character: string; // This is saying, initialize this variable, but don't give it a value. But when we do - only let the type be string.

let isLoggedIn: boolean;
isLoggedIn = true;

//arrays
let arr: string[] = []; // only string values. Initializing with = [], to an empty array also always to use .push() later on in code.

// union types - a way of saying it could be one of serval types.
let mixedArr: (string | number | boolean)[] = [];

let uid: string | number; //when giving union type that isn't an array don't wrap in ().

//objects
let objectOne: object;
objectOne = { name: "yoshi", age: 40 }; //example

// declaring the structure and values.
let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

let age: any; //`can also be initialized.`
let ageAgain: any = 25; //`age is now a number `
age = true; //`age can be redeclared as boolean`

// ! FUNCTION BASICS
let greet: Function;
greet = () => {
  console.log("hello world");
};

// Parameters
const add = (a: number, b: number, c?: number | string) => {
  console.log(a, b);
};
add(2, 10);
//////////////

const minus = (a: number, b: number) => {
  return a + b;
};

let result = minus(10, 7); // results will be a number as inferred by the return which is a number type.
// let result: string; - would throw error

//! after argument - :number is explicitly saying the return is a number
// const minus = (a: number, b: number): number => {
//   return a + b;
// };

//void value is when nothing is being returned in function i.e console.logs

// ! type aliases

type StringOrNum = string | number;
type obWithName = { name: string; uid: StringOrNum };

const greetings = (user: obWithName) => {
  console.log(`${user.name} says hello`);
};

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}; //uid now has to be a string or number - set by stringOrNum type.

// function signature
//example 1
let gree: (a: string, b: string) => void; //this function takes two arguments and will return void

gree = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`); //console.log is a void
};

//example 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    console.log(numOne + numTwo, "calc nums added");
    return numOne + numTwo;
  } else {
    return numOne + numTwo;
  }
};
calc(1, 4, "add");

//example three
let loginDetails: (obj: { name: string; age: number }) => void;

type nameAndAgeObj = { name: string; age: number };

loginDetails = (theObj: nameAndAgeObj) => {
  console.log(`${theObj.name} and ${theObj.age}`);
};
