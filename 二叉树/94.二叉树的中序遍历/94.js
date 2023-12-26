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
var inorderTraversal = function (root) {
    // 递归写法
    // const res = []
    // const inOrder = (root) => {
    //     if (!root) {
    //         return
    //     }
    //     inOrder(root.left)
    //     res.push(root.val)
    //     inOrder(root.right)
    // }
    // inOrder(root)
    // return res

    // 迭代写法
    const result = []
    const arr = []
    const stackMethod = (node) => {
        let cur = node
        while (arr.length > 0 || cur) {
            if (cur) {
                arr.push(cur)
                cur = cur.left
            } else {
                cur = arr.pop()
                result.push(cur.val)
                cur = cur.right
            }
        }
    }
    stackMethod(root)
    return result
};

