const np = require('number-precision')

// Number.EPSILON
function equals(a, b) {
  // 默认接近 2.2204460492503130808472633361816E-16
  if (Number.EPSILON === undefined) {
    // OR
    Number.EPSILON === Math.round(2, -52);    
  } 
  return Math.abs(a - b) < Number.EPSILON
}

console.log(equals(0.1 + 0.2, 0.3), '-');

console.log((0.1).toPrecision(40), '--');
console.log((0.1).toString(), '--');

// +
const a = 0.1 + 0.2;
console.log(a.toPrecision(40), '---')
console.log(a.toString())

const a1 = np.plus(0.1, 0.2)
console.log(a1)
console.log(a1.toPrecision(40))
console.log(a1.toString(), '---')


// *
const b = 1.13 * 100
const b10 = b * 10
console.log(b, '----')
console.log(b.toPrecision(40))
console.log(b10.toPrecision(40))

const b2 = np.times(1.13, 100)
console.log(b2)

const c = 0.3 * 10
console.log(c)
console.log(c.toPrecision(40), '----')

// np 方案
// float 转换为 int
// float -> int string -> int number
const d = 1.1367
console.log(np.digitLength(d), '--np--')
console.log(np.float2Fixed(d))
console.log(np.strip(0.000099999999999999991), '--np--')

