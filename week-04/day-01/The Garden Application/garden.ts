import { flower } from "./flower";

export class garden {
    protected Flower: string[];
    protected Tree: string[];
    protected needsWater: boolean;
    protected plants: any[];

    constructor(needsWater){
        this.Flower = [];
        this.Tree = [];
        this.needsWater = needsWater;
    }

    watering(numberOfPlants){
        this.Flower.forEach(numberOfPlants => {
            if(this.needsWater){
                this.plants.push(); 
                console.log(numberOfPlants.length)
            }
        });this.plants.length / numberOfPlants;
    }

}

let garden1: garden = new garden(5);
console.log(garden1.watering);
let flower1: garden = new garden(5);
console.log(flower1.watering);