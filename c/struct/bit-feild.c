#include <stdio.h>

void prtBinary(unsigned int number);

struct UO {
  unsigned int leading : 3;
  unsigned int FLAG1 : 1;
  unsigned int FLAG2 : 1;
  // int training : 27;
};

int main(int argc, char const *argv[]) {
  struct UO uu;

  uu.leading = 2;
  uu.FLAG1 = 0;
  uu.FLAG2 = 1;
  // uu.training = 0;

  printf("sizeof(uu) = %lu\n", sizeof(uu));
  prtBinary(*(int *)&uu);   // struct -> int 进行操作
  return 0;
}

void prtBinary(unsigned int number) {
  unsigned mask = 1u << 31;  // mask 逐一看某一位上那个 bit 是 0 还是 1
  for (; mask; mask >>= 1) {
    printf("%d", number & mask ? 1 : 0);  // 判断和 mask & 的那一位是否为 0
  }
  printf("\n");
}