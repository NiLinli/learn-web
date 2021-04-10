#include <stdio.h>

// 使程序移植性更强，不同系统别名相同, 具体定义别名方式不同(差异代码)
typedef long int_64;

// 新的名字是别的东西的别名, 改善了程序的可读性
// 定义 + 声明别名
typedef struct point {
  int x;
  int y;
} Point;

// 定义
struct point2 {
  int x;
  int y;
};

// 声明别名
// typedef 原来类型 新名字
typedef struct point2 Point2;  

// 不要定义 point 类型 typedef
typedef struct person {
  int sex;
  int age;
} * Person;

// Person 等同于
// struct person {
//   int sex;
//   int age;
// } * 

int main() {
  int_64 a = 1000000000;
  Point b = {1, 2};
  Point2 c = {1, 2};
  printf("%d, %d\n", b.x, b.y);
  printf("%d, %d\n", c.x, c.y);


  // 无法本地声明一个变量, 只能声明一个指针变量
  // 可以根据一个类型声明 int 该类型的变量 int 和指针变量 int* (int + *)
  // 但是没有办法根据一个指针类型 int* 反向声明一个类型变量 (int* + ???)
  // 可读性差, 看起来也不像指针类型
  // Person p;
}
