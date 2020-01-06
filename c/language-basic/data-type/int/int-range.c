#include <stdio.h>

int main(int argc, char const *argv[])
{
  int a = 0;
  
  while(++a > 0)
  ;

  printf("int max range is %d\n", a - 1);
  return 0;
}
