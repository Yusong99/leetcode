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
var averageOfLevels = function (root) {
    //这题就是在102题基础上每一层遍历的时候求出平均值
    const queue = []
    const result = []
    if (!root) return []
    queue.push(root)
    while (queue.length > 0) {
        let len = queue.length
        let sum = 0
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            sum += node.val
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        result.push(sum / len)
    }
    return result
};