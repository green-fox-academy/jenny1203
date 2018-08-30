import { Flower } from "./flower";
import { Tree } from "./tree";
import { garden } from "./garden";

let flowers: Flower[] = [];
let trees: Tree[] = [];

let flower1: Flower = new Flower('yellow', 0);
let tree1: Tree = new Tree('purple', 0);
let flower2: Flower = new Flower('blue', 0);
let tree2: Tree = new Tree('orange', 0);

let garden1: garden = new garden(flowers, trees);

garden1.plantANewFlower(flower1);
garden1.plantANewFlower(flower2);

garden1.plantANewTree(tree1);
garden1.plantANewTree(tree2);

garden1.statusInfo();
garden1.watering(40);
garden1.watering(70);