#include <stdio.h>

// int getchar(void)

// 标准输入读入一个字符
// EOF(-1) 输入结束

// windows ctrl-z
// unix    ctrl-d

int main() {

  int ch;

  while( (ch = getchar())!= EOF ) {
    putchar(ch);
  }

  printf("EOF\n");

  return 0;
}


// 键盘输入 --> shell --> 程序
// shell 有一个行编辑功能 按下回车之前的数据都没有被 shell 送到 程序中去
// getchar 一次性读 shell 缓冲区中的数据
// shell 收到 ctrl-d , 像程序输入 -1
// ctrl-c shell 直接关闭程序