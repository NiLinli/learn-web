module.exports = {
  plugins: [
    ['@babel/plugin-transform-computed-properties'],
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
  ],
};
