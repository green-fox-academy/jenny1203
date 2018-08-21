class animal {
    hunger: number;
    thirst: number;
    public constructor(hunger: number, thirst: number = 50){
        this.hunger = hunger;
        this.thirst = thirst;
    }
    public eat(): void{
        this.hunger--;
    }
    public drink(): void{
        this.thirst--;
    }
    public play(): void{
        this.hunger++; 
        this.thirst++;
    }
}
class farm {
    animals: animal[];
    slot: number;
    public constructor(animals, slot){
        this.animals = animals;
        this.slot = slot;
    }
    public breed(): void{
        if(this.slot > animals.length){
            this.animals.push(new animal(4));
        }else{
            console.log('No more space in the farm.')
        }
        
    }
    public slaughter(): void{
        let minHunger = animals[0];
        animals.forEach(element => {
            if(element.hunger < minHunger.hunger){
                minHunger = element;
            }
        }); animals.splice(animals.indexOf(minHunger), 1);
    }
}

let animals: animal[] = [];
let zebra: animal = new animal(10);
let panda: animal = new animal(25);
animals.push(zebra, panda);
let farm1: farm = new farm(animals, 5);
farm1.breed();
farm1.breed();
farm1.breed();
console.log(farm1.animals.length);
farm1.slaughter();
console.log(farm1.animals.length);