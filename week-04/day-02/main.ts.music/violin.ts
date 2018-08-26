import { StringedInstrument } from './stringedInstrument';
export class Violin extends StringedInstrument {
  name: string = 'Violin';
  constructor(numberOfStrings: number = 4){
    super(numberOfStrings);
  }

  sound(){
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes Screech`);
  }
}