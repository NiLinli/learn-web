#include <stdio.h>

#define _DEBUG // 没有值的 macro , 编译的时候做条件编译

int main(int argc, char const *argv[])
{
    // C 中预定义的 macro
    printf("__FILE__ = %s\n", __FILE__);        // 文件名
    printf("__LINE__ = %d\n", __LINE__);        // 这段代码所在的行数
    printf("__DATE__ = %s\n", __DATE__);        // 日期
    printf("__TIME__ = %s\n", __TIME__);        // 时间
    return 0;
}
