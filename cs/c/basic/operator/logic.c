#include <stdio.h>

int f(void);

int main(int argc, char const *argv[]) {
  int a = 8;
  int b = 0;
  int c = 2;

  printf("a || b++ = %d\n", a || b++);
  // a || b  a 为 true 就短路了 后面的都不会做运算
  // logic 返回值只是 0 或者 1
  printf("b = %d\n", b);  // 0 b 没有做运算

  printf("b && c++ = %d\n", b && c++);  // 短路
  printf("c = %d\n", c);

  printf("!a = %d\n", !a);  // 0

  if (a > c) {
    f();
  }

  (a > c) && f();

  return 0;
}

int f(void) {
  printf("function f!!!\n");
  return 0;
}