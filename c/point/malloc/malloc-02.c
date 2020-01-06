#include <stdio.h>
#include <stdlib.h>



int main() {

  void *p;
  int cnt = 0;

  // 没有空间分配了 返回 0 / NULL
  while(p = malloc(100 * 1024 * 1024)) {
    cnt++;
  }

  printf("system can malloc %d 00MB memorize \n", cnt);

  return 0;
}