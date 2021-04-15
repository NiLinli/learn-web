#include <stdio.h>

// 遍历的终点必须是存储结果的那个位置
// 遍历过程中, 依赖的状态必须要先遍历到

// 正序遍历 & 反序遍历 2 * 2 = 4 种方式
void travel() {
  int m = 9, n = 10;
  int dp[m][n];

  for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
      dp[m][n] = m + n;
    }
  }

  for (int i = m - 1; i >= 0; i--) {
    for (int j = n - 1; j >= 0; j--) {
      dp[m][n] = m - n;
    }
  }
}

// 单向斜向遍历
void travel_v1() {

  int m = 5, n = 4;

  int dp[5][4] = {
    {1, 4, 5, 7},
    {5, 8, 0, 8},
    {9, 2, 3, 5},
    {4, 2, 3, 4},
    {9, 9, 2, 1}
  };


  for (int i = 0; i < n; i++) {
    for (int j = i; j >=0; j--) {
      printf("%d\n", dp[m - 1 - i + j][j]);
    }
  }

  for (int i = m -2; i >= 0; i--) {

    for (int j = n-1; j >= 0 ; j--)
    {
      int distance = n-1-j;

      if (i-distance < 0) continue;

       printf("%d\n", dp[i-distance][j]);
    }
    
  }
  

}

int main() {
  travel_v1();
  return 0;
}
