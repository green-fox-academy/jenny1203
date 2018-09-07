import { Hero } from "./hero";
import { DCHero } from "./dchero";

export class MarvelHero extends Hero {

  constructor(name: string, motivation: number = 40) {
    super(name, motivation);
  }

  punch(other: Hero): void {
    if (other instanceof DCHero) {
      let demage = this.motivation / 1.5;
      if (this.motivation >= 1) {
        other.bePunched(demage);
      }
    }
  }
}
