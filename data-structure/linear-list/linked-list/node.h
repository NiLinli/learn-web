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

List create();
void add(List *pList, int value);
int find(List *pList, int value);
void insert(List *pList, int index, int value);
void delete(List *pList, int index);
void list_size(List *pList);
void print(List *pList);
void free_list(List *pList);

#endif

