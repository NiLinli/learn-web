#include <stdio.h>
#include <string.h>

// 拷贝
// char *strcpy(char *restrict dist, const char *restrict src)
// 返回 dist

// char *strcont(char *restrict dist, const char *restrict src)
// 返回 dist

// 安全问题
// dist 中有可能内存空间不够

// char *strncpy(char *restrict dist, const char *restrict src, size_t n)
// char *strcont(char *restrict dist, const char *restrict src, size_t n)
// size_t 表示拷贝多少个字符, 多个忽略

int main() {

  char line1[] = "hello";
  char line2[6];
  char line3[5];

  strcpy(line2, line1);
  printf("line2 = %s\n", line2);

  // strcpy(line3, line1);
  // printf("line3 = %s\n", line3);    // 不安全, 空间不够



}