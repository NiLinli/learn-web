// febonacci 数列
// 1 1 2 3 5 8...
// 从第三项开始 f(n) = f(n-1) + f(n-2)

// recursive
// 暴力递归求解
// 递归时间复杂度
// 子问题个数 * 一个子问题的时间
// O(2^n) * 1 = O(2^n)
function fibo(n) {
  if (n < 1) return 0;

  // 基线条件
  if (n === 1 || n === 2) return 1;

  // 递归条件
  return fibo(n - 1) + fibo(n - 2);
}

// 但凡遇到递归问题 都画递归树 分析算法的复杂度和找出算法低效的原因
// 上面递归存在 重叠子问题 所以会有大量重复计算
// 自顶向下: 从上往下逐渐分解任务, 然后逐层返回答案
// O(n) * O(1) = O(n)
// 递归代码需要记录一些内容或者额外操作时候, 可分成两个函数
function fibo2(n) {
  if (n < 1) return 0;
  // 避免重复计算
  const memos = Array(n + 1).fill(0);
  return helper(memos, n);
}

function helper(memos, n) {
  if (n === 1 || n === 2) return 1;

  if (memos[n]) return memos[n];
  memos[n] = fibo(n - 1) + fibo(n - 2);
  return memos[n];
}

// loop
