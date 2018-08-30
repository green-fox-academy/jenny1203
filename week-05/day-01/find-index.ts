'use strict';

export default function indexOfNumber(myNumbers: number[], inputNumber: number): number {
  for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] === inputNumber) {
      return 1;
    }
  } return -1;
}