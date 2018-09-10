'use strict'

import { apple } from './apple';
declare function require(path: string): any;
const test = require('tape');

test('function should be equal', (test) => {

    let apple1: apple = new apple();
    let appleResult = apple1.getApple();
    
    test.equal('apple', appleResult);
    test.end();

  });
