import { Instrument } from "./instrument";
import { StringedInstrument } from "./stringedInstrument";
import { ElectricGuitar } from "./electric-guitar";

/*myList.forEach(o => {
  //because in Fyable the keringes method is optional, we have to check if the current object has it
  if (o.play) {
    o.play();
  }
});*/

console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar('Electric Guitar');
guitar.play()


