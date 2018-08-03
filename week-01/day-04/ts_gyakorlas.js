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
var age = 22;
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
// Surface Area: 600
// Volume: 1000
var cuboid1 = 10;
var cuboid2 = 10;
var cuboid3 = 10;
console.log(cuboid1 * cuboid2 * cuboid3);
console.log(cuboid1 * cuboid2 * 2 + cuboid1 * cuboid3 * 2 + cuboid2 * cuboid3 * 2);
// terület és térfogat számítás bármilyen kockával
var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;
// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
var currentminutesmp = currentMinutes * 60;
var currenthoursmp = currentHours * 3600;
var RemainingSec = 86400 - (currenthoursmp + currentminutesmp + currentSeconds);
console.log(RemainingSec);
var a123 = 24;
var out = 0;
// if a123 is even increment out by one
while (out <= a123) {
    console.log(out);
    out++;
}
var b123 = 13;
var out2 = '';
if (b123 > 10 && b123 < 20) {
    out2 = "Sweet!";
}
else if (b123 < 10) {
    out2 = "Less!";
}
else if (b123 > 20) {
    out2 = "More!";
}
console.log(out2);
var c123 = 123;
var credits = 100;
var isBonus = false;
// if credits are at least 50,
// and is_bonus is false decrement c123 by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same
if (c123 >= 50 && !isBonus) { //!-jel ellentét!!! tehát fals
    c123 = c123 - 2;
}
else if (c123 < 50 && !isBonus) {
    c123 = c123 - 1;
}
else if (isBonus) {
    c123 = c123;
}
console.log(c123);
var d123 = 8;
var time = 120;
var out3 = '';
// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"
if (d123 % 4 == 0 && time < 200) {
    out3 = "check";
}
else if (time > 200) {
    out3 = "time out";
}
else {
    out3 = "run Forest run!";
}
console.log(out3);
