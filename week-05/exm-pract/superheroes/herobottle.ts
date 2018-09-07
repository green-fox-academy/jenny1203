/**
 * In this file We want to simulate a fight between Superheroes.
 * Please implement the necessary classes by the following specification
 * 
 * You will need a Hero class which implements the Punchable interface
 * and extends the BaseHero class. (These files are provided to you)
 * The hero class must have the following
 * 
 *  Properties
 *    - motivation: a number represents how much the hero wants to save the world
 *
 *  Methods
 *    - constructor: sets the hero's name and motivation
 * 
 *    - getMotivationLevel: returns a number between 0 and 2
 *      - 0 if the motivation below 25
 *      - 1 if the motivation between 25 and 40
 *      - 2 if motivation is above 40
 * 
 *    - punch: take damage on the other hero by using his/her bePunched function with a force
 *    - damage = the puncher hero's motivation / 1.5
 *    - the hero punches other heroes only if his/her motivation level is at least 1
 * 
 *    - bePunched: the hero suffers damage, so his/her motivation decreases 
 *    - motivation = motivation - (damage / motivation)
 * 
 *    - toString: returns a string status report about the hero
 *      - if the hero's motivation level is 0: {name} is not motivated anymore.
 *      - if the hero's motivation level is 1: {name} is motivated.
 *      - if the hero's motivation level is 2: {name} is well motivated.
 * 
 *  You will need also a DCHero and a MarvelHero classes. They extend the Hero class 
 *  with a restriction, they cannot punch other heroes from the same "Universe":
 *   - A MarvelHero shouldn't be able to punch another MarvelHero 
 *   - A DCHero shouldn't be able to punch another DCHeroe
 *  Also they should have a default motivation if only name is passed to the constructor. Default values:
 *   - MarvelHero: 40
 *   - DCHero: 45
 *  You don't need to modify this file, just add your imports/requires to it.
 */
'use strict';
import BaseHero from './basehero';
import Punchable from './punchable';
import { Hero } from './hero';
// add here your imports



/*********************************************************
 *  Do not modify the code below except for test purpose *
 *********************************************************/
const heroes: BaseHero[] = [
  new Hero('Hulk', 55),
  new Hero('Iron man', 35),
  new Hero('Daredevil'),
  new Hero('Batman', 60),
  new Hero('Superman', 25),
  new Hero('Wonder woman'),
];
console.log(heroes);

/*while(heroes.filter((hero: BaseHero) => hero.getMotivationLevel() > 0).length > 1) {
  heroes.forEach((hero: BaseHero) => {
    heroes
      .filter((otherHero: Hero) => hero !== otherHero)
      .forEach((otherHero: Hero) => hero.punch(otherHero as Punchable));
  }); 
}

heroes.forEach((hero: Hero) => console.log(hero.toString()));*/