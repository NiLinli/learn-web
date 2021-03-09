#include <stdio.h>

#define VTAB '\013';
#define BELL '\007';

// const 不表示常量 表示 readonly
int main(int argc, char const *argv[]) {
  const int a = 123;
  // a = 23;    // error

  // undefined behavior  
  int *p = &a;
  printf("*p = %d\n", *p);
  printf("p = %lu\n", p);
  *p = 234;
  printf("p = %lu\n", p);
  printf("a = %d\n", a);  // 123
  printf("&a = %lu\n", &a);
  printf("*p = %d\n", *p);  // 234

  return 0;
}
