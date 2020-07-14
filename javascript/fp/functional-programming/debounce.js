// 两次相差超过多少秒内, 前一次才会执行
// 将多个连续的 call 变为一个

function debounce(callback, timeout, options = { leading: false, maxWait: 10000, trailing: true }) {
  var lastTimeId; // memoization

  return function () {
    // 不然后一次覆盖前面一次, 并重新计时间
    clearTimeout(lastTimeId); // 覆盖前面一次的操作

    const ctx = this,
      args = arguments;

    lastTimeId = setTimeout(() => {
      callback.apply(ctx, args);
    }, timeout);
  };
}
