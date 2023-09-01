#include <stdio.h>

void f(int a[]);

int main(int argc, char const *argv[])
{
  int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};

  // sizeof(a) 只在没有传递 a 的情况下是数据的大小
  int length = sizeof(a) / sizeof(a[0]);

  for (int i = 0; i < length; i++)
  {
    printf("%d\n", a[i]);
  }

  return 0;
}