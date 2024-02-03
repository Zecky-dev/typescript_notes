// Utility types
interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}


// Partial

// By using partial we can get a piece of interface or type
// For example in our Assignment interface we have studentId,title,grade,verified properties but by using Partial<T> usage we can get studentId,title version of this interface
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>) : Assignment => {
    return {...assign,...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "1",
    title: "Final Project",
    grade: 0,
    verified: false
}

const assignGraded: Assignment = updateAssignment(assign1,{grade: 100})
console.log(assignGraded)

// Required and Readonly

// By using Required type we say that we need all properties of Assignment not only piece of Assignment..


const recordAssignment = (assign: Required<Assignment>) : Assignment => {
    // send to database, etc..
    return assign
}

// Readonly

const assignVerified : Readonly<Assignment> = {
    ...assignGraded,
    verified: true
}

// because of properties are read only we cannot change value of variable
// assignVerified.grade = 50


// because of parameter of recordAssignment is Required type
// all properties must be provided inside parameter object
recordAssignment({...assignGraded,verified: true})


// Record

const hexColorMap: Record<string,string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades : Record<Students,LetterGrades> = {
    "Kelly": "B",
    "Sara": "C"
}

interface Grades {
    grade1: number,
    grade2: number,
}

const gradeData: Record<Students,Grades> = {
    "Sara": {
        "grade1": 50,
        "grade2": 80,
    },
    "Kelly": {
        "grade1": 100,
        "grade2": 80
    }
}


// Pick and Omit

// Pick<T,K>
// By using pick we say that we want to use these fields of an interface, type
type AssignResult = Pick<Assignment,"studentId" | "grade">


type Guitarist = {
    id: number,
    name: string,
    age: number,
    guitarType: string,
}

// Pick usage
// We got name and grade from Guitarist type
type PersonalInfo = Pick<Guitarist, "name" | "age">

// Omit 
// By using omit we say that I dont want these fields for my new type
type NotPersonalInfo = Omit<Guitarist, "name" | "age">

const personal : PersonalInfo = {
    name: "Mehmet",
    age: 48
}

const notPersonal : NotPersonalInfo = {
    "id": 2,
    "guitarType" : "Bas"
}


// Exclude and Extract

// Exclude

// We remove one or more type from a type by using exclude
// For example LetterGrades includes A,B,C,D,U after Exclude "U" we will only have A,B,C,D for new type
type adjustedGrade = Exclude<LetterGrades, "U">

// Extract

// Only get A and B from lettergrades
type highGrades = Extract<LetterGrades,"A" | "B">


// Nonnullable
type AllPossibleGrades = "Dave" | "John" | null | undefined
// only get nonnullable types exclude null or undefined type
type NamesOnly = NonNullable<AllPossibleGrades>

const createNewAssign = (title: string, points: number) => {
    return {
        title,
        points
    }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types",100)
console.log(tsAssign)


// Parameters

const add = (a: number,b:number) : number => {
    return a + b
}

type AddParamTypes = Parameters<typeof add>

const ParamArgs : AddParamTypes = [5,6]

console.log(add(...ParamArgs))

// Await

interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async() : Promise<User[]> => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        return res.json()
    })
    .catch(err => {
        if(err instanceof Error) {
            console.log(err.message)
        }
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>















