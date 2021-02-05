class MyPlugin {
  constructor(options) {
    console.log('MyPlugin constructor:', options);
  }

  apply(compiler) {
    // compilation 创建之后执行
    compiler.plugin('compilation', (complition) => {
      console.log('MyPlugin');
    });
  }
}

module.exports = MyPlugin;
