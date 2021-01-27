// import '@babel/polyfill';

// 等同于 core-js2 和 regenerator-runtime/runtime
// preset-env 会根据 corejs 设置版本决定处理
// core-js3
// @babel/polyfill(即 core-js2)
// require("core-js/web");
// require("regenerator-runtime/runtime");

import 'core-js/stable';

import { sayHello } from './utils';

sayHello();
