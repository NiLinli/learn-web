// 将 callback 进行包装 内部记录状态
// 两次相差超过多少秒内, 前一次才会执行
// 不然后一次覆盖前面一次, 并重新计时间

function debounce(callback, timeout) {
  var lastTimeId;

  return function() {

    clearTimeout(lastTimeId);   // 覆盖前面一次的操作

    const ctx = this, args = arguments;

    setTimeout(() => {
      callback.apply(ctx, args)
    }, timeout);


  }
}