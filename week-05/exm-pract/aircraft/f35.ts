class F35 extends Aircraft {

  maxAmmo: number;
  baseDamage: number;

  constructor(ammo: number, maxAmmo: number = 12, baseDamage: number = 50){
    super(ammo);
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
  }
}