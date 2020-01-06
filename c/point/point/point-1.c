#include <stdio.h>

int main(int argc, char const *argv[])
{
  int a  = 123;

  int p;

  p = (int)&a;
  
  printf("0x%x\n", p);
  printf("%p\n", p); // 0x 7ffe e2bf 3b6c

  printf("%lu\n", sizeof(p));
  printf("%lu\n", sizeof(&a));
  // -m32
  // 0xbff24be0     4
  // 0xbff24be0     8

  // -m64
  // 0x ec84 9b6c     4
  // 0x7ffe ec84 9b6c   8

  return 0;
}
