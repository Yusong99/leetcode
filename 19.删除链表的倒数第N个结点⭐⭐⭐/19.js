/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let length = 0
    let dummyNode = new ListNode(0)
    dummyNode.next = head
    function getNode(node) {
        // 在递归千万不能使用while，因为while(node)里的node一直是true，不断循环
        // while (node) getNode(node.next)
        if (node) getNode(node.next)
        if (length === n + 1) {
            if (n < 2) {
                node.next = null
            } else {
                node.next = node.next.next
            }
        }
        length++
    }
    getNode(dummyNode)
    return dummyNode.next
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
node1.next = node2
removeNthFromEnd(node1, 1)