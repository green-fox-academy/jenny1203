// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`
let missing: string = 'a';
let typo: string = 'Chinchill';
function appendAFunc(correctionWorld: string, correction: string){
    let corrected: string = correctionWorld + correction;
    return corrected;
}
console.log(appendAFunc(typo, missing));