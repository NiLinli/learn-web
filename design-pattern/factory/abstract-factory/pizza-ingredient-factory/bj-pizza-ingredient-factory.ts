import { PizzaIngredientFactory } from './pizza-ingredient-factory';
import { Dough } from '../ingredient/dough';
import { Cheese } from '../ingredient/cheese';
import { ThinCrustDough } from '../ingredient/thin-crust-dough';
import { ReggianoCheese } from '../ingredient/reggiano-cheese';

export class BJPizzaINgredientFactory implements PizzaIngredientFactory {

  createDough(): Dough {
    return new ThinCrustDough();
  }

  createCheese(): Cheese {
    return new ReggianoCheese();
  }

}