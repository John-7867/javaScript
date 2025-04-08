let num1 = 10
let num2 = 3

let divResult = num1 / num2
let expr = (num2 / num1) * (8.5 / 3.3)

let fixedDiv = (num1 / num2).toFixed(1)  // 3.333 --> 3.3
let intResult = Math.floor(num1 / num2)  // returns int -- bottom limit
let upperInt = Math.ceil(num1 / num2)    // rounds up  -- upper limit
let roundResult = Math.round(num1 / num2) // rounds up for .5, rounds down otherwise

// το mod διατηρει το προσημο του διαιρετεου
let modResult = num1 % num2;

console.log(divResult, expr, fixedDiv, intResult, upperInt, roundResult, modResult)