import { Animal } from './animal';

export class Reptile extends Animal {

  constructor(name: string) {
    super(name);
  }

  getName(): string {
    return this.name;
  }

  breed(): string {
    return 'laying eggs.';
  }
}
