'use strict'

import {Person} from './person';

class Mentor extends Person {
    level: string;
    constructor(name, age, genter, level: string = "intermediate"){
        super(name, age, genter);
        this.level = level;
    }
    getGoal(){
        console.log("My goal is: Educate brilliant junior software developers.");
    }
    introduce(){
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`)
    }
}
let mentor1: Mentor = new Mentor('Béla', 20, 'male');
mentor1.introduce();
mentor1.getGoal();
