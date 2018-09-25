'use strict';

const addTwoNumbers = (a, b) => {
  return a + b;
};

module.exports = {addTwoNumbers};

let cards = [
  ['2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC'],
  ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD'],
  ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH'],
  ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS'],
];

let cardsObj = [
  {key : 2, color: C},
  {key : 3, color: C},
  {key : 4, color: C},
  {key : 5, color: C},
  {key : 6, color: C},
  {key : 7, color: C},
  {key : 8, color: C},
  {key : 9, color: C},
  {key : 10, color: C},
  {key : 11, color: C},
  {key : 12, color: C},
  {key : 13, color: C},
  {key : 14, color: C},
  {key : 2, color: D},
  {key : 3, color: D},
  {key : 4, color: D},
  {key : 5, color: D},
  {key : 6, color: D},
  {key : 7, color: D},
  {key : 8, color: D},
  {key : 9, color: D},
  {key : 10, color: D},
  {key : 11, color: D},
  {key : 12, color: D},
  {key : 13, color: D},
  {key : 14, color: D},
]



function matchingPars(cards) {
  let pairs = [];
  for(let index = 0; index < cards.length; index++) {
    for(let index2 = 0; index2 < cards[index].length; index2++) {
      if(cards[index][index2] && cards[index+1][index2] ) {
        pairs.push(cards[index][index2]);
      }
    }
  }
  return pairs;
}

let pairs = matchingPars(cards);
console.log(pairs);