/*Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
    initialize gasAmount -> 0
    initialize capacity -> 100 */ 
    
class station{
    gesAmount: number;
    public refill(car, mennyit){
        car.gesAmount = car.gesAmount + mennyit;
        this.gesAmount = this.gesAmount - mennyit;
    }
    public constructor(){
        this.gesAmount = 5000;
    }
}

class car{
    gesAmount: number;
    capacity: number;
    public constructor(){
        this.gesAmount = 0;
        this.capacity = 100;
    }

}

let benzinkut: station = new station();
let auto: car = new car();
console.log(auto.capacity);
benzinkut.refill(auto, 50);
console.log(benzinkut.gesAmount);
console.log(auto.gesAmount);
