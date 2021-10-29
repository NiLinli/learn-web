import { Cheese, ParmesanCheese, ReggianoCheese } from './Cheese';
import { Dough, ThickCrustDough, ThinCrustDough } from './Dough';


export interface PizzaIngredientFactory {
  createDough(): Dough;
  createCheese(): Cheese;
}

export class BJPizzaINgredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough();
  }

  createCheese(): Cheese {
    return new ReggianoCheese();
  }
}

export class WhPizzaINgredientFactory implements PizzaIngredientFactory {

  createDough(): Dough {
    return new ThickCrustDough();
  }

  createCheese(): Cheese {
    return new ParmesanCheese();
  }
}