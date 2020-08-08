// 凑零钱问题
// 给定 k [] 种面值的硬币无限, 算出凑出 amount 需要的硬币的组合

#include <stdio.h>
#include <stdlib.h>

int coin_change(int coins[], int amount);

int main() {
  int coins[3] = {1, 2, 5};
  printf("%d\n", coin_change(coins, 12));
}


// 穷举所有能够凑硬币的方法, 找出最少的个数
int coin_change(int coins[], int amount) {
  // 如果凑不出来 返回 -1





}

int dp(n)  {
  if (n == 0) return 0;
  if (n < 0) return -1;

  int res
}