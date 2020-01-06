#include <stdio.h>

int f(void);

int a1 = 123;
int a2;       // 未被初始化, 默认值为 0
// int a3 = f(); // initializer element is not a compile-time constant(必须要是常量表达式)
// int a4 = a1;  // 与 a3 相同的错误

// a4 的解决之道 (不推荐这样使用, 把一个全局变量和另外一个全局变量绑定子在一起)
const int a5 = 456;
int a6 = a5;


int main(int argc, char const *argv[])
{
    printf("a1 %d\n", a1);      // 123
    printf("a2 %d\n", a2);      // 0
    printf("a6 %d\n", a6);
    f();
    return 0;
}

int f(void)
{
    int b1 = 123;
    int b2;             // 值不确定, 有可能为 0

    printf("b1 %d\n", b1);
    printf("b2 %d\n", b2);
    return b1 + 1;
}