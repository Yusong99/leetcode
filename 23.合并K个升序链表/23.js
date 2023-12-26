/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    // 直接遍历出所有的节点，在直接生成链表
    let res = []
    for (let i = 0; i < lists.length; i++) {
        let node = lists[i]
        while (node) {
            res.push(node.val)
            node = node.next
        }
    }
    res.sort((a, b) => a - b)
    let root = new ListNode(0)
    let result = root
    for (let j = 0; j < res.length; j++) {
        root.next = new ListNode(res[j])
        root = root.next
    }
    return result.next
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}