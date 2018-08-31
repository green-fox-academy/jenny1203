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

let fileAsString: string = fileRead('matrix.txt');
let fileLines: string[] = fileAsString.split('\n');
let fileMatrix: number[][] = new Array();
let sumElements: number = 0;

for (let lineindex = 0; lineindex < fileLines.length; lineindex++) {
  let fileWords: string[] = fileLines[lineindex].split(' ');
  fileMatrix[lineindex] = [];
  for (let index = 0; index < fileWords.length; index++) {
    fileMatrix[lineindex][index] = Number(fileWords[index]);
    sumElements += fileMatrix[lineindex][index];
  }
}

console.log(fileMatrix);
console.log(sumElements);
