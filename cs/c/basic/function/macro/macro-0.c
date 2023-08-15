#include <stdio.h>

// preprocessor

#define PI 3.1515936        // 不是 C 语言语句, 不能加分号
#define PI2 2 * PI          // 一个宏有其他宏的名字, 也会被替换

// 如果一个宏超过一行, 加 '\'
#define PRT printf("%f\n", PI);\
    printf("%f\n", PI2)

    int
    main(int argc, char const *argv[])
{
    printf("%f\n", 2 * PI * 3.0);
    printf("%f\n", PI2 * 3.0);
    PRT;
    return 0;
}
