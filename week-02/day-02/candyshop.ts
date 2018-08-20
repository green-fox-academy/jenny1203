'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(any: any[]){
    for(let index = 0; index < any.length; index++){
        if(any[index] === 2){
            any[index] = "Croissant";
        }else if (any[index] === false){
            any[index] = "Ice cream";
        }
    } return any;
}
console.log(sweets(shopItems));