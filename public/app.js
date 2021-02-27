"use strict";
var greet;
greet = function () {
    console.log("First Function");
};
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(10, 20, '25');
// By placing a ': number ' after the () it is explicilty saying that this function returns a value of type number
// However, this is unnecessary because  typescript assigns the type to the return value of the function
var minus = function (a, b) {
    return a + b;
};
var result = minus(5, 15);
