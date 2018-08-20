// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)
function printParams(...numbers: number[]){
    console.log(numbers);
}
printParams(5, 6, 8, 9);