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
var addTwoNumbers = function (l1, l2) {
    let arr1 = []
    let arr2 = []
    while (l1) {
        arr1.push(l1.val)
        l1 = l1.next
    }
    while (l2) {
        arr2.push(l2.val)
        l2 = l2.next
    }
    let result = []
    let len = arr1.length >= arr2.length ? arr1.length : arr2.length
    let addon = 0
    for (let i = 0; i < len; i++) {
        let num1 = arr1.length > 0 ? arr1.pop() : 0
        let num2 = arr2.length > 0 ? arr2.pop() : 0
        let sum = num1 + num2 + addon
        addon = sum >= 10 ? 1 : 0
        result.unshift(sum % 10)
    }
    if (addon === 1) result.unshift(addon)
    let head = new ListNode(0)
    let p = head // 记录一下指针
    while (result.length > 0) {
        p.next = new ListNode(result.shift())
        p = p.next
    }
    return head.next
}

// 核心思路就是遍历链表，存为数组，再以数组进行运算，加上进位，最后在转为链表