'use strict';

const students: any[] = [
    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9.5, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function sumCandies(any: object[]){
    let studentCandies: number = 0;
    for(let index = 0; index < any.length; index++){
        studentCandies = studentCandies + any[index]['candies'];
    }return studentCandies;
}
function sumAge(any: object[]){
    let studentAge: number = 0;
    for(let index = 0; index < any.length; index++){
        if( any[index]['candies'] < 5){
            studentAge = studentAge + any[index]['age'];
        }
    }return studentAge;
}
console.log(sumCandies(students));
console.log(sumAge(students));