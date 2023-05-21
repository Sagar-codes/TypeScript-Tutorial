"use strict";
/*
=> Different Ways TO write Functions
=> Generic Function
=> Optional Parameters
=> Required Parameters
=> Rest Parameters
*/
function add(num1, num2) {
    return num1 + num2;
}
const sub = (num1, num2) => num1 - num2;
const multi = function (num1, num2) {
    return num1 * num2;
};
console.log("Console Add Function ", add(2, 5));
console.log("Console sub Function ", sub(4, 2));
console.log("Console multi Function ", multi(4, 2));
