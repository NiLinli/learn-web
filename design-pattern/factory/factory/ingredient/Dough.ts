export interface Dough {
  toString(): string;
}

export class ThickCrustDough implements Dough {
  toString(): string {
    return 'ThickCrust style extra thick crust dough';
  }
}

export class ThinCrustDough implements Dough {
  toString() {
    return 'Thin Crust Dough';
  }
}