#include <stdio.h>

void swap(int *pa, int *pb);
int divide(int a, int b, int *result);

int main(int argc, char const *argv[]) {
  int a = 5;
  int b = 6;

  swap(&a, &b);

  printf("a = %d \n", a);
  printf("b = %d \n", b);

  int c;
  if (divide(a, b , &c)) {
    printf("%d / %d = %d \n", a, b, c);
  }
}

void swap(int *pa, int *pb) {
  int t = *pa;
  *pa = *pb;
  *pb = t;
}

int divide(int a, int b, int *result) {
  int ret = 1;  
  if (b == 0) {
    ret = 0;
  } else {
    *result = a/b;    // 结果使用 p 带回
  }

  return ret;  // 返回标记位, 看运算是否成功 Java Js 采用异常处理
}