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
var postorderTraversal = function (root) {
    // 递归方法
    // const arr = []
    // function recursion(node) {
    //     if (node) {
    //         recursion(node.left)
    //         recursion(node.right)
    //         arr.push(node.val)
    //     }
    // }
    // recursion(root)
    // return arr

    // 迭代方法
    const arr = []
    const result = []
    function stackaMethod(node) {
        arr.push(node)
        while (arr.length > 0) {
            node = arr.pop()
            if (!node) return result
            result.push(node.val)
            if (node.left) arr.push(node.left)
            if (node.right) arr.push(node.right)
        }
        result.reverse() //reverse会反转数组，会改变原数组！
    }
    stackaMethod(root)
    return result
};