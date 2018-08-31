import { Flower } from "./flower";
import { Tree } from "./tree";
import { Plant } from "./plants";

export class garden {
  protected flowers: Flower[];
  protected trees: Tree[];

  constructor(flowers: Flower[], trees: Tree[]) {
    this.flowers = flowers;
    this.trees = trees;
  }

  watering(amount: number) {
    console.log('Watering with ' + amount);
    let thirstyPlants: Plant[] = this.flowers.filter(flower => flower.needsWater);
    let thirstyTrees: any[] = this.trees.filter(tree => tree.needsWater);
    thirstyPlants = thirstyPlants.concat(thirstyTrees);

    let dividedAmount: number = amount / thirstyPlants.length;

    thirstyPlants.forEach(plant => plant.watering(dividedAmount));
    this.statusInfo();
  }

  plantANewFlower(newFlower: Flower) {
    this.flowers.push(newFlower);
  }

  plantANewTree(newTree: Tree) {
    this.trees.push(newTree);
  }

  statusInfo() {
    this.flowers.forEach(flowerStat => flowerStat.log());
    this.trees.forEach(treeStat => treeStat.log());
  }
}
