import { PizzaIngredientFactory } from './pizza-ingredient-factory';
import { Dough } from '../ingredient/dough';
import { Cheese } from '../ingredient/cheese';
import { ParmesanCheese } from '../ingredient/parmesan-cheese';
import { ThickCrustDough } from '../ingredient/thick-crust-dough';

export class WHPizzaINgredientFactory implements PizzaIngredientFactory {

  createDough(): Dough {
    return new ThickCrustDough();
  }

  createCheese(): Cheese {
    return new ParmesanCheese();
  }

}