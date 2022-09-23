console.log(NaN === NaN); // false 应该为 true
console.log(-0 === +0);   // true 这里操作一致

const arr = [NaN, NaN, 1,1,1,1, +0, -0];

console.log(arr);
console.log(new Set(arr))

