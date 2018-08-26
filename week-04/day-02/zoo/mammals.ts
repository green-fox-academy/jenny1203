import { Animal } from './animal';

export class Mammal extends Animal {

  constructor(name: string) {
    super(name);
  }

  getName(): string {
    return this.name;
  }

  breed(): string {
    return 'pushing miniature versions out.';
  }
}
