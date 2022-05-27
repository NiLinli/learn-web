#include <stdio.h>

int main(int argc, char const *argv[]) {
  int a = 0xFE;   // 让最低位为 0
  int a2 = 0xFF;  // 取最后一个字节
  int b = 0xA5;
  int b2 = 0x0023FFA5;
  
  // 让某一位 或者 某些位 为 0
  printf("b & a = 0x%x\n", b & a);
  // a      1 1 1 1 1 1 1 0
  // b      1 0 1 0 0 1 0 1
  // b & a  ............. 0

  // 取一个数字中的一段
  printf("b2 & a2 = 0x%x\n", b2 & a2);  // 0x000000A5

  return 0;
}
