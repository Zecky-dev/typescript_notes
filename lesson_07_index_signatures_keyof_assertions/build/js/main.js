"use strict";
// Index signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
// undefined
console.log(todaysTransactions['Dave']);
const student = {
    name: "Zekeriya",
    GPA: 3.5,
    classes: [100, 200]
};
/*
student.test = 500
console.log(student.test)
*/
// loop through object
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const income = {
    salary: 0,
    bonus: 0,
    sidehustle: 0
};
Object.keys(income).map(key => {
    const incomeKey = key;
    console.log(`${incomeKey} = ${income[incomeKey]}`);
});
