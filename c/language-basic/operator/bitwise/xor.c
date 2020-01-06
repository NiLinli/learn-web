#include <stdio.h>

// 两个数不相等 就为 1

int main(int argc, char const *argv[]) {
  int a = 0x001108fa;
  int b = 0x0bccddab;
  int c = 0x001108fa;
  // 对一个数做两次相同的异或, 值相等
  printf("a ^ b ^ b = 0x%x\n", a ^ b ^ b);

  // 判断两个值是否相等
  printf("(a ^ c) == 0 ? %d\n", (a ^ c) == 0);

  return 0;
}