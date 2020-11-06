#include <stdio.h>

// 给定一个数组 为股票每日的价格列表
// 不限次数交易, 最大利润
// 限制次数交易 K, 最大利润 eg: 一次交易是买入和卖出各一次

// 分析
// 利润最大的情况 最后肯定是卖出了
// 状态 - 选择 状态机
// 状态 0 卖出 1 持有
// 选择 买入 卖出 不操作

int max(int a, int b);
int max_profit_v1(int *prices, int prices_length);
int max_profit_v1_advance(int *prices, int prices_length);
int max_profit_v2_advance(int *prices, int prices_length);
int max_profit_v3_advance(int *prices, int prices_length);
int max_profit_v4_advance(int *prices, int prices_length);
int max_profit_v5(int *prices, int prices_length, int K);

int main() {
  int prices[] = {3, 2, 6, 5, 0, 3};
  printf("max_profit_v1(prices, sizeof(prices)/sizeof(int)) =  %d \n",
         max_profit_v1(prices, sizeof(prices) / sizeof(int)));
  printf("max_profit_v1_advance(prices, sizeof(prices)/sizeof(int)) =  %d \n",
         max_profit_v1_advance(prices, sizeof(prices) / sizeof(int)));
  printf("max_profit_v2_advance(prices, sizeof(prices)/sizeof(int)) =  %d \n",
         max_profit_v2_advance(prices, sizeof(prices) / sizeof(int)));
  printf("max_profit_v3_advance(prices, sizeof(prices)/sizeof(int)) =  %d \n",
         max_profit_v3_advance(prices, sizeof(prices) / sizeof(int)));
  printf("max_profit_v4_advance(prices, sizeof(prices)/sizeof(int)) =  %d \n",
         max_profit_v4_advance(prices, sizeof(prices) / sizeof(int)));
  printf("max_profit_v5(prices, sizeof(prices)/sizeof(int), 1) =  %d \n",
         max_profit_v5(prices, sizeof(prices) / sizeof(int), 1));
  return 0;
}

int max_profit(int *prices, int prices_length, int K) {
  int dp[prices_length][K][2];

  // base case

  // dp[-1][k][0] = 0 -1 意味着没有开始
  // dp[i][0][0] = 0  k = 0 不允许交易
  // dp[-1][k][1] = -Infinity 表示一种不可能的情况
  // dp[i][0][1]  = -Infinity 表示一种不可能的情况

  for (int i = 0; i < prices_length; i++) {
    for (int k = 1; k <= K; k++) {
      // 上次卖出, 上次不做操作
      dp[i][k][0] = max(dp[i - 1][k][1] + prices[i], dp[i - 1][k][0]);
      // 上次买入, 上次不做操作
      dp[i][k][1] = max(dp[i - 1][k - 1][0] - prices[i], dp[i - 1][k][1]);
    }
  }

  return dp[prices_length - 1][K][0];
}

// K=1
int max_profit_v1(int *prices, int prices_length) {
  int dp[prices_length][2];

  for (int i = 0; i < prices_length; i++) {
    // 考虑 base case
    if (i - 1 == -1) {
      // dp[i][0] = max(dp[-1][1] + prices[i], dp[-1][0]);
      // max(-Infinity + prices[i], 0) = 0
      dp[i][0] = 0;
      // dp[i][1] = max(-prices[i], dp[-1][1]);
      // max(-prices[i], -Infinity)
      dp[i][1] = -prices[i];
      continue;
    }

    // 上次卖出, 上次不做操作
    dp[i][0] = max(dp[i - 1][1] + prices[i], dp[i - 1][0]);
    // 上次买入, 上次不做操作
    dp[i][1] = max(-prices[i], dp[i - 1][1]);
  }

  return dp[prices_length - 1][0];
}

