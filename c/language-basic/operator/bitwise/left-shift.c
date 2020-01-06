#include <stdio.h>

int main(int argc, char const *argv[]) {
  unsigned char c = 0xA5;

  //    0110 0101
  // 01 1001 0100 
  printf("c    = %x\n", c);
  printf("c<<2 = %x\n", c << 2);

  printf("c    = %d\n", c);   // 165 倍数 2^n
  printf("c<<2 = %d\n", c << 2);  // 660 

  return 0;
}