#include <stdio.h>

int main(int argc, char const *argv[]) {
  int a = 1;
  unsigned int b = 2;
  long long int c = 12371987;
  unsigned long long int d = 1239812398;

  printf("int is %d\n", a);
  printf("unsigned int is %u\n", b);
  printf("long long is %'lld\n", c);
  printf("unsigned long long is %llu\n", d);

  int a1 = -1;
  char a2 = -1;

  printf("a1 = %u\n", a1);  // 4294967295
  printf("a2 = %u\n",
         a2);  // 小于 int 的变量传递到 printf 中的时候, 会被转换为 int 类型
  printf("a2 = 0x%x\n", a2);  // 0xffffffff

  int b1 = 012;
  int b2 = 0x12;

  printf("b1 = 0%o\n", b1);
  printf("b2 = Ox%x\n", b2);

  printf("b1 = %d\n", b1);
  printf("b2 = %d\n", b2);
}
