#include <stdio.h>

int main(int argc, char const *argv[])
{
  int a = 0x80000000;
  unsigned int b = 0x80000000;

  printf("a = %d, b = %u \n", a, b );


  // 有符号：符号位置不变, 左边填入原来的最高位
  // 1000 0....
  // 1110
  // 除以 2^n

  // unsigned :左边填入 0
  // 0010 0000


  printf("a >> 2 = %d\n", a>>2);
  printf("b >> 2 = %u\n", b>>2);

  printf("a >> 2 = 0x%x\n", a>>2);
  printf("b >> 2 = 0x%x\n", b>>2);


  // 右移位是要考虑符号位的
  // 移位的数字不能为负数
  
  return 0;
}