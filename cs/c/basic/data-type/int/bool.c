#include <stdbool.h>
#include <stdio.h>

int main(int argc, char const *argv[]) {
  bool a = true;
  bool b = 6 < 5;

  a = 3;      // bool a 其实是一个整数类型 非 0 就是 1

  printf("a = %d\n", a);
  printf("b = %d\n", b);

  return 0;
}
