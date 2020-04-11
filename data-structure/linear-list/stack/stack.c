#include <stdio.h>
#include <stdlib.h>
#include "stack.h"

int main() {
  Stack s = stack_create(2);

  printf("s is empty ? %d\n", stack_is_empty(&s));
  push(&s, 1);
  push(&s, 2);
  printf("s is full ? %d\n", stack_is_full(&s));

  printf("top %d\n", pop(&s));
  printf("top %d\n", pop(&s));
  printf("top %d\n", pop(&s));

  push(&s, 1);
  push(&s, 2);
  push(&s, 3);
  printf("s is full ? %d\n", stack_is_full(&s));
  printf("top %d\n", pop(&s));
  printf("top %d\n", pop(&s));
}

Stack stack_create(int init_size){
  Stack s;
  s.array = (int*)malloc(sizeof(int) * init_size);
  s.top = -1;
  s.size = init_size;
  return s;
}

void push(Stack *s, int item){
  if (stack_is_full(s)) {
    // 空间满了
    int *p = (int*)malloc(sizeof(int) * (s->size + 10));
    for(int i = 0; i < s->size; i++) {
      p[i] = s->array[i];
    }
    free(s->array);
    s->array = p;
    s->size += 10;
  } 
  s->array[++(s->top)] = item;
}

int pop(Stack *s){
  if (stack_is_empty(s)) {
    // 栈空
    return 1000000;
  } else {
    // s->top--;
    // return s->array[s->top];
    return s->array[(s->top)--];
  }
}

int stack_is_full(Stack *s){
  return s->top == s->size-1;
}

int stack_is_empty(Stack *s){
  return s->top == -1;
}