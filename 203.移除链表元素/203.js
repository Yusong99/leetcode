/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const dummyHead = new ListNode(0, head)
    let node = dummyHead
    while(node.next){
        if(node.next.val === val){
            node.next = node.next.next
             continue //⭐⭐⭐很重要，不然会报typeerror null 为了防止node.next.next.val也等于val
        }
        node = node.next
    }
    return dummyHead.next
};

 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }