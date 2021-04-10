#include <stdio.h>
#include <stdlib.h>

int *f(void);
void g(void);
int *f_malloc(void);
int *f_array();

int main(int argc, char const *argv[]) {
  int *p = f();
  printf("*p = %d\n", *p);  // *p = 123 这个时候还能访问的到
  g();                      // k = 456 地址分配给 k 了
  printf("*p = %d\n", *p);  // *p = 456 访问的 k 的值

  int *arr = f_array();
  printf("arr[0] = %d\n", arr[0]);  // 1
  g();
  printf("arr[0] = %d\n", arr[0]);  // -517048128

  int *p_malloc = f_malloc();
  printf("*p_malloc = %d\n", *p_malloc);  // 678
  g();
  printf("*p_malloc = %d\n", *p_malloc);  // 678

  return 0;
}

int *f() {
  int a = 123;
  // 不要返回本地变量的 point
  // 本地变量生命周期结束以后, 无法保证能够继续使用地址(会释放/被其他变量占用)
  // 所以数组无法局部创建并返回
  return &a;
}

int *f_array() {
  int a[] = {1, 2, 3, 4};
  return a;
}

void g(void) {
  int k = 456;
  printf("k = %d\n", k);
}

int *f_malloc(void) {
  // 通过 malloc 开辟的 local 内存空间
  // 可以返回, 指针所指向的地址可以继续使用(除非被手动 free)
  int *p = (int *)malloc(sizeof(int));
  *p = 678;
  return p;
}