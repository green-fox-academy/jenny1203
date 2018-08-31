'use strict';

import { readFileSync } from "fs";

declare function require(path: string): any;
const fs = require('fs');

function fileRead(fileName: string): string {

  try {

    let fileContent: string = fs.readFileSync(fileName, 'utf-8');

    return fileContent;

  } catch (error) {

    console.log(error);

    return null;

  }

}

function countMoreThanEight(fileName) {
  let fileAsString: string = fileRead(fileName);
  let fileLines: string[] = fileAsString.split('\n');
  let count: number = 0;
  for (let index: number = 0; index < fileLines.length; index++) {
    let fileWords: string[] = fileLines[index].split(' ');
    if (fileLines[index].length > 8) {
      count += 1;
    }
  } return count;
}

console.log(countMoreThanEight('poem.txt'));

function averageOfWords(fileName): number {
  let fileAsString: string = fileRead(fileName);
  let fileLines: string[] = fileAsString.split('\n');
  let sum: number = 0;
  let count: number[] = [];
  for (let index: number = 0; index < fileLines.length; index++) {
    let fileWords: string[] = fileLines[index].split(' ');
    for (let index2: number = 0; index2 < fileWords.length; index2++) {
      count.push(fileWords[index2].length);
      sum += fileWords[index2].length;
    }
  } return sum / count.length;
}

console.log(averageOfWords('poem.txt'));
