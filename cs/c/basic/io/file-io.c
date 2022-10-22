#include <stdio.h>

const int STR_LEN = 20;

typedef struct _student
{
  char name[STR_LEN];
  int gender;
  int age;
} Student;

void testFileMode() {
  // r read 文件不存在报错

  // truncate 截断为 0 长度, 即清空
  // 不存在文件创建新的文件 w a w+
  // wx ax wx+ 只能新建, 存在不能打开, 防止 truncate

  // w write: truncate
  // a append
  // r+: 文件不存在报错, 并且从 0 开始写不会 truncate
  // w+: truncate

  // fopen 正确返回即返回 fd
  // 异常返回 0x0, 所以通过 if else 判断
  FILE *fp = fopen("data/123.in", "r");

  if (fp)
  {
    int num;
    fscanf(fp, "%d", &num);
    printf("%d\n", num);
    fclose(fp);
  }
  else
  {
    printf("无法打开文件\n");
  }

  FILE *fp_x = fopen("data/123.in", "wx");

  if (fp_x)
  {
    printf("不存在 已经新建\n");
  }
  else
  {
    printf("已经存在, 不能 w 或者 w+\n");
  }
}

void testStringEncoding() {
  FILE *fp = fopen("data/origin.txt", "r");

  int a;
  char str[20];
  char str2[20];
  
  // byte stream 读取一个字节
  // a = fgetc(fp);

  // char stream
  // fgets(str, 20, fp);

  // 扫描到空格就停止了 char stream
  fscanf(fp, "%s", str2);
  
}

void getStuList(Student aStu[], int number)
{
  char format[STR_LEN];
  sprintf(format, "%%%ds", STR_LEN - 1);
  // %19f
  // sprintf 像字符串输出
  // print 像标准输出 (shell)

  for (int i = 0; i < number; i++)
  {
    printf("第 %d 个学生\n", i);
    printf("\t姓名: ");
    scanf(format, &aStu[i].name);
    printf("\t 性别 (0 - 男 1 - 女 2 - 其他) : ");
    scanf("%d", &aStu[i].gender);
    printf("\t 年龄:");
    scanf("%d", &aStu[i].age);
  }
}

int saveStu(Student aStu[], int number)
{
  int ret = -1;
  FILE *fp = fopen("data/student.data", "w");

  if (fp)
  {
    ret = fwrite(aStu, sizeof(Student), number, fp);
    fclose(fp);
  }
  return ret == number;
}

void readStu(FILE *fp, int index) {

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

int testSaveStu() {
  int number = 0;
  printf("请输入学生数量: ");
  scanf("%d", &number);
  Student aStu[number];
  getStuList(aStu, number);

  if (saveStu(aStu, number))
  {
    printf("保存成功\n");
  }
  else
  {
    printf("保存失败\n");
  }

  return 0;
}

int testReadStu()
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
    readStu(fp, index - 1);
    fclose(fp);
  }
  return 0;
}

int main()
{
  // testFileMode();
  // testStringEncoding();
  // testSaveStu();
  testReadStu();
}



