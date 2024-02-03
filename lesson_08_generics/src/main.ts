// Generics

const stringEcho = (arg: string) : string => arg
const echo = <T>(arg: T) : T => arg

// If passed object is an object and it's not array or null we can say that it's an object
const isObj = <T>(arg: T) : boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg!==null)
}

console.log(isObj(true))
console.log(isObj('John'))
console.log(isObj([1,2,3]))
console.log(isObj({name: "John"}))
console.log(isObj(null))


const isTrue = <T>(arg: T) : { arg: T, is: boolean } => {
    return {
        arg,
        is: !!arg
    }
}

type HasID = {
    id: number
}

const processUser = <T extends HasID>(user: T) : T => {
    return user
}

// type T should contain id prop because we extend it with HasID type
processUser({id: 1, name: "Zekeriya"})
// processUser({name: "Taner"}) --> it creates error


// T type must have id property inside of it
// K is the keys of T type
// Return type is an array of values of given key of object
const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K) : T[K][] => {
    return users.map(user => user[key])
}


const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
]

console.log(getUsersProperty(users,'name'))

class StateObject<T> {
    private data: T
    constructor(value: T) {
        this.data = value
    }
    public get state() {
        return this.data
    }
    public set state(value: T) {
        this.data = value
    }
}

const store = new StateObject("John")
console.log(store.state)
store.state = "Dave"
console.log(store.state)
// store.state = 15
// After assign a string type variable to data property it waits a string value to set method


const myState = new StateObject<(string | number | boolean)[]>(['Zeki',22,false])
// If we declare type explicitly then we can use these types as T type
myState.state = ["Taner",19,true]


interface Identifable<T> {
    id: T
}

const genericReverse = <T>(arr: T[]) : T[] => {
    const reversedArray = []
    const lastIndex = arr.length - 1
    for(let i=lastIndex;i>=0;i--) {
        reversedArray.push(arr[i])
    }
    return reversedArray
}





