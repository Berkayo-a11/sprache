#include <stdio.h>
#include "node.h"

void delete_node(Node* node) {
    if (node->next==NULL&&node->prev==NULL) {
        begin=NULL;
    }else{
        if(node->next!=NULL&&node->prev!=NULL){
            node->prev->next=node->next;
            node->next->prev=node->prev;
        }else{
            if(node->prev!=NULL&&node->next==NULL){
                node->prev->next=node->next;
                    }else{
                        if(node->prev==NULL&&node->next!=NULL){
                            node->next->prev=node->prev;
                            }else{
                                node->prev->next=node->next;
                                node->next->prev=node->prev;
            }
        }
    }
}
    free(node);
}