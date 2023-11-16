#ifndef _STACK_H
#define _STACK_H

typedef struct {
  int *array;       // 数组
  int top;          // 记录栈顶位置
  int size;         // 记录栈的大小
} Stack;            // 一个 0 个或者多个元素的有穷线性表

Stack stack_create(int init_size);      // 生成空的堆栈
void push(Stack *s, int item);           // push
int pop(Stack *s);                       // pop
int stack_is_full(Stack *s);             // 判断堆栈是否已满
int stack_is_empty(Stack *s);            // 判断堆栈是否为空

#endif




