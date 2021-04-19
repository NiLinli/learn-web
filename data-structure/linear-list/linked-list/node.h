#ifndef _NODE_H_
#define _NODE_H_

typedef struct _node {
  int value;
  struct _node *next;
  // Node *next;      // 编译器 这行 未解析到 Node
} Node;

typedef struct _list {
  Node *head;     // 指向首个 Node 节点
  int size;
} List;

List* create();
void add(List *pList, int value);
void set(List *pList, int index, int value);
int get(List *pList, int index);
int find(List *pList, int value);
void delete(List *pList, int index);
void insert(List *pList, int index, int value);
void free_list(List *pList);
int list_size(List *pList);
void print(List *pList);

#endif

