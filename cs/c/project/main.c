#include <stdio.h>
#include "main.h" // 调用的时候查错 两边声明保证定义与调用一致并且不会出错
#include "getline.h"
#include "max.h"
#include "strindex.h"

char pattern[] = "nixixi";

int main()
{

    // static 限制
    printf("max_global value is %d\n\n", max_global);
    // use of undeclared identifier 'max_global_limit'
    // printf("max_global_limit value is %d\n", max_global_limit);

    // static 提升 local variable
    f();
    f();

    // extern 提升作用域
    printf("extern_a value is %d\n\n", extern_a);
    // use of undeclared identifier 'a'
    // printf("a value is %d\n", a);

    char line[MAXLINE];
    int found = 0;

    // printf("max value is %d\n", max(12, 13)); // 通过编译后 max value is -339542016
    printf("max value is %f\n", max(13.001, 13.01));

    // 实现效果: 获取一行输入, 如果包含 pattern 中的内容, 就打印这一行
    while (getline1(line, MAXLINE) > 0)
    {
        if (strindex(line, pattern) >= 0)
        {
            printf("%s", line);
            found++;
        }
    }

    return found;
}

int extern_a = 2;
int a = 3;

int f()
{
    
    // 静态变量内存区, 多次调用只声明一次
    // 本地的作用域
    static int b = 1;
    int c = 1;
    int d = 2;

    // 变量所存的位置对比
    printf("&a = %p\n", &a);
    printf("&b = %p\n", &b);
    printf("&c = %p, &d = %p\n", &c, &d);

    // 变量生命周期
    b++;
    c++;
    printf("static b = %d,  c = %d\n\n", b, c);
    return a++;
}
