class Aircraft {
  ammo: number;
  baseDamage: number;
  maxAmmo: number;
  type: string;
  allDamage: number;

  constructor(ammo: number = 0, baseDamage: number, maxAmmo: number, type: string, allDamage: number) {
    this.ammo = ammo;
    this.baseDamage = baseDamage;
    this.maxAmmo = maxAmmo;
    this.type = type;
    this.allDamage = allDamage;
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

  getType() {
    return this.type;
  }

  getStatus(): string {
    return `Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.allDamage} `;
  }

  isPriority() {
    if (this.type === 'F35') {
      return true;
    } else {
      return false;
    }
  }
}
