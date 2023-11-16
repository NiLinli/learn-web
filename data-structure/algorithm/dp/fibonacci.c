#include <stdio.h>

// febonacci 数列
// 1 1 2 3 5 8...
// 从第三项开始 f(n) = f(n-1) + f(n-2)

int fib3(int N);
int fib4(int N);

int main() {

  printf("fib3(10): %d\n", fib3(10));
  printf("fib4(10): %d\n", fib3(10));
  return 1;
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
