#include <stdio.h>

void f();

int main(int argc, char const *argv[]) {
  // 取地址(取得地址只能赋值给指针变量) &
  int a = 123;
  int b = 456;

  printf("&a = %p\n", &a);  // &a = 0x7ffee8658b6c 大 -> 小 分配地址 自顶向下
  printf("&b = %p\n", &b);  // &b = 0x7ffee8658b68

  // int* 类型
  // p    变量名
  // int* p/int *p:   *p 为 int, 所以 p 为 point 类型

  int *p1;  // main 中指向 Ox0
  printf("%p\n", p1);

  f();
  return 0;
}

void f() {
  int *p;  // 局部变量会赋予一个很随意的数
  printf("%p\n", p);
  // *p = 0;   // p 的地址变量在内存中可能不存在
}
