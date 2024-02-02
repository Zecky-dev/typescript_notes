"use strict";
// convert to more or less specific
let a = "Hello";
let b = a; // convert One type 'a' variable to more specific type Two
let c = a;
// This type of assertions cannot be used on React
let d = 'world';
let e = 'world';
const addOrConcat = (a, b) => {
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("a and be must be same type, possible types of a and b are 'number' or 'string' ");
};
const addOrConcat2 = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage(addOrConcat("Hello", "World"));
logMessage(addOrConcat(5, 6));
// if we know return type directly although addOrConcat2 function return string or number we can say that it's return type absouletly a string then we use 'as' keyword to convert string|number union type to string type 
let myVal = addOrConcat2(2, 2, 'concat');
// Be careful typescript does not see any problem - but a string is returned, not a number!
let nextVal = addOrConcat2(2, 2, 'concat');
// Not recommended conversion
// double casting or forced casting
10;
