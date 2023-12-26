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
var addTwoNumbers1 = function(l1, l2) {
    let arr1 = []
    let arr2 = []
    let arr = []
    function getNum(listNode){
        if(listNode){
            getNum(listNode.next)
            arr.push(listNode.val)
        }
    }
    getNum(l1)
    arr1 = [...arr]
    arr = []
    getNum(l2)
    arr2 = [...arr]
    let reslut = ( Number(arr1.join('')) + Number(arr2.join(''))).toString().split('')
    let head = {val:+reslut.pop(),next:null}
    let current = head
    while(reslut.length > 0) {
        current.next = {val:+reslut.pop(), next:null}
        current = current.next
    }
    return head
};
// 注意无法通过最后几个测试用例，因为通过遍历链表相加很容易超出js对数字最大值的限制
var addTwoNumbers2 = function(l1, l2) {
    let addOne = 0 //进位
    let sum = new ListNode('0') // 创建头链表保存结果
    let head = sum
    while(addOne||l1||l2){
        let val1 = l1!==null ?  l1.val : 0
        let val2 = l2!==null ?  l2.val : 0
        let r1 = val1+val2 + addOne
        sum.next = new ListNode(r1 % 10)
        sum = sum.next
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }
    return head.next 
};