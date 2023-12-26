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
var largestValues = function (root) {
    // 就是二叉树层序遍历的变种题目
    if (!root) return []
    const queue = []
    const result = []
    queue.push(root)
    while (queue.length > 0) {
        let len = queue.length
        let newArr = []
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            newArr.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        if (newArr.length > 0) result.push(Math.max(...newArr))
    }
    return result
};