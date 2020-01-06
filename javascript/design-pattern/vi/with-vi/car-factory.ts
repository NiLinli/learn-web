import { Engine, Tires } from '../model';
import { Car } from './car';

// BAD pattern!
export class CarFactory {
  createCar() {
    let car = new Car(this.createEngine(), this.createTires());
    car.description = 'Factory';
    return car;
  }

  createEngine() {
    return new Engine(10);
  }

  createTires() {
    return new Tires(1);
  }
}

// 现在只需要三个创建方法，这还不算太坏
// 但是当应用规模变大之后，维护它将变得惊险重重
// 这个工厂类将变成由相互依赖的工厂方法构成的巨型蜘蛛网。