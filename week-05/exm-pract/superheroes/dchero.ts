import { Hero } from "./hero";
import { MarvelHero } from "./marvelhero";

export class DCHero extends Hero {

  constructor(name: string, motivation: number = 45) {
    super(name, motivation);
  }

  punch(other: Hero): void {
    if (other instanceof MarvelHero) {
      let demage = this.motivation / 1.5;
      if (this.motivation >= 1) {
        other.bePunched(demage);
      }
    }
  }
}