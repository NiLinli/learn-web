import { Dough } from "../ingredient/dough";
import { Cheese } from "../ingredient/cheese";

export abstract class Pizza {

  name: string;
  dough: Dough;
  cheese: Cheese;

  abstract prepare();     // 抽象 prepare

  bake(): void {
    console.log('Pizza bake!');
  }

  cut(): void {
    console.log('Pizza cut!');
  }

  box(): void {
    console.log('Pizza box!');
  }

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  toString(): string {
    return '';
  }
}


