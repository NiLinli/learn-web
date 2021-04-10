#include <stdio.h>
void f2(void);  // 函数的声明 = 函数原型

void f1(void) {}

int main(int argc, char const *argv[]) {
  f1();  // 调用的时候, 需要知道函数的原型
  // f2();    // warn: 猜测 int f2(int)
  return 0;
}

// error 与 猜测不一致
void f2(void) {}