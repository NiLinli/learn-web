#include <stdbool.h>
#include <stdio.h>

int main(int argc, char const *argv[])
{
  bool a = true;
  bool b = 6 < 5;
  bool c = false;

  // bool a 其实是一个整数类型
  // 非 0 会变成 1
  a = 3;
  c = 100;

  printf("a = %d\n", a);
  printf("b = %d\n", b);
  printf("c = %d\n", c);

  return 0;
}
