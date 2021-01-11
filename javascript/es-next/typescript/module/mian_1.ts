// 具有副作用的导入
import './polyfill';

import { mainValidator as ZCV, numberRegexp2 } from './AllValidators';

import * as AllValidators from './AllValidators';

let myvalidator = new ZCV;

myvalidator = new AllValidators.mainValidator;

console.log(numberRegexp2);