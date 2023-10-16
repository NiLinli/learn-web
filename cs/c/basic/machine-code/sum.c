#include <stdio.h>

int accum = 0;

void sum(int x, int y, long *dest)
{
  int t = x + y;
  accum += t;
  *dest = accum;
}