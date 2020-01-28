import { Pizza, CheesePizza, ClamPizza, VeggiePizza } from "./pizza";

export class SimplePizzaFactory {

  constructor() { }

  createPizza(type: string): Pizza {
    let pizza: Pizza = null;

    switch (type) {
      case 'cheese':
        pizza = new CheesePizza();
        break;
      case 'clam':
        pizza = new ClamPizza();
        break;
      case 'viggie':
        pizza = new VeggiePizza();
        break;
      default:
        break;
    }
    return pizza;
  }

}

// 处理变化的部分
// 处理运行时实例的部分