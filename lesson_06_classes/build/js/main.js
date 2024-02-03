"use strict";
// Classes
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
// Access modifiers
class Coder2 {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const coder = new Coder2("Zekican", "Anlamazdın", 22, "Typescript");
console.log(coder.getAge());
// Private and protected variables cannot be accessed via object from class they can be accessible only on inside their class and if it is protected then it's accessible from it's class and it's child classes
class WebDev extends Coder2 {
    constructor(computer, name, music, age, lang) {
        super(name, music, age);
        this.computer = computer;
        if (lang) {
            this.lang = lang;
        }
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const dev = new WebDev("Lenovo", "Zekican", "Senden Başka", 22, "Java");
const dev2 = new WebDev("Mac", "Sara", "Lofi", 20);
console.log(dev.name, dev.getLang());
console.log(dev2.name, dev2.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const guitarist = new Guitarist("Zekeriya", "guitar");
console.log(guitarist.play("plays"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
console.log("----------------");
console.log(Peeps.getCount());
const peep = new Peeps("Zekican");
console.log(Peeps.count);
const peep2 = new Peeps("Mehmet");
console.log(Peeps.count);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(elm => typeof elm === 'string')) {
            this.dataState = value;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const myBands = new Bands();
myBands.data = ['Neil Young', 'Led Zep'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'ZZ Top'];
console.log(myBands.data);
