import { Pizza } from '../pizza/Pizza';

export abstract class PizzaStore {

  constructor() { }

  orderPizza(type: string): Pizza {
    let pizza: Pizza;

    // 子类实现自己的工厂方法创建所需对象
    pizza = this.createPizza(type);        

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  // 基类为抽象类, 为一个接口
  abstract createPizza(type: string): Pizza;    

}

