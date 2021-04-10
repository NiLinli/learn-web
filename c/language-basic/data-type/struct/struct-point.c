#include <stdio.h>

// .的优先级高于 & *
// &p.x  &(p.x) ok
// *p.x *(p.x)  不符合预期 (*p).x 简写 p->x

struct Point *get_struct_point(struct Point *p);

struct Point {
  int x;
  int y;
};

int main() {
  struct Point p0 = {1, 2};

  printf("p address is (%p, %p)\n", &p0.x, &p0.y);

  struct Point p;

  struct Point *pp = get_struct_point(&p);

  printf("p = (%d, %d)\n", p.x, p.y);
}

// 传递指针比拷贝变量更加有效
struct Point *get_struct_point(struct Point *p) {
  // 结构输入
  scanf("%i,%i", &p->x, &(*p).y);
  return p;
}
