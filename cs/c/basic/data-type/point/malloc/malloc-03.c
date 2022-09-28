#include <stdio.h>
#include <stdlib.h>

int main () {
  int *p = (int *)malloc(100 * 1024 * 1024);

  // pointer being freed was **not allocated**
  // p++;
  // free(p);

  // pointer being freed was **not allocated**
  // int a = 4;
  // int *q = &a;
  // free(q);

  // NULL / 0 不是有效地址, 所有 free 里会进行判断
  free(NULL);

  int *p1 = 0;    // 良好的习惯 指针定义出来赋值为 0
  free(p1);       // free(NULL) 是用来配合这个良好的习惯

  return 0;
  
}