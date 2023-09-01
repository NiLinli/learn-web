#include <stdio.h>
#include <stdlib.h>

struct Point
{
  int x; // 结构成员
  int y;
};

// 连续的内存空间
// 一个或者多个变量的结合
// 变量类型可能不同
// 为了处理的方便, 将相关变量组织在一个变量之下
// 结构用于处理复杂的数据

int main(int argc, char const *argv[])
{

  // 定义结构变量 方式 1
  struct Point p1;
  p1.x = 2;
  p1.y = 4;

  // 定义结构变量 方式 2
  struct Point p2 = {1, 2};

  // 定义结构变量 方式 3
  struct Point p3 = {.y = 4, .x = 5};

  printf("p1 is ( %i, %i)\n", p1.x, p1.y);
  printf("p2 is ( %i, %i)\n", p2.x, p2.y);
  printf("p3 is ( %i, %i)\n", p3.x, p3.y);

  // struct in stack area
  int a = 10;
  int *dynamic = (int *)malloc(sizeof(int));
  printf("a address is %p\n", &a);
  printf("p1 address is %p\n", &p1);
  printf("dynamic  address is %p\n", dynamic);
}