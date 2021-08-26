#include <limits.h>
#include <stdio.h>

int main(int argc, char const *argv[]) {
  int a = 0;

  // 有符号数最大正数 + 1 会变成最大的负数
  while (++a > 0)
    ;

  printf("int min range is %d\n", a);
  printf("int max range is %d\n", a - 1);

  printf("a - 1 == INT_MAX %d\n", a - 1 == INT_MAX);
  printf("a == INT_MIN %d \n", a == INT_MIN);
  return 0;
}
