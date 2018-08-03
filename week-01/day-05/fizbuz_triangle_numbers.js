for (var i = 0; i < 100; i++) {
    console.log("I won't cheat on the exam!");
}
// Create a program that prints all the even numbers between 0 and 500
for (var z = 0; z <= 500; z++) {
    console.log(z);
}
var number2 = 15;
for (var number = 0; number < 5; number++) {
    console.log(number + " * " + number2 + " = " + (number * number2));
}
for (var v = 0; v++ <= 100; v++) {
    if (v % 3 == 0) {
        if (v % 3 == 0 && v % 5 == 0) {
            console.log("FizzBuzz");
        }
        console.log("Fizz");
    }
    else if (v % 5 == 0) {
        console.log("Buzz");
        if (v % 3 == 0 && v % 5 == 0) {
            console.log("FizzBuzz");
        }
        console.log(v);
    }
}
var line = '';
for (var triangleLine = 0; triangleLine < 5; triangleLine++) {
    line += '*';
    console.log(line);
}
