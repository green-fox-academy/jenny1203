import { instrument} from './instrument';
export abstract class StringedInstrument extends instrument {
  numberOfStrings: number;

  constructor(numberOfStrings: number) {
    super();
    this.numberOfStrings = numberOfStrings;
  }

  abstract sound() :void;

  play(){
    this.sound();
  }
}
