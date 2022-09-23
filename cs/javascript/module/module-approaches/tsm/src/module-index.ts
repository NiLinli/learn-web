import './polyfill'; // side effect
import { mainValidator as ZCV, numberRegexp2, StaticZipCodeValidator } from './module/index';
import * as AllValidators from './module/index';

let myvalidator = new ZCV();
myvalidator = new AllValidators.mainValidator();
console.log(numberRegexp2);
