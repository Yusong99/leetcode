/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let slow = head
    let fast = head
    while (fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
        while (fast === slow) {
            let index1 = head
            let index2 = fast
            while (true) {
                if (index1 === index2) {
                    return index1
                }
                index1 = index1.next
                index2 = index2.next
            }
        }
    }
    return null
};