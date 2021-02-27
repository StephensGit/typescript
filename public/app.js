"use strict";
// Function Signatures
// Example 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
greet("Dave", "Hello");
// Example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action == "add") {
        return numOne + numTwo;
    }
    else {
        return numTwo - numOne;
    }
};
var calcResult = calc(20, 30, "minus");
console.log(calcResult);
//  Example 3
var logDetails;
logDetails = function (person) {
    console.log(person.name + " is " + person.age + " years old");
};
var stephen;
var personLogDetails = logDetails(stephen);
