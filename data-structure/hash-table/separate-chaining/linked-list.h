#ifndef _LINKED_LIST
#define _LINKED_LIST

typedef struct _node {
  char* key;
  int value;
  struct _node* next;
} Node;

typedef struct {
  Node* head;
} LinkedList;


LinkedList* create_empty_linked_list();


#endif
