module.exports = {
  plugins: [
    // postcss-cssnext 包含了 autoprefixer
    require('postcss-cssnext'),
    require('postcss-pxtorem')({
      rootValue: 375 / 10, // 和 lib-flexible 一直
      propList: ['*'],
    }),
  ],
};
