#include <stdio.h>

// 结构的运算 结构也可以算是一种基本类型, 都是值的拷贝, 并不是引用类型
// 赋值/参数/返回值
// 取地址
struct Point {
  int x;
  int y;
};

struct Point return_same_struct(struct Point p);

int main(int argc, char const *argv[]) {
  struct Point p1;
  p1.x = 2;
  p1.y = 4;

  // 赋值
  struct Point p2 = p1;
  struct Point p3 = (struct Point){0, 100};

  printf("p1 = (%i, %i)\n", p1.x, p1.y);
  printf("p2 = (%i, %i)\n", p2.x, p2.y);
  printf("p3 = (%i, %i)\n", p3.x, p3.y);

  printf("&p1 = %p, &p2 = %p\n", &p1, &p2);

  // 参数 & 返回值
  struct Point p4 = return_same_struct(p1);
  printf("return value p: &p4 = %p\n", &p4);
}

struct Point return_same_struct(struct Point p) {
  printf("argument p: &p = %p\n", &p);
  return p;
}