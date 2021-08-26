#include <stdio.h>

void f(int a, int b);
void f1(void);
void f2();

int main(int argc, char const *argv[])
{
    int a = 1;
    int b = 2;

    printf("main &a = %p\n", &a); // 0x7ffee58879fc
    printf("main &b = %p\n", &b); // 0x7ffee58879f8

    f(a, b);

    printf("main &a = %p\n", &a); // 0x7ffee58879fc
    printf("main &b = %p\n", &b); // 0x7ffee58879f8

    // void 
    f1();
    f2();

    // f1(123);  // error
    f2(123);

    return 0;
}

void f(int a, int b)
{
    // 传递给被调用函数参数的值存放在临时变量里面, 而不是原来的变量

    printf("f &a = %p\n", &a); // 0x7ffee58879cc
    printf("f &b = %p\n", &b); // 0x7ffee58879c8
}

void f1(void)   // 不能传值
{
    printf("f1 void void\n");
}

void f2()       // 不确定要什么参数, 但是可以传, 编译器猜测
{
    printf("f2 void\n");
}