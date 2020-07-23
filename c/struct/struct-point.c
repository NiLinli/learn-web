#include <stdio.h>

// 声明结构类型
struct Point {
  int x;  // 结构成员
  int y;
};

int main(int argc, char const *argv[]) {
  // 定义结构变量 方式 1
  struct Point p1, p2;
  p1.x = 2;
  p1.y = 4;

  p2.x = 4;
  p2.y = 5;

  // 结构指针
  struct Point *p = &p1;

  printf("the p1 point is ( %i, %i)\n", p1.x, p1.y);
  printf("the p is %p\n", p);

  struct Point *pp;
  pp = &p2;
  printf("the p is %p\n", pp);
  
  

  // 结构输入
  // struct Point p2;
  // scanf("%i,%i", &p2.x, &p2.y);
  // printf("the p1 point is ( %i, %i)\n", p2.x, p2.y);
}