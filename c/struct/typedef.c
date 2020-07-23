#include <stdio.h>

// typedef 将已有的 类型 定义一个新的名字
// 1. 新的名字是别的东西的别名, 改善了程序的可读性
// 2. 使程序移植性更强 -- 不同系统别名相同, 具体定义别名方式不同(差异代码)

typedef long int_64;  // 2
// 1
typedef struct point {
  int x;
  int y;
} Point;

// 等同于
struct point2 {
  int x;
  int y;
};
typedef struct point2 Point2;  // typedef 原来类型 新名字

// 不要定义 point 类型 typedef
typedef struct person {
  int sex;
  int age;
} * Person;

int main() {
  int_64 a = 1000000000;
  Point b = {1, 2};
  Point2 c = {1, 2};
  printf("%d, %d\n", b.x, b.y);
  printf("%d, %d\n", c.x, c.y);


  // 无法本地声明一个变量, 只能声明一个指针变量, 可以根据一个类型声明该类型的变量和指针变量, 但是没有办法根据一个指针类型反向声明一个类型变量
  // 可读性差, 看起来也不像指针类型
  // Person p;
}
