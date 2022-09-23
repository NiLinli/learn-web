import foo, { bar } from './m';
import * as n from './n';

console.log(foo());
console.log(bar());

console.log(n.default());
console.log(n.bar())