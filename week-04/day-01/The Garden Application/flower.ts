import { garden } from "./garden";

export class flower {
    color: 'string';
    waterAmount: number;
    needsWater: boolean;

    constructor(color, needsWater, waterAmount){
        this.color = color;
        this.needsWater = waterAmount < 5;
        this.waterAmount = waterAmount;

    }

    watering(thirstyPlants: number){
        this.waterAmount = this.waterAmount + thirstyPlants * 0,4;
    }
}
