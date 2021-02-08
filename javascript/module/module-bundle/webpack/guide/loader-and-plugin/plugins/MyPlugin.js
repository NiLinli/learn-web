const PLUGIN_NAME = 'MyPlugin2';

// 实例化得到 一个有 apply 方法的对象
class MyPlugin {
  constructor(options) {
    console.log('MyPlugin constructor:', options);
  }

  apply(compiler) {
    compiler.hooks.compilation.tap(PLUGIN_NAME, (complition, compilationParams) => {
      console.log('MyPlugin');
    });
  }
}

module.exports = MyPlugin;
