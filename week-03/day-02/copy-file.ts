declare function require(path: string): any;
'use strict';
export {};
const fs = require('fs');

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

let fileFrom: string = 'filefrom.txt';
let fileTo: string = 'fileto.txt';

function copyFile(fileFrom: string, fileTo: string): boolean{
    try{
        let readFile = fs.readFileSync(fileFrom, 'utf-8');
        fs.writeFileSync(fileTo, readFile);
        return true;
    }catch(error){
        return false;
    }
    
}

console.log(copyFile(fileFrom, fileTo));