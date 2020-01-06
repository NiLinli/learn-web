const a = 'nixixi',
  b = 1,
  c = true,
  d = false,
  e = null,
  f = undefined;

const strA = JSON.stringify(a),
  strB = JSON.stringify(b),
  strC = JSON.stringify(c),
  strD = JSON.stringify(d),
  strE = JSON.stringify(e),
  strF = JSON.stringify(f);   // 不能转换

console.log(typeof strA, typeof strB, typeof strC, typeof strD,typeof strE,typeof strF);

console.log(
  JSON.parse(strA) === 'nixixi',
  JSON.parse(strB) === 1,
  JSON.parse(strC) === true,
  JSON.parse(strD) === false,
  JSON.parse(strE) === null
);