#include <stdio.h>
#include <stdlib.h>


// 数组是容器
// 所有的元素都是相同的数据类型
// 一旦创建, 不能改变大小
// 在内存中是连续依次排列的
int main(int argc, char const *argv[])
{
    // int *const a;
    // readonly point
    int a[10];

    int b[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};

    // array type 'int[10]' is not assignable
    // a = b;

    // 数组越界, 编译器不会检测
    // 下标从 0 开始是从 C 语言开始的 , 以前不是
    // 运行无越界保护
    // a[10] = 0;      // 越界了 warning 不是错误, 但是运行时会报错 Abort trap: 6

    // struct in stack area
    int int_a = 10;
    int *dynamic = (int *)malloc(sizeof(int));
    printf("int_a address is %p\n", &int_a);     // 0x7ff7b33a12cc
    printf("array_a address is %p\n", &a);       // 0x7ff7b33a1300
    printf("dynamic  address is %p\n", dynamic); // 0x7fe432705b40 -> heap
    return 0;
}
