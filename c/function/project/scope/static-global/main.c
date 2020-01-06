#include <stdio.h>
#include "math.h"

static int aAll = 1;
static int bAll = 2;    // 隐藏全局变量, 两个文件相同的全局变量可以名字相同而不冲突

int main(int argc, char const *argv[])
{
    int a = 5;
    int b = 6;

    printf("max value is %d\n", max(a, b));
    // printf("min value is %d\n", min(a,b));    // 被限制在了 math.c 当中

    printf("max value is %d\n", max(a, gAll));
    // printf("max value is %d\n", max(a, gAll1)); // static 限制
    return 0;
}
