#include <stdio.h>

// febonacci 数列
// 1 1 2 3 5 8...
// 从第三项开始 f(n) = f(n-1) + f(n-2)

int fib(int N);
int fib2(int N);
int helper(int* memo_arr, int n);
int fib3(int N);
int fib4(int N);

int main() {
  printf("fib(10): %d\n", fib(10));
  printf("fib2(10): %d\n", fib2(10));
  printf("fib3(10): %d\n", fib3(10));
  printf("fib4(10): %d\n", fib3(10));
  return 1;
}

// 暴力递归求解
// 但凡遇到递归问题 都画递归树 分析算法的复杂度和找出算法低效的原因

// 递归时间复杂度
// 子问题个数 * 一个子问题的时间
// O(2^n) * 1 = O(2^n)
int fib(int N) {
  if (N == 1 || N == 2) return 1;
  return fib(N - 1) + fib(N - 2);
}

// 上面递归存在 重叠子问题 所以会有大量重复计算

// 自顶向下: 从上往下逐渐分解任务, 然后逐层返回答案
// O(n) * O(1) = O(n)
int fib2(int N) {
  if (N < 1) return 0;
  int memo_arr[N + 1];

  for (int i = 0; i < sizeof(memo_arr) / sizeof(int); i++) {
    memo_arr[i] = 0;
  }
  return helper(memo_arr, N);
}

int helper(int* memo_arr, int n) {
  if (n == 1 || n == 2) return 1;
  if (memo_arr[n]) return memo_arr[n];
  memo_arr[n] = helper(memo_arr, n - 1) + helper(memo_arr, n - 2);
  return memo_arr[n];
}

// 自底向上: 从最小的 f(1) f(2) 一直推算到 f(20)
// 脱离递归, 采用 循环迭代 的方式 完成
// O(n)
int fib3(int N) {
  if (N < 1) return 0;
  if (N == 1 || N == 2) return 1;
  int memo_arr[N + 1];

  for (int i = 0; i < sizeof(memo_arr) / sizeof(int); i++) {
    memo_arr[i] = 0;
  }

  for (int j = 1; j <= N; j++) {
    if (j == 1 || j == 2) {
      memo_arr[j] = 1;
      continue;
    }

    memo_arr[j] = memo_arr[j - 1] + memo_arr[j - 2];
  }

  return memo_arr[N];
}

// 只与两个状态有关, 所以不需要一整个 dp table(可以降低空间复杂度)
int fib4(int N) {
  if (N < 1) return 0;
  if (N == 1 || N == 2) return 1;

  int prev = 1, curr = 1;
  for (int i = 1; i <= N; i++) {
    if (i == 1 || i == 2) continue;
    int sum = prev + curr;
    prev = curr;
    curr = sum;
  }

  return curr;
}
