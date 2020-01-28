import { QuackBehavior, Quack } from "./quack-behavior";
import { FlyBehavior, FlyWithWings } from "./fly-behavior";

abstract class Duck {

  abstract quackBehavior: QuackBehavior;
  abstract flyBehavior: FlyBehavior;

  constructor() {
  }

  swim() { }

  display() { }

  // 动态设定行为 -- 在运行时改变行为
  setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }

  setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }

  performFly() {
    this.flyBehavior.fly();
  }

  performQuack() {
    this.quackBehavior.quack();
  }
}

export class MallardDuck extends Duck {

  quackBehavior: QuackBehavior;
  flyBehavior: FlyBehavior;

  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  display() {
    console.log('I\'m a really MallardDuck.');
  }

}