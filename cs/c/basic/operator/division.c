#include <stdio.h>

int main() {

  int a = 3;
  int b = 2;

  printf("a/b = %d \n", a/b);

  // int/int 为 int 类型, 默认取整操作
  printf("a/b = %f \n", 3.0/2.0);
}