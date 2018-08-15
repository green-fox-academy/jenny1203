declare function require(path: string): any;
'use strict';
export {};
const fs = require('fs');

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful



function copiesFile(filenames: string): string {
    let writeFile = 'Valami';
    fs.writeFileSync('valami.txt', writeFile)
    let readFiles = fs.readFileSync('valami.txt', 'utf-8');
    return readFiles;
}

