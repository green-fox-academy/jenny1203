import * as test from 'tape';
import indexOfNumber from './find-index';

test('find in the array', (t) => {
  let myNumbers: number[] = [1, 2, 3, 4, 5, 6];
  let searchNumber: number = 2;

  let result = indexOfNumber(myNumbers, searchNumber);

  t.equal(result, 1);
  t.end();

});

test('not in the array', (t) => {
  let myNumbers: number[] = [1, 2, 3, 4, 5, 6];
  let searchNumber: number = 8;

  let result = indexOfNumber(myNumbers, searchNumber);

  t.equal(result, -1);
  t.end();

});

//Create a function that takes a list and a value, 
//and returns the index of that value in the list. If the value is not it the list, 
//the function should return -1.
