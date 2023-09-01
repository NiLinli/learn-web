#include <stdio.h>

// 常量
#define VTAB '\013';
#define BELL '\007';

// const 修饰的是变量 只读变量 翻译为常量变量很奇怪
void error_operator()
{
  const int a = 123;
  // a = 23; // cannot assign to variable 'a' with const-qualified type
}

void constPoint()
{
  int a = 1;
  int b = 2;

  // p 为 const, 修饰 p
  int *const p = &a; // p 是 const , 只读, p 不能被修改
  // int const *p = &a;

  *p = 100; // ok
  // p = &b; // error
}

void constValue()
{
  int a = 1;
  int b = 2;
  // const 修饰 *p, 不能用 *p 修改, 可以由 int 变量修改
  // const int *p = &a;
  int const *p = &a;

  a = 22;  // ok
  // *p = 22; // error  // 不能通过 p 修改 a
  p = &b;  // ok
}

// 非 const 的值 转换为 const 的值
void toConst()
{
}

// 用指针修改 const 会有奇怪的行为
void undefined_behavior()
{
  const int a = 123;
  int *p = &a;
  printf("*p = %d\n", *p);
  printf("p = %p\n", p);
  *p = 234;
  printf("change *p to 234\n");
  printf("a = %d\n", a);         // 123
  printf("*(&a) = %d\n", *(&a)); // 234
}

int main(int argc, char const *argv[])
{

  undefined_behavior();
  return 0;
}
