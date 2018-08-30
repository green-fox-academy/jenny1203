import { garden } from "./garden";
import { Plant } from "./plants";

export class Flower extends Plant {
  color: string;
  waterAmount: number;
  needsWater: boolean;

  constructor(color: string, waterAmount: number) {
    super();
    this.color = color;
    this.waterAmount = waterAmount;
    this.needsWater = this.waterAmount < 5;

  }

  watering(amount: number) {
    this.waterAmount = this.waterAmount + amount * 0.75;
    this.needsWater = this.waterAmount < 5;
  }

  log() {
    if (this.needsWater) {
      console.log(`The ${this.color} Flower needs water!`);
    } else {
      console.log(`The ${this.color} Flower doesn't need water!`);
    }
  }
}
