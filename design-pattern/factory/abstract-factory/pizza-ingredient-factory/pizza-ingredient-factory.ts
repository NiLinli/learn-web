import { Dough } from "../ingredient/dough";
import { Cheese } from "../ingredient/cheese";

export interface PizzaIngredientFactory {
  createDough(): Dough;
  createCheese(): Cheese;
}