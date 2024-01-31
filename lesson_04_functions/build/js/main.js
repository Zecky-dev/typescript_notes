"use strict";
// interface PostId = string | number -> We can't do something like that
// We should think interfaces like classes in oop languages
// Literal types
let myName;
// myName = 'John' -> incorrect
myName = 'Zekican'; // correct
let userName;
// username can be one of those three value -> 'Zekican', 'Taner', 'Mehmet'
// functions
const add = (a, b) => {
    return a + b;
};
// If a function does not return any value then it's return type will be void type
const logMessage = (message) => {
    console.log(message);
};
logMessage("Hello");
let substract = function (c, d) {
    return c - d;
};
function multiply(a, b) {
    return a * b;
}
let otherMathFunction = function (c, d) {
    return Math.pow(c, d);
};
// Generally we use type definition for functions or other basic type definitions
// But we use interfaces for class like operations
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return 5;
};
// if we use optional parameters then those parameters should be last parameters of the parameter list
const addAll2 = (a, b, c = 0) => {
    return a + b + c;
};
logMessage(addAll2(5, 4));
logMessage(addAll2(5, 4, 6));
const optionalParameterFunction = (a = 2, b) => {
    return a + b;
};
// if we use default value for first parameters then we must pass undefined for which parameter we want to use default value
optionalParameterFunction(undefined, 5);
// Rest parameters
const total = (...nums) => {
    let total = 0;
    nums.forEach((num) => {
        total += num;
    });
    return total;
};
// rest operator parameters must be last parameter
const total2 = (a, ...nums) => {
    let total = a;
    nums.forEach(num => total += num);
    return total;
};
logMessage(total2(7, 6, 7));
// If there is an infinite loop inside a function or throwing an error then those functions' return type will be never
// use case of never type
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
// use case 2 never type
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
    }
};
const isNumber = (value) => {
    return typeof value === "number";
};
// use case 3 never type
const numberOrString = (value) => {
    if (typeof value === 'number') {
        return "number";
    }
    if (typeof value === "number") {
        return "string";
    }
    return createError("This should never happen!");
};
