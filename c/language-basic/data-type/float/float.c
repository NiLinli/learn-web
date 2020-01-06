#include <stdio.h>

int main(int argc, char const *argv[]) {
  double dd = 12345.67899;

  float a, b;

  printf("dd(f) = %f, dd(e) = %e , dd(E) = %E \n", dd, dd, dd);
  printf("%.3f\n", -0.0049);  // 四舍五入
  printf("%.30f\n", -0.0049);
  printf("%.30f\n", -0.00049);
  printf("%.3f\n", -0.00049);

  printf("%f\n", 12.0/0.0);   // inf
  printf("%f\n", -12.0/0.0);  // -inf
  printf("%f\n", 0.0/0.0);    // nan

  a = 1.345f;   // 1.345 字面量表示 double 类型 , 所以会直接转换, 表示 float 需要在后面带 f 或者 F
  b = 1.123f;

  printf("1.345 + 1.123 == 2.468 %d\n", a + b == 2.468);  // 浮点数精度表示有限
  printf("1.345 + 1.123 = %.10f\n", a + b);  

  return 0;
}
