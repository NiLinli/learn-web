#include <float.h>
#include <stdio.h>

int main(int argc, char const *argv[]) {
  float a = -8.25;
  char *p = (char *)&a;
  
  // 0x7f7fffff
  *p = 0xff;
  *(p + 1) = 0xff;
  *(p + 2) = 0x7f;
  *(p + 3) = 0x7f;

  printf("a = %e\n", a);
  printf("FLT_MIN = %e \t FLT_MAX = %e \t\n", FLT_MIN, FLT_MAX);
  
  return 0;
}