import { RoundHole } from './RoundHole';

import { SquarePeg } from './SquarePeg';
import { RoundPegAdapter } from './RoundPegAdapter';

const roundHole = new RoundHole(4);
const squarePeg = new SquarePeg(4);
const roundPeg = new RoundPegAdapter(squarePeg);

// Argument of type 'SquarePeg' is not assignable to parameter of type 'RoundPeg'.
// console.log(roundHole.fit(squarePeg));
console.log(roundHole.fit(roundPeg));
