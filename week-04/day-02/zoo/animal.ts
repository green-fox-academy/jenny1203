'use strict'

export abstract class Animal {
  protected name: string;
  protected age: number;
  protected genter: string;
  protected hungry: boolean;
  protected size: number;

  constructor(name: string) {
    this.name = name;
  }

  abstract getName(): string;

  abstract breed(): string;
}
