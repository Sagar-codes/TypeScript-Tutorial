/* 
=> Different Ways TO write Functions
=> Generic Function
=> Optional Parameters
=> Required Parameters
=> Rest Parameters
*/

function add(num1: number, num2:number) : number {
    return num1 + num2;
}

const sub = (num1:number, num2:number):number => num1 - num2;

const multi = function(num1: number, num2:number) : number {
    return num1 * num2;
}

console.log("Console Add Function ",add(2,5));
console.log("Console sub Function ",sub(4,2));
console.log("Console multi Function ",multi(4,2));