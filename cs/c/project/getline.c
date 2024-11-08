#include <stdio.h>
#include "getline.h"

// 获取一行输入的内容
int getline1(char s[], int lim)
{
    int c, i;

    i = 0;

    while (--lim > 0 && (c = getchar()) != EOF && c != '\n')
    {
        s[i++] = c;
    }

    if (c == '\n')
    {
        s[i++] = c;
    }

    s[i] = '\0';

    return i;
}