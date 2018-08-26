import { StringedInstrument } from './stringedInstrument';
export class BassGuitar extends StringedInstrument {
  name: string = 'Bass Guitar';

  constructor(numberOfStrings: number = 4){
    super(numberOfStrings);
  }

  sound() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes Duum-duum-duum`);
  }
}