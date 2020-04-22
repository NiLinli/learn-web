#ifndef _STACK_H
#define _STACK_H

typedef struct Node {
  int data;
  struct Node *Next;
} LinkedStack;                                 // 一个 0 个或者多个元素的有穷线性表

LinkedStack* stack_create();                          // 生成空的堆栈
void push(LinkedStack *s, int item);           // push
int pop(LinkedStack *s);                       // pop
int stack_is_empty(LinkedStack *s);                          // 判断是否为空

#endif




