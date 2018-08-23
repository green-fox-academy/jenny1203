import { flower } from "./flower";
import { tree } from "./tree";

export class garden {
    flowers: flower[];
    trees: tree[];

    constructor(flowers: flower[], trees: tree[]){
        this.flowers = flowers;
        this.trees = trees;
    }

    watering(amount: number){
        console.log('');
        console.log('Watering with ' + amount);
        let thirstyPlants: any[]=[]; 
        this.flowers.forEach(element => {
            if(element.needsWater){
                thirstyPlants.push(element);
            }
        });
        this.trees.forEach(element => {
            if(element.needsWater){
                thirstyPlants.push(element);
            }
        });
        let dividedAmount: number = amount / thirstyPlants.length;
        
        this.flowers.forEach(element => {
            if(element.needsWater){
                element.watering(dividedAmount);
            }
        });
        this.trees.forEach(element => {
            if(element.needsWater){
                element.watering(dividedAmount);
            }
        });
    }

    checkGarden(){
        this.flowers.forEach(element => {
            element.log();
        });
        this.trees.forEach(element => {
            element.log();
        });
    }

}
let flowers : flower[] = [];
let trees: tree[] = [];

let flower1: flower = new flower('yellow', 0);
let tree1: tree = new tree('purple', 0);
let flower2: flower = new flower('blue', 0);
let tree2: tree = new tree('orange', 0);
flowers.push(flower1, flower2);
trees.push(tree1, tree2);
let garden1: garden = new garden(flowers, trees);
garden1.checkGarden();
garden1.watering(40);
garden1.checkGarden();
garden1.watering(70);
garden1.checkGarden();