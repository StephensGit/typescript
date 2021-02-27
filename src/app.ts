//  Explicit Types
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;

// Arrays
let people: string[] = [];

people.push("stephen","David")
console.log(people);

//  Union Types -> One of several different types 
let mixed: (string|number)[] = [];
mixed.push('Dylan');

let uid: string|number;
uid = '123';

console.log("Test");
