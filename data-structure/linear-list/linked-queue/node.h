#ifndef _LINKED_STACK_
#define _LINKED_STACK_

typedef struct node {
  int value;
  struct node* next;
} Node;

typedef struct {
  Node* head;
} LinkedQueue;

LinkedQueue* queue_create();
void enqueue(LinkedQueue* l, int value);
int dequeue(LinkedQueue* l);

#endif
