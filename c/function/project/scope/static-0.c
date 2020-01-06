#include <stdio.h>

int f();

int c = 123;

int main(int argc, char const *argv[])
{
    f();
    f();
    f();
    return 0;
}

int f()
{
    static int a = 1;
    int b = 1;
    int b2 = 2;

    // 静态本地变量 就是 全局变量(生存期) + 本地的作用域
    printf("&a = %p\n", &a); // &a = 0x10d41e01c
    printf("&c = %p\n", &c); // &c = 0x10d41e018

    printf("&b = %p\n", &b);    // &b = 0x7ffee92709dc
    printf("&b2 = %p\n", &b2);  // &b = 0x7ffeeb8b09d8

    printf("static a = %d\n ", a);
    printf("b = %d\n ", b);
    return a++;
}
