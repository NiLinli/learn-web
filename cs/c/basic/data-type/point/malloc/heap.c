#include <stdio.h>
#include <stdlib.h>

int main(int argc, char const *argv[])
{

  void *p = malloc(sizeof(int) * 5);
  void *p2 = malloc(sizeof(int));

  // 一块一块分配
  printf("p address is %p\n", p);
  printf("p2 address is %p\n", p2);

  return 0;
}
