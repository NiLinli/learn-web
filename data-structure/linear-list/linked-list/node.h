#ifndef _NODE_H_
#define _NODE_H_

typedef struct _node {
  int value;
  struct _node *next;
  // Node *next;      // 编译器 这行 未解析到 Node
} Node;

typedef struct _list {
  Node *head;
} List;

void add(List *pList, int number);
int find(List *pList, int number);
void delete(List *pList, int number);
void print(List *pList);
void free_list(List *pList);

#endif

