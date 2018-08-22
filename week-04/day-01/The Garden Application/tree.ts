import { garden } from "./garden";

class tree {
    color: 'string';
    waterAmount: number;
    needsWater: boolean;

    constructor(color, needsWater, waterAmount){
        this.color = color;
        this.needsWater = waterAmount < 10;
        this.waterAmount = waterAmount;

    }

    watering(thirstyPlants: number){
        this.waterAmount = this.waterAmount + thirstyPlants * 0,4;
    }
}
