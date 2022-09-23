function someSyncOpiton(content) {
  return content;
}

const syncLoader = function (content, map, meta) {
  console.log('-- sync-loader running --');

  // this 上面有一些上下文信息
  console.log(this.data)

  // return someSyncOpiton(content);
  // 等同于
  this.callback(null, someSyncOpiton(content), map, meta); // map meta 可以改写了传入下级
  return undefined;
};

syncLoader.pitch = function(remainingRequest, precedingRequest, data) {
  // 会在 loader 执行时候挂到 this 上面去
  data.omg = 'mount some data in pitch stage and read in running stage';


  // return '阻断了'
  
  // 满足一些条件，直接返回结果，可以阻断
  // 1. 当前 loader running， 直接取这个返回值
  // 2. 后续 loader 的 pitch 以及 running
}

console.log('-- sync-loader load --');
module.exports = syncLoader;
