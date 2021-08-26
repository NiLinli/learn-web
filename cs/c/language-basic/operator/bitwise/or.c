#include <stdio.h>

int main(int argc, char const *argv[]) {
  int a = 0x01;

  // 让某一位 或者 某些位 为 1
  printf("0x04 | a = 0x%x\n", 0x04 | a);

  // 把两个数拼接起来
  printf("0x00FF | 0xFF00 = 0x%x\n", 0x00FF | 0xFF00);

  // 逻辑运算 -> 非 0 的值都为1 -> 然后转化为按位运算
  return 0;
}