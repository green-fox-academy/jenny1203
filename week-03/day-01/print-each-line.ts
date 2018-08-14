// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'
declare function require(path: string): any;
'use strict';
export {};

const fs = require('fs'); //ha fileokkal dolgozol akkor kell!!!!

try{
    let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
console.log(fileContent);
}catch{
    console.log('Unable to read file: my-file.txt');
}
