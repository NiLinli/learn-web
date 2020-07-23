#include <stdio.h>

// 声明结构类型, typedef 的时候 struct 的名字可以省略
struct Point {
  int x;    // 结构成员
  int y;
};

// 结构成员和数组单元类似, 不过数组单元必须类型相同


int main(int argc, char const *argv[]) {

  // 定义结构变量 方式 1
  struct Point p1;
  p1.x = 2;
  p1.y = 4;

  // 定义结构变量 方式 2
  struct Point p2 = { 1, 2 };

  // 定义结构变量 方式 3
  struct Point p3 = { .y = 4, .x = 5 };

  printf("the p1 point is ( %i, %i)\n", p1.x, p1.y);
  printf("the p2 point is ( %i, %i)\n", p2.x, p2.y);
  printf("the p3 point is ( %i, %i)\n", p3.x, p3.y);
 
}