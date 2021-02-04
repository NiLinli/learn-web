module.exports = {
  plugins: [],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true, // 是否放松转换程度(放弃一点兼容性, 换取前卫简洁点的代码)
        useBuiltIns: 'usage',
        // 不管是 usage 还是 entry, env 都会根据target 来引用 corejs
        corejs: 3
      },
    ],
  ],
};
