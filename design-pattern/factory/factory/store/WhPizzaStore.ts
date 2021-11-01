import { PizzaStore } from "./PizzaStore";
import { Pizza } from "../pizza/Pizza";
import { WhStyleCheesePizza, WhStyleVeggiePizza } from '../pizza/WhStylePizza';
import { WhPizzaINgredientFactory } from '../ingredient/PizzaIngredientFactory';

export default class WhPizzaStore extends PizzaStore {

  createPizza(type: string): Pizza {

    const whPizzaINgredientFactory = new WhPizzaINgredientFactory();
    switch (type) {
      case 'cheese':
        return new WhStyleCheesePizza(whPizzaINgredientFactory);
      case 'veggie':
        return new WhStyleVeggiePizza(whPizzaINgredientFactory);
      default:
        return new Pizza();
    }
  }

}