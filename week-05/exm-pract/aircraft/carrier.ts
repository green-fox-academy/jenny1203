import { Aircraft } from "./aircraft";

export class Carrier {
  aircrafts: Aircraft[];
  ammoStorage: number;
  healthPoint: number;

  constructor(ammoStorage, healthPoint) {
    this.ammoStorage = ammoStorage;
    this.healthPoint = healthPoint;
    this.aircrafts = [];
  }

  add(aircraft: Aircraft) {
    this.aircrafts.push(aircraft);
  }

  fill() {
    if (this.ammoStorage != 0) {
      let dividedAmount: number = this.ammoStorage / this.aircrafts.length;
      for (let index = 0; index < this.aircrafts.length; index++) {
        if (this.aircrafts[index].isPriority() && this.ammoStorage != 0) {
          this.aircrafts[index].refill(dividedAmount)
        }
      }
      for (let index = 0; index < this.aircrafts.length; index++) {
        if (this.ammoStorage != 0) {
          this.aircrafts[index].refill(dividedAmount);
        }
      }
    } else {
      'Ammo storage is empty.';
    }
  }

  fight(other: Carrier) {
    let counter: number = 0;
    for (let index = 0; index < this.aircrafts.length; index++) {
      counter += this.aircrafts[index].ammo;
      this.aircrafts[index].ammo = 0;
    }
    other.healthPoint - counter;
  }
  /*HP: 5000, Aircraft count: 4, Ammo Storage: 2300, Total damage: 2280
  Aircrafts:
  Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
  Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
  Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
  Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
  Type F16, Ammo: 8, Base Damage: 30, All Damage: 240*/

  getStatus() {
    let totalDamage: number = 0;
    let totalAmmo: number = 0;
    let aircraftsStatus: string = '';
    for (let index = 0; index < this.aircrafts.length; index++) {
      aircraftsStatus += 'Type ' + this.aircrafts[index].getType() + ' Ammo: ' + this.aircrafts[index].ammo
        + ' Base Damage: ' + this.aircrafts[index].baseDamage
        + ' All Damage ' + this.aircrafts[index].allDamage + '\n';
      totalDamage += this.aircrafts[index].allDamage;
      totalAmmo += this.aircrafts[index].ammo;
    } return 'HP: ' + this.healthPoint + ' Aircraft count: ' + this.aircrafts.length + ' Ammo Storage: '
     + (this.ammoStorage - totalAmmo) + ' Total Damage: ' + totalDamage + '\n' + aircraftsStatus;
  }
}
