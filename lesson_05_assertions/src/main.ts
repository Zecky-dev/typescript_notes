type One = string
type Two = string | number
type Three = 'Hello'

// convert to more or less specific
let a : One = "Hello"
let b = a as Two // convert One type 'a' variable to more specific type Two
let c = a as Three

// This type of assertions cannot be used on React
let d = <One>'world'
let e = <string | number>'world'

type stringOrNumber = string | number
const addOrConcat = (a: stringOrNumber,b:stringOrNumber) : (string | number) => {
    if(typeof a === "string" && typeof b === "string") {
        return a.concat(b)
    }
    if(typeof a === "number" && typeof b === "number") {
        return a + b
    }
    throw new Error("a and be must be same type, possible types of a and b are 'number' or 'string' ")
}

const addOrConcat2 = (a:number, b:number, c:'add' | 'concat') : number | string => {
    if(c==='add') {
        return a + b
    }
    return '' + a + b
}

const logMessage = (message: any) : void => {
    console.log(message)
}

logMessage(addOrConcat("Hello","World"))
logMessage(addOrConcat(5,6))

// if we know return type directly although addOrConcat2 function return string or number we can say that it's return type absouletly a string then we use 'as' keyword to convert string|number union type to string type 
let myVal: string = addOrConcat2(2,2,'concat') as string

// Be careful typescript does not see any problem - but a string is returned, not a number!
let nextVal: number = addOrConcat2(2,2,'concat') as number

// Not recommended conversion
// double casting or forced casting
(10 as unknown) as string






