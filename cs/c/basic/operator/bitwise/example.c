#include <stdio.h>

// 位段
// 优点: 可以直接通过位段的成员名称进行访问(比 shift or and ... 方便)
// 缺点: 编译器会安排结构中位的排列, 不具备可移植性
struct U0 { 
  unsigned int leading: 3;
  unsigned int FLAG1: 1;
  unsigned int FLAG2: 1;
  int trailing: 27;
};

void prtBinary();
void controlSCMRegister();

int main(int argc, char const *argv[]) {
  // prtBinary();
  // controlSCMRegister();

  struct U0 uu;
  uu.leading = 2;
  uu.FLAG1 = 0;
  uu.FLAG2 = 1;
  uu.trailing = 0;
  printf("sizeof(uu) = %lu\n", sizeof(uu));
  prtBinary(*(int *)&uu);
  return 0;
}

// 取出一个数字的每一位是 1 还是 0
void prtBinary(unsigned int number) {
  // int number;
  // scanf("%d", &number);

  unsigned mask = 1u << 31;  // mask 逐一看某一位上那个 bit 是 0 还是 1

  for (; mask; mask >>= 1) {
    printf("%d", number & mask ? 1 : 0);  // 判断和 mask & 的那一位是否为 0
  }

  printf("\n");
}

// 控制单片机的某些位为 0 或者 为 1
void controlSCMRegister() {
  char UOLCR = 0;

  const unsigned int SBS = 1u << 2;
  const unsigned int PE = 1u << 3;

  // 设置一个端口某一位为 1
  printf("UOLCR SBS set 1 , UOLCR = 0x%x,\n", UOLCR |= SBS);    // 0x04
  printf("UOLCR PE set 1 , UOLCR = 0x%x,\n", UOLCR |= PE);      // 0x0c

  // 设置一个端口某一位为 0
  printf("UOLCR SBS reset 0 , UOLCR = 0x%x,\n", UOLCR &= ~SBS);      // 0x08
}

