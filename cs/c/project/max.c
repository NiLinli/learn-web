#include "max.h"

int max_global = 123;

// 全局定义 => 静态区定义 => 达到隐藏全局变量 => 全局变量不冲突
static int max_global_limit = 456;

double max(double a, double b)
{
    return a > b ? a : b;
}

// 函数是全局定义的
// static 限制同上
static int min(int a, int b)
{
    return a < b ? a : b;
}