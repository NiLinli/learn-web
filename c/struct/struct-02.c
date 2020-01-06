#include <stdio.h>

struct Point {
  int x;    
  int y;
};


int main(int argc, char const *argv[]) {

  struct Point p1;
  p1.x = 2;
  p1.y = 4;

  // 结构的运算(和其他基本类型一样)
  // 赋值
  // 取地址
  // 做为参数传递
  
  struct Point p2 = p1;     // 结构成员的拷贝  数组不能做这个操作因为 数组 a 为 const 指针 

  struct Point p3 =  (struct Point){0,100};

  printf("the p1 point is ( %i, %i)\n", p1.x, p1.y);
  printf("the p2 point is ( %i, %i)\n", p2.x, p2.y);
  printf("the p3 point is ( %i, %i)\n", p3.x, p3.y);

  // 取成员地址
  // . 优先级 高于 &
  // &p3.x == &(p3.x)
  printf("the p3 point address is ( %p, %p)\n", &p3.x, &p3.y);

 
}
