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
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function (root, targetSum) {
    let sum = 0
    let flag = false
    const dfs = (root, targetSum) => {
        if (!root) return
        sum += root.val
        dfs(root.left, targetSum)
        dfs(root.right, targetSum)
        if (sum === targetSum && !root.left && !root.right) flag = true
        sum -= root.val
    }
    dfs(root, targetSum)
    return flag
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
