function parse(str, fmt) {
  fmt = fmt || 'yyyy-MM-dd';
  var obj = { y: 0, M: 1, d: 0, H: 0, h: 0, m: 0, s: 0, S: 0 };
  fmt.replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g, function (m, $1, $2, $3, $4, idx, old) {
    str = str.replace(new RegExp($1 + '(\\d{' + $2.length + '})' + $4), function (_m, _$1) {
      obj[$3] = parseInt(_$1);
      return '';
    });
    return '';
  });
  obj.M--; // 月份是从0开始的，所以要减去1
  var date = new Date(obj.y, obj.M, obj.d, obj.H, obj.m, obj.s);
  if (obj.S !== 0) date.setMilliseconds(obj.S); // 如果设置了毫秒
  return date;
}

console.log(parse('1994-01-19 20:21:59', 'yyyy-MM-dd hh:mm:ss'))