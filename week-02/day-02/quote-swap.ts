'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().
let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
let indexA = words.indexOf('do');
let indexB = words.indexOf('cannot');

function quoteSwap(words, indexA, indexB): string[]{
    let result = words[indexA];
    words[indexA] = words[indexB];
    words[indexB] = result;
    return words;
}

console.log(quoteSwap(words, indexA, indexB).join(' '));
// Expected output: "What I cannot create I do not understand."