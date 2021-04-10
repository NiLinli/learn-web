#include "linked-list.h"

#ifndef _HASHSEP_H_
#define _HASHSEP_H_

typedef struct {
  int table_size;
  LinkedList** table;
} HashTable;

HashTable* create_hash_table(int table_size);
int get(HashTable* ht, char* key);
void set(HashTable* ht, char* key, int value);

#endif