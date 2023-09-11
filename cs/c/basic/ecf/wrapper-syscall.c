#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <sys/types.h>

void unix_error(char *msg)
{
  fprintf(stderr, "%s: %s\n", msg, strerror(errno));
  exit(0);
}

pid_t Fork()
{
  pid_t pid;

  // 系统调用错误一般返回值都是 -1
  if ((pid = fork()) < 0)
  {
    unix_error("Fork error");
  }

  return pid;
}