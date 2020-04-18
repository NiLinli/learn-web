#include <stdio.h>
#include <stdlib.h>
#include "node.h"

int main(void) {

  List list;
  list.head = NULL;

  int number;
  do {
    scanf("%d", &number);
    if(number != -1) {
      // add to linked list
      add(&list, number);
    } 
  } while (number != -1);
  print(&list);

  scanf("%d", &number);
  if(find(&list, number)) {
    printf("找到了\n");
  } else {
    printf("没有找到\n");
  }
  print(&list);

  scanf("%d", &number);
  delete(&list, number);
  print(&list);

  free_list(&list);

  return 0;
}


List create() {
  
}

void list_size(List *pList) {

}

void add(List *pList, int number) {
  Node *p = (Node *) malloc(sizeof(Node));
  p->value = number;
  p->next = NULL;

  Node *last = pList->head;

  if(last) {
    // 存在 head
    while(last->next) {
      last = last->next;
    }
    last->next = p;
  } else {
    // 不存在 head
    pList->head = p;
  }
}

int find(List *pList, int number) {
  Node *p;
  int isFound = 0;
  for(p =pList->head; p; p = p->next ) {
    if(p->value == number) {
      isFound = 1;
      break;
    }
  }
  return isFound;
}

void delete(List *pList, int number) {
  Node *p;
  Node *q;
  
  for(q = NULL,p =pList->head; p; q=p, p = p->next) {
    if(p->value == number) {
      // -> 左边必须要检查 是否为 NULL  error boundary
      if(q) {
        q->next = p->next;
      } else {
        pList->head = p->next;
      }
      free(p);
      break;
    }
  }
}


void free_list(List *pList) {
  Node *p, *q;
  for(p = pList->head; p; p = q) {
    q = p->next;
    free(p);
  }
}

void print(List *pList) {
  printf("[");

  for(int i = 0; i<= a->size - 1; i++) {

    if (i == a->size -1) {
      printf("%d", a->array[i]);
    } else {
      printf("%d, ", a->array[i]);
    }
  }

  printf("]\n");
}
