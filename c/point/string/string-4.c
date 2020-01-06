#include <stdio.h>

int main(int argc, char const *argv[])
{
  // 局部变量没有初始化为 0 
  // string 指向的本来存在与那块内存空间的值
  // 不一定是字符串
  // 所以不一定会报错
  char *string;
  scanf("%s", string);

  return 0;
}
