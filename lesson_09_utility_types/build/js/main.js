"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Partial
// By using partial we can get a piece of interface or type
// For example in our Assignment interface we have studentId,title,grade,verified properties but by using Partial<T> usage we can get studentId,title version of this interface
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "1",
    title: "Final Project",
    grade: 0,
    verified: false
};
const assignGraded = updateAssignment(assign1, { grade: 100 });
console.log(assignGraded);
// Required and Readonly
// By using Required type we say that we need all properties of Assignment not only piece of Assignment..
const recordAssignment = (assign) => {
    // send to database, etc..
    return assign;
};
// Readonly
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// because of properties are read only we cannot change value of variable
// assignVerified.grade = 50
// because of parameter of recordAssignment is Required type
// all properties must be provided inside parameter object
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    "Kelly": "B",
    "Sara": "C"
};
const gradeData = {
    "Sara": {
        "grade1": 50,
        "grade2": 80,
    },
    "Kelly": {
        "grade1": 100,
        "grade2": 80
    }
};
const personal = {
    name: "Mehmet",
    age: 48
};
const notPersonal = {
    "id": 2,
    "guitarType": "Bas"
};
const createNewAssign = (title, points) => {
    return {
        title,
        points
    };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
// Parameters
const add = (a, b) => {
    return a + b;
};
const ParamArgs = [5, 6];
console.log(add(...ParamArgs));
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
        return res.json();
    })
        .catch(err => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    });
    return data;
});
