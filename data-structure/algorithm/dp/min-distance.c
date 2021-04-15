// 编辑距离
// 将 str1 编辑成 str2 需要的最少操作数(距离)
#include <stdio.h>
#include <string.h>

int dp(char* str1, char* str2, int i, int j);
int min_distance(char* str1, char* str2);
int min_distance_advanced(char* str1, char* str2);
int min(int a, int b, int c);

int main() {
  char* str1 = "rad";
  char* str2 = "apple";

  printf("min_distance(str1, str2) = %d\n", min_distance(str1, str2));
  printf("min_distance_advanced(str1, str2) = %d\n", min_distance_advanced(str1, str2));
}

int dp(char* str1, char* str2, int i, int j) {
  if (i == -1) return j + 1;
  if (j == -1) return i + 1;

  if (str1[i] == str2[j]) {
    return dp(str1, str2, i - 1, j - 1);  // skip
  } else {
    return min(dp(str1, str2, i - 1, j) + 1,     // delete
               dp(str1, str2, i, j - 1) + 1,     // insert
               dp(str1, str2, i - 1, j - 1) + 1  // replace
    );
  }
}

int min_distance(char* str1, char* str2) {
  return dp(str1, str2, strlen(str1) - 1, strlen(str2) - 1);
}

int min_distance_advanced(char* str1, char* str2) {
  int len_i = strlen(str1);
  int len_j = strlen(str2);

  // 初始化 dp_table
  int dp_table[len_i][len_j];

  for (int i = 0; i < len_i; i++) {
    for (int j = 0; j < len_j; j++) {
      if (i == -1) return dp_table[i][j] = j + 1;
      if (j == -1) return dp_table[i][j] = i + 1;

      dp_table[i][j] = min(dp(str1, str2, i - 1, j) + 1,     // delete
                           dp(str1, str2, i, j - 1) + 1,     // insert
                           dp(str1, str2, i - 1, j - 1) + 1  // replace
      );
    }
  }

  return dp_table[len_i - 1][len_j - 1];
}

int min(int a, int b, int c) {
  int ab = (a < b) ? a : b;
  return ab < c ? ab : c;
}
