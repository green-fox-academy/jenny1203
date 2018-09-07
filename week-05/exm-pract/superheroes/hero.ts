import Punchable from "./punchable";
import BaseHero from "./basehero";

export class Hero extends BaseHero implements Punchable {
  motivation: number;

  constructor(name: string, motivation: number = 0) {
    super(name);
    this.motivation = motivation;

  }

  public getMotivationLevel(): number {
    if (this.motivation < 25) {
      return 0;
    } else if (this.motivation >= 25 && this.motivation <= 40) {
      return 1;
    } else if (this.motivation > 40) {
      return 2;
    }
  }

  punch(other: Hero): void {
    let demage = this.motivation / 1.5;
    if (this.motivation >= 1) {
      other.bePunched(demage);
    }
  }

  bePunched(damage: number) {
    this.motivation = this.motivation - (damage / this.motivation);
  }

  toString() {
    if (this.getMotivationLevel() === 0) {
      return this.getName() + ' is not motivated anymore.';
    } else if (this.getMotivationLevel() === 1) {
      return this.getName() + ' is motivated.';
    } else if (this.getMotivationLevel() === 2) {
      return this.getName() + ' is well motivated.';
    }
  }
}
