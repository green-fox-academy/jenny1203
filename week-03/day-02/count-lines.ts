declare function require(path: string): any;
'use strict';
export {};

const fs = require('fs');

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
let fileName: string = 'my-fiasdawle.txt';

function countLines(file: string): number {
    try{
        let Counter: number = 0;
        let fileContent: string = fs.readFileSync(file, 'utf-8');
        /*console.log(fileContent.charAt(1)); // mi az első karakter (0-ról indul)
        console.log(fileContent.concat(' ezt én írtam bele')); //összefűzi
        console.log(fileContent.length); //string hosszúsága*/
        for (let i: number = 0; i < fileContent.length; i++) {
          if(fileContent.charAt(i) ==='\n') { // \s-wite space, \n-enter
            Counter++;
          }  
        } return Counter;
    }
    catch(error){
        console.log(error);
    }
}

let result: number = countLines(fileName);
console.log(result);