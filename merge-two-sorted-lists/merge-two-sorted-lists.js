/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    if (!l1) {
        return l2
    }
    
    if (!l2) {
        return l1
    }
    
    const head = l1.val >= l2.val? l2 : l1
    
    let cur = head
    
    if (l1.val >= l2.val) {
        l2 = l2.next
    } else {
        l1 = l1.next
    }

    while (l1 || l2) {
        if (!l1 || (l2 && l1.val > l2.val)){
            cur.next = l2
            cur = cur.next
            l2 = l2.next
        } else {
            cur.next = l1
            cur = cur.next
            l1 = l1.next
        }
    }
    return head
}