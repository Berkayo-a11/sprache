#include <stdio.h>
#include <stdlib.h>
#include "node.h"

int count_nodes(Node* head) {
    int count = 0;
    Node* current = head;
    while (current != NULL) {
        count++;
        current = current->next;
    }
    return count;
}