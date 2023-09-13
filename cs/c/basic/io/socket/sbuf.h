#ifndef __SBUF_H__
#define __SBUF_H__

#include <semaphore.h>
#include <stdlib.h>

// front ----- rear
// insert rear
// remove front

typedef struct
{
  int *buf;
  int n;
  int front;
  int rear;
  sem_t *mutex_ptr; // protect accesses to buf
  sem_t *slots_ptr; // counts available slots
  sem_t *item_ptr;  // counts available items
} sbuf_t;

void sbuf_init(sbuf_t *sp, int n);
void sbuf_deinit(sbuf_t *sp);
void sbuf_insert(sbuf_t *sp, int item);
int sbuf_remove(sbuf_t *sp);

#endif