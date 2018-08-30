import { readFileSync } from "fs";
import { Movie } from "./movie";

'use strict';

const fs = require('fs');

function findMostProductiveYear(studioName: string) {
  try {
    let fileContent: string = fs.readFileSync(studioName, 'utf-8');
    let lineList: string[] = fileContent.split('\n');

    let movieList: Movie[] = [];

    for (let i: number = 0; i < lineList.length; i++) {
      let line: string[];
      if (lineList[i].indexOf('\t') !== -1) {
        line = lineList[i].split('\t');
      } else {
        line = lineList[i].split('\,');
      }
      movieList.push(new Movie(line[0], line[1], line[2]));
    }

    let date: string[] = [];
    for (let j: number = 0; j < movieList.length; j++) {
      date.push(movieList[j].getYear());
    }

    let result = modusz(date);
    return result;

  } catch (error) {
    console.log('Cannot find studio, please try again later.');
  }
}

function modusz(date) {
  let maxValue: string = '';
  let maxCount: number = 0;
  let n: number = date.length;

  for (let i: number = 0; i < n; i++) {
    let count: number = 0;

    for (let j: number = 0; j < n; j++)
      if (date[j] == date[i])
        count++;

    if (count > maxCount) {
      maxCount = count;
      maxValue = date[i];
    }
  }
  return maxValue;
}

console.log(findMostProductiveYear('marvel.txt'));
console.log(findMostProductiveYear('paramount.txt'));
export default findMostProductiveYear;
