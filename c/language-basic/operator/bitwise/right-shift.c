#include <stdio.h>

int main(int argc, char const *argv[]) {
  // 有符号: 算术右移
  int a = 0x80000000;
  // 1000 0000 0000 0000 0000 0000 0000 0000
  // 1110 0000 0000 0000 0000 0000 0000 0000
  printf("a = 0x%x, a = %d, sizeof(a) = %lu\n", a,a, sizeof(a));
  printf("a>>2 = 0x%x, a>>2 = %d, sizeof(a >> 2) = %lu\n", a >> 2, a >> 2, sizeof(a << 2));

  // 无符号: 逻辑右移
  unsigned int b = 0x80000000;
  printf("b = 0x%x, sizeof(b) = %lu\n", b, sizeof(b));
  printf("b>>2 = 0x%x, sizeof(b >> 2) = %lu\n", b >> 2, sizeof(b >> 2));

  unsigned int c = 125;
  // .... 0111 1101
  // .... 0001 1111
  printf("c = 0x%x, a = %d, sizeof(c) = %lu\n", c, c, sizeof(c));
  printf("c>>2 = 0x%x, a>>2 = %d, sizeof(c >> 2) = %lu\n", c >> 2, c >> 2, sizeof(c >> 2));

  // 将 signed 做逻辑右移
  unsigned int d = (unsigned)b;
  printf("d = 0x%x, sizeof(d) = %lu\n", d, sizeof(d));
  printf("d>>2 = 0x%x, sizeof(d >> 2) = %lu\n", d >> 2, sizeof(d >> 2));

  return 0;
}