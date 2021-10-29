import { PizzaStore } from "./PizzaStore";
import { Pizza } from '../pizza/Pizza';
import { BjStyleCheesePizza, BjStyleVeggiePizza } from "../pizza/BjStylePizza";
import { BJPizzaINgredientFactory } from '../ingredient/PizzaIngredientFactory'

export default class BjPizzaStore extends PizzaStore {

  // 子类决定实例化什么类
  createPizza(type: string): Pizza {

    const bJPizzaINgredientFactory = new BJPizzaINgredientFactory();
    switch (type) {
      case 'cheese':
        return new BjStyleCheesePizza(bJPizzaINgredientFactory);
      case 'veggie':
        return new BjStyleVeggiePizza(bJPizzaINgredientFactory);
      default:
        return new Pizza();
    }

  }

}