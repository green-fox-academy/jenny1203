let c123: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

// if credits are at least 50,
// and is_bonus is false decrement c123 by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

if (c123 >= 50 && !isBonus) { //!-jel ellentét!!! tehát fals
    c123 = c123 - 2;
} else if (c123 < 50 && !isBonus) {
    c123 = c123 - 1;
} else if (isBonus) {
    c123 = c123;
} console.log(c123);
