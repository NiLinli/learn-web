#include "array-queue.h"

#include <stdio.h>
#include <stdlib.h>

// typedef struct {
//   int* array;
//   int array_size;
//   int front;
//   int rear;
//   int size;
// } ArrayQueue;

int main() {
  ArrayQueue aq = queue_create(5);
  ArrayQueue* paq = &aq;

  printf("aq queen is empty? %d\n", is_empty(paq));

  enqueue(paq, 1);
  printf("%d, %d\n", paq->front, paq->rear);
  enqueue(paq, 2);
  printf("%d, %d\n", paq->front, paq->rear);
  enqueue(paq, 3);
  printf("%d, %d\n", paq->front, paq->rear);
  enqueue(paq, 4);
  printf("%d, %d\n", paq->front, paq->rear);
  enqueue(paq, 5);
  printf("%d, %d\n", paq->front, paq->rear);
  enqueue(paq, 6);
  printf("%d, %d\n", paq->front, paq->rear);

  printf("%d\n", dequeue(paq));
  printf("%d, %d\n", paq->front, paq->rear);
  printf("%d\n", dequeue(paq));
  printf("%d, %d\n", paq->front, paq->rear);
  printf("%d\n", dequeue(paq));
  printf("%d, %d\n", paq->front, paq->rear);

  enqueue(paq, 6);
  printf("%d, %d\n", paq->front, paq->rear);

  enqueue(paq, 7);
  printf("%d, %d\n", paq->front, paq->rear);

  enqueue(paq, 8);
  printf("%d, %d\n", paq->front, paq->rear);
  enqueue(paq, 9);
  printf("%d, %d\n", paq->front, paq->rear);

  printf("%d\n", dequeue(paq));
  printf("%d, %d\n", paq->front, paq->rear);
  printf("%d\n", dequeue(paq));
  printf("%d, %d\n", paq->front, paq->rear);
  printf("%d\n", dequeue(paq));
  printf("%d, %d\n", paq->front, paq->rear);
  printf("%d\n", dequeue(paq));
  printf("%d, %d\n", paq->front, paq->rear);
  printf("%d\n", dequeue(paq));
  printf("%d, %d\n", paq->front, paq->rear);
}

ArrayQueue queue_create(int array_size) {
  ArrayQueue aq;
  aq.array = (int*)malloc(sizeof(int) * array_size);
  aq.array_size = array_size;
  aq.front = 1;
  aq.rear = 0;
  aq.size = 0;
  return aq;
}

void enqueue(ArrayQueue* paq, int value) {
  if (is_full(paq)) {
    printf("enqueue is full, cannot enqueue value\n");
  } else {
    if (paq->rear == paq->array_size - 1) {
      paq->rear = 0;
    } else {
      paq->rear = paq->rear + 1;
    }

    paq->array[paq->rear] = value;
    paq->size++;
  }
}

int dequeue(ArrayQueue* paq) {
  if (is_empty(paq)) {
    printf("dequeue is empty, cannot dequeue value\n");
    return -1000000;
  } else {
    int curent_front = paq->front;

    if (curent_front == paq->array_size - 1) {
      paq->front = 0;
    } else {
      paq->front++;
    }

    paq->size--;

    return paq->array[curent_front];
  }
}

// 辅助函数
int is_empty(ArrayQueue* paq) { return paq->size == 0; }

int is_full(ArrayQueue* paq) { return paq->array_size == paq->size; }

void make_empty(ArrayQueue* paq) {
  paq->front = 1;
  paq->rear = 0;
  paq->size = 0;
}
