declare function require(path: string): any;
'use strict';
export { };
const fs = require('fs');
// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.
// Make sure you have the 3 source files given to you on your computer
console.log(ticTacResult('win-o.txt'))
// should print O
console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw

function ticTacResult(filename: string): string {
    let readFile: string = fs.readFileSync(filename, 'utf-8');
    let lines: string[] = readFile.split('\n');
    lines.forEach(element => {
        if (element.charAt(0) === element.charAt(1) && element.charAt(1)
            === element.charAt(2)) {
            if (element.charAt(0) === 'X') {
                return 'X';
            } else {
                return '0';
            }
        }
    });
    for (let index = 0; index < lines[0].length; index++) {
        if (lines[0].charAt(index) === lines[1].charAt(index) && lines[2].charAt(index)
            === lines[0].charAt(index)) {
            if (lines[0].charAt(index) === 'X') {
                return 'X';
            } else {
                return '0';
            }
        }
    }
    if (lines[0].charAt(0) === lines[1].charAt(1) && lines[2].charAt(2)
        === lines[0].charAt(0)) {
        if (lines[0].charAt(0) === 'X') {
            return 'X';
        } else {
            return '0';
        }
    }
    if (lines[0].charAt(2) === lines[1].charAt(1) && lines[2].charAt(0)
        === lines[0].charAt(2)) {
        if (lines[0].charAt(2) === 'X') {
            return 'X';
        } else {
            return '0';
        }
    }return 'draw';
}