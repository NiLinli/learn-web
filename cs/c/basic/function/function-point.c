#include <stdio.h>

int add(int a, int b);

int main()
{
  printf("add address is %p\n", add);

  // int (*p)() 指向函数的指针
  int (*add_ptr)(int, int) = &add;
  printf("add_ptr address is %p\n", add_ptr);

  int c = (*add_ptr)(1, 2);
  printf("c is %d\n", c);
}

int add(int a, int b)
{
  return a + b;
}