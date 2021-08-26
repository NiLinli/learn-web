#include <stdio.h>
#include <string.h>

// size_t strlen(const char *s)
// 返回字符数组的长度 不包括 '\0'
// const 表示函数不能修改传递的参数

int main() {

  char line[] = "hello";

  printf("sizeof(line) = %lu\n", sizeof(line)); // 6
  printf("strlen(line) = %lu\n", strlen(line)); // 5

}