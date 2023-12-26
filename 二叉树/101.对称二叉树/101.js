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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    function isAxial(left, right) {
        if (!left && right) return false
        else if (left && !right) return false
        else if (!left && !right) return true
        else if (left.val !== right.val) return false
        let result1 = isAxial(left.right, right.left)
        let result2 = isAxial(left.left, right.right)
        return result1 && result2
    }
    return isAxial(root.left, root.right)
};