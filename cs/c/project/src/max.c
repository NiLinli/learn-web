#include "max.h"

int max_global = 123;

// 变量是全局定义的
// static 隐藏全局变量, 两个文件相同的全局变量不冲突
static int max_global_limit = 456;

double max(double a, double b)
{
    return a > b ? a : b;
}

// 函数是全局定义的
// static 限制函数在当前文件中使用
static int min(int a, int b)
{
    return a < b ? a : b;
}