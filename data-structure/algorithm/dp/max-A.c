// https://github.com/labuladong/fucking-algorithm/blob/master/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%B3%BB%E5%88%97/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E4%B9%8B%E5%9B%9B%E9%94%AE%E9%94%AE%E7%9B%98.md
// 四个键
// 1. A 输入
// 2. Ctrl-A 全选
// 3. Ctrl-C 复制
// 4. Ctrl-V 粘贴
// 按键 N 次, 屏幕最多显示多少个 'A'


#include <stdio.h>

int max(int a, int b, int c);
int dp(int n, int a_num, int copy_num);
int maxA(int N);
int maxA_advance(int N);



int main() {


  printf("maxA(3) = %d \n", maxA(7));
  printf("maxA_advance(3) = %d \n", maxA_advance(7));
  return 0;
}


// n: 剩余操作次数
// a_num: 当前 A 的个数
// copy_num: 剪贴板上面 A 的个数
int dp(int n, int a_num, int copy_num) {
  if (n <= 0) return a_num;

  return max(
    dp(n - 1, a_num + 1, copy_num),     // A
    dp(n - 2, a_num, a_num),     // all + copy
    dp(n - 1, a_num + copy_num, copy_num)      // pasty
  );

}

int maxA(int N) {
  return dp(N, 0, 0);
}

// 分析最优按键序列的两种情况
// N 比较小: A ... A 一直按 A
// N 比较大: A ... A     C-A&C-C C-V C-V 组合
int maxA_advance(int N) {

  int len = N + 1;
  int dp[len];
  dp[0] = 0;
  // dp[i] 定义 i 次操作后有多少个 A
  for (int i = 1; i < len; i++) {
    dp[i] = dp[i - 1] + 1; // 最后一次按 A 键

    for (int j = 2; j < i; j++) {
      dp[i] = max(
        dp[i],
        dp[j-2] * (i - j + 1),        // i - j + 1 倍的 A
        0
      );
    }
  
  }

  return dp[N];
  

}

// 思考最优的状态转移过程

int max(int a, int b, int c) {
  return (a > b ? a : b) > c ? (a > b ? a : b): c;
}