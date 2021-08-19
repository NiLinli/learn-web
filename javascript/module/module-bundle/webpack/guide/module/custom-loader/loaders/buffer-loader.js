const loaderFunction = function(content) {
  console.log(content);
  return content.toString('utf8')
}


// 默认 loader 加载为 utf-8 的 string, 也可以读取 buffer 进行操作
loaderFunction.raw = true;


module.exports = loaderFunction;