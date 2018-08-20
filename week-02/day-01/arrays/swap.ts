// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`
let abc: string[] = ["Arthur", "Boe", "Chloe"];
let swap1: number = 0;
let swap2: number = 2;


function swap8(arrayInput, indexA, indexB){
    let result = arrayInput[indexA];
    arrayInput[indexA] = arrayInput[indexB];
    arrayInput[indexB] = result;
}
swap8(abc, swap1, swap2);
console.log(abc);