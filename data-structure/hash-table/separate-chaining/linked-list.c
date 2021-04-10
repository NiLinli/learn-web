#include <stdio.h>
#include <stdlib.h>
#include "linked-list.h"

LinkedList* create_empty_linked_list() {
  LinkedList* p = (LinkedList*)malloc(sizeof(LinkedList));
  p->head = NULL;
  return p;
}