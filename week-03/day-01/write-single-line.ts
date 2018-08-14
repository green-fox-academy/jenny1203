declare function require(path: string): any;
'use strict';
export {};

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

const fs = require('fs');

try {
    let fileContent: string = "Lott Jenni" ;
    fs.writeFileSync('my-file-name.txt', fileContent);
} catch(error){
    console.log('Unable to write file: my-file-name.txt');
    console.log(error);
}

