"use strict";
let myName = "Zekeriya"; // implicit declaration
let myName2 = "Zekican"; // explicit decleration
// myName = 42 -> Typescript does not like to assign a string value to non string value
let a;
a = "Zekican";
a = "Taner"; // We can change value of a variable but it's type must be same as before
let meaningOfLife;
let isLoading;
let album; // this type defeat typescript because it allows us to assign 'any' type of value to our variable
meaningOfLife = 42;
isLoading = false;
// it can be any data type
album = false;
album = "Hello";
const sum = (a, b) => {
    return a + b;
};
const sum2 = (a, b) => {
    return a + b;
};
// union type
let anotherVariable; // it would be a string or a number type
anotherVariable = 'Hello';
anotherVariable = 5;
// anotherVariable = false -> It shows error again because anotherVariable only can be a string or a number
let isActive;
isActive = 0;
isActive = true;
// union types can only be two or more types there are no limitation
let differentTypeVariable;
// regexp type
let reg = /\w+/g;
