#include <stdio.h>

int main(int argc, char const *argv[])
{
  char *str = "hello world";
  char str_arr[] = "hello world";

  char *str1; // 注意初始化
  char *str2 = "";  // 空字符串是允许的
 



  printf("hello " "world\n");   // 链接字符串常量

  // 字符串的输入
  char word[8];
  char word2[8];
  scanf("%7s", word);    // 读入一个单词(不一定是英文单词) tab space enter 结束
  scanf("%7s", word2);    // 超过 7 个的输入, 交给下一个 scanf
  printf("%s##%s##\n", word,word2);


  return 0;
}
