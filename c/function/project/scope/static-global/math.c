#include "math.h"

static int aAll = 1;
static int bAll = 2;    // 隐藏全局变量

int gAll = 123;
static int gAll1 = 456;

// 1. 函数名对全局(整个程序的各个文件.c)都是可见的 (不管有没有导入 .h 声明)
// 2. 限制函数在当前文件中使用: static
int max(int a, int b)
{
    return a > b ? a : b;
}

static int min(int a, int b)
{
    return a < b ? a : b;
}