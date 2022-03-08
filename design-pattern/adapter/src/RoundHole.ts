import { RoundPeg } from './RoundPeg';

// Client
export class RoundHole {
  constructor(public radius: number) {}

  getRadius() {
    return this.radius;
  }

  fit(peg: RoundPeg) {
    return this.getRadius() >= peg.getRadius();
  }
}
