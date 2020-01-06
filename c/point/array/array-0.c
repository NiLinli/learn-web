#include <stdio.h>

void f(void);

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
