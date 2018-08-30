/** 
 * Create and test a function called `getTrickyAvg` that takes a number array as parameter
 * and returns the average of the smallest odd and largest even.
 *  - use only basic control flow statements, like 'for', 'if', etc.
 *  - do not use built-in methods like 'filter', 'forEach', 'map', etc.
 *  - write test for 2 different scenarios (test file: tricky-average.spec.ts)
 * 
 * Example cases:
 *   [1, 2, 3] -> should return 1.5
 *   [3, 4, 5, 6] -> should return 4.5
 *   [5, 2, 8, -1] -> should return 3.5
 */
'use strict';

function getTrickyAvg(averageArr: number[]): number {
  let result: number = 0;
  for (let index: number = 0; index < averageArr.length; index++) {
    result = result + averageArr[index];
  } return (result / averageArr.length);
}



function getTrickyAvg2(numbers: number[]): number {
  let smallestOdd: number = null;
  let largestEvent: number = null;
  for (let index: number = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 0 && largestEvent === null) {
      largestEvent = numbers[index];
    } else if (numbers[index] % 2 === 0 && numbers[index] > largestEvent) {
      largestEvent = numbers[index];
    }else if (numbers[index] % 2 == 1 && smallestOdd === null) {
      largestEvent = numbers[index];
    } else if (numbers[index] % 2 === 1 && numbers[index] > smallestOdd) {
      smallestOdd = numbers[index];
    }
  }
  if( smallestOdd === null)
  } return (smallestOdd + largestEvent) /2;
}

/********************************
 * Do not modify the code below *
 ********************************/
export default getTrickyAvg;
