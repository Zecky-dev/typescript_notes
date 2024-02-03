// Index signatures


/*
type TransactionObj = {
    // All of the keys will be string and values are number
    // If we write readonly before index assignment then this property is read only
    readonly [index: string] : number
}
*/

/*
type TransactionObj = {
    Pizza: number,
    Books: number,
    Job: number
}
*/

type TransactionObj = {
    readonly [index:string] : number,
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj) : number => {
    let total = 0
    for(const transaction in transactions) {
        total+= transactions[transaction]
    }
    return total
}

// undefined
console.log(todaysTransactions['Dave'])

interface Student {
    // [key: string] : string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[] 
}

const student: Student = {
    name: "Zekeriya",
    GPA: 3.5,
    classes: [100,200]
}

/*
student.test = 500
console.log(student.test)
*/

// loop through object
for(const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof Student])
})

const logStudentKey = (student: Student, key: keyof Student) : void => {
    console.log(`Student ${key}: ${student[key]}`)
} 

logStudentKey(student,'GPA')


/*
interface Incomes {
    [key: string] : number
}
*/




type Streams = 'salary' | 'bonus' | 'sidehustle'
type Incomes = Record<Streams, number> 

const income : Incomes = {
    salary: 0,
    bonus: 0,
    sidehustle: 0
}

Object.keys(income).map(key => {
    const incomeKey = key as keyof Incomes
    console.log(`${incomeKey} = ${income[incomeKey]}`)
})




















