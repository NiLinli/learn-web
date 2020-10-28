// 最长公共子序列(两个序列)

#include <stdio.h>
#include <string.h>

void print_array(int* arr, int length);
void copy_array(int d[], int source[], int source_length);
int max(int a, int b);
int min(int a, int b);

int dp(char* str1, char* str2, int i, int j);
int longest_is(char* str1, char* str2);
int longest_is_advanced(char* str1, char* str2);

int main() {
  printf("longest_is(\"abcded\", \"aecd\") is %d  \n",
         longest_is("abcded", "aecd"));
  printf("longest_is_advanced(\"abcded\", \"aecd\") is %d  \n",
         longest_is_advanced("abcded", "aecd"));
  return 0;
}

int dp(char* str1, char* str2, int i, int j) {
  if (i == 0 || j == 0) {
    if (str1[i] == str2[j]) {
      return 1;
    } else {
      return 0;
    }
  }

  if (str1[i] == str2[j]) {
    return dp(str1, str2, i - 1, j - 1) + 1;
  } else {
    return max(dp(str1, str2, i, j - 1), dp(str1, str2, i - 1, j));
  }
}

int longest_is(char* str1, char* str2) {
  // dp[i][j]:  对于 dp[0...i] 和 dp[0...j] 子串, lcs 长度为 dp[i][j]
  int len_i = strlen(str1);
  int len_j = strlen(str2);

  return dp(str1, str2, len_i, len_j);
}

int longest_is_advanced(char* str1, char* str2) {
  int len_i = strlen(str1);
  int len_j = strlen(str2);

  // 初始化 dp_table
  int dp_table[len_i][len_j];

  for (int i = 0; i < len_i; i++) {
    for (int j = 0; j < len_j; j++) {
      dp_table[i][j] = 0;
    }
  }

  // 自底向上
  for (int i = 0; i < len_i; i++) {
    for (int j = 0; j < len_j; j++) {
      if (i == 0 || j == 0) {
        dp_table[i][j] = (str1[0] == str2[0]) ? 1 : 0;
      } else {
        dp_table[i][j] = (str1[i] == str2[j])
                             ? (dp_table[i - 1][j - 1] + 1)
                             : max(dp_table[i - 1][j], dp_table[i][j - 1]);
      }
    }
  }

  return dp_table[len_i -1][len_j -1];
}

// util function
void print_array(int* arr, int length) {
  printf("[");
  for (int i = 0; i < length; i++) {
    if (i == length - 1) {
      printf("%d]\n", arr[i]);
    } else {
      printf("%d, ", arr[i]);
    }
  }
}

void copy_array(int d[], int source[], int source_length) {
  for (int i = 0; i < source_length; i++) {
    d[i] = source[i];
  }
}

int max(int a, int b) { return a >= b ? a : b; }

int min(int a, int b) { return a <= b ? a : b; }