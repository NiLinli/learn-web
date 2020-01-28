import { Cheese } from "./cheese";

export class ParmesanCheese implements Cheese {
  toString(): string {
    return 'Shredded Parmesan';
  }
}