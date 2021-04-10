#include "hash-sep.h"

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "linked-list.h"

int hash_func(const char* key, int table_size) {
  unsigned int HashVal = 0;

  while (*key != '\0') {
    HashVal += *key;
    key = key + 1;
  }

  // hash 函数会与 table_size 相关
  // 确保返回索引在 table 的范围内
  return HashVal % table_size;
}

HashTable* create_hash_table(int table_size) {
  HashTable* pTable = (HashTable*)malloc(sizeof(HashTable));

  pTable->table_size = table_size;
  pTable->table = (LinkedList**)malloc(sizeof(LinkedList) * table_size);

  for (int i = 0; i < table_size; i++) {
    pTable->table[i] = create_empty_linked_list();
  }

  return pTable;
}

int get(HashTable* ht, char* key) {
  int index = hash_func(key, ht->table_size);

  LinkedList* pList = (ht->table)[index];

  Node* head = pList->head;

  int value = 0;
  while (head != NULL) {
    if (strcmp(head->key, key) == 0) {
      value = head->value;
      break;
    } else {
      head = head->next;
    }
  }

  return value;
}

void set(HashTable* ht, char* key, int value) {
  int index = hash_func(key, ht->table_size);

  LinkedList* pList = (ht->table)[index];

  // 新建一个 Node 节点
  Node* node = (Node*)malloc(sizeof(Node));
  node->value = value;
  node->key = key;
  node->next = NULL;

  Node* head = pList->head;

  if (head == NULL) {
    // 空链表
    pList->head = node;
  } else {
    int find = 0;

    while (head == NULL) {
      if (strcmp(key, head->key) == 0) {
        // 已经存了就更新
        find = 1;
        head->value = value;
        break;
      }
      head = head->next;
    }
    
    if (find == 0) {
      node->next = pList->head;
      pList->head = node;
    }
  }
}

int main() {
  HashTable* ht = create_hash_table(10);
  set(ht, "nilinli", 1);
  set(ht, "nilinli222", 2221);
  set(ht, "nilinli22", 221);
  set(ht, "nilinli", 2);
  set(ht, "nilinli2", 21);
  set(ht, "nilinli3", 31);

  printf("get(ht, \"nilinli\") = %d\n", get(ht, "nilinli"));
  printf("get(ht, \"nilinli222\") = %d\n", get(ht, "nilinli222"));
  printf("get(ht, \"nilinli22\") = %d\n", get(ht, "nilinli22"));
  printf("get(ht, \"nilinli2\") = %d\n", get(ht, "nilinli2"));
  printf("get(ht, \"nilinli3\") = %d\n", get(ht, "nilinli3"));
}