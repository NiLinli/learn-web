// 大于某个预设周期才会执行

// 适用场景: 不间断触发
// 不然就放弃了
function throttle(delay, callback, options = { leading: true, trailing: true }) {
  // error
  // var last = 0;
  // return function () {
  //   let cur = +new Date();
  //   const ctx = this,
  //     args = arguments;
  //   if (cur - last >= delay) {
  //     callback.apply(ctx, args);
  //     last = cur;
  //   }
  // };
}
