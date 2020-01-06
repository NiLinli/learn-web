#include <stdio.h>

int *f(void);
void g(void);

int main(int argc, char const *argv[])
{
    int *p = f();
    printf("*p = %d\n", *p);    // *p = 123 这个时候还能访问的到
    g();                        // k = 456 地址分配给 k 了
    printf("*p = %d\n", *p);    // *p = 456 访问的 k 的值

    return 0;
}

int *f()
{
    int a = 123;
    return &a;    // 不要返回本地变量的 point, 本地变量生命周期结束以后, 无法保证能够继续使用地址
}

void g(void)
{
    int k = 456;
    printf("k = %d\n", k);
}
