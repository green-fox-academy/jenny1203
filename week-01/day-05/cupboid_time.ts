// Surface Area: 600
// Volume: 1000

let cuboid1: number = 10;
let cuboid2: number = 10;
let cuboid3: number = 10;
console.log(cuboid1 * cuboid2 * cuboid3);
console.log(cuboid1 * cuboid2 * 2 + cuboid1 * cuboid3 * 2 + cuboid2 * cuboid3 * 2);
// terület és térfogat számítás bármilyen kockával




let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentminutesmp: number = currentMinutes * 60;

let currenthoursmp: number = currentHours * 3600;

let RemainingSec: number = 86400 - (currenthoursmp + currentminutesmp + currentSeconds);
console.log(RemainingSec);