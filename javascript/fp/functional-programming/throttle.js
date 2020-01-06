// 大于某个预设周期才会执行
// 不然就放弃了
function throttle(delay, callback) {

  var last = 0;
  return function() {
    let cur = + new Date();
    const ctx = this, 
      args = arguments;
    if (cur - last >= delay) {
      callback.apply(ctx, args);
      last = cur;
    }
  }
}