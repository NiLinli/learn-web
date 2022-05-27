#include <stdio.h>

void f(void);

// 结构成员的拷贝  数组不能做这个操作因为 数组 a 为 const 指针 

int main(int argc, char const *argv[])
{
    f();
    printf("here\n");
    return 0;
}

void f(void){
    int a[10];
    a[10] = 0;      // 越界了 warning 不是错误, 但是运行时会报错 Abort trap: 6
}
