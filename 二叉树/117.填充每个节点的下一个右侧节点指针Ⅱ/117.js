/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    // 判空
    if (!root) return root
    // 设置所需变量
    let queue = []
    // 首节点入队
    queue.push(root)
    // 队列为空就说明没有可共操作的元素了
    while (queue.length > 0) {
        // 定义长度防止操作queue时长度变化影响遍历
        let len = queue.length
        for (let i = 0; i < len; i++) {
            // if (i < len - 1) queue[i].next = queue[i + 1] //注意这里的i会跟着变，所以不是什么第一个第二个，因为有shift！！！
            // 数组在变化!!!⭐⭐⭐
            // 保存出队的节点
            let node = queue.shift()
            if (i < len - 1) node.next = queue[0]
            // 将出队节点的左右子节点入队
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return root
};

function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

const root = new Node(1, null, null, null)
const n2 = new Node(2, null, null, null)
const n3 = new Node(3, null, null, null)
const n4 = new Node(4, null, null, null)
const n5 = new Node(5, null, null, null)
const n7 = new Node(7, null, null, null)

root.left = n2
root.right = n3
n2.left = n4
n2.right = n5
n3.left = null
n3.right = n7

console.log(connect(root));