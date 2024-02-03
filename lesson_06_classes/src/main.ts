// Classes

class Coder {

    name: string
    music: string
    age: number
    lang: string

    constructor(name: string,music:string,age:number,lang:string) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

}


// Access modifiers

class Coder2 {

    // Initialize later
    secondLang!: string

    constructor(
        public readonly name: string,
        public music:string,
        private age:number,
        protected lang:string = "Typescript"
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() : number {
        return this.age
    }

}

const coder = new Coder2("Zekican","Anlamazdın",22,"Typescript")
console.log(coder.getAge())

// Private and protected variables cannot be accessed via object from class they can be accessible only on inside their class and if it is protected then it's accessible from it's class and it's child classes


class WebDev extends Coder2 {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
        lang?: string,
    ) {
        super(name,music,age)
        if(lang) {
            this.lang = lang
        }
    }

    public getLang() : string {
        return `I write ${this.lang}`
    }

}

const dev = new WebDev("Lenovo","Zekican","Senden Başka",22,"Java")
const dev2 = new WebDev("Mac","Sara","Lofi",20)

console.log(dev.name,dev.getLang())
console.log(dev2.name,dev2.getLang())


// Implementing an interface to a class
interface Musician {
    name: string,
    instrument: string,
    play(action:string) : string
}

class Guitarist implements Musician {
    name: string
    instrument: string
    
    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    public play(action: string) : string {
        return `${this.name} ${action} the ${this.instrument}`  
    }

}

const guitarist = new Guitarist("Zekeriya","guitar")
console.log(guitarist.play("plays"))


class Peeps { 
    static count: number = 0
    public id: number
    static getCount() : number {
        return Peeps.count
    }

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }

}

console.log("----------------")

console.log(Peeps.getCount())
const peep = new Peeps("Zekican")
console.log(Peeps.count)
const peep2 = new Peeps("Mehmet")
console.log(Peeps.count)


class Bands {
    private dataState: string[]
    constructor() {
        this.dataState = []
    }
    public get data() : string[] {
        return this.dataState
    }
    public set data(value:string[]) {
        if(Array.isArray(value) && value.every(elm => typeof elm === 'string')) {
            this.dataState = value
        }
        else {
            throw new Error('Param is not an array of strings')
        }
    }
}

const myBands = new Bands()
myBands.data = ['Neil Young','Led Zep']
console.log(myBands.data)
myBands.data = [...myBands.data,'ZZ Top']
console.log(myBands.data)