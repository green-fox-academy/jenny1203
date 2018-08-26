import getTrickyAvg from './tricky-average';
import * as test from 'tape';

'use strict';

test('your test case 1', (t) => {

  let expectedResult: number = 2;
  let testArray: number[] = [ 1, 2, 3 ];
  let result: number = getTrickyAvg(testArray);

  t.equal(expectedResult, result);
  t.end();
});

test('your test case 2', (t) => {

  let expectedResult: number = 4.5;
  let testArray: number[] = [ 3, 4, 5, 6 ];
  let result: number = getTrickyAvg(testArray);

  t.equal(expectedResult, result);
  t.end();
});
