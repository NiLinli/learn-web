import { Pizza } from './pizza';

export abstract class PizzaStore {

  constructor() { }

  orderPizza(type: string): Pizza {
    let pizza: Pizza = null;

    pizza = this.createPizza(type);        // 子类实现自己的工厂方法创建所需对象

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  abstract createPizza(type: string): Pizza;    // 基类为抽象类, 为一个接口

}

