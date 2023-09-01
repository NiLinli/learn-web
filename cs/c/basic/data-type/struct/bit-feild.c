#include <stdio.h>

void prtBinary(unsigned int number);

// 可以直接用位段来访问 某一位, 比使用位运算符方便
// 编译器会安排其中位的排列,不具备可移植性(有的是从右边排, 有的是从左边排)
// 当所需 int 超过一个 int 时候, 会采用多个 int
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