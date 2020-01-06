import { PizzaStore } from "./pizza-store";
import { Pizza } from "./pizza";
import { WHStyleCheesePizza } from './wh-style-pizza/cheese-pizza';
import { WHStyleVeggiePizza } from './wh-style-pizza/veggie-pizza';

export class WHPizzaStore extends PizzaStore {

  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new WHStyleCheesePizza();
      case 'veggie':
        return new WHStyleVeggiePizza();
      default:
        null;
    }
  }

}