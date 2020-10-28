#include <stdio.h>
#include <string.h>


int strlen_c(char *str);

void foo(char *str) {
  printf("strlen(str) = %lu\n", strlen(str));  // 5
  printf("strlen_c(str) = %d\n", strlen_c(str));  // 5
  printf("sizeof(str) = %lu\n", sizeof(str));  // 6
}

// string 是有标志位的数组, 所以能计算出数组的长度
// 普通数组也可以借用这个方法, 在函数中计算出数组长度
int strlen_c(char *str) {
  char *p = str;  // 初始值
  int len = 0;
  while (*p != '\0') {
    len++;
    p = p + 1;
  }
  return len;
}

int main(int argc, char const *argv[]) {
  char line[] = "hello";

  printf("strlen(line) = %lu\n", strlen(line));  // 5
  printf("sizeof(line) = %lu\n", sizeof(line));  // 6
  foo(line);

  char str1[] = "abc";
  char str2[] = "acc";

  printf("strcmp(str1, str2) = %d\n",
         strcmp(str1, str2));  // 1: str1 0:= -1:str2  大

  return 0;

  // 目标字符串内存空间是否足够?
  // strcpy 拷贝
  // stccat 链接

  // 安全替代
  // strncpy
  // strncat

  // 查找
  // strchr
  // strrchr
}
