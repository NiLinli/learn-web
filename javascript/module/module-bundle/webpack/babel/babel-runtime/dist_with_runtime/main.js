import _includesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/includes";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

var _context;

import { sayHello } from './utils';
sayHello();
const key = 'a';

const obj = _defineProperty({}, key, 'abc');

_includesInstanceProperty(_context = 'foobar').call(_context, 'foo');