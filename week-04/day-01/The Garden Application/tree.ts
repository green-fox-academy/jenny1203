import { garden } from "./garden";
import { Plant } from "./plants";

export class Tree extends Plant {
  color: string;
  waterAmount: number;
  needsWater: boolean;

  constructor(color: string, waterAmount: number) {
    super();
    this.color = color;
    this.waterAmount = waterAmount;
    this.needsWater = this.waterAmount < 10;
  }

  watering(amount: number) {
    this.waterAmount = this.waterAmount + amount * 0.4;
    this.needsWater = this.waterAmount < 10;
  }

  log() {
    if (this.needsWater) {
      console.log(`The ${this.color} Tree needs water!`);
    } else {
      console.log(`The ${this.color} Tree doesn't need water!`);
    }
  }
}
