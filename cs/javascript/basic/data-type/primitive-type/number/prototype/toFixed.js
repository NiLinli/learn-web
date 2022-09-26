
const np = require('number-precision');
const Big = require('big.js');
const a = 12345.6789

console.log(a.toFixed(), a.toFixed(1), a.toFixed(6))

// 四舍六入 五看
const b = 2.55
console.log(b.toFixed(1));    // 2.5

// np 方案: float -> int -> Math.round -> float
console.log(np.round(b, 1));  // 2.6

// big
// Math.ceil 处理
Big.RM = Big.roundUp;
const c = 2.55;
const d = 2.57;
console.log(Big(c).toFixed(1));
console.log(Big(d).toFixed(1));

// Math.floor 处理
Big.RM = Big.roundDown;
console.log(Big(c).toFixed(1));
console.log(Big(d).toFixed(1));

// Math.round
Big.RM = Big.roundHalfUp;
console.log(Big(c).toFixed(1));
console.log(Big(d).toFixed(1));

// 银行家算法 5 前面是奇数才进位
Big.RM = Big.roundHalfEven;
console.log(Big(2.45).toFixed(1));
console.log(Big(2.55).toFixed(1));

