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
let Berci: animal = new animal(15);
Berci.eat();
Berci.drink();
console.log(Berci.hunger + ' ' + Berci.thirst);