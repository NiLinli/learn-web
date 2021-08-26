#include <stdio.h>

// r 只读
// w 只写 覆盖式 write 不存在就创建 , 存在就清空再写
// r+ 读写 w(文件头开始写) + r
// w+ 读写 w(覆盖) + r
// a  只读 w(追加)

// ..x 禁止 w w+ 覆盖操作
// wx/wx+ 新建(存在不能打开)

int main() {
  FILE *fp = fopen("123.in", "r");

  if (fp) {
    int num;
    fscanf(fp, "%d", &num);
    printf("%d\n", num);
    fclose(fp);
  } else {
    printf("无法打开文件\n");
  }


  FILE *fp_x = fopen("123.in", "wx");

  if (fp_x) {
    printf("不存在 已经新建\n");
  } else {
    printf("已经存在, 不能 w 或者 w+\n");
  }

  // FILE *fp_r_plus = fopen("123.in", "r+");
  // if (fp_r_plus) {
  //   int num;
  //   fsw
  //   fscanf(fp, "%d", &num);
  //   printf("%d\n", num);
  //   fclose(fp);
  // } else {
  //   printf("不存在文件\n");
  // }


}