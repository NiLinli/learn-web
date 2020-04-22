#include <stdio.h>
#include <stdlib.h>
#include "stack.h"

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
LinkedStack* stack_create(int init_size){
  LinkedStack *s;
  s = (LinkedStack *)malloc(sizeof(struct Node));
  s->Next = NULL;
  return s;
}

void push(LinkedStack *s, int item){
  LinkedStack *temp_s;
  temp_s = (LinkedStack*)malloc(sizeof(struct Node));
  temp_s->data = item;
  temp_s->Next = s->Next;
  s->Next = temp_s;
}

int pop(LinkedStack *s){
  if (stack_is_empty(s)) {
    return 1000000;
  }

  LinkedStack* top_s = s->Next;
  int top_data = top_s->data;
  s->Next = top_s->Next;
  free(top_s);
  return top_data;
}

int stack_is_empty(LinkedStack *s){
  return s->Next == NULL;
}