#ifndef _ARRAY_QUEUE_
#define _ARRAY_QUEUE_

typedef struct {
  int* array;
  int array_size;
  int front;
  int rear;
  int size;
} ArrayQueue;

ArrayQueue queue_create(int array_size);
void enqueue(ArrayQueue* paq, int value);
int dequeue(ArrayQueue* paq);
// 辅助函数
int is_empty(ArrayQueue* paq);
int is_full(ArrayQueue* paq);
void make_empty(ArrayQueue* paq);

#endif

// 队列的大小一般不会很大, 所以合理的固定大小 + 循环数组的实现即可
// 循环数组实现
// 记录了已经入队的大小, 所以不存在 front 和 rear 存在不合理交替