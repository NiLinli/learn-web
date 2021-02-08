const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const { runCallback } = require('./utils');

// webpack 编译器
// 传入 callback 就立即 run
const compiler = webpack(webpackConfig);

compiler.run(runCallback);


