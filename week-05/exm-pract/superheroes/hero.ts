import Punchable from "./punchable";
import BaseHero from "./basehero";

export class Hero extends BaseHero implements Punchable {
  motivation?: number;

  constructor(name, motivation) {
    super(name);
    this.motivation = motivation;

  }

  getMotivationLevel(): number {
    if (this.motivation < 25) {
      return 0;
    } else if (this.motivation >= 25 && this.motivation <= 40) {
      return 1;
    } else if (this.motivation > 40) {
      return 2;
    }
  }
  /*punch: take damage on the other hero by using his/her bePunched function with a force
   *    - damage = the puncher hero's motivation / 1.5
   *    - the hero punches other heroes only if his/her motivation level is at least 1
   * */


  punch(other: Hero) {
    if (this.motivation >= 1) {
      other.bePunched(10);
      let demage = this.motivation / 1.5;
      return this.motivation = demage;
    }
  }

  bePunched(damage: number) {
    this.motivation = this.motivation - (damage / this.motivation);
  }

  /*toString: returns a string status report about the hero
 *      - if the hero's motivation level is 0: {name} is not motivated anymore.
 *      - if the hero's motivation level is 1: {name} is motivated.
 *      - if the hero's motivation level is 2: {name} is well motivated.*/

  toString() {
    if (this.motivation === 0) {
      return `${name} is not motivated anymore.`;
    } else if (this.motivation === 1) {
      return `${name} is motivated.`;
    } else if (this.motivation === 2) {
      return `${name} is well motivated.`;
    }
  }
}
