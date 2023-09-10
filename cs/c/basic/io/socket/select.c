#include <stdio.h>
#include <sys/types.h>
#include <sys/time.h>
#include <sys/select.h>
#include <unistd.h>
#define MAXLINE 8000

// int select(
//   int maxfdp,      // 总 fd 监控数
//   fd_set *readset, // 可读 fds
//   fd_set *writeset,  // 可写 fds
//   fd_set *exceptset, // exception events fds
//   struct timeval *timeout  //
// )

// 返回值 0 timeout -1 失败 >0 表示准备好的 fds
// fd_set 是 fd 集合, 是一个大小为 n 的 bitwise, fd = n, 则 n 位置为 1

int main()
{

  fd_set rd;
  struct timeval tv;
  int rc;
  int buf[MAXLINE];

  FD_ZERO(&rd);
  FD_SET(0, &rd);

  tv.tv_sec = 5;
  tv.tv_usec = 0;

  // block to wait for the file descriptor event’s arrival
  rc = select(1, &rd, NULL, NULL, &tv);

  if (rc == 0)
    printf("select timeout!\n");
  else if (rc == -1)
    printf("fail to select!\n");
  else
  {
    printf("data is available!\n");

    if (FD_ISSET(STDIN_FILENO, &rd))
    {
      // 检查 stdin 是否有输入
      read(STDERR_FILENO, buf, MAXLINE);
      puts(buf);
    }
  }
}