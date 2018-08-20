// -  Create a function called `factorio`
//    that returns it's input's factorial
function factorio(parameterNumber: number): number{
    let sumNumber: number = 1;
    for (let i = 1; i <= parameterNumber; i++){
        sumNumber = sumNumber * i;
    }
    return sumNumber;
}
console.log(factorio(5));