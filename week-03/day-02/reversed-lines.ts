declare function require(path: string): any;
'use strict';
export { };
const fs = require('fs');


// Create a method that decrypts reversed-lines.txt
function reverseFile(fileName: string){
    let readFile: string = fs.readFileSync(fileName, 'utf-8');
    let result: string = '';
    for (let index = readFile.length -1; index >= 0; index--){
    result = result + readFile.charAt(index);
    }console.log(result);
}
reverseFile('reversed-lines.txt');