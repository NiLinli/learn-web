#include <stdio.h>

const int STR_LEN = 20;

typedef struct _student
{
  char name[STR_LEN];
  int gender;
  int age;
} Student;

void enter_stu_list(Student a_stu[], int number)
{
  char format[STR_LEN];
  sprintf(format, "%%%ds", STR_LEN - 1);
  // %19f
  // sprintf 像字符串输出
  // print 像标准输出 (shell)

  for (int i = 0; i < number; i++)
  {
    printf("第 %d 个学生\n", i + 1);
    printf("\t姓名: ");
    scanf(format, &a_stu[i].name);
    printf("\t 性别 (0 - 男 1 - 女 2 - 其他) : ");
    scanf("%d", &a_stu[i].gender);
    printf("\t 年龄:");
    scanf("%d", &a_stu[i].age);
  }
}

int save_stu(Student a_stu[], int number)
{
  int ret = -1;
  FILE *fp = fopen("data/student.data", "w");

  if (fp)
  {
    ret = fwrite(a_stu, sizeof(Student), number, fp);
    fclose(fp);
  }
  return ret == number;
}

int test_save_stu()
{
  int number = 0;
  printf("请输入学生数量: ");
  scanf("%d", &number);
  Student a_stu[number];
  enter_stu_list(a_stu, number);

  save_stu(a_stu, number) ? printf("保存成功\n") : printf("保存失败\n");

  return 0;
}

void read_stu(FILE *fp, int index)
{

  fseek(fp, index * sizeof(Student), SEEK_SET);
  Student stu;

  if (fread(&stu, sizeof(Student), 1, fp) == 1)
  {
    printf("第 %d 个学生\n", index + 1);
    printf("\t姓名: %s\n", stu.name);

    printf("\t性别: ");
    switch (stu.gender)
    {
    case 0:
      printf("男\n");
      break;
    case 1:
      printf("女\n");
      break;
    case 2:
      printf("其他\n");
      break;
    }

    printf("\t年龄: %d\n", stu.age);
  }
}

int test_read_stu()
{
  FILE *fp = fopen("data/student.data", "r");
  if (fp)
  {
    fseek(fp, 0L, SEEK_END); // 定位当前的位置在最尾部
    long size = ftell(fp);   // 0 到 尾部
    int number = size / sizeof(Student);
    int index = 0;
    printf("有 %d 个学生数据, 你要第几个:", number);
    scanf("%d", &index);
    read_stu(fp, index - 1);
    fclose(fp);
  }
  return 0;
}

int main()
{
  // test_save_stu();
  test_read_stu();
}
