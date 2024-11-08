// esm import cjs
import { foo, bar } from './cjs';
import * as cjs from './cjs';

import cjsDefault from './cjs';

// cjs require esm
const esm = require('./esm');

console.log(cjsDefault)

console.log(
  foo(), cjs.foo(),
  bar(), cjs.bar()
);


console.log(
  esm.default(),
  esm.bar()
);