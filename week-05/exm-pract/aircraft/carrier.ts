import { Aircraft } from "./aircraft";

class Carrier {
  aircrafts: Aircraft[];
  ammoStorage: number;
  healthPoint: number;

  constructor(ammoStorage, healthPoint) {
    this.ammoStorage = ammoStorage;
    this.healthPoint = healthPoint;
    this.aircrafts = [];
  }

  add(ammo, baseDamage, maxAmmo, type, allDamage) {
    this.aircrafts.push(new Aircraft(ammo, baseDamage, maxAmmo, type, allDamage));
  }

  fill() {
    if(this.ammoStorage != 0){
      for(let index = 0; index < this.aircrafts.length; index++){
        if ( this.aircrafts[index].isPriority() === true && this.ammoStorage != 0) {
          let dividedAmount: number = this.ammoStorage / this.aircrafts.length;
          this.aircrafts.forEach(element => {
            element.refill(dividedAmount);
          });
        }
      }
      for(let index = 0; index < this.aircrafts.length; index++){
        if (this.ammoStorage != 0) {
          let dividedAmount: number = this.ammoStorage / this.aircrafts.length;
          this.aircrafts.forEach(element => {
            element.refill(dividedAmount);
          });
        }
      }
    } else {
      'Ammo storage is empty.';
    }  
  }

  fight(other: Carrier){
    let counter: number = 0;
    for(let index = 0; index < this.aircrafts.length; index++){
      counter += this.aircrafts[index].ammo;
      this.aircrafts[index].ammo = 0;
    }
    other.healthPoint - counter;
  }
}