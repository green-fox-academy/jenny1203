// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(parameterNumber: number): number{
    let sumNumber2: number = 0;
    for (let i = 0; i <= parameterNumber; i++){
        sumNumber2 = sumNumber2 + i;
    }
    return sumNumber2;
}
console.log(sum(5));