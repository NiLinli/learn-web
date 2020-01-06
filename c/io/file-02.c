#include <stdio.h>
#include "student.h"

// size_t fread(void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);
// size_t fwrite(const void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);
// size_t 返回读写字节数

void getList(Student aStu[], int number);
int save(Student aStu[], int number);

int main () {
  int number = 0;
  printf("请输入学生数量: ");
  scanf("%d", &number);

  Student aStu[number];

  getList(aStu, number);

  if (save(aStu, number)) {
    printf("保存成功\n");
  } else {
    printf("保存失败\n");
  }

  return 0;
}

void getList(Student aStu[], int number) {
  char format[STR_LEN];
  sprintf(format, "%%%ds", STR_LEN - 1);
  // %19f
  // sprintf 像字符串输出
  // print 像标准输出 (shell)

  for (int i=0; i<number; i++) {
    printf("第 %d 个学生\n", i);
    printf("\t姓名: ");
    scanf(format, &aStu[i].name);
    printf("\t 性别 (0 - 男 1 - 女 2 - 其他) : ");
    scanf("%d", &aStu[i].gender);
    printf("\t 年龄:");
    scanf("%d", &aStu[i].age);
  }

}

int save(Student aStu[], int number) {
  int ret = -1;
  FILE *fp = fopen("student.data", "w");

  if(fp) {
    ret = fwrite(aStu, sizeof(Student), number, fp);
    fclose(fp);
  } 
  return ret == number;
}