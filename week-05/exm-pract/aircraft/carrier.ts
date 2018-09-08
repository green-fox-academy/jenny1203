import { Aircraft } from "./aircraft";

class Carrier {
  aircrafts: Aircraft[];
  ammo: number;
  healthPoint: number;

  constructor(ammo, healthPoint){
    this.ammo = ammo;
    this.healthPoint = healthPoint;
    this.aircrafts = [];
  }

  add(ammo, baseDamage, maxAmmo, type, allDamage){
    this.aircrafts.push(new Aircraft(ammo, baseDamage, maxAmmo, type, allDamage));
  }

  fill(amount: number){
    let needsAmmo: Carrier[] = this.aircrafts.filter( F35 => F35.needsAmmo);
    let dividedAmount: number = amount / needsAmmo.length;
    needsAmmo.forEach( F35 => F35.fill(dividedAmount));
  }

  /*watering(amount: number) {
    console.log('Watering with ' + amount);
    let thirstyPlants: Plant[] = this.flowers.filter(flower => flower.needsWater);
    let thirstyTrees: any[] = this.trees.filter(tree => tree.needsWater);
    thirstyPlants = thirstyPlants.concat(thirstyTrees);

    let dividedAmount: number = amount / thirstyPlants.length;

    thirstyPlants.forEach(plant => plant.watering(dividedAmount));
    this.statusInfo();
  }*/
}