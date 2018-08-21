'use strict'

import {Person} from './person';

class Sponsor extends Person {
    company: string;
    hiredStudents: number;
    constructor(name, age, genter, company: string = 'Google', hiredStudents: number = 1){
      super(name, age, genter);
      this.company = company;
      this.hiredStudents = hiredStudents;  
    }
    getGoal(){
        console.log("My goal is: Hire brilliant junior software developers.");
    }
    // introduce(): "Hi, I'm name, a age year old gender who represents company and hired hiredStudents students so far."
    introduce(){
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
    }
    // increase hiredStudents by 1
    hire(numberOfStudents){
        this.hiredStudents = this.hiredStudents + numberOfStudents;
    }
}
let sponsor1: Sponsor = new Sponsor('Miki', 32, 'male', 'BOSCH');
sponsor1.introduce();
sponsor1.getGoal();
sponsor1.hire(5);
sponsor1.introduce();