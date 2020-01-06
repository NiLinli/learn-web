#include <stdio.h>
#include "student.h"

// int fseek(FILE *stream, long offset, int whence);
// offset
// whence
// SEEK_SET 从头开始 
// SEEK_CUR 从当前位置开始
// SEEK_END 从尾开始

// size_t fread(void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);


void read(FILE *fp, int index);

int main () {
  FILE *fp = fopen("student.data", "r");
  if (fp) {
    fseek(fp, 0L, SEEK_END);      // 定位当前的位置在最尾部
    long size = ftell(fp);        // 0 到 尾部
    int number = size / sizeof(Student);
    int index = 0;
    printf("有 %d 个学生数据, 你要第几个:", number);
    scanf("%d", &index);
    read(fp, index - 1);
    fclose(fp);
  }
  return 0;
}

void read(FILE *fp, int index) {

  fseek(fp, index * sizeof(Student), SEEK_SET);
  Student stu;

  if(fread(&stu, sizeof(Student), 1, fp) == 1) {
    printf("第 %d 个学生\n", index + 1);
    printf("\t姓名: %s\n", stu.name);

    printf("\t性别: ");
    switch(stu.gender) {
      case 0: printf("男\n"); break;
      case 1: printf("女\n"); break;
      case 2: printf("其他\n"); break;
    }

    printf("\t年龄: %d\n", stu.age);
  }

}