#include <stdio.h>

int main(int argc, char const *argv[])
{
    printf("argc is %d\n",argc);
    printf("argv is %s\n",argv);
    
    return 100; // 向程序运行环境(调用者)返回执行状态
}
