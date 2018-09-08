import { F35 } from "./f35";
import { F16 } from "./f16";
import { Carrier } from "./carrier";

let first = new F35();
let second = new F35();
let third = new F16();

let firstCarrier = new Carrier(2300, 5000);
firstCarrier.add(first);
firstCarrier.add(second);
firstCarrier.add(third);

console.log(firstCarrier.getStatus());

firstCarrier.fill();


console.log(firstCarrier.getStatus());