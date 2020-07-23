#include <stdio.h>
#include <stdlib.h>
#include "node.h"

LinkedQueue* queue_create() {
  LinkedQueue* l = (LinkedQueue*)malloc(sizeof(LinkedQueue));
  l->head = NULL;
  return l;
}

void enqueue(LinkedQueue* l, int value) {
  // 生成一个新的节点
  Node* node = (Node *)malloc(sizeof(Node));
  node->next = NULL;
  node->value = value;
  Node* head = l->head;

  if (head) {
    while (head->next) {
      head = head->next;
    }
    head->next = node;  
  } else {
    l->head = node;
  }
}

int dequeue(LinkedQueue* l) {
  Node* head = l->head;

  if (!head) {
    return 0;
  } else {
    int value = head->value;
    l->head = head->next;
    return value;
  }
}

int main() {
  LinkedQueue* l = queue_create();

  enqueue(l, 1);
  enqueue(l, 2);
  enqueue(l, 3);
  enqueue(l, 4);

  printf("%d \n", dequeue(l));
  printf("%d \n", dequeue(l));
  printf("%d \n", dequeue(l));
  printf("%d \n", dequeue(l));
  printf("%d \n", dequeue(l));

  return 0;
}