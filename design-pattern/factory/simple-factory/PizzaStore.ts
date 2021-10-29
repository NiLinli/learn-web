import { Pizza } from "./Pizza";
import { SimplePizzaFactory } from "./SimplePizzaFactory";

export class PizzaStore {

  constructor(
    public factory: SimplePizzaFactory
  ) {
  }

  orderPizza(type: string): Pizza {
    let pizza: Pizza;

    pizza = this.factory.createPizza(type);        // 该方法创建所需对象

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

