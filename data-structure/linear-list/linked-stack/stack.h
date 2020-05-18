#ifndef _STACK_H
#define _STACK_H

typedef struct _node {
  int value;
  struct _node *next;
} Node; 

// 一个 0 个或者多个元素的有穷线性表
typedef struct{
  Node* head;
} LinkedStack;

LinkedStack* stack_create();                   // 生成 head
void push(LinkedStack *s, int value);           // push
int pop(LinkedStack *s);                       // pop
int stack_is_empty(LinkedStack *s);            // 判断是否为空

#endif




