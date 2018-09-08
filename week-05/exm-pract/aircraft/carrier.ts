import { Aircraft } from "./aircraft";

class Carrier {
  aircrafts: Aircraft[];
  ammoStorage: number;
  healthPoint: number;
  needsAmmo: boolean;

  constructor(ammoStorage, healthPoint){
    this.ammoStorage = ammoStorage;
    this.healthPoint = healthPoint;
    this.aircrafts = [];
  }

  add(ammo, baseDamage, maxAmmo, type, allDamage){
    this.aircrafts.push(new Aircraft(ammo, baseDamage, maxAmmo, type, allDamage));
  }

  fill(){
    let dividedAmount: number = this.ammoStorage / this.aircrafts.length;
    this.aircrafts.forEach( element => {
      element.refill(dividedAmount);
    });
  }
}