import { StringedInstrument } from './stringedInstrument';
export class ElectricGuitar extends StringedInstrument {
  name: string = 'Electric Guitar';
  constructor(numberOfStrings: number = 6){
    super(numberOfStrings);
    
  }

  sound() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes Twang`);
  }
}
