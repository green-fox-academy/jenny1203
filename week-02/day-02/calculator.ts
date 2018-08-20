'use strict';
// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.
// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:
// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)
// You should use the command line arguments to accept user input
// It should work like this:
// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye

let userInput = '* 6 5';
let userInputSlices = userInput.split(' ');

function calculate(operation: string, operand1: number, operand2: number){
    if(operation === '+'){
        console.log('Result: ' + (operand1 + operand2));
        console.log('Goodbye!')
    }else if(operation === '-'){
        console.log('Result: ' + (operand1 - operand2));
        console.log('Goodbye!')
    }else if(operation === '*'){
        console.log('Result: ' + (operand1 * operand2));
        console.log('Goodbye!')
    }else if(operation === '/'){
        console.log('Result: ' + (operand1 / operand2));
        console.log('Goodbye!')
    }else if(operation === "%"){
        console.log('Result: ' + (operand1 % operand2));
        console.log('Goodbye!')
    }else{
        console.log('Not correct operation.')
    }
}


calculate(userInputSlices[0], Number(userInputSlices[1]), Number(userInputSlices[2]));