/** 
 * Create and test a function called `getTrickyAvg` that takes a number array as parameter
 * and returns the average of the smallest odd and largest even.
 *  - use only basic control flow statements, like 'for', 'if', etc.
 *  - do not use built-in methods like 'filter', 'forEach', 'map', etc.
 *  - write test for 2 different scenarios (test file: tricky-average.spec.ts)
 * 
 * Example cases:
 *   [1, 2, 3] -> should return 2
 *   [3, 4, 5, 6] -> should return 4.5
 *   [5, 2, 8, -1] -> should return 3.5
 */
'use strict';

function getTrickyAvg (averageArr: number[]):number {
  let result: number = 0;
  for(let index: number = 0; index < averageArr.length; index++){
    result = result + averageArr[index];
  }return (result / averageArr.length);
}

/********************************
 * Do not modify the code below *
 ********************************/
export default getTrickyAvg;
