import { addTwo } from './src/addTwo.js';
import { addThree } from './src/addThree.mjs';

// default 始终为 module.exports
// import { default as addFour } from './src/addFour.cjs';
import addFour from './src/addFour.cjs';



console.log(addFour)

console.log(addTwo(2));

console.log(addThree(2));

console.log(addFour(2));
