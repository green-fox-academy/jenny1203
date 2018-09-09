/**
 * Create a method called `endsWithS` that takes a filename as a string
 *  and returns the number of the words, that ends with 's'.
 * 
 * Example cases:
 * 
 * the correct output for the 'base.txt' is: 26
 * hint: Keep in mind that there may punctuation marks at the end of the words
 */

'use strict';

/*let fileContent: string[] = [];
        fileContent = fs.readFileSync(fileName, 'utf-8').split('\n');*/
declare function require(path: string): any;
'use strict';
export { };

const fs = require('fs');


function endsWithS(filename: string): number {
  let fileContent: string[] = [];
  fileContent = fs.readFileSync(filename, 'utf-8').split(' ');
  let counter: number = 0;
  for (let index: number = 0; index < fileContent.length; index++) {
    let wordWithout: string = fileContent[index].replace('.', '').replace(',', '');
    if (wordWithout.charAt(wordWithout.length -1) === 's') {
      counter += 1;
    }
  } return counter;
}


console.log(endsWithS('base.txt'));
/********************************
 * Do not modify the code below *
 ********************************/
export default endsWithS;