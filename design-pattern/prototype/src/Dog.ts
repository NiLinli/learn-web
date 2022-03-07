import { Prototype } from './Prototype';

export class Dog implements Prototype<Dog> {
  constructor(public type: string) {}

  wangwang() {
    console.log(`${this.type} is wangwang`);
  }

  clone() {
    const dog = Object.create(this.constructor.prototype);
    dog.type = this.type; 
    return dog as Dog;
  }
}
