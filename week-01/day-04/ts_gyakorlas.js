console.log('Hello, Jenny!');
console.log('Humpty Dumpty sat on a wall,');
console.log('Humpty Dumpty had a great fall.');
console.log('All the king\'s horses and all the king\'s men');
console.log('Couldn\'t put Humpty together again.');
console.log('Hello Boglárka!');
console.log('Hello Gergő!');
console.log('Hello Kamilla!');
var nevem = 'Jenny';
console.log(nevem);
var age = 21;
console.log(age);
var height = 1.72;
console.log(height);
var code = 6;
var semester = 17;
var hours = code * semester;
console.log(hours);
var workdays = 5;
var weekhours = workdays * code * semester;
console.log(weekhours);
var favoriteNumber = 6;
var is = 'My favorite number is: ';
var sentence = is + favoriteNumber;
console.log(sentence);
var a = 123;
var b = 526;
b = 123;
a = 526;
console.log(a);
console.log(b);
var massInKg = 81.2;
var heightInM = 1.78;
var BMIm2 = Math.pow(heightInM, 2);
var BMI = massInKg / BMIm2;
console.log(BMI);
var namesg = "Jenny";
var agesg = 21;
var heightsg = 1.72;
var marsg = false;
console.log(typeof namesg);
console.log(typeof agesg);
console.log(typeof marsg);
console.log(typeof heightsg);
var a2 = 3;
a2 = a2 + 10;
console.log(a2);
var b1 = 100;
b1 = b1 + 7;
console.log(b1);
var c = 44;
c = c * 2;
console.log(c);
var d = 125;
d = d / 5;
console.log(d);
var e = 8;
console.log(Math.pow(e, 3));
var f1 = 123;
var f2 = 345;
if (f1 > f2) {
    console.log('f1 is bigger than f2.');
}
else {
    console.log('f1 is smaller than f2.');
}
;
var g1 = 350;
var g2 = 200;
var g3 = g2 * 2;
if (g3 > g2) {
    console.log('g2 double bigger than g1');
}
else {
    console.log('g1 is smaller than g2');
}
var h = 1357988018575474;
var jedi = true;
if (h % 11 == 0) {
    console.log('jeeej');
}
else {
    console.log('not jeeej');
}
var i1 = 10;
var i2 = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean) (négyzet és köb)
var j = 1521;
var valami = true;
if (j % 3 == 0) {
    console.log('dividable by 3.');
}
else if (h % 5 == 0) {
    console.log('dividable by 5.');
}
var k = 'Apple';
console.log(k + k + k + k);
// Surface Area: 600 térfogat
// Volume: 1000 terület
var cuboid1 = 10;
var cuboid2 = 10;
var cuboid3 = 10;
var cubSurfaceArea = 6;
console.log(cuboid1 * cuboid2 * cuboid3);
console.log(cuboid1 * cuboid2 * cubSurfaceArea);
var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;
// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
var currentminutesmp = currentMinutes * 60;
var currenthoursmp = currentHours * 3600;
var RemainingSec = currenthoursmp + currentminutesmp + currentSeconds;
console.log(RemainingSec);
var a123 = 24;
var out = 0;
// if a is even increment out by one make at home 
