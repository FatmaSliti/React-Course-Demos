//primitives: number, string, boolean, null, undefined, symbols
//More complex types: arrays, objects
//Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Primitives
// let age: number = 30;
var age;
age = 12;
var userName;
userName = 'Fatma';
var isGreatWebDeveloper;
isGreatWebDeveloper = true;
//More complex types
var hobbies;
hobbies = ['Sports', 'Cooking'];
// let person: any; // by default
var person;
// let person: {
//     name: string,
//     age: number,
// };
person = {
    name: 'Fatma',
    age: 22,
};
// person = {
//     isEmployee: false,
// }
// let people: {
//     name: string;
//     age: number;
// }[];
var people;
people = [
    {
        name: 'fatma',
        age: 22,
    },
    {
        name: 'fatmaa',
        age: 22,
    }
];
//Type inference
// let course: string = 'React - The Complete Guide';
var course = 'React - The Complete Guide';
course = '12345';
//Union Types
var Reactcourse = 'React - The Complete Guide';
Reactcourse = 12341;
var user;
user = 'Fatma';
// Function & Types
// function add(a: number, b: number): number | string {
//     return a + b;
// }
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
} //returns a type void
//Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updateArray = insertAtBeginning(demoArray, -1);
updateArray[0].split('');
