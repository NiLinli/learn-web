module.exports = {
  plugins: [],
  presets: [['@babel/preset-env', {
    modules: false,
    // loose: false, // 是否放松转换程度(放弃一点兼容性, 换取前卫简洁点的代码)
    useBuiltIns: 'usage',
    corejs: 3
  }]],
};
