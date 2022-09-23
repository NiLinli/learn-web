exports.runCallback = (err, stats) => {
  if (err) {
    return console.log(err);
  }

  console.log(
    stats.toString({
      chunks: false, // 使构建过程更静默无输出
      colors: true, // 在控制台展示颜色
    })
    // stats.toJson({
    //   assets: false,
    //   hash: true,
    // })
  );
};
