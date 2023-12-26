/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    // 这题相对于102题主要是在每次循环只将一行的最后一个存入数组
    const result = []
    const queue = []
    if (!root) return []
    queue.push(root)
    while (queue.length > 0) {
        let newArr = []
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (i === len - 1) newArr.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        result.push(newArr)
    }
    return result
};