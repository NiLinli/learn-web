#include <stdio.h>

// 新的名字是别的东西的别名, 改善了程序的可读性
// 定义 + 声明别名
typedef struct _point
{
  int x;
  int y;
} Point;

// 定义
struct _point2
{
  int x;
  int y;
};

// 声明别名
// typedef 原来类型 新名字
typedef struct _point2 Point2;

// 不要定义 point 类型 typedef
typedef struct person
{
  int sex;
  int age;
} *Person;

// Person 等同于
// struct person {
//   int sex;
//   int age;
// } *

// 无法本地声明一个变量, 只能声明一个指针变量
// typedef int* int_p;
// 根据 int_p 无法声明 int

int main()
{
  Point b = {1, 2};
  Point2 c = {1, 2};
  printf("%d, %d\n", b.x, b.y);
  printf("%d, %d\n", c.x, c.y);
}
