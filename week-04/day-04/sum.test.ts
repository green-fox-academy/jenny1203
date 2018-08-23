'use strict'

import { sumClass } from './sum';
declare function require(path: string): any;
const test = require('tape');

test('amount equal amount', (test) => {

  let sum1: sumClass = new sumClass();
  let list: number[] = [ 1, 5, 6 ];

  test.equal(sum1.sum(list), 12); // 1.re aktuális amiről | 2.ra amivel
  test.end();

});

test( 'method with an empyt list', (test) => {
  let sum1: sumClass = new sumClass();
  let list: number[] = [ 1, 5, 6 ];

  test.equal(sum1.sum(list), 0);
  test.end();
});

test('with a list with one element in it', (test) =>{
  let sum3: sumClass = new sumClass();
  let list3: number[] = [ 1, 5, 6 ];

  test.equal(sum3.sum(list3), 1);
  test.end();
});

test('with multiple elements in it', (test) =>{
  let sum3: sumClass = new sumClass();
  let list3: number[] = [ 1, 5, 6];

  test.equal(sum3.sum(list3), 1);
  test.end();
});

test('with multiple elements in it', (test) =>{
  let sum3: sumClass = new sumClass();
  let list3: number[] = [ 1, 5, 6];

  test.equal(sum3.sum(list3), null);
  test.end();
});

test('with multiple elements in it', (test) =>{
  let sum3: sumClass = new sumClass();
  let list4: any[] = ['valami'];

  test.equal(sum3.sum(list4), 'valami');
  test.end();
});
