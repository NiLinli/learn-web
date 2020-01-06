#include "strindex.h" // 自己声明是用于 定义时候查错

// 类似于 indexOf 函数
int strindex(char s[], char t[])
{
    int i, j, k;

    for (i = 0; s[i] != '\0'; i++)
    {

        for (j = i, k = 0; t[k] != '\0' && s[j] == t[k]; j++, k++)
        {
        }
        if (k > 0 && t[k] == '\0')
        {
            return i;
        }
    }

    return -1;
}