#ifndef _ARRAY_QUEUE_
#define _ARRAY_QUEUE_

typedef struct {
  int* array;

} ArrayQueue;

ArrayQueue* queue_create(int size);
int enqueue(ArrayQueue* a, int value);
int dequeue(ArrayQueue* a);

#endif