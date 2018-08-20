const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function gotCandies(student: any[]){
    let studentNames: string = '';
    for(let index = 0; index < student.length; index++){
        if( student[index]['candies'] > 4){
            studentNames = studentNames + student[index]['name'] + ' ';
        }
    }return studentNames;
}

function avgCandies(student: any[]){
    let avgCandies: number = 0;
    for (let index = 0; index < student.length; index++){
        avgCandies = avgCandies + student[index]['candies'];
    }return avgCandies / student.length;
}
console.log(gotCandies(students));
console.log(avgCandies(students));