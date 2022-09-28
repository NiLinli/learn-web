#include <stdio.h>

// 用户定义的数据类型
// 类型只能是 int
// 给常量以个名字 代替 const int 
enum COLOR {
  RED,      // 0
  YELLOW,   // 1
  GREEN,
  NumOfColors     // 表示枚举量有多少个
};

enum COLOR2 {
  RED = 5, 
  YELLOW,     // 6
  GREEN = 9,
};

void f(enum COLOR c);

int main() {
  enum COLOR t = RED;
  scanf("%d", &t);
  f(t);

  return 0;
}

void f(enum COLOR c) {
  printf("%d\n", c);
}