import { PizzaStore } from "./pizza-store";
import { Pizza } from "../pizza/pizza";
import { BJStyleCheesePizza } from '../pizza/bj-style-pizza/cheese-pizza';
import { BJStyleVeggiePizza } from '../pizza/bj-style-pizza/veggie-pizza';
import { BJPizzaINgredientFactory } from "../pizza-ingredient-factory/bj-pizza-ingredient-factory";

export class BJPizzaStore extends PizzaStore {

  createPizza(type: string): Pizza {

    let pizza: Pizza = null;

    const ingredientFactory: BJPizzaINgredientFactory = new BJPizzaINgredientFactory();
    switch (type) {
      case 'cheese':
        pizza = new BJStyleCheesePizza(ingredientFactory);
        pizza.setName('BJ style Cheese pizza');

      case 'veggie':

        pizza = new BJStyleVeggiePizza(ingredientFactory);
        pizza.setName('BJ style Veggie pizza');
      default:
        null;
    }

    return pizza;

  }

}