'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo
let MyTodo: string = 'My todo:\n';
let todoText: string = ' - Buy milk\n';
todoText = todoText.concat(' - Download games\n');
todoText = todoText.concat(' \t- Diablo');
todoText = MyTodo + todoText;
console.log(todoText);