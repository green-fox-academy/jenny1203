let d123: number = 8;
let time: number = 120;
let out3: string = '';

// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"

if (d123 % 4 == 0 && time < 200) {
    out3 = "check";
} else if (time > 200) {
    out3 = "time out";
} else {
    out3 = "run Forest run!";
}
console.log(out3);