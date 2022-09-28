#include <stdio.h>

int max(int a, int b);

int main(int argc, char const *argv[])
{
    printf("max value is %d\n", max(1, 3));
    return 0;
}

// 变量在内存中使用频率很高, 使用 CPU 寄存器存储这些变量
// 编译器可以忽略这些
// 1. 函数参数
// 2. 函数内本地变量
// 内存地址不能访问 (无论编译器是否忽略了)
int max(register int a, register int b)
{
    register int i = 3;

    return a > b ? a : b;
}
