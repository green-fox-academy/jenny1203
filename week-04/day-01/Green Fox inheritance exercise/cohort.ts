'use strict'

class Cohort {
    name: string;
    students: string[];
    mentors: string[];
    constructor(name: string){
        this.name = name;
        this.students = [];
        this.mentors = [];
    }
    addStudent(Student){
        this.students.push(Student);
    }
    addMentor(Mentor){
        this.mentors.push(Mentor);
    }
    info(){
        console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
    }
}
let cohort1: Cohort = new Cohort('Alopex');
cohort1.addStudent('Dóra');
cohort1.addMentor('Zoltán');
cohort1.info();