console.log('Hello, Jenny!');
console.log('Humpty Dumpty sat on a wall,');
console.log('Humpty Dumpty had a great fall.');
console.log('All the king\'s horses and all the king\'s men');
console.log('Couldn\'t put Humpty together again.');

console.log('Hello Boglárka!');
console.log('Hello Gergő!');
console.log('Hello Kamilla!');


let nevem: string = 'Jenny';
console.log(nevem);

let age: number = 21;
console.log(age);

let height: number = 1.72;
console.log(height);

let code: number = 6;
let semester:number = 17;
let hours: number = code * semester;
console.log(hours);
let workdays: number = 5;
let weekhours: number = workdays * code * semester;
console.log(weekhours);

let favoriteNumber: number = 6;
let is: string = 'My favorite number is: ';
let sentence: string = is + favoriteNumber;
console.log(sentence);

let a: number = 123;
let b: number = 526;

b = 123;
a = 526;
console.log(a);
console.log(b);

let massInKg: number = 81.2;
let heightInM: number = 1.78;

let BMIm2: number = Math.pow(heightInM, 2);
let BMI: number = massInKg / BMIm2;

console.log(BMI);

let namesg: string = "Jenny";
let agesg: number = 21;
let heightsg: number = 1.72;
let marsg: boolean = false;
console.log(typeof namesg);
console.log(typeof agesg);
console.log(typeof marsg);
console.log(typeof heightsg);

let a2: number = 3;

a2 = a2 + 10;
console.log(a2);

let b1: number = 100;

b1 = b1 + 7;
console.log(b1);

let c: number = 44;

c = c * 2;
console.log(c);

let d: number = 125;

d = d / 5;
console.log(d);

let e: number = 8;

console.log(e**3);


let f1: number = 123;
let f2: number = 345;


if (f1 > f2){
    console.log('f1 is bigger than f2.')
}else {
    console.log('f1 is smaller than f2.')
};

let g1: number = 350;
let g2: number = 200;
let g3: number = g2 * 2;
if (g3 > g2) {
    console.log('g2 double bigger than g1');
} else {
    console.log('g1 is smaller than g2');
}

let h: number = 1357988018575474;
let jedi: boolean = true;
if ( h % 11 == 0) {
    console.log('jeeej');
} else {
    console.log('not jeeej');
}

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean) (négyzet és köb)


let j: number = 1521;
let valami: boolean = true;
if (j % 3 == 0) {
    console.log('dividable by 3.');
} else if (h % 5 == 0) {
    console.log('dividable by 5.');
}


let k: string = 'Apple';
console.log(k + k + k + k);

// Surface Area: 600 térfogat
// Volume: 1000 terület

let cuboid1: number = 10;
let cuboid2: number = 10;
let cuboid3: number = 10;
let cubSurfaceArea: number = 6;
console.log( cuboid1 * cuboid2 * cuboid3);
console.log( cuboid1 * cuboid2 * cubSurfaceArea);



let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentminutesmp: number = currentMinutes * 60;

let currenthoursmp: number = currentHours * 3600;

let RemainingSec: number = currenthoursmp + currentminutesmp + currentSeconds;
console.log(RemainingSec);

let a123: number = 24;
let out: number = 0;

// if a is even increment out by one make at home 

