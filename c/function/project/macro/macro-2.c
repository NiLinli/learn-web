#include <stdio.h>

// 带参数的宏(like 函数)

#define cube(x) ((x) * (x) * (x))

// 错误的方式定义 macro
#define RADTODEG1(x) (x * 57.29578)
#define RADTODEG2(x) (x) * 57.29578

// 一切都要有()
// 1. 参数出现的地方都要有 ()
// 2. 整个值都要有 ()
// 最后不要加分号, 有可能会出现两个分号
#define RADTODEG(x) ((x) * 57.29578)

int main(int argc, char const *argv[])
{

    printf("%d\n", cube(5)); // cube(5) 被替换成 ((5) * (5) * (5)))

    printf("%f\n", RADTODEG1(5 + 2));       // (5 + 2 * 57.29578)
    printf("%f\n", 180 / RADTODEG2(1));     // 180 / (1) * 57.29578

    return 0;
}
