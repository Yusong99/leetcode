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
var reverseList = function(head) {
    let head1 = new ListNode(0)
    let sum = head1
    function getNewList(list = {}){
        if(list){
            getNewList(list.next)
            sum.next = new ListNode(list.val)
            sum = sum.next
        }
    }
    getNewList(head)
    return head1.next
};

// 递归解法，栈解法都可以