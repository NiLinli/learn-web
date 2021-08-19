console.log('-- uppercase loader load --');

const LOADER_NAME = 'uppercase-loader';
module.exports = function (src) {
  console.log('-- uppercase loader running --');

  const logger = this.getLogger(LOADER_NAME);

  // loader 和 plugin 处理的文件比较多, 所以文件轻量一些比较合适
  logger.warn('oh warning warning !!!');

  return src && src.toUpperCase();
};
