// 分解质因数
function calc(n) {
  // n 
  let arr = [];

  for (var i = 2; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
      n = n / i;
      i = 1;
    }
  }

  return arr;
}

console.log(calc(8));
console.log(calc(84));
console.log(calc(127))