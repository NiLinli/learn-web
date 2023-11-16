#include <stdio.h>
#include <stdlib.h>
#include "node.h"

// 单向链表, 链表的头和尾部
// 头部作为 top 
// 尾部作为 top, push 方便, pop 删除后, 找不到前面一个节点(单向链表弊端)

int main() {
  LinkedStack* s = stack_create();

  printf("s is empty ? %d\n", stack_is_empty(s));
  push(s, 1);
  push(s, 2);

  printf("top %d\n", pop(s));
  printf("top %d\n", pop(s));
  printf("top %d\n", pop(s));

  push(s, 1);
  push(s, 2);
  push(s, 3);
  
  printf("top %d\n", pop(s));
  printf("top %d\n", pop(s));
}

// 生成一个 head Node, 但是不代表任何元素
LinkedStack* stack_create() {
  LinkedStack *s = (LinkedStack *)malloc(sizeof(LinkedStack));
  s->head = NULL;
  return s;
}

void push(LinkedStack *s, int value){
  Node *pNode = (Node*)malloc(sizeof(Node));
  pNode->value = value;
  pNode->next = NULL;
  if (s->head) {
    pNode->next = s->head;
    s->head = pNode;
  } else {
    s->head = pNode;
  }
}

int pop(LinkedStack *s){
  if (stack_is_empty(s)) {
    return 1000000;
  }
  Node* top = s->head;
  int top_value = top->value;

  if (top->next) { 
    s->head = top->next;
  } else {
    s->head = NULL;
  }
  free(top);
  return top_value;
}

int stack_is_empty(LinkedStack *s){
  return s->head == NULL;
}