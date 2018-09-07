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

  fill(ammo){
    
  }
}