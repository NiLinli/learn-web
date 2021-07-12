function isNumber(o) {
  return typeof o === 'number' && !Number.isNaN(o)
}

function isNumeric(value) {
  // 可以转换为 number 的 string 类型
  const NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  return NUMERIC.test(value);
}
