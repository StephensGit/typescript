// Function Signatures

// Example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

greet("Dave", "Hello");

// Example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action == "add") {
        return numOne + numTwo;
    } else {
        return numTwo - numOne;
    }
}

let calcResult = calc(20, 30, "minus");
console.log(calcResult);

//  Example 3
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (person: {name:string, age:number}) => {
    console.log(`${person.name} is ${person.age} years old`);
};

let stephen: object;
let personLogDetails = logDetails(stephen);


