
for (let z = 0; z <= 500; z++) {
    console.log(z);
}

let number2: number = 15;
for (let number = 0; number < 5; number++) {
    console.log(number + " * " + number2 + " = " + (number * number2));
}

for (let v = 0; v++ <= 100; v++) {
    if (v % 3 == 0) {
        if (v % 3 == 0 && v % 5 == 0) {
            console.log("FizzBuzz");
        }
        console.log("Fizz");
    } else if (v % 5 == 0) {
        console.log("Buzz");
        if (v % 3 ==0 && v % 5 == 0) {
            console.log("FizzBuzz");
        }
        console.log(v);
    }
}

let line: string = ''; 
for (let triangleLine = 0; triangleLine < 5; triangleLine++) {
    line += '*';
    console.log(line);
    }