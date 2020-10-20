// 凑零钱问题
// 给定 k [] 种面值的硬币无限, 算出凑出 amount 需要的硬币的组合, 最少

#include <limits.h>
#include <stdio.h>
#include <stdlib.h>

int coin_change(int coins[], int coins_length, int amount);
int dp(int coins[], int coins_length, int n, int memo[]);
int coin_change_table(int coins[], int coins_length, int amount);
int min(int a, int b);

int main() {
  // int coins[3] = {1, 2, 5};
  int coins[2] = {1, 2};
  printf("%d\n", coin_change(coins, sizeof(coins) / sizeof(coins[0]), 12));
  printf("%d\n", coin_change_table(coins, sizeof(coins) / sizeof(coins[0]), 12));
}

// 穷举所有能够凑硬币的方法, 找出最少的个数
int coin_change(int coins[], int coins_length, int amount) {
  int memo[amount + 1];

  for (int i = 0; i < amount + 1; i++) {
    memo[i] = 0;
  }

  // 如果凑不出来 返回 -1
  return dp(coins, coins_length, amount, memo);
}

int dp(int coins[], int coins_length, int amount, int memo[]) {
  if (amount == 0) return 0;
  if (amount < 0) return -1;

  if (memo[amount] != 0) return memo[amount];

  int res = INT_MAX;
  for (int i = 0; i < coins_length; i++) {
    int coin = coins[i];

    int subproblem = dp(coins, coins_length, amount - coin, memo);
    if (subproblem == -1)
      continue;  // 只要某条分支出现了 -1, res 就肯定等于 0,
                 // 这条支路肯定就是一级一级往上返回 -1

    res = min(res, 1 + subproblem);
  }

  memo[amount] = ((res == INT_MAX) ? -1 : res);

  return memo[amount];
}

int coin_change_table(int coins[], int coins_length, int amount) {
  // 自低向上

  int length = amount + 1;
  int value = amount + 1;  // 最多就 amount 个情况, amount + 1 表示没有

  int dp_table[length];
  for (int i = 1; i < length; i++) {
    dp_table[i] = value;
  }

  dp_table[0] = 0;

  for (int i = 0; i < length; i++) {
    int n = dp_table[i];

    for (int j = 0; j < coins_length; j++) {
      int coin = coins[j];

      if (i - coin < 0) continue;  // 无解

      dp_table[i] = min(dp_table[i], 1 + dp_table[i - coin]);
    }
  }

  return dp_table[amount] == value ? -1 : dp_table[amount];
}

int min(int a, int b) { return a >= b ? b : a; }