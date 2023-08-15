#include <stdio.h>

void f(int a[]);

int main(int argc, char const *argv[])
{
  int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};

  // int * const a
  // int b[10] = a;    // array initializer must be an initializer list or wide string literal

  int b[sizeof(a) / sizeof(a[0])];

  // 把一个数组赋值给另外一个数组, 必须遍历
  for (int i = 0; i < sizeof(a) / sizeof(a[0]); i++)
  {
    b[i] = a[i];
  }

  for (int i = 0; i < sizeof(b) / sizeof(b[0]); i++)
  {
    printf("%d\n", b[i]);
  }

  return 0;
}