// K=1
int max_profit_v1_advance(int *prices, int prices_length) {
  int dp_i0 = 0;
  int dp_i1 = 0;

  for (int i = 0; i < prices_length; i++) {
    // 考虑 base case
    if (i - 1 == -1) {
      dp_i0 = 0;
      dp_i1 = -prices[i];
      continue;
    }

    // 上次卖出, 上次不做操作
    // dp_i0
    // dp_i1
    dp_i0 = max(dp_i1 + prices[i], dp_i0);
    // 上次买入, 上次不做操作
    dp_i1 = max(-prices[i], dp_i1);
  }

  return dp_i0;
}

// K=Infifity K-1 也等于 Infinity  K 成为无关变量
int max_profit_v2_advance(int *prices, int prices_length) {
  int dp_i0 = 0;
  int dp_i1 = 0;

  for (int i = 0; i < prices_length; i++) {
    if (i - 1 == -1) {
      dp_i0 = 0;
      dp_i1 = -prices[i];
      continue;
    }

    int temp = dp_i0;
    // 上次卖出, 上次不做操作
    dp_i0 = max(dp_i1 + prices[i], dp_i0);
    // 上次买入, 上次不做操作
    dp_i1 = max(temp - prices[i], dp_i1);
  }
  return dp_i0;
}

// K=Infifity & fee
int max_profit_v3_advance(int *prices, int prices_length) {
  int fee = 2;

  int dp_i0 = 0;
  int dp_i1 = 0;

  for (int i = 0; i < prices_length; i++) {
    if (i - 1 == -1) {
      dp_i0 = 0;
      dp_i1 = -prices[i];
      continue;
    }

    int temp = dp_i0;
    // 上次卖出, 上次不做操作
    dp_i0 = max(dp_i1 + prices[i], dp_i0);
    // 上次买入, 上次不做操作
    dp_i1 = max(temp - prices[i] - fee, dp_i1);
  }
  return dp_i0;
}

// K=Infifity & cooldown 买出冷静期
int max_profit_v4_advance(int *prices, int prices_length) {
  int dp_i0 = 0;
  int dp_i1 = 0;

  int dp_i0_pre = 0;  // 记录 dp[i-2][0] 两天交易冷静期
  for (int i = 0; i < prices_length; i++) {
    if (i - 1 == -1) {
      dp_i0 = 0;
      dp_i1 = -prices[i];
      continue;
    }

    int temp = dp_i0;
    dp_i0 = max(dp_i1 + prices[i], dp_i0);
    dp_i1 = max(dp_i0_pre - prices[i], dp_i1);

    dp_i0_pre = temp;
  }
  return dp_i0;
}

// K = any Integer
int max_profit_v5(int *prices, int prices_length, int K) {
  if (K > prices_length / 2) {
    return max_profit_v2_advance(prices, prices_length);
  }

  int dp[prices_length][K + 1][2];

  // base case

  // dp[-1][k][0] = 0 -1 意味着没有开始
  // dp[i][0][0] = 0  k = 0 不允许交易
  // dp[-1][k][1] = -Infinity 表示一种不可能的情况
  // dp[i][0][1]  = -Infinity 表示一种不可能的情况

  for (int i = 0; i < prices_length; i++) {
    for (int k = 1; k <= K; k++) {
      if (i - 1 == -1) {
        // k - 1 等于 0 与不等于 0 结果相同
        dp[i][k][0] = 0;
        dp[i][k][1] = -prices[i];
        continue;
      }

      if (k - 1 == 0) {
        // 上次卖出, 上次不做操作
        dp[i][k][0] = max(dp[i - 1][k][1] + prices[i], dp[i - 1][k][0]);
        // 上次买入, 上次不做操作
        dp[i][k][1] = max(-prices[i], dp[i - 1][k][1]);
        continue;
      }

      // 上次卖出, 上次不做操作
      dp[i][k][0] = max(dp[i - 1][k][1] + prices[i], dp[i - 1][k][0]);
      // 上次买入, 上次不做操作
      dp[i][k][1] = max(dp[i - 1][k - 1][0] - prices[i], dp[i - 1][k][1]);
    }
  }

  return dp[prices_length - 1][K][0];
}

int max(int a, int b) { return a >= b ? a : b; }
