import { RoundPeg } from './RoundPeg';
import { SquarePeg } from './SquarePeg';

export class RoundPegAdapter implements RoundPeg {
  constructor(public peg: SquarePeg) {}

  getRadius(): number {
    return (this.peg.getWidth() * Math.sqrt(2)) / 2;
  }
}
