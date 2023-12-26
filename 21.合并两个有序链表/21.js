/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2
    if (!list2) return list1
    if (!list1 && !list2) return null
    let l1 = list1
    let l2 = list2
    let node = new ListNode(0)
    let tag = node
    while (l1 || l2) {
        if (!l1) {
            node.next = l2
            break
        }
        if (!l2) {
            node.next = l1
            break
        }
        if (l1.val > l2.val) {
            node.next = new ListNode(l2.val)
            node = node.next
            l2 = l2.next
        } else if (l1.val < l2.val) {
            node.next = new ListNode(l1.val)
            node = node.next
            l1 = l1.next
        } else {
            node.next = new ListNode(l1.val)
            node.next.next = new ListNode(l2.val)
            node = node.next.next
            l1 = l1.next
            l2 = l2.next
        }
    }
    return tag.next
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}