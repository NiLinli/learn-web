#include <stdio.h>

#define VTAB '\013';
#define BELL '\007';


int main(int argc, char const *argv[])
{

  const int a = 123;

  int *p = &a;

  *p = 234;

  // a = 34;
  printf("a = %d\n", a);

  return 0;
    
}
