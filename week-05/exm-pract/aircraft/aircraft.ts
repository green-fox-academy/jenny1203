class Aircraft {
  ammo: number;
  baseDamage: number;
  maxAmmo: number;

  constructor(ammo: number = 0, baseDamage: number, maxAmmo: number) {
    this.ammo = ammo;
    this.baseDamage = baseDamage;
    this.maxAmmo = maxAmmo;
  }

  fight(damage): number {
    damage = this.ammo * this.baseDamage;
    this.ammo = 0;
    return damage;
  }

  refill(addAmmo: number): number {
    if (addAmmo >= this.maxAmmo) {
      let returnValue = addAmmo - (this.maxAmmo - this.ammo);
      this.ammo = this.maxAmmo;
      return returnValue;
    } else if (addAmmo < this.maxAmmo) {
      this.ammo = this.ammo + addAmmo;
        if (this.ammo > this.maxAmmo) {
          let returnValue = this.ammo - this.maxAmmo;
          this.ammo = this.maxAmmo;
          return returnValue;
        }
      return 0;
    }
  }

  
}
