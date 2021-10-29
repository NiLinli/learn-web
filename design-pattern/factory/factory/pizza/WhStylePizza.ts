import { Pizza } from "./Pizza";
import { PizzaIngredientFactory } from '../ingredient/PizzaIngredientFactory';

export class WhStyleVeggiePizza extends Pizza {

  ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  prepare() {
    console.log('Pizza prepare!');

    this.ingredientFactory.createCheese();
    this.ingredientFactory.createDough();
  }

  box() {
    console.log('WhStyleVeggiePizza box!');
  }
}


export class WhStyleCheesePizza extends Pizza {

  ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  prepare() {
    console.log('Pizza prepare!');
    this.ingredientFactory.createCheese();
    this.ingredientFactory.createDough();
  }

  box() {
    console.log('WhStyleCheesePizza box!');
  }
  
}