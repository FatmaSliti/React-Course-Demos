//primitives: number, string, boolean, null, undefined, symbols
//More complex types: arrays, objects
//Function types, parameters

//Primitives

// let age: number = 30;
let age: number;

age = 12;

let userName: string;

userName = 'Fatma';

let isGreatWebDeveloper: boolean;

isGreatWebDeveloper = true;

//More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

//type aliases
type Person = {
    name: string,
    age: number,
}


// let person: any; // by default
let person: Person;

// let person: {
//     name: string,
//     age: number,
// };

person = {
    name: 'Fatma',
    age: 22,
}

// person = {
//     isEmployee: false,
// }

// let people: {
//     name: string;
//     age: number;
// }[];

let people: Person[];

people = [
    {
        name: 'fatma',
        age: 22,
    },
    {
        name: 'fatmaa',
        age: 22,
    }
]


//Type inference

// let course: string = 'React - The Complete Guide';
let course = 'React - The Complete Guide';

course = '12345';

//Union Types

let Reactcourse: string | number = 'React - The Complete Guide';

Reactcourse = 12341;

let user: string | string[];

user = 'Fatma';


// Function & Types

// function add(a: number, b: number): number | string {
//     return a + b;
// }

function add(a: number, b: number) {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
} //returns a type void

//Generics

// function insertAtBeginning(array: any[], value: any) {
//     const newArray = [value, ...array];
//     return newArray;
// }

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBeginning(demoArray, -1)

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updateArray[0].split('');
