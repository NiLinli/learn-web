#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main()
{
  // calloc 分配的空间默认为 0
  char *c = (char *)calloc(100, sizeof(char));

  int fd;

  if ((fd = open("foo.txt", O_RDONLY, 0)) < 0)
  {
    perror("Open Error");
    exit(0);
  }

  int nbytes;

  // > 0 no or short count
  // = 0 EOF
  // < 0 没有可读的
  char *c_temp = c;
  while ((nbytes = read(fd, c_temp, 2)) >= 0)
    if (nbytes > 0)
    {
      printf("nbytes = %d\n", nbytes);
      // 未填充的空间都为 0, 所以可以打印为 %s
      printf("c_temp = %s\n", c_temp);
      c_temp += nbytes;
    }
    else
    {
      printf("nbytes = %d\n", nbytes);
      printf("EOF\n");
      printf("c = %s\n", c);
      break;
    }
}