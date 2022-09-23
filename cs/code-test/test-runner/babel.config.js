module.exports = (api) => {
  // babel 运行时候 process.env.NODE_ENV 为 test
  if (api.env('test')) {
    return {
      plugins: [],
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    };
  } else {
    // ... 项目其他配置
  }
};
