#include <stdio.h>

// typedef 将已有的 类型 定义一个新的名字
// 1. 新的名字是别的东西的别名, 改善了程序的可读性
// 2. 使程序移植性更强 -- 不同系统别名相同, 具体定义别名方式不同(差异代码)

typedef long int_64;
typedef struct point {
  int x;
  int y;
} Point;

// 区别于声明结构时候 定义 变量
// 定义 int_65
long int_65;

// 定义 p1 p2 结构变量
struct point2 {
  int x;
  int y;
} p1, p2;

int main() {
  int_64 a = 1000000000;
  Point b = { 1, 2 };
}