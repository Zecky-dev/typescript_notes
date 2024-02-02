// arrays

// string[]
let stringArr = ['one','hey','zek']

// (string | number)[]
let guitars = ['Strat','Les Paul', 5150]

// (string | number | boolean | null)[]
let mixedData = ['EVH', 1984, true,null]

// stringArr[0] = 5 -> ts shows error because all elements inside stringArr must be a string
//stringArr.push(50)

guitars.push(70) 
guitars.push('New Guitar Type')
guitars[0] = 50
// order of data types is not important, for example first element in guitars array is a string but we can assign a number to this element because it's union type array


// if an union type covers other union type then big union would be use reference as litle union type
guitars = stringArr
mixedData = guitars

// if we don't pass any value to an array typescript infers it as any type
let test = []

let bands: string[] = []
bands.push("Test Band")
// bands.push(false) --> It's not valid usage because we can only pass string type data to that array

// Tuple
// We can define custom order data type arrays
let myTuple: [string,number,boolean] = ["Hello",5,false]
let mixed = ['John',1,false]
mixed = myTuple

// Objects
let myObject: object
myObject = [] // arrays in js -> object
console.log(typeof(myObject)) // typeof(myObject) -> object

myObject = {}
myObject = bands

const exampleObj = {
    prop1: 'Zekican',
    prop2: true
}

// exampleObj.prop1 = 5 -> prop1 type is string so we can't assign a number to that property


// type
type Gutitarist = {
    name: string,
    active?: boolean, // we can make a field optional
    albums: (string | number)[]
}

let evh: Gutitarist = {
    name: "Zekican",
    active: false,
    albums: ["First Album",2001]
}

let jp: Gutitarist = {
    name: "Taner",
    albums: ["Hello world",1984]
}

const greetGuitarist = (guitarist:Gutitarist) => {
    console.log(guitarist.name,guitarist.active,guitarist.albums)
}

greetGuitarist(evh)

// interface
interface Car {
    brand: string,
    model: string,
    type: string,
    doorCount?: number
}

let car : Car = {
    brand: "Toyota",
    model: "Supra",
    type: "Sport"
}

// Enums
enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U)














