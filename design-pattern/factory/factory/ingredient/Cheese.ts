export interface Cheese {
  toString(): string;
}

export class ParmesanCheese implements Cheese {
  toString(): string {
    return 'Shredded Parmesan';
  }
}

export class ReggianoCheese implements Cheese {
  toString(): string {
    return 'Reggiano Cheese';
  }
}