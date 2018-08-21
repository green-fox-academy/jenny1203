export class Person {
    protected name: string;
    protected age: number;
    protected gender: string;

    constructor(name: string = 'Jean Doe', age: number = 30, genter: string = 'female'){
        this.name = name;
        this.age = age;
        this.gender = genter;
    }

    introduce(){
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}`);
    }
    getGoal(){
        console.log("My goal is: Live for the moment!");
    }
}
/*let person1: Person = new Person('Anna', 30, 'female');
console.log(person1.introduce());
console.log(person1.getGoal());*/