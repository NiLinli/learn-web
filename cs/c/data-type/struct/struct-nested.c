#include <stdio.h>

struct time {
  int hour;
  int minutes;
  int seconds;
};

struct point {
  int x;
  int y;
};

struct rectangle {
  struct point p1;
  struct point p2;
};

struct time timeUpdate(struct time *pNow);

int main() {
  // 结构数组
  struct time testTime[3] = {
    {11, 59, 59},
    {12, 0, 0},
    {1, 29, 59}
  };

  for (int i = 0; i < 3; i++) {
    printf("time is %.2i:%.2i:%.2i\n", testTime[i].hour, testTime[i].minutes,
           testTime[i].seconds);

    timeUpdate(&testTime[i]);
    printf("... one second later time is %.2i:%.2i:%.2i\n", testTime[i].hour,
           testTime[i].minutes, testTime[i].seconds);
  }

  // 结构中的结构
  struct rectangle r = {
    (struct point){1, 2},
    {3, 4}
  };

  struct rectangle *pr = &r;

  printf("r.p2.y = %d \n", r.p2.y);
  printf("pr->p2.y = %d \n", pr->p2.y);
}

struct time timeUpdate(struct time *pNow) {
  (pNow->seconds)++;
  if (pNow->seconds == 60) {
    pNow->seconds = 0;
    (pNow->minutes)++;
    if (pNow->minutes == 60) {
      pNow->minutes = 0;
      (pNow->hour)++;
      if (pNow->hour == 24) {
        pNow->hour = 0;
      }
    }
  }
}