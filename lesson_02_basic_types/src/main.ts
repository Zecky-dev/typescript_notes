let myName = "Zekeriya" // implicit declaration
let myName2: string = "Zekican" // explicit decleration

// myName = 42 -> Typescript does not like to assign a string value to non string value

let a: string;
a = "Zekican"
a = "Taner" // We can change value of a variable but it's type must be same as before

let meaningOfLife: number
let isLoading: boolean
let album: any // this type defeat typescript because it allows us to assign 'any' type of value to our variable

meaningOfLife = 42
isLoading = false

// it can be any data type
album = false
album = "Hello"

const sum = (a: number, b:number) => {
    return a + b
}

const sum2 = (a:number, b:string) => {
    return a + b
}

// union type
let anotherVariable: string | number // it would be a string or a number type
anotherVariable = 'Hello'
anotherVariable = 5
// anotherVariable = false -> It shows error again because anotherVariable only can be a string or a number

let isActive: boolean | number
isActive = 0
isActive = true

// union types can only be two or more types there are no limitation
let differentTypeVariable: boolean | number | string

// regexp type
let reg = /\w+/g










