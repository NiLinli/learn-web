// 最长回文子序列
// 回文 Palindrome Number 正序和倒序相同
#include <stdio.h>
#include <string.h>

int dp(char* str, int i, int j);
int lp_sub(char* str);
int lp_sub_advance(char* str);
int max(int a, int b);

int main() {
  char* str = "abxabyb";

  printf("lp_sub(str) = %d\n", lp_sub(str));
  printf("lp_sub_advance(str) = %d\n", lp_sub_advance(str));
}

// 在 s[i...j] 子串中, 最长回文字符串长度为 dp[i][j]
int dp(char* str, int i, int j) {
  if (i == j) return 1;

  if (str[i + 1] == str[j - 1]) {
    return dp(str, i + 1, j - 1) + 2;
  } else {
    return max(dp(str, i + 1, j), dp(str, i, j - 1));
  }
}

int lp_sub(char* str) {
  int len = strlen(str);
  return dp(str, 0, len - 1);
}

int lp_sub_advance(char* str) {
  int len = strlen(str);
  int dp_table[len][len];

  // 初始化
  for (int i = 0; i < len; i++)
    for (int j = 0; j < len; j++) dp_table[i][j] = (i == j) ? 1 : 0;

  // 向上提升
  for (int j = 0; j < len; j++) {
    for (int i = j - 1; i >= 0; i--) {
      if (str[i + 1] == str[j - 1]) {
        dp_table[i][j] = dp_table[i + 1][j - 1] + 2;
      } else {
        dp_table[i][j] = max(dp_table[i + 1][j], dp_table[i][j - 1]);
      }
    }
  }

  return dp_table[0][len - 1];
}

int max(int a, int b) { return a >= b ? a : b; }