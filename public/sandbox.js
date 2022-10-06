"use strict";
// function to get the circ of circle based of the diameter.
const circumference = (diameter) => {
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
let character; // This is saying, initialize this variable, but don't give it a value. But when we do - only let the type be string.
let isLoggedIn;
isLoggedIn = true;
//arrays
let arr = []; // only string values. Initializing with = [], to an empty array also always to use .push() later on in code.
// union types - a way of saying it could be one of serval types.
let mixedArr = [];
let uid; //when giving union type that isn't an array don't wrap in ().
//objects
let objectOne;
objectOne = { name: "yoshi", age: 40 }; //example
// declaring the structure and values.
let ninjaTwo;
let age; //`can also be initialized.`
let ageAgain = 25; //`age is now a number `
age = true; //`age can be redeclared as boolean`
// ! FUNCTION BASICS
let greet;
greet = () => {
    console.log("hello world");
};
// Parameters
const add = (a, b, c) => {
    console.log(a, b);
};
add(2, 10);
//////////////
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7); // results will be a number as inferred by the return which is a number type.
const greetings = (user) => {
    console.log(`${user.name} says hello`);
};
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
}; //uid now has to be a string or number - set by stringOrNum type.
// function signature
//example 1
let gree; //this function takes two arguments and will return void
gree = (name, greeting) => {
    console.log(`${name} says ${greeting}`); //console.log is a void
};
//example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        console.log(numOne + numTwo, "calc nums added");
        return numOne + numTwo;
    }
    else {
        return numOne + numTwo;
    }
};
calc(1, 4, "add");
//example three
let loginDetails;
loginDetails = (theObj) => {
    console.log(`${theObj.name} and ${theObj.age}`);
};
