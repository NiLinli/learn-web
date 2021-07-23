// https://webpack.js.org/guides/dependency-management/#requirecontext
// require 中带有表达式
// 创建 context
// 编译时候并不知道具体导入的模块
// 运行时候才知道
// 生成一个 map 映射

const modulesFiles = require.context('./modules', true, /\.js$/);

// you do not need `import app from './modules/app'`
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

export default modules;
