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
 * @return {number}
 */
var minDepth = function (root) {
    let result = 0
    if (!root) return result
    let queue = []
    queue.push(root)
    while (queue.length > 0) {
        result++
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (!node.left && !node.right) {
                return result
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return result
};