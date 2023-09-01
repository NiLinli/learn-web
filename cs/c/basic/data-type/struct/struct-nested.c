#include <stdio.h>

struct Time
{
  int hour;
  int minutes;
  int seconds;
};

struct Point
{
  int x;
  int y;
};

struct Rectangle
{
  struct Point p1;
  struct Point p2;
};

struct Time time_update(struct Time *pNow);

int main()
{
  // 结构数组
  struct Time test_time[3] = {
      {11, 59, 59},
      {12, 0, 0},
      {1, 29, 59}};

  for (int i = 0; i < 3; i++)
  {
    printf("time is %.2i:%.2i:%.2i\n", test_time[i].hour, test_time[i].minutes,
           test_time[i].seconds);

    timeUpdate(&test_time[i]);
    printf("... one second later time is %.2i:%.2i:%.2i\n", test_time[i].hour,
           test_time[i].minutes, test_time[i].seconds);
  }

  // 结构中的结构
  struct Rectangle r = {
      (struct Point){1, 2},
      {3, 4}};

  struct Rectangle *pr = &r;

  printf("r.p2.y = %d \n", r.p2.y);
  printf("pr->p2.y = %d \n", pr->p2.y);
}

struct Time time_update(struct Time *pNow)
{
  (pNow->seconds)++;
  if (pNow->seconds == 60)
  {
    pNow->seconds = 0;
    (pNow->minutes)++;
    if (pNow->minutes == 60)
    {
      pNow->minutes = 0;
      (pNow->hour)++;
      if (pNow->hour == 24)
      {
        pNow->hour = 0;
      }
    }
  }
}