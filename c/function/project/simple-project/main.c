#include <stdio.h>
#include "main.h"       // 调用的时候查错 两边声明保证定义与调用一致并且不会出错
#include "getline.h"
#include "max.h"
#include "strindex.h"

char pattern[] = "nixixi";

// 实现效果: 获取一行输入, 如果包含 pattern 中的内容, 就打印这一行
int main()
{
    char line[MAXLINE];
    int found = 0;
    
    // printf("max value is %d\n", max(12, 13)); // 通过编译后 max value is -339542016
    printf("max value is %f\n", max(13.001, 13.01)); 

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
