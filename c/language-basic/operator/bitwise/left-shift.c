#include <stdio.h>

// 左移 在C 语言中默认是逻辑左移
// **有符号数字左移无法保证符号位**
// 正数/无符号数 左移动 * 2^n 
int main(int argc, char const *argv[]) {

  unsigned int b = 0x00000002;
  // 0000 0000 0000 0000 0000 0000 0000 0010
  // 0000 0000 0000 0000 0000 0000 0000 1000
  printf("b = 0x%x, sizeof(b) = %lu\n", b, sizeof(b));
  printf("b<<2 = 0x%x, sizeof(b << 2) = %lu\n", b << 2, sizeof(b << 2));

  unsigned int c = 0x80000000;
  //    1000 0000 0000 0000 0000 0000 0000 0000 
  // 10 0000 0000 0000 0000 0000 0000 0000 0000 (溢出了)
  printf("c = 0x%x, sizeof(c) = %lu\n", c, sizeof(c));
  printf("c<<2 = 0x%x, sizeof(c << 2) = %lu\n", c << 2, sizeof(c << 2));

  int d = 0xFFFFFFF9; // -7
  printf("d = 0x%x, d = %d, sizeof(d) = %lu\n", d, d,sizeof(d));
  printf("d<<2 = 0x%x, d<<2 = %d, sizeof(d << 2) = %lu\n", d << 2,d << 2, sizeof(d << 2));

  int e = 0x80000009; 
  printf("e = 0x%x, e = %d, sizeof(e) = %lu\n", e, e,sizeof(e));
  printf("e<<2 = 0x%x, e<<2 = %d, sizeof(e << 2) = %lu\n", e << 2,e << 2, sizeof(e << 2));

  return 0;
}