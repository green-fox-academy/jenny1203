'use strict'

import {Person} from './person';


class Student extends Person {
    previousOrganization: string;
    skippedDays: number;
    constructor(name, age, genter, previousOrganization, skippedDays: number = 0){
        super(name, age, genter);
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays;
    }

    getGoal(){
       console.log("My goal is: Be a junior software developer.");
    }

    introduce(){
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`)
    }

    skipDays(numberOfDays: number){
        this.skippedDays = this.skippedDays + numberOfDays;

    }
}

let student1: Student = new Student('Anna', 30, 'female', 'valami');
student1.introduce();
student1.getGoal();
student1.skipDays(1);
student1.introduce();
