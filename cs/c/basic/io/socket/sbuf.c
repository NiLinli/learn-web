#include "sbuf.h"

void sbuf_init(sbuf_t *sp, int n)
{
  sp->buf = calloc(n, sizeof(int));
  sp->n = n;
  sp->front = sp->rear = 0;

  sp->mutex_ptr = sem_open("sem0", O_CREAT, 0644, 1);
  sp->slots_ptr = sem_open("sem1", O_CREAT, 0644, n);
  sp->item_ptr = sem_open("sem2", O_CREAT, 0644, 0);
}

void sbuf_deinit(sbuf_t *sp)
{
  free(sp->buf);
}

void sbuf_insert(sbuf_t *sp, int item)
{
  // 增加一个 item
  sem_wait(sp->slots_ptr); //  slot - 1, 如果 = 0 其他线程等待
  sem_wait(sp->mutex_ptr);
  sp->buf[(++sp->rear) % (sp->n)] = item;
  sem_post(sp->mutex_ptr);
  sem_post(sp->item_ptr); // item + 1
}

int sbuf_remove(sbuf_t *sp)
{
  int item;

  sem_wait(sp->item_ptr);
  sem_wait(sp->mutex_ptr);
  item = sp->buf[(++sp->front) % (sp->n)];
  sem_post(sp->mutex_ptr);
  sem_post(sp->slots_ptr);

  return item;
}