/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    const dummyNode = new ListNode(0)
    dummyNode.next = head
    let cur = dummyNode //cur是指针，存的内存地址
    // 节点总数为奇数的时候判断cur.next
    // 为偶数的时候判断cur.next.next
    while (cur.next && cur.next.next) {
        // 记得设置临时变量存指针
        let temp = cur.next.next.next
        let temp1 = cur.next
        cur.next = cur.next.next
        cur.next.next = temp1
        cur.next.next.next = temp
        cur = cur.next.next
    }
    return dummyNode.next
};
function ListNode(val, next) {
    this.val = (val === null ? 0 : val)
    this.next = (next === null ? null : next)
}
// 递归法
/* var swapPairs = function(head) {
    if (head === null|| head.next === null) {
        return head;
    }
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};
 */