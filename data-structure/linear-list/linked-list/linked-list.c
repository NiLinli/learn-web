#include <stdio.h>
#include <stdlib.h>

#include "node.h"

// List* create();
// void add(List *pList, int value);
// void set(List *pList, int index, int value);
// void get(List *pList, int index);
// int find(List *pList, int value);
// void delete(List *pList, int index);
// void insert(List *pList, int index, int value);
// void free_list(List *pList);
// int list_size(List *pList);
// void print(List *pList);

int main(void) { 
  List* pList = create();
  add(pList, 1);
  add(pList, 2);
  add(pList, 4);
  add(pList, 7);
  add(pList, 8);
  add(pList, 2);
  add(pList, 100);
  add(pList, 88);
  print(pList);
  printf("%d\n", list_size(pList));
  printf("%d\n", get(pList, 5));
  printf("%d\n", get(pList, 6));
  printf("%d\n", get(pList, 7));
  printf("%d\n", get(pList, 8));
  set(pList, 5, 5);
  print(pList);
  printf("%d\n", find(pList, 88));
  printf("%d\n", find(pList, 99));
  printf("%d\n", find(pList, 7));
  printf("%d\n", find(pList, 2));
  print(pList);
  insert(pList, 2, 3);
  print(pList);
  insert(pList, 9, 99);
  print(pList);
  delete(pList, 8);
  print(pList);
  delete(pList, 0);
  print(pList);
  
  return 0;
}


List *create() {
  List* pList = (List*)malloc(sizeof(List));
  pList->head = NULL;
  return pList;
}

// 遍历 O(n)
void add(List *pList, int value) {
  // 新建一个 Node
  Node *pNode = (Node*)malloc(sizeof(Node));
  pNode->value = value;
  pNode->next = NULL;

  Node* head = pList->head;
  
  if(head) {
    while (head->next) {
      head = head->next;
    }
    head->next = pNode;
  } else {
    pList->head = pNode;    // head 初始地址
  }
}

// 遍历 O(n)
void set(List *pList, int index, int value) { 
  int i = 0;

  Node* head = pList->head;

  while (head && i < index) {
    head = head->next;
    i++;
  }

  // 目标节点需要校验存在与否
  if (i == index && head) {
    head->value = value;
  } else {
    printf("set 的 index 不存在");
  }
  
}

// 遍历 O(n)
int get(List *pList, int index) {
  int i = 0;

  Node* head = pList->head;
  while (head && i < index) {
    head = head->next;
    i++;
  }

  // 能够走完循环
  if (i == index) {
    return head ? head->value: NULL;
  } else {
    return NULL;
  }
}

// 遍历 O(n)
int find(List *pList, int value) {

  Node* head = pList->head;

  int i = 0;
  int index = -1;

  while (head) {
    if (head->value == value) {
      index = i;
      break;
    }
    head = head->next;
    i++;
  }

  return index;
}

// 遍历 O(n)
void delete(List *pList, int index) {
  int i = 0;
  Node* head = pList->head;

  while (head && i < index - 1) {
    head = head->next;
    i++;
  }

  if (head && i== index - 1) {
    // 找到要删除的节点
    Node* pTarget = head->next;
    head->next = pTarget->next;
    free(pTarget);
  }
  
}

// 遍历 O(n)
void insert(List *pList, int index, int value) {
  Node* pNode = (Node*)malloc(sizeof(Node));
  pNode->value = value;
  pNode->next = NULL;

  int i = 0;
  Node* head = pList->head;

  while (head && i < index - 1) {
    head = head->next;
    i++;
  }

  if (i == index - 1 && head) {
    pNode->next = head->next;
    head->next = pNode;
  } 
}

// 释放空间 O(n)
void free_list(List *pList) {
  Node* pHeader = pList->head;
  while (pHeader) {
    pHeader = pHeader->next;
  }


}

// 遍历 O(n)
int list_size(List *pList) {
  Node* head = pList->head;
  if (pList->head) {
    int size = 0;
    do {
      size++;
      head = head->next;
    } while (head);
    return size;
  } else {
    return 0;
  }
}

void print(List *pList) {
  Node* head = pList->head;
  
  if (head) {
    do {
      printf("%d, ", head->value);
      head = head->next;
    } while (head);
  }
  
  printf("\n");
}

// 边界条件 0
