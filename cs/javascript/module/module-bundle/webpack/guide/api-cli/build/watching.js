const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const { runCallback } = require('./utils');

const compiler = webpack(webpackConfig);

// 需要配置了 watching 相关选项
const watching = compiler.watch(
  {
    aggregateTimeout: 300,
    poll: undefined,
  },
  runCallback
);

// watching methods
// 关闭监听
// watching.close(() => {
//   console.log('Watching Ended');
// });

// 动使当前编译循环（compiling round）无效， 而不会停止监听进程（process）
// watching.invalidate();