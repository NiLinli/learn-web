import { PizzaStore } from "./pizza-store";
import { Pizza } from "./pizza";
import { BJStyleCheesePizza } from './bj-style-pizza/cheese-pizza';
import { BJStyleVeggiePizza } from './bj-style-pizza/veggie-pizza';

export class BJPizzaStore extends PizzaStore {

  // 子类决定实例化什么类
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new BJStyleCheesePizza();
      case 'veggie':
        return new BJStyleVeggiePizza();
      default:
        null;
    }

  }

}