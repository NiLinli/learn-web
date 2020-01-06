#include <stdio.h>

struct Point {
  int x;
  int y;
};

void getStruct(struct Point p);
struct Point getStruct_1(void);
struct Point *getStruct_2(struct Point *p);
void output(struct Point p);

int main () {
  struct Point p = { 1, 2 };
  getStruct(p);
  output(p);

  p = getStruct_1();
  output(p);

  getStruct_2(&p);
  output(p);
}

// 传入结构变量和普通变量一样 是 copy 和数组不同
void getStruct(struct Point p) {
  scanf("%d", &p.x);
  scanf("%d", &p.y);
  printf("getStruct %d, %d\n", p.x, p.y);
}

// 返回一个新的返回变量
struct Point getStruct_1(void) {
  struct Point p;
  scanf("%d", &p.x);
  scanf("%d", &p.y);
  printf("getStruct_1 %d, %d\n", p.x, p.y);
  return p;
}

// 传递指针比拷贝变量更加有效
struct Point *getStruct_2(struct Point *p1){
  scanf("%d", &(*p1).x);  // . 优先级大于 *
  scanf("%d", &p1->y);
  printf("getStruct_2 %d, %d\n", p1 -> x, p1 -> y);
  return p1; // 返回结果可以做为其他函数的参数
}

void output(struct Point p) {
  printf("%d, %d\n", p.x, p.y );
}