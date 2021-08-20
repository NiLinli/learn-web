const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js')({});
const compiler = webpack(config);

// webpack serve
// => webpack-dev-server
// => express + webpack-dev-middleware

// webpack-dev-middleware 是一个容器 wrapper
// 它可以把 webpack 处理后的文件(内存中)传递给一个服务器 server
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.listen(3000,  () => {
  console.log('Example app listening on port 3000! \n');
});
