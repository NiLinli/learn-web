import { Pizza } from "../pizza";
import { PizzaIngredientFactory } from "../../pizza-ingredient-factory/pizza-ingredient-factory";

export class WHStyleVeggiePizza extends Pizza {
  constructor(
    public ingredientFactory: PizzaIngredientFactory
  ) {
    super();
  }

  prepare() {
    console.log(`prepare ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.cheese = this.ingredientFactory.createCheese();
  }

}