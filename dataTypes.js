"use strict";
// String
let a;
a = "Sagar";
a.toUpperCase();
console.log('Console String: ', a);
// Number (Integer)
let b;
b = 10;
console.log('Console Integer or Number', b);
// Boolean
let isValid;
isValid = true;
console.log('Console Boolean', isValid);
// Array
let empList;
empList = ['Vicky', 'Vicky1', 'Vicky2', 'Vicky3', 'Vicky4'];
console.log('Console Emplist ', empList);
//or
let depList; // generic style initialization
depList = ['SDE1', 'SDE2', 'SDE3', 'SDE4', 'SDE5', 'SDE6'];
console.log('Console DepList ', depList);
let numList;
numList = [1, 2, 3, 4, 5];
let res = numList.filter((num) => num > 2);
let res1 = numList.find((num) => num === 2);
console.log('Console Filter ', res);
console.log('Console Find ', res1);
let sum = numList.reduce((acc, num) => acc + num);
console.log('Console Sum ', sum);
// Enum (Enumerate Values of the Data)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let C = Color.Red;
console.log('Cosnole Enumerate ', C);
// any
let company; //  or (let company; ) is also type of any
company = 'Null';
company = 50;
console.log('Console Company', company);
//void
//never
