
// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let accesNumber: number = 5;
let numList: number[] = [1, 2, 3, 4, 5];
let counter: number = 0;
const result = numList.map(function(item){
    counter++;
    if(counter === 3){
        return item * accesNumber;
    }
    return item;
})

console.log(result);
console.log(result[2]);

