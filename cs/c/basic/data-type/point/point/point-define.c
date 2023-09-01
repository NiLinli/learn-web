#include <stdio.h>

// int* 类型
// p    变量名
// int* p/int *p:   *p -> int, 所以 p 为 point 类型
typedef int* int_p;


void f();

int main(int argc, char const *argv[])
{
  // 取地址(取得地址只能赋值给指针变量) &
  int a = 123;
  int_p p = &a;

  printf("&a = %p\n", &a);
  printf("p = %p\n", p); 

  int *p1; 
  printf("%p\n", p1);

  f();
  return 0;
}

void f()
{
  int *p; // 局部变量会赋予一个很随意的数
  printf("%p\n", p);
  // *p = 0;   // p 的地址变量在内存中可能不存在
}
