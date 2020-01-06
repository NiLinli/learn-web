import { PizzaStore } from "./pizza-store";
import { Pizza } from "../pizza/pizza";
import { WHStyleCheesePizza } from '../pizza/wh-style-pizza/cheese-pizza';
import { WHStyleVeggiePizza } from '../pizza/wh-style-pizza/veggie-pizza';
import { WHPizzaINgredientFactory } from "../pizza-ingredient-factory/wh-pizza-ingredient-factory";

export class WHPizzaStore extends PizzaStore {

  createPizza(type: string): Pizza {
    const ingredientFactory: WHPizzaINgredientFactory = new WHPizzaINgredientFactory();

    switch (type) {
      case 'cheese':
        return new WHStyleCheesePizza(ingredientFactory);
      case 'veggie':
        return new WHStyleVeggiePizza(ingredientFactory);
      default:
        null;
    }
  }

